# Design QA — selected orange studio logo

- Source visual truth: `docs/branding/orange-logo-approved.png`.
- Transparent production artwork: `public/assets/brand/byteapps-orange-master.png`.
- Combined comparison input: `.playwright-mcp/branding/comparison.png`.
- Browser-rendered evidence: `.playwright-mcp/branding/home-desktop.png`, `home-mobile.png`, `home-320.png`, `product-mobile.png`, `product-mobile-full.png`, and `product-320.png` in the same directory.
- Source and production artwork: 1254 × 1254 px. Colored artwork bounds were normalized to equal presentation height for comparison; transparent padding is not part of the logo anatomy.
- Desktop viewport: 1280 × 720 CSS px, browser DPR 2; screenshot export normalized by the browser to 1280 × 720 px.
- Mobile viewports: 390 × 844 and 320 × 740 CSS px; screenshots use matching CSS pixel dimensions.
- States: homepage header, Gmail product header and full page, Desktop Organizer header, shared footer, and brand return-home navigation.

## Full-view comparison evidence

Opened the approved source and browser implementation together in `comparison.png`. The selected orange silhouette, green leaf and five citrus cutouts are retained in the production asset. The studio mark appears beside the separate name in the shared header and footer. The former mail icon is no longer used as studio branding. Product icons remain in their existing product locations.

## Focused-region comparison evidence

The combined input includes the normalized source and transparent asset, the desktop browser header, a 390 px homepage header and a 320 px product header. The transparent holes inherit both the off-white homepage and white product background without a visible rectangular matte. All five cutouts remain readable at navigation size. The 320 px product header has more than 14 px between the wordmark and navigation; Pricing and Support remain visible. Both mobile documents measure exactly their viewport width, with no horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: retained the existing system sans family and weight. Separate studio text uses the existing orange token consistently across routes. Desktop header is 24 px (21 px on product pages), mobile product header 18 px, and footer 28 px (20 px on product pages). Names do not wrap or truncate.
- Spacing and layout rhythm: shared icon/name alignment uses flex centering and a 9 px desktop gap. Mobile sizing fits the existing two-row homepage header and compact product header. The logo keeps its natural proportions through `object-fit: contain`.
- Colors and visual tokens: retained the selected orange/green artwork and existing site colors. Removed the product-page red override from studio text so the shared identity is consistent.
- Image quality and asset fidelity: real generated artwork is delivered as RGBA PNG, with no SVG/CSS approximation. The master is retained; 256, 180, 64 and 32 px exports use resampling. Slight raster sampling differences from transparent extraction are not visible at website sizes.
- Copy and content: website wording, product descriptions and policy access are preserved. Each mark is decorative beside an accessible “ByteApps Studio home” link name.

## Interaction and build verification

- Header brand click on Gmail and footer brand click on Desktop Organizer both returned to `/` and displayed the homepage heading.
- All 8 standalone HTML pages contain two shared orange brand images and the new orange favicon references.
- Both brand images load in the browser; console warning/error log is empty.
- `npm run build`: passed.
- `npm run test:sites`: 4 tests passed, including required distribution artifacts.
- `git diff --check`: passed.
- Production deployment: `9323f397-700d-4435-a491-fbc5ff622006`, Cloudflare Pages project `byteapps-studio`, branch `main`.
- Live `https://byteapps.studio/` render captured at `.playwright-mcp/branding/production-home.png`; the orange logo is visibly present in the header. All 8 live routes return the current build, and the three published icon files match the local files byte for byte. Detailed checks are in `docs/branding/deployment-verification.json`.

## Findings and comparison history

The initial comparison found no actionable P0/P1/P2 differences. The approved image is a symbol-only target, so the existing website layout and separate name typography remain the context for placement. No visual repair iteration was required. The previous product-imagery QA is retained at `docs/branding/previous-product-imagery-qa.md`.

## Implementation checklist

- [x] Preserve the pictorial logo without letters.
- [x] Update shared header and footer across all routes.
- [x] Update browser favicon, touch icon and conventional favicon path.
- [x] Check desktop, 390 px and 320 px layouts and return-home interactions.
- [x] Verify combined visual comparison, browser console, build and hosting checks.

## Follow-up layout fixes — 2026-10-16

- Product icons: prevented the icon link from shrinking beside long names and allowed the adjacent heading to wrap. The Gmail icon previously measured 47.33 × 74 px at 1280 px; all three product icons now remain 74 × 74 px on desktop and 62 × 62 px on mobile. Nine viewport widths from 320 to 1920 px passed square-icon and overflow checks. The image link still opens its product page. Evidence is in `.playwright-mcp/icon-ratio/`.
- Gmail hero preview: removed the mostly obscured background Office window and its unused stacking styles. The hero now uses one full-width, uncropped screenshot with the same shared presentation as the other product pages. At 320, 390 and 1280 px, screenshot width equals container width (284, 354 and 1040 px), its source aspect ratio is preserved, and no background window or horizontal overflow remains. Evidence is in `.playwright-mcp/gmail-preview/single-desktop.png` and `single-mobile.png`.
- Browser console checks reported no application warnings/errors. The final production build and all 4 Sites packaging tests passed after these fixes.

final result: passed
