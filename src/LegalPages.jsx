export const SUPPORT_EMAIL = "support@byteapps.studio";
const company = "Shenzhen Chengsi Technology Co., Ltd.";
const Contact = () => <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;
const PaddleSupport = () => <a href="https://paddle.net/">Paddle buyer support</a>;

export const legalPages = {
  "/terms": {
    title: "Terms of Service",
    description: "Terms of Service for ByteApps Studio, our website, and all our apps, including licenses, subscriptions, Paddle purchases, and customer support.",
    intro: "The terms for using our website and apps, with clear information about licenses, purchases, and subscriptions.",
    summary: <>ByteApps Studio is operated by {company}. These Terms cover all apps we publish, including DeskWidgets, Desktop Organizer, and Desktop for Gmail +Google Apps.</>,
    sections: [
      { id: "scope", title: "1. Who we are and when these Terms apply", content: <>
        <p>These Terms of Service are an agreement between you and {company}, trading as ByteApps Studio ("ByteApps", "we", "us", or "our"), a software studio based in Shenzhen, China. They apply to our website and all applications and related services we publish, including future apps (together, our "Services"). Contact us at <Contact />.</p>
        <p>By downloading, accessing, or using our Services, you agree to these Terms. If you do not agree, please stop using the Services. You must be legally able to enter into this agreement, or have the permission of a parent or legal guardian who accepts it on your behalf.</p>
        <p>Specific license limits, features, compatibility requirements, prices, and billing periods are described on the relevant product page, in the app, or at checkout. Additional store terms may apply to purchases made through a third-party store.</p>
      </> },
      { id: "license", title: "2. Your license and your content", content: <>
        <p>We grant you a limited, non-exclusive, personal, non-transferable license to install and use our apps on devices you lawfully control, within the device and usage limits stated for your purchase. The software is licensed, not sold. We retain ownership of our software, design, and other intellectual property.</p>
        <p>You retain ownership of your files, notes, messages, and other content. You are responsible for having the rights to the content you use, keeping appropriate backups, and protecting your devices and connected accounts. We do not acquire ownership of your content through your use of an app.</p>
        <p>You may not unlawfully use the Services, distribute or resell our software without permission, share or resell license keys, bypass license or security controls, or interfere with the Services. Reverse engineering is prohibited except to the extent expressly permitted by applicable law.</p>
      </> },
      { id: "purchases", title: "3. Prices, purchases, and Paddle", content: <>
        <p>The product, currency, price, applicable taxes, license scope, and any recurring billing terms will be shown before you complete a purchase. A one-time purchase does not create recurring charges. Any lifetime or perpetual license is defined by the offer shown at purchase; future paid upgrades are included only when expressly stated.</p>
        <p>For orders placed through Paddle, Paddle.com acts as our authorised reseller and Merchant of Record. Paddle handles payment collection, applicable sales taxes, receipts, payment-related customer service, and refunds. ByteApps Studio provides the software and product support.</p>
        <p>Paddle purchases are also governed by <a href="https://www.paddle.com/legal/buyer-terms">Paddle's Buyer Terms</a> and <a href="https://www.paddle.com/legal/refund-policy">Paddle's Refund Policy</a>. For payment questions, use <PaddleSupport /> or contact <Contact />. Purchases billed by Apple are governed by Apple's applicable purchase and billing terms.</p>
      </> },
      { id: "subscriptions", title: "4. Subscriptions, trials, and cancellation", content: <>
        <p>Where a product offers a subscription, the billing interval and renewal price are disclosed before purchase. Subscriptions renew automatically until cancelled. If a trial converts to a paid subscription, its duration, subsequent price, and cancellation requirements are shown when you sign up. Cancel before the trial ends to avoid the disclosed charge.</p>
        <p>For a Paddle subscription, use the management link in your purchase email or contact <PaddleSupport />. You may also email <Contact /> for help. For an App Store subscription, manage or cancel it in your Apple Account subscription settings.</p>
        <p>Cancellation prevents future renewals and normally takes effect at the end of your current paid billing period. Uninstalling an app does not cancel a subscription. Cancellation by itself does not request a refund; refund requests are handled under our <a href="/refunds">Refund Policy</a>.</p>
        <p>Changes to subscription prices will be communicated before they take effect, with consent obtained where required by law. A price change will not alter an already completed purchase or the price of a paid billing period.</p>
      </> },
      { id: "refunds", title: "5. Refunds", content: <>
        <p>We offer a 30-day money-back guarantee for purchases billed through Paddle, including one-time purchases, initial subscription payments, and subscription renewal payments. Request a refund within 30 calendar days of the relevant payment. See our <a href="/refunds">Refund Policy</a> for the full process.</p>
        <p>Refunds for purchases billed by the App Store are handled by Apple. None of these Terms limits mandatory consumer rights, including remedies for a faulty, misdescribed, or undelivered product.</p>
      </> },
      { id: "third-party", title: "6. Third-party services", content: <>
        <p>Some apps allow you to use third-party services, such as Google services or Apple services. Those services are provided by their respective operators and are subject to their own terms and privacy policies. You are responsible for your accounts with those providers.</p>
        <p>Third-party availability, features, and compatibility may change independently of us. We will describe material product limitations and will not restrict any remedy you are entitled to under applicable law. Our apps are independent products and are not endorsed by Apple or Google unless expressly stated.</p>
      </> },
      { id: "privacy", title: "7. Privacy", content: <>
        <p>Our <a href="/privacy">Privacy Policy</a> explains how we handle information in connection with our website, apps, customer support, and purchases. Please review it before sharing personal information with us.</p>
      </> },
      { id: "updates", title: "8. Updates and access", content: <>
        <p>We may release updates to improve functionality, compatibility, or security. Supported operating systems and product features are described in the relevant product information. Future features or updates are included only as stated in your offer or as required by law.</p>
        <p>We may suspend or terminate access for a material breach of these Terms, fraud, or a legal or security requirement. Where reasonable, we will notify you and give you an opportunity to resolve the issue. A refund may end the associated paid license or subscription access.</p>
        <p>If we discontinue a paid Service or materially reduce functionality during a paid subscription period, we will provide appropriate notice and any remedy required by your purchase terms or applicable law.</p>
      </> },
      { id: "responsibility", title: "9. Our responsibility", content: <>
        <p>We take reasonable care in providing our Services, but cannot promise uninterrupted or error-free operation on every device or with every third-party service. To the extent permitted by law, the Services are provided "as is" and "as available", without additional implied warranties.</p>
        <p>To the extent permitted by law, we are not responsible for indirect or consequential losses, lost profits, or losses arising from misuse of the Services. Nothing in these Terms excludes or limits liability where doing so would be unlawful, including liability for fraud, wilful misconduct, gross negligence, or any mandatory consumer guarantee.</p>
      </> },
      { id: "changes", title: "10. Changes and disputes", content: <>
        <p>We may update these Terms and will publish the revised version with its effective date. We will provide additional notice of material changes where required. Changes will not retroactively remove rights attached to an existing purchase. Where your consent is legally required, we will obtain it.</p>
        <p>Please contact <Contact /> about a complaint or dispute so we can try to resolve it. Applicable law and mandatory consumer protections govern your rights, including any right to bring a claim in your local courts. Payment disputes with Paddle are also subject to Paddle's Buyer Terms. If a provision of these Terms is unenforceable, the remaining provisions continue to apply.</p>
      </> },
      { id: "contact", title: "11. Contact", content: <>
        <p>{company}<br />Trading as ByteApps Studio · Shenzhen, China<br />Email: <Contact /></p>
        <p>This is our shared contact address for every ByteApps Studio app, including product support, billing assistance, refunds, and privacy requests.</p>
      </> },
    ],
  },
  "/privacy": {
    title: "Privacy Policy",
    description: "How ByteApps Studio handles information across all our apps, our website, support requests, and purchases made through Paddle or Apple.",
    intro: "How we handle information when you use our apps, visit our website, contact us, or make a purchase.",
    summary: <>Your app content belongs to you. This policy covers all ByteApps Studio apps and explains the separate information needed for website delivery, support, and purchases.</>,
    sections: [
      { id: "scope", title: "1. Who we are and what this policy covers", content: <>
        <p>{company}, trading as ByteApps Studio ("we", "us", or "our"), is responsible for the personal information we handle under this policy. We are based in Shenzhen, China. Our contact for all apps and privacy matters is <Contact />.</p>
        <p>This policy applies to our website, all apps we publish, and related customer support and purchase administration. This includes DeskWidgets, Desktop Organizer, Desktop for Gmail +Google Apps, and future ByteApps Studio apps.</p>
      </> },
      { id: "app-content", title: "2. App content and device permissions", content: <>
        <p>Our apps work with content on your device or with third-party services you choose to use. We do not receive the contents of your desktop files, notes, email, documents, or calendars merely because you use our apps. Information you deliberately send to our support team is handled as described below.</p>
        <p>Depending on the app and features you enable, an app may need permission to access selected files, folders, calendars, reminders, or other device resources. This access supports the feature you request; it does not itself mean that the content is sent to ByteApps Studio. You can manage permissions in your device's system settings, although disabling a permission may prevent the associated feature from working.</p>
        <p>If you use Google, Apple, or another third-party service through an app, information needed for that service is handled by that provider under its own privacy policy. Those providers may store cookies, account sessions, and content on your device or their systems. If we introduce a feature that sends app content to us, we will explain that processing and obtain consent where required before it takes place.</p>
      </> },
      { id: "information", title: "3. Information handled for our website, support, and purchases", content: <>
        <ul>
          <li><strong>Support correspondence.</strong> When you email us, we receive your email address and any name, message, order reference, attachments, or diagnostic information you choose to include. Please avoid sending passwords, full payment-card details, or unrelated private content.</li>
          <li><strong>Purchase and license information.</strong> For purchases handled through Paddle or Apple, we may receive the transaction or subscription details made available by that provider, such as an order identifier, product, purchase date, payment status, country, or customer email. We use this information to provide purchased access and help with billing or refunds. We do not receive or store your full payment-card number or card security code.</li>
          <li><strong>Website delivery and security.</strong> Our hosting infrastructure may process technical request information such as an IP address, browser or device type, requested page, and request time to deliver and protect the website. This is separate from content handled inside an app.</li>
        </ul>
      </> },
      { id: "use", title: "4. Why we use information", content: <>
        <p>We use the information described above to deliver our website and purchased Services, verify licenses or subscription access where applicable, answer support and privacy requests, arrange refunds, prevent fraud, maintain security, and comply with legal obligations.</p>
        <p>Where data protection law requires a legal basis, we rely on performance of a contract for purchases and service delivery, our legitimate interests in providing support and protecting our Services, compliance with legal obligations for required records, or your consent where applicable. You may withdraw consent at any time without affecting processing that occurred before withdrawal.</p>
        <p>We do not sell personal information or share it for cross-context behavioural advertising.</p>
      </> },
      { id: "providers", title: "5. Service providers and sharing", content: <>
        <p>Information may be handled by providers we use for website hosting and delivery, email support, and purchase administration, to the extent needed for those purposes. We may also disclose information when required by law or when necessary to establish or defend legal rights.</p>
        <p>When you choose a Paddle checkout, Paddle acts as Merchant of Record and independently handles information needed for payments, taxes, fraud prevention, and its legal obligations. See <a href="https://www.paddle.com/legal/privacy">Paddle's Privacy Policy</a>. Purchases billed by Apple are handled under <a href="https://www.apple.com/legal/privacy/">Apple's Privacy Policy</a>. Google services are governed by <a href="https://policies.google.com/privacy">Google's Privacy Policy</a>.</p>
        <p>Links to third-party websites take you to services operated by those providers. Their privacy practices are described in their own notices.</p>
      </> },
      { id: "cookies", title: "6. Cookies and similar technologies", content: <>
        <p>The ByteApps Studio website does not use advertising cookies or third-party marketing analytics. Hosting infrastructure or a checkout provider may use technologies needed for security, payment processing, or a session you request.</p>
        <p>Third-party services opened inside an app may use their own cookies or local storage to keep you signed in and provide their features. You can manage these through the relevant service or browser settings. We will update this policy and request consent where required before adding optional tracking to our website.</p>
      </> },
      { id: "retention", title: "7. Retention, security, and international processing", content: <>
        <p>We keep support information for as long as needed to respond to and follow up on your request, and purchase records for as long as needed to provide purchased access, handle disputes, and meet applicable recordkeeping obligations. We delete or anonymise information when it is no longer needed, subject to legal requirements.</p>
        <p>We use reasonable technical and organisational measures to protect information. No system is completely secure. Content stored on your device also depends on your device security and backup practices.</p>
        <p>We are based in China, and our service providers may process information in other countries. Where applicable law requires safeguards for international transfers, we use the safeguards required by that law. Paddle, Apple, and Google describe their own transfers and safeguards in their privacy notices.</p>
      </> },
      { id: "rights", title: "8. Your privacy rights", content: <>
        <p>Depending on where you live, you may have rights to access, correct, delete, or receive a copy of your personal information; restrict or object to certain processing; withdraw consent; or complain to your local data protection authority. We will not discriminate against you for exercising an applicable privacy right.</p>
        <p>To make a request about information handled by ByteApps Studio, email <Contact />. We may ask for information needed to verify your identity and will respond within the period required by applicable law. Legal recordkeeping obligations may prevent immediate deletion of some purchase records.</p>
        <p>For information held independently by Paddle, Apple, or another provider, use that provider's privacy request process. We can help you identify the appropriate provider. You can also manage app permissions or remove local app data through your device and app settings.</p>
      </> },
      { id: "children", title: "9. Children", content: <>
        <p>Our Services are not directed at children, and we do not knowingly collect personal information from children in violation of applicable law. If you believe a child has provided personal information to us without appropriate permission, contact <Contact /> so we can investigate and take appropriate action.</p>
      </> },
      { id: "changes", title: "10. Changes and contact", content: <>
        <p>We may update this policy to reflect changes to our Services or legal requirements. The effective date appears at the top of this page. We will provide additional notice and seek consent for material changes where required by law.</p>
        <p>For any privacy question or request relating to any of our apps:<br />{company}<br />Trading as ByteApps Studio · Shenzhen, China<br />Email: <Contact /></p>
      </> },
    ],
  },
  "/refunds": {
    title: "Refund Policy",
    description: "ByteApps Studio's 30-day money-back guarantee for Paddle purchases, how to request a refund, cancel subscriptions, and handle App Store purchases.",
    intro: "A straightforward refund process, with one support address for every app.",
    summary: <>For purchases billed through Paddle, we offer a <strong>30-day money-back guarantee</strong>. Email <Contact /> within 30 calendar days of your payment to request a full refund.</>,
    sections: [
      { id: "scope", title: "1. Who and what this policy covers", content: <>
        <p>This policy is provided by {company}, trading as ByteApps Studio. It applies to all our apps and paid Services, including DeskWidgets, Desktop Organizer, Desktop for Gmail +Google Apps, and future apps. Your purchase receipt identifies whether you paid through Paddle, Apple, or another store.</p>
        <p>The 30-day guarantee below applies to payments processed through Paddle. Purchases billed through the App Store follow the Apple process in section 6. Mandatory consumer rights apply in every case.</p>
      </> },
      { id: "guarantee", title: "2. Our 30-day money-back guarantee", content: <>
        <p>If you are not satisfied with a purchase billed through Paddle, request a refund within <strong>30 calendar days of the relevant payment date</strong> and we will arrange a full refund of that payment. This covers one-time purchases, the first payment for a subscription, and each subscription renewal payment.</p>
        <p>You do not need to prove a technical defect. Downloading, activating, or using the app does not remove this guarantee, and trying troubleshooting steps is not a condition of receiving it. The deadline is based on when you submit your request, not when we finish handling it.</p>
        <p>After 30 days, contact us if a product was not delivered, does not work as described, or you believe a charge was duplicated or unauthorised. We will review the issue and provide any remedy required by applicable law or the payment provider's rules.</p>
      </> },
      { id: "request", title: "3. How to request a refund", content: <>
        <p>Email <Contact /> with the subject "Refund request". To help us locate the payment, include:</p>
        <ul><li>The app or product name.</li><li>The email address used for the purchase.</li><li>Your order or transaction reference, if available, and the payment date.</li></ul>
        <p>A reason is optional. If you cannot find your receipt or order reference, contact us with the details you have and we will help. Please do not send passwords or full payment-card details.</p>
        <p>You may also request a refund directly through <PaddleSupport /> or the support link in your Paddle receipt. Paddle is the Merchant of Record for payments made through its checkout and processes the refund. Tell Paddle that your purchase is covered by ByteApps Studio's 30-day guarantee.</p>
        <p>We aim to respond to refund requests within two business days. If you need to follow up, reply to the same email or contact Paddle directly.</p>
      </> },
      { id: "processing", title: "4. Refund processing and paid access", content: <>
        <p>Refunds are returned through Paddle to the original payment method where possible. Paddle's published policy provides for processing eligible refunds within 14 days of approval, with separate timing for statutory withdrawals. Your bank or payment provider may need additional time to display the credit. See <a href="https://www.paddle.com/legal/refund-policy">Paddle's Refund Policy</a> for details.</p>
        <p>When a payment is refunded, the license or paid access associated with that payment ends. If the refund is for a subscription, we will also arrange cancellation of future renewals for that subscription. A refund does not give us ownership of or delete your personal files.</p>
      </> },
      { id: "cancellation", title: "5. Subscription cancellation", content: <>
        <p>You can cancel a Paddle subscription using the "Manage subscription" link in your purchase email or by contacting <PaddleSupport />. You may also email <Contact /> for assistance.</p>
        <p>Cancellation prevents future billing and normally leaves paid access available until the current billing period ends. It does not automatically refund previous payments. To receive a refund under the guarantee, request it within 30 days of the payment you want refunded. Uninstalling an app does not cancel its subscription.</p>
      </> },
      { id: "app-store", title: "6. App Store purchases", content: <>
        <p>If Apple billed your purchase, request a refund at <a href="https://reportaproblem.apple.com/">reportaproblem.apple.com</a>. Apple decides eligibility and processes those refunds under its terms and applicable consumer law. ByteApps Studio and Paddle cannot issue refunds for payments collected by Apple.</p>
        <p>Manage App Store subscriptions in your Apple Account subscription settings. Our 30-day Paddle guarantee does not apply to App Store payments. You can still email <Contact /> for help identifying your purchase channel or resolving an app issue.</p>
      </> },
      { id: "rights", title: "7. Your consumer rights", content: <>
        <p>This guarantee is additional to any statutory withdrawal, refund, or other consumer rights you have. Nothing in this policy limits rights relating to faulty, misdescribed, or undelivered products. Where applicable law or a payment provider gives you greater protection, that protection applies.</p>
        <p>Paddle purchases are also covered by <a href="https://www.paddle.com/legal/buyer-terms">Paddle's Buyer Terms</a> and <a href="https://www.paddle.com/legal/refund-policy">Paddle's Refund Policy</a>. Our 30-day guarantee provides additional protection for our products and is not intended to reduce those rights.</p>
      </> },
      { id: "contact", title: "8. Changes and contact", content: <>
        <p>The policy in effect when you make a payment applies to that payment. We may update this page for future purchases, but will not retroactively remove an existing refund entitlement.</p>
        <p>For refunds, billing assistance, or product support for any ByteApps Studio app:<br />{company}<br />Email: <Contact /></p>
      </> },
    ],
  },
};

