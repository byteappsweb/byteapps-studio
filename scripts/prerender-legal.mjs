import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

// Publish readable HTML at each policy URL, including for visitors without JavaScript.
const server = await createServer({ server: { middlewareMode: true, watch: null }, appType: "custom" });
try {
  const { App } = await server.ssrLoadModule("/src/App.jsx");
  const { legalPages } = await server.ssrLoadModule("/src/LegalPages.jsx");
  const template = await readFile("dist/client/index.html", "utf8");
  const escapeAttribute = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
  const home = {
    title: "ByteApps Studio — Thoughtful apps for Mac",
    description: "ByteApps Studio creates thoughtful Mac apps, including DeskWidgets, Desktop Organizer, and Desktop for Gmail +Google Apps.",
  };
  for (const [pathname, page] of [["/", home], ...Object.entries(legalPages)]) {
    const title = pathname === "/" ? page.title : `${page.title} — ByteApps Studio`;
    const html = template
      .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(page.description)}" />`)
      .replace("</head>", `    <link rel="canonical" href="https://byteapps.studio${pathname}" />\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${renderToString(createElement(App, { pathname }))}</div>`);
    const destination = pathname === "/" ? "dist/client/index.html" : `dist/client${pathname}.html`;
    await writeFile(destination, html);
  }
  console.log("Rendered the homepage, /terms, /privacy, and /refunds as standalone HTML pages.");
} finally {
  await server.close();
}
