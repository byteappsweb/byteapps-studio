import { LegalLinks, SUPPORT_EMAIL } from "./LegalPages.jsx";

export const pricingPage = {
  title: "Pricing",
  description: "Compare lifetime, annual, and monthly plans for DeskWidgets and Desktop Organizer. View US dollar prices, free trial periods, features, and billing details.",
};

const offers = [
  {
    id: "deskwidgets",
    features: ["Interactive desktop widgets", "Notes, tasks, calendars, and reminders", "Timers, files, and system stats"],
    // App Store Connect US pricing verified 2026-10-12: lifetimeV3, year03, month03.
    prices: { lifetime: "24.99", annual: "9.99", monthly: "0.99" },
  },
  {
    id: "organizer",
    features: ["File Zones for desktop organization", "App Zones for quick access", "Flexible layouts for everyday files"],
    // App Store Connect US pricing verified 2026-10-12: approved lifetime, yearly, month.
    // Organizer currently lists one subscription group; it has no products marked 3.
    prices: { lifetime: "24.99", annual: "19.99", monthly: "1.99" },
  },
];

const plans = [
  { id: "lifetime", name: "Lifetime", period: "lifetime", badge: "Pay once", detail: "One-time payment", billing: "No subscription or recurring charges." },
  { id: "annual", name: "Annual", period: "year", badge: "7-day free trial", detail: "Billed annually", trial: 7 },
  { id: "monthly", name: "Monthly", period: "month", badge: "3-day free trial", detail: "Billed monthly", trial: 3 },
];

function PricingProduct({ offer, product }) {
  return <section className="pricing-product" id={offer.id} aria-labelledby={`${offer.id}-pricing-title`}>
    <div className="pricing-product-heading">
      <div className="pricing-product-identity">
        <img src={product.icon} alt="" width="64" height="64" />
        <div><p className="platform">Mac app</p><h2 id={`${offer.id}-pricing-title`}>{product.name}</h2></div>
      </div>
      <p className="pricing-product-tagline">{product.tagline}</p>
    </div>
    <ul className="pricing-features" aria-label={`${product.name} features`}>
      {offer.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}
    </ul>
    <div className="pricing-plans">
      {plans.map((plan) => <article className={`pricing-plan pricing-plan--${plan.id}`} key={plan.id} aria-labelledby={`${offer.id}-${plan.id}`}>
        <span className="pricing-badge">{plan.badge}</span>
        <h3 id={`${offer.id}-${plan.id}`}>{plan.name}</h3>
        <p className="pricing-amount"><span className="pricing-currency">$</span>{offer.prices[plan.id]}<span className="pricing-period">/ {plan.period}</span></p>
        <p className="pricing-plan-detail">{plan.detail}</p>
        <p className="pricing-billing">{plan.trial
          ? <>Free for {plan.trial} days, then ${offer.prices[plan.id]} per {plan.period}. Renews automatically until cancelled.</>
          : plan.billing}</p>
      </article>)}
    </div>
    <div className="pricing-product-action">
      <a className="pricing-get-app" href={product.appStoreHref} target="_blank" rel="noopener noreferrer">Get {product.name} <span aria-hidden="true">↗</span></a>
      <p>Choose and activate your plan in the app.</p>
    </div>
  </section>;
}

export function PricingPage({ products }) {
  return <main className="pricing-page" id="top">
    <header className="pricing-heading">
      <p className="kicker">Pricing · macOS</p>
      <h1>Great apps.<br />Clear pricing.</h1>
      <p className="pricing-intro">Lifetime, annual, or monthly. Choose the plan that fits your everyday.</p>
      <nav className="pricing-app-links" aria-label="Compare app plans">
        {offers.map((offer) => {
          const product = products.find((item) => item.id === offer.id);
          return <a href={`#${offer.id}`} key={offer.id}><img src={product.icon} alt="" width="32" height="32" />{product.name}<span aria-hidden="true">↓</span></a>;
        })}
      </nav>
      <p className="pricing-currency-note">All prices in US dollars (USD), based on the US App Store. Each app is purchased separately.</p>
    </header>

    {offers.map((offer) => <PricingProduct key={offer.id} offer={offer} product={products.find((item) => item.id === offer.id)} />)}

    <section className="pricing-questions" aria-labelledby="pricing-questions-title">
      <div><p className="kicker">Good to know</p><h2 id="pricing-questions-title">A few details,<br />before you choose.</h2></div>
      <div className="pricing-faq">
        <details><summary>What does a plan include?</summary><p>Each plan unlocks the paid features of the app you choose. DeskWidgets and Desktop Organizer are separate purchases. A lifetime plan is a one-time purchase; annual and monthly plans provide access for the subscription period.</p></details>
        <details><summary>How do the free trials work?</summary><p>Annual plans offer a 7-day free trial, and monthly plans offer a 3-day free trial for eligible users. After the trial, the subscription renews at the price shown above. Cancel before the trial ends to avoid the charge. Trial eligibility is confirmed before purchase.</p></details>
        <details><summary>Can I cancel a subscription?</summary><p>Yes. Use the subscription management options provided by your store or payment provider. Cancellation stops future renewals, and paid access continues until the end of the current billing period. For App Store purchases, manage subscriptions in your Apple Account settings. See our <a href="/terms#subscriptions">subscription terms</a> for details.</p></details>
        <details><summary>What about taxes and refunds?</summary><p>The purchase screen confirms your final price, currency, and any applicable taxes before payment. Refunds depend on the payment provider that billed your purchase. Read our <a href="/refunds">Refund Policy</a> for the process and applicable terms.</p></details>
      </div>
    </section>

    <aside className="pricing-help" aria-label="Purchase support and policies">
      <div><h2>Here to help you choose.</h2><p>Questions about a plan? <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("ByteApps Studio Pricing")}`}>{SUPPORT_EMAIL}</a></p></div>
      <LegalLinks currentPath="/pricing" />
    </aside>
  </main>;
}
