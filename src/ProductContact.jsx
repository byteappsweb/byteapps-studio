import { SUPPORT_EMAIL } from "./LegalPages.jsx";

export function ProductContact({ onSupport, children }) {
  return <section className="detail-contact" id="contact" aria-labelledby="detail-contact-title">
    <div className="detail-contact-heading">
      <div><p className="detail-eyebrow">Support & contact</p><h2 id="detail-contact-title">A small studio.<br />An open inbox.</h2></div>
      <div className="detail-contact-copy">
        <p>Questions about the app, billing, or privacy? Get in touch with the people who build it.</p>
        <button className="detail-contact-email" type="button" onClick={onSupport}>{SUPPORT_EMAIL} <span aria-hidden="true">↗</span></button>
        <p>Built and supported by ByteApps Studio.</p>
      </div>
    </div>
    {children}
  </section>;
}
