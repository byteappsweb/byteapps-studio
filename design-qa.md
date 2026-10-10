# Design QA — ByteApps product imagery update

- Source visual truth: `/var/folders/g3/8m8kj79j4sg4g558lj72gwcc0000gn/T/codex-clipboard-2e92bf68-67a7-4854-9123-694f2ffa0ffe.png`
- Browser-rendered implementation evidence: `cua://iab/2/tab/1` at `http://localhost:5173/#apps` (screenshots captured in the current Codex task)
- Source pixels: 1786 × 1157
- Desktop implementation viewport: 883 × 1313 CSS px, device scale factor 1
- Mobile implementation viewport: 390 × 844 CSS px, device scale factor 1
- State: product list with DeskWidgets, Desktop Organizer, and Desktop for Gmail +Google Apps

## Full-view comparison evidence

The supplied screenshot shows the prior tinted left and right gutters around the Desktop Organizer artwork. The revised browser render removes that wrapper treatment and lets every product screenshot occupy the complete width of its visual frame. Browser geometry checks measured `leftGap: 0` and `rightGap: 0` for all three products at both the 390 px mobile breakpoint and the desktop layout.

## Focused-region comparison evidence

The Desktop Organizer visual was inspected directly against the supplied reference at the same product-card state. The prior brown side bars are gone, the image keeps its rounded corners, and no image content is stretched or cropped. DeskWidgets and Desktop for Gmail +Google Apps use the same shared component and were checked separately for zero horizontal gap.

## Findings

- No actionable P0/P1/P2 issues remain.
- Fonts and typography: unchanged from the approved site; the longer Gmail product name wraps cleanly on mobile without clipping.
- Spacing and layout rhythm: product screenshots now fill their frames edge to edge; text/image spacing and section rhythm remain intact.
- Colors and visual tokens: the unnecessary tinted screenshot-frame background was removed; existing page and product accent colors remain unchanged.
- Image quality and asset fidelity: original product screenshots remain unscaled in aspect ratio. The Gmail icon now uses the 1024 px AppIcon from the GmailMac project.
- Copy and content: ClearToday is absent from navigation, product rail, product cards, metadata, and public assets. The Gmail product name is `Desktop for Gmail +Google Apps`.

## Comparison history

1. Earlier implementation added explicit horizontal padding, which increased the unwanted gutters. Fixed by removing screenshot-frame padding and background treatment.
2. The first post-fix preview still showed the cached red Gmail icon. Fixed by publishing the current AppIcon under the new cache-busting filename `gmail-google-apps-icon.png`.
3. Post-fix evidence: all three screenshot frames report zero left/right gap, ClearToday text count is zero, and the browser console reports no errors.

## Implementation checklist

- [x] Remove horizontal screenshot gutters on desktop and mobile.
- [x] Remove ClearToday content and assets.
- [x] Update Gmail product name and AppIcon.
- [x] Build and run Sites tests.
- [x] Inspect desktop and mobile browser renders.

final result: passed
