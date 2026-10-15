import { ProductContact } from "./ProductContact.jsx";
import { ProductFeatures, ProductIdentity } from "./ProductOverview.jsx";

export const productPages = {
  "/deskwidgets": {
    productId: "deskwidgets",
    title: "DeskWidgets",
    description: "Interactive widgets for your Mac desktop. Keep notes, tasks, calendars, timers, files, and system stats within reach with DeskWidgets.",
    accent: "#6241c6",
    intro: "Put notes, tasks, calendars, and everyday tools right on your desktop. Choose the widgets you need and make them your own.",
    compatibility: "Requires macOS 12.4 or later",
    screenshot: "/assets/products/deskwidgets-detail.jpg",
    featureTitle: "Useful tools, right on your desktop.",
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
    screenshot: "/assets/products/organizer-detail.jpg",
    featureTitle: "A place for your files and apps.",
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
    <div className="detail-breadcrumb"><a href="/#apps">← All apps</a></div>
    <section className="detail-hero" aria-labelledby="detail-title">
      <ProductIdentity product={product} />
      <p className="detail-tagline">{product.tagline}</p>
      <p className="detail-intro">{page.intro}</p>
      <div className="detail-actions">
        <a className="detail-button" href={product.appStoreHref} target="_blank" rel="noopener noreferrer">Download on the App Store <span aria-hidden="true">↗</span></a>
        <a className="detail-text-link" href={product.websiteHref} target="_blank" rel="noopener noreferrer">Visit product website <span aria-hidden="true">↗</span></a>
      </div>
      <p className="detail-availability">For Mac · Free download with in-app purchases</p>
      <img className="detail-product-shot" src={page.screenshot} alt={`${product.name} showing its desktop workspace`} width="1600" height="1000" fetchPriority="high" />
      <div className="detail-preview-caption"><span>{page.compatibility}</span><a className="detail-text-link" href="#features">Explore the features <span aria-hidden="true">↓</span></a></div>
    </section>
    <ProductFeatures title={page.featureTitle} features={page.features} />
    <ProductContact onSupport={onSupport} />
  </main>;
}
