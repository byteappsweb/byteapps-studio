# ByteApps Studio

Portfolio website for ByteApps Studio and its Mac apps.

## Project location

The complete project lives at `/Volumes/SSD/Codex/OfficialWebsite`, including source, product assets, build configuration, and Git history. The former `/Volumes/SSD/Codex/ByteAppsStudio` path is a compatibility symlink to this directory.

Product links: [DeskWidgets](https://www.deskwidgets.com/) · [Desktop Organizer](https://www.desktoporganizer.app/)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Cloudflare Pages output: `dist/client`

## Production publishing

The official website uses the Cloudflare Pages project `byteapps-studio` at https://byteapps.studio. Deployments use direct uploads:

```bash
npx wrangler pages deploy dist/client --project-name byteapps-studio --branch main
```

## Links

- Support: support@byteapps.studio
- Desktop for Gmail +Google Apps: https://byteapps.studio/desktop-for-gmail
- DeskWidgets: https://byteapps.studio/deskwidgets
- Desktop Organizer: https://byteapps.studio/desktop-organizer
- Pricing: https://byteapps.studio/pricing
- Terms of Service: https://byteapps.studio/terms
- Privacy Policy: https://byteapps.studio/privacy
- Refund Policy: https://byteapps.studio/refunds
- FAQ: https://byteapps.super.site/desktop-for-gmail/faq-1

The three policies apply to all ByteApps Studio apps and use `support@byteapps.studio` as the shared contact. Policy content is in `src/LegalPages.jsx`. Product pages are in `src/ProductPages.jsx` and `src/GmailPage.jsx`, with shared presentation and support. DeskWidgets and Desktop Organizer download links were verified against Apple's listings on 2026-10-15 (`id6446226257` and `id6504022609`). Pricing content is in `src/PricingPage.jsx` and covers DeskWidgets and Desktop Organizer in USD using their US App Store prices. Pricing is linked from the header; the footer contains only the three policy links. Production builds render the homepage, all product pages, pricing, and each policy as standalone HTML so direct links remain readable without JavaScript.

US pricing was checked in App Store Connect on 2026-10-12. Product IDs, current standard prices, and the difference between the apps' product numbering are recorded in `docs/pricing-verification.md`.
