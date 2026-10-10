import { useEffect } from "react";
import { LegalLinks, LegalPage, legalPages } from "./LegalPages.jsx";

const products = [
  {
    id: "deskwidgets", platform: "macOS", name: "DeskWidgets",
    tagline: "A more useful, more personal Mac desktop.",
    description: "Interactive widgets for notes, to-dos, reminders, files, calendars, timers, system stats, and the small things you want within reach.",
    icon: "/assets/products/deskwidgets-icon.png", screenshot: "/assets/products/deskwidgets-shot.jpg", accent: "violet",
    href: "https://www.deskwidgets.com/", action: "Visit website",
  },
  {
    id: "organizer", platform: "macOS", name: "Desktop Organizer",
    tagline: "Give every file a place on your desktop.",
    description: "Create flexible File Zones and App Zones, keep everyday items visible, and launch what you need without digging through folders.",
    icon: "/assets/products/organizer-icon.png", screenshot: "/assets/products/organizer-shot.jpg", accent: "orange",
    href: "https://www.desktoporganizer.app/", action: "Visit website",
  },
  {
    id: "gmail", platform: "macOS", name: "Desktop for Gmail +Google Apps",
    tagline: "Your Google day, in one focused Mac app.",
    description: "Keep Gmail, Calendar, Tasks, Drive, Docs, Sheets, and Slides together—with multiple accounts, organized downloads, PDF export, and menu bar access.",
    icon: "/assets/products/gmail-google-apps-icon.png", screenshot: "/assets/products/gmail-shot.webp", accent: "red",
    href: "mailto:support@byteapps.studio?subject=Desktop%20for%20Gmail%20%2BGoogle%20Apps", action: "Coming soon — contact us",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

function Product({ product, index }) {
  const external = product.href.startsWith("http");
  return (
    <article className={`product product--${product.accent}`} id={product.id}>
      <div className="product-copy">
        <div className="product-number">0{index + 1}</div>
        <div className="product-heading">
          <img className="product-icon" src={product.icon} alt={`${product.name} app icon`} />
          <div><p className="platform">{product.platform}</p><h3>{product.name}</h3></div>
        </div>
        <p className="product-tagline">{product.tagline}</p>
        <p className="product-description">{product.description}</p>
        <a className="product-link" href={product.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
          {product.action} <Arrow />
        </a>
      </div>
      <a className="product-visual" href={product.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} aria-label={`${product.action}: ${product.name}`}>
        <img src={product.screenshot} alt={`${product.name} product screenshot`} />
      </a>
    </article>
  );
}

export function App({ pathname = typeof window === "undefined" ? "/" : window.location.pathname }) {
  const currentPath = pathname.replace(/(?:\/index)?\.html$/, "").replace(/\/+$/, "") || "/";
  const legalPage = legalPages[currentPath];

  useEffect(() => {
    document.title = legalPage ? `${legalPage.title} — ByteApps Studio` : "ByteApps Studio — Thoughtful apps for Mac";
    if (legalPage) document.querySelector('meta[name="description"]')?.setAttribute("content", legalPage.description);
  }, [legalPage]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href={legalPage ? "/" : "#top"} aria-label="ByteApps Studio home">ByteApps <span>Studio</span></a>
        <nav className="topnav" aria-label="Main navigation">
          <a href={legalPage ? "/#apps" : "#apps"}>Apps</a><a href={legalPage ? "/#studio" : "#studio"}>Studio</a><a href="mailto:support@byteapps.studio">Support</a>
        </nav>
      </header>

      {legalPage ? <LegalPage page={legalPage} pathname={currentPath} /> : <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow"><span /> Independent studio · Shenzhen</p>
          <h1 id="hero-title">Small apps.<br /><em>Thoughtfully made.</em></h1>
          <div className="hero-bottom">
            <p>We build focused tools for Mac—designed to make your desktop calmer, your work lighter, and the everyday a little more delightful.</p>
            <a href="#apps">Meet our apps <span aria-hidden="true">↓</span></a>
          </div>
          <div className="app-rail" aria-label="ByteApps products">
            {products.map((product) => <a href={`#${product.id}`} key={product.id}><img src={product.icon} alt="" /><span>{product.name}</span></a>)}
          </div>
        </section>

        <section className="work" id="apps" aria-labelledby="apps-title">
          <div className="section-intro">
            <p className="kicker">Our apps</p>
            <h2 id="apps-title">Tools that earn<br />their place on your screen.</h2>
            <p>Native utilities for a tidier desktop, a smoother day, and fewer interruptions.</p>
          </div>
          <div className="product-list">{products.map((product, index) => <Product product={product} index={index} key={product.id} />)}</div>
        </section>

        <section className="studio" id="studio" aria-labelledby="studio-title">
          <div><p className="kicker">ByteApps Studio</p><h2 id="studio-title">Independent by choice.<br />Close to the details.</h2></div>
          <div className="studio-copy">
            <p>We are a small independent software studio in Shenzhen. We design, build, and support every app ourselves, with a simple standard: each product should solve a real everyday problem and feel at home on Apple devices.</p>
            <p>We value useful features, respectful privacy, and steady improvements shaped by the people who use our apps.</p>
            <a href="mailto:support@byteapps.studio">Talk to the studio <Arrow /></a>
          </div>
        </section>
      </main>}

      <footer>
        <div><a className="wordmark wordmark--footer" href={legalPage ? "/" : "#top"}>ByteApps <span>Studio</span></a><p>Thoughtful apps for Mac.</p></div>
        <div className="footer-navigation">
          <nav className="footer-links" aria-label="Studio links"><a href={legalPage ? "/#apps" : "#apps"}>Apps</a><a href="https://apps.apple.com/us/developer/shenzhen-chengsi-technology-co-ltd/id1675893924" target="_blank" rel="noreferrer">App Store</a><a href="mailto:support@byteapps.studio">Support</a></nav>
          <LegalLinks currentPath={currentPath} />
        </div>
        <p className="copyright">© 2026 Shenzhen Chengsi Technology Co., Ltd.</p>
      </footer>
    </div>
  );
}