export function LegalLinks({ currentPath }) {
  return <nav className="legal-links" aria-label="Terms and policies">
    {Object.entries(legalPages).map(([path, page]) => <a key={path} href={path} aria-current={currentPath === path ? "page" : undefined}>{page.title}</a>)}
  </nav>;
}

export function LegalPage({ page, pathname }) {
  return <main className="legal-page" id="top">
    <header className="legal-heading">
      <a className="legal-back" href="/">← Back to the studio</a>
      <p className="kicker">Terms & policies</p>
      <h1>{page.title}</h1>
      <p className="legal-intro">{page.intro}</p>
      <p className="legal-date">Effective date: <time dateTime="2026-10-11">October 11, 2026</time> · Applies to all ByteApps Studio apps</p>
      <LegalLinks currentPath={pathname} />
    </header>
    <div className="legal-layout">
      <aside className="legal-sidebar">
        <nav aria-label="On this page">
          <p className="kicker">On this page</p>
          {page.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title.replace(/^\d+\. /, "")}</a>)}
        </nav>
        <div className="legal-help"><p>Here to help.</p><a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></div>
      </aside>
      <article className="legal-content" aria-label={page.title}>
        <div className="legal-summary"><p>{page.summary}</p></div>
        {page.sections.map((section) => <section id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
          <h2 id={`${section.id}-title`}>{section.title}</h2>{section.content}
        </section>)}
      </article>
    </div>
  </main>;
}
