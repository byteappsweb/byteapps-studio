import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

// Publish readable HTML at each public URL, including for visitors without JavaScript.
// Rendering only needs the React transform, not client warmup or dependency prebundling.
const server = await createServer({
  configFile: false,
  plugins: [react()],
  server: { middlewareMode: true, watch: null },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: "custom",
});
try {
  const { App } = await server.ssrLoadModule("/src/App.jsx");
  const { legalPages } = await server.ssrLoadModule("/src/LegalPages.jsx");
  const { pricingPage } = await server.ssrLoadModule("/src/PricingPage.jsx");
  const { gmailPage } = await server.ssrLoadModule("/src/GmailPage.jsx");
  const { productPages } = await server.ssrLoadModule("/src/ProductPages.jsx");
  const template = await readFile("dist/client/index.html", "utf8");
  const escapeAttribute = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
  const home = {
    title: "ByteApps Studio — Thoughtful apps for Mac",
    description: "ByteApps Studio creates thoughtful Mac apps, including DeskWidgets, Desktop Organizer, and Desktop for Gmail +Google Apps.",
  };
  for (const [pathname, page] of [["/", home], ["/pricing", pricingPage], [gmailPage.path, gmailPage], ...Object.entries(productPages), ...Object.entries(legalPages)]) {
    const title = pathname === "/" ? page.title : `${page.title} — ByteApps Studio`;
    const html = template
      .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(page.description)}" />`)
      .replace("</head>", `    <link rel="canonical" href="https://byteapps.studio${pathname}" />\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${renderToString(createElement(App, { pathname }))}</div>`);
    const destination = pathname === "/" ? "dist/client/index.html" : `dist/client${pathname}.html`;
    await writeFile(destination, html);
  }
  console.log("Rendered the homepage, all three product pages, /pricing, /terms, /privacy, and /refunds as standalone HTML pages.");
} finally {
  await server.close();
}
