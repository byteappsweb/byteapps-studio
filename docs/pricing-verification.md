# US App Store price verification

Checked in the signed-in App Store Connect account on 2026-10-12. Subscription amounts below come from **Current pricing for new subscribers**, in the **Price** column for United States (USD), separately from introductory offers. Lifetime amounts come from the **Current price** territory table, not the selectable price matrix or offer-code tables.

| App | Plan | Product ID | Apple ID | Standard US price | Trial |
| --- | --- | --- | --- | --- | --- |
| DeskWidgets | Lifetime | `com.byteapp.widget.lifetimeV3` | 6467073705 | $24.99 once | None |
| DeskWidgets | Annual | `com.byteapp.widget.year03` | 6467072191 | $9.99/year | 7 days |
| DeskWidgets | Monthly | `com.byteapp.widget.month03` | 6467006323 | $0.99/month | 3 days |
| Desktop Organizer | Lifetime | `com.byteapp.desktoporganizer.lifetime` | 6504665586 | $24.99 once | None |
| Desktop Organizer | Annual | `com.byteapp.desktoporganizer.yearly` | 6504668406 | $19.99/year | 7 days |
| Desktop Organizer | Monthly | `com.byteapp.desktoporganizer.month` | 6504665984 | $1.99/month | 3 days |

## Product numbering

The user identified products marked `3` as the latest live products. DeskWidgets uses `lifetimeV3`, `year03`, and `month03` as verified above.

Desktop Organizer's full subscription list currently contains only **Subscription Group 1**, with the two approved products `month` and `yearly`. Its in-app purchase list contains only the approved `lifetime` product. No product marked `3` is listed for this app; its currently distributable macOS version is **3.7**. This difference has been raised with the user for clarification. The amounts above are confirmed current prices for the actual listed products, without assuming an unlisted replacement product exists.

App Store Connect review notes describe Base products as reference amounts for calculating future discount percentages; they do not participate in user payments. Do not substitute Base prices for the standard purchase prices above. Local StoreKit fixtures and UI fallback strings are also not current price evidence.

## Sources

- [DeskWidgets Lifetime](https://appstoreconnect.apple.com/apps/6446226257/distribution/iaps/6467073705)
- [DeskWidgets Annual](https://appstoreconnect.apple.com/apps/6446226257/distribution/subscriptions/6467072191)
- [DeskWidgets Monthly](https://appstoreconnect.apple.com/apps/6446226257/distribution/subscriptions/6467006323)
- [Desktop Organizer Lifetime](https://appstoreconnect.apple.com/apps/6504022609/distribution/iaps/6504665586)
- [Desktop Organizer Annual](https://appstoreconnect.apple.com/apps/6504022609/distribution/subscriptions/6504668406)
- [Desktop Organizer Monthly](https://appstoreconnect.apple.com/apps/6504022609/distribution/subscriptions/6504665984)
- [Desktop Organizer subscription inventory](https://appstoreconnect.apple.com/apps/6504022609/distribution/subscriptions)
- [Desktop Organizer in-app purchase inventory](https://appstoreconnect.apple.com/apps/6504022609/distribution/iaps)

These pages require the app owner's App Store Connect access. All six displayed website amounts matched these current prices at the time of verification, so this audit does not change any numeric price.
