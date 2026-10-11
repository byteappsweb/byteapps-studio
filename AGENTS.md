# Prototype Instructions

## Project location

- The canonical checkout is `/Volumes/SSD/Codex/OfficialWebsite`. Keep the studio website source, assets, build configuration, and Git history together in this directory.
- `/Volumes/SSD/Codex/ByteAppsStudio` is a compatibility symlink to the canonical checkout.
- Production hosting uses the Cloudflare Pages project `byteapps-studio`, serving `https://byteapps.studio`. Publish the studio website to that project.

## Product direction

- The website and local project name is ByteApps Studio. The support email is `support@byteapps.studio`. DeskWidgets links to `https://www.deskwidgets.com/` and Desktop Organizer links to `https://www.desktoporganizer.app/`.
- Header and footer Support links must open the visitor's default email client with `support@byteapps.studio` as the recipient. Keep both links consistent using the shared support email and the subject `ByteApps Studio Support`.
- Terms of Service (`/terms`), Privacy Policy (`/privacy`), and Refund Policy (`/refunds`) are studio-wide policies for all current and future ByteApps Studio apps. Use `support@byteapps.studio` consistently for every legal, privacy, refund, and support contact. Keep all three links accessible from the website footer and each policy page.
- The site is now the ByteApps Studio portfolio rather than a single-product landing page. Lead with the independent studio and showcase DeskWidgets, Desktop Organizer, and Desktop for Gmail +Google Apps using real product imagery. Do not list ClearToday on the studio site.
- Keep the public product split accurate: DeskWidgets, Desktop Organizer, and Desktop for Gmail +Google Apps are Mac apps.
- Product screenshots must fill their visual frames edge to edge on desktop and mobile; do not add colored left or right gutters around the screenshots.
- Use the current GmailMac product identity from the app project: the public name is `Desktop for Gmail +Google Apps`, and the website icon should be sourced from `Resources/Assets.xcassets/AppIcon.appiconset/icon_512x512@2x.png`.

- The selected visual target is the bright, editorial Option 1: a crisp white Mac landing page with centered product messaging and layered native app windows.
- Use the user-supplied red mail AppIcon as the only website brand icon, including navigation and favicon.
- Website imagery must use sanitized demo content; never publish screenshots containing real inbox data or account details.
- Keep product copy concise and concrete: multiple Gmail accounts, Google apps in one window, attachment/download management, print or save PDF, light/dark modes, app lock, and menu bar access.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
