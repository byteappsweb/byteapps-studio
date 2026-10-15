import { SUPPORT_EMAIL } from "./LegalPages.jsx";

export function ProductContact({ onSupport, children }) {
  return <section className="detail-contact" id="contact" aria-labelledby="detail-contact-title">
    <div className="detail-contact-heading">
      <div><h2 id="detail-contact-title">Support & contact</h2><p>Questions about the app, billing, or privacy? We’re here to help.</p></div>
      <div className="detail-contact-copy">
        <button className="detail-contact-email" type="button" onClick={onSupport}>{SUPPORT_EMAIL} <span aria-hidden="true">↗</span></button>
      </div>
    </div>
    {children}
  </section>;
}
