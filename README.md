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

## Links

- Support: support@byteapps.studio
- Terms of Service: https://byteapps.studio/terms
- Privacy Policy: https://byteapps.studio/privacy
- Refund Policy: https://byteapps.studio/refunds
- FAQ: https://byteapps.super.site/desktop-for-gmail/faq-1

The three policies apply to all ByteApps Studio apps and use `support@byteapps.studio` as the shared contact. Policy content is in `src/LegalPages.jsx`. Production builds render each policy as standalone HTML so direct links remain readable without JavaScript.
