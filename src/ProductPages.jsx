import { ProductContact } from "./ProductContact.jsx";

export const productPages = {
  "/deskwidgets": {
    productId: "deskwidgets",
    title: "DeskWidgets",
    description: "Interactive widgets for your Mac desktop. Keep notes, tasks, calendars, timers, files, and system stats within reach with DeskWidgets.",
    accent: "#6241c6",
    intro: "Put notes, tasks, calendars, and everyday tools right on your desktop. Choose the widgets you need and make them your own.",
    compatibility: "Requires macOS 12.4 or later",
    featureEyebrow: "Useful at a glance. Ready for a click.",
    featureTitle: <>Everyday tools.<br />Right where you need them.</>,
    features: [
      ["Notes & to-dos", "Write a quick note and keep your next tasks visible while you work."],
      ["Calendars & reminders", "See your schedule and keep important reminders close to your desktop."],
      ["Timers for focus", "Use a Pomodoro timer or stopwatch to give your work a little structure."],
      ["Files & app shortcuts", "Keep everyday files organized and open your favorite apps from a widget."],
      ["Your Mac at a glance", "See CPU, memory, and network activity without opening another window."],
      ["A desktop that feels like you", "Choose colors, fonts, sizes, and styles, then arrange widgets around your work."],
    ],
  },
  "/desktop-organizer": {
    productId: "organizer",
    title: "Desktop Organizer",
    description: "Give your Mac desktop a little order. Organize files in File Zones, launch apps from App Zones, and customize your layout with Desktop Organizer.",
    accent: "#b84a12",
    intro: "Bring order to a busy desktop with File Zones and App Zones. Group what belongs together, keep it in view, and get back to your work.",
    compatibility: "Requires macOS 12.0 or later",
    featureEyebrow: "A place for everything you use",
    featureTitle: <>Less desktop clutter.<br />More room to work.</>,
    features: [
      ["File Zones", "Group files and folders into dedicated areas, with room for each project."],
      ["App Zones", "Keep frequently used apps together and launch them from your desktop."],
      ["Quick file access", "Bring files from the folders you use into reach, with less navigating."],
      ["Flexible layouts", "Resize and move zones to fit the way you use your desktop."],
      ["Themes & personal touches", "Choose a zone style and add decorative elements to your workspace."],
      ["Compact when you need it", "Collapse zones to make room, and expand them when it is time to work."],
    ],
  },
};

export function ProductPage({ page, product, onSupport }) {
  return <main className="detail-page detail-page--app" id="top" style={{ "--product-accent": page.accent }}>
    <div className="detail-breadcrumb"><a href="/#apps">← All apps</a><span>A ByteApps Studio app</span></div>
    <section className="detail-hero" aria-labelledby="detail-title">
      <img className="detail-app-icon" src={product.icon} width="88" height="88" alt="" />
      <p className="detail-eyebrow">Made for your Mac</p>
      <h1 id="detail-title">{product.name}</h1>
      <p className="detail-tagline">{product.tagline}</p>
      <p className="detail-intro">{page.intro}</p>
      <div className="detail-actions">
        <a className="detail-button" href={product.appStoreHref} target="_blank" rel="noopener noreferrer">Download on the App Store <span aria-hidden="true">↗</span></a>
        <a className="detail-text-link" href={product.websiteHref} target="_blank" rel="noopener noreferrer">Visit product website <span aria-hidden="true">↗</span></a>
      </div>
      <p className="detail-availability">For Mac · Free download with in-app purchases</p>
      <img className="detail-product-shot" src={product.screenshot} alt={`${product.name} showing its desktop workspace`} width="800" height="500" fetchPriority="high" />
      <div className="detail-preview-caption"><span>{page.compatibility}</span><a className="detail-text-link" href="#features">Explore the features <span aria-hidden="true">↓</span></a></div>
    </section>
    <section className="detail-features" id="features" aria-labelledby="detail-features-title">
      <div className="detail-section-heading"><p className="detail-eyebrow">{page.featureEyebrow}</p><h2 id="detail-features-title">{page.featureTitle}</h2></div>
      <div className="detail-feature-grid">
        {page.features.map(([title, description], index) => <article className="detail-feature" key={title}>
          <span className="detail-feature-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{description}</p>
        </article>)}
      </div>
    </section>
    <ProductContact onSupport={onSupport} />
  </main>;
}
