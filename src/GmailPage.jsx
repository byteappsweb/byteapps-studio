import { ProductContact } from "./ProductContact.jsx";

export const gmailPage = {
  path: "/desktop-for-gmail",
  title: "Desktop for Gmail +Google Apps",
  description: "Gmail and Google apps in one focused Mac app. Use multiple accounts, manage downloads, print or save PDFs, and stay close with menu bar access.",
};

const features = [
  ["Multiple Gmail accounts", "Keep your personal and work accounts together, and switch between them when you need to."],
  ["Your Google apps, together", "Move between Gmail, Calendar, Tasks, Drive, Docs, Sheets, and Slides in one window."],
  ["Downloads within reach", "Manage attachments and downloads without losing track of the files you need."],
  ["Print or save a PDF", "Keep a copy of an email or print it directly from the app."],
  ["Light and dark modes", "Choose an appearance that feels at home on your Mac."],
  ["App lock and menu bar access", "Lock the app when you step away, and keep it close from your menu bar."],
];

export function GmailPage({ product, onSupport }) {
  return (
    <main className="detail-page" id="top">
      <div className="detail-breadcrumb"><a href="/#apps">← All apps</a><span>A ByteApps Studio app</span></div>

      <section className="detail-hero" aria-labelledby="detail-title">
        <img className="detail-app-icon" src={product.icon} width="88" height="88" alt="" />
        <p className="detail-eyebrow">Made for your Mac</p>
        <h1 id="detail-title">Desktop for Gmail<br /><span>+Google Apps</span></h1>
        <p className="detail-tagline">Your Google day, in one focused Mac app.</p>
        <p className="detail-intro">Mail, meetings, tasks, and documents. Bring them together in one window, with the Mac features that make your day easier.</p>
        <div className="detail-actions">
          <button className="detail-button" type="button" onClick={onSupport}>Contact us <span aria-hidden="true">↗</span></button>
          <a className="detail-text-link" href="#features">Explore the features <span aria-hidden="true">↓</span></a>
        </div>
        <p className="detail-availability">Coming soon for macOS</p>
        <div className="detail-window-stack">
          <img className="detail-window-back" src="/assets/office-window.webp" alt="" width="1600" height="788" aria-hidden="true" />
          <img className="detail-window-front" src={product.screenshot} alt="Desktop for Gmail showing a demo inbox and a Tasks sidebar in a native Mac window" width="1600" height="891" fetchPriority="high" />
        </div>
        <p className="detail-demo-note">Product previews use demo content.</p>
      </section>

      <section className="detail-features" id="features" aria-labelledby="detail-features-title">
        <div className="detail-section-heading">
          <p className="detail-eyebrow">Less switching. More doing.</p>
          <h2 id="detail-features-title">A familiar workspace.<br />A better fit for your Mac.</h2>
        </div>
        <div className="detail-feature-grid">
          {features.map(([title, description], index) => <article className="detail-feature" key={title}>
            <span className="detail-feature-number" aria-hidden="true">0{index + 1}</span>
            <h3>{title}</h3><p>{description}</p>
          </article>)}
        </div>
      </section>

      <section className="detail-workspace" aria-labelledby="detail-workspace-title">
        <div className="detail-workspace-copy">
          <p className="detail-eyebrow">Beyond the inbox</p>
          <h2 id="detail-workspace-title">Make room for<br />the rest of your day.</h2>
          <p>Check your calendar, catch up on tasks, and open your Google files. Your everyday tools share a home, so the next thing is always within reach.</p>
          <p className="detail-service-list">Gmail · Calendar · Tasks · Drive · Docs · Sheets · Slides</p>
        </div>
        <img src="/assets/calendar-window.webp" alt="Google Calendar in the app's dark appearance" width="1600" height="788" loading="lazy" />
      </section>

      <ProductContact onSupport={onSupport}>
        <p className="detail-independence">Desktop for Gmail +Google Apps is an independent app by ByteApps Studio and is not affiliated with or endorsed by Google.</p>
      </ProductContact>
    </main>
  );
}
