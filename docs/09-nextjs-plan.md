# 09 - Next.js 15 Implementation Plan

## Principles

- Do not break existing routes.
- Do not rename product slugs without redirects.
- Do not add cart/checkout/backend unless business model changes.
- Prefer Server Components.
- Add Client Components only for real stateful interactions.
- Keep JSON-LD factual and visible-content aligned.
- Keep implementation in small phases.

## Current App Router Map

Existing:

- `app/page.tsx`
- `app/products/page.tsx`
- `app/products/[slug]/page.tsx`
- `app/moc-khoa-len/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/not-found.tsx`

Missing/future:

- `/about`
- `/contact`
- `/faq`
- `/wishlist`
- `/cart`
- `/checkout`
- `/tracking`
- `/search`

## Files To Modify First

### `app/page.tsx`

Reason:

- Homepage is main brand/conversion surface.

Changes:

- Replace or reorganize sections according to new blueprint.
- Keep metadata and schema.
- Add new components only if they reduce duplication.

SEO impact:

- Stronger intent and internal links.

UX/CRO impact:

- Better journey from emotion to product to order.

Performance:

- Keep server-rendered sections.

### `app/moc-khoa-len/page.tsx`

Reason:

- Current active pillar page.

Changes:

- Keep current structure.
- Refactor repeated quick-choice cards into component later if reused.
- Add final CTA/order-flow if not already enough.

### `app/products/page.tsx`

Reason:

- Commercial collection page.

Changes:

- Add static need chips.
- Add product guidance summary.
- Do not add heavy client filters yet.

### `app/products/[slug]/page.tsx`

Reason:

- Highest conversion intent.

Changes:

- Keep order-flow block.
- Add reusable `OrderFlow` only if same copy appears elsewhere.
- Add verified review/photo block only with real data.

### `app/blog/[slug]/page.tsx`

Reason:

- Blog can support product discovery.

Changes:

- Add inline product CTA.
- Add related products by article topic if data model supports it.

## Files To Create Later

| File | Priority | Reason |
| --- | --- | --- |
| `components/sections/NeedGuideCards.tsx` | P1 | Reuse choose-by-need pattern. |
| `components/sections/OrderFlow.tsx` | P1 | Reuse order clarity block. |
| `components/sections/ProcessStory.tsx` | P2 | Brand/EEAT storytelling. |
| `components/sections/TrustSignalGrid.tsx` | P2 | Reuse factual trust blocks. |
| `components/blog/InlineProductCta.tsx` | P2 | Blog conversion bridge. |
| `app/about/page.tsx` | P2 | Entity trust if real copy/images ready. |
| `app/contact/page.tsx` | P2 | Message-commerce support. |
| `app/faq/page.tsx` | P3 | Useful when FAQ grows. |
| `app/wishlist/page.tsx` | P3 | Only if local save feature is implemented. |
| `app/search/page.tsx` | P3 | Only when inventory/blog count justifies search. |

## Files Not To Create Yet

| Route | Reason |
| --- | --- |
| `/cart` | Current project is not a cart/checkout store. |
| `/checkout` | Payment/fulfillment policies not ready in repo. |
| `/tracking` dynamic lookup | No backend/order database. |

Alternative:

- Create `contact/order` or use existing `/#order` for message order.
- Future "message cart" can generate Zalo text, not real checkout.

## Files To Delete

None.

Do not delete:

- Existing blog routes.
- Existing product slugs.
- Existing policy routes.

## Metadata Plan

Current:

- Route-specific metadata exists.

Action:

- Keep route metadata near pages.
- Introduce helper only when duplication becomes painful.
- Future utility pages get `robots: { index: false, follow: true }`.

## Schema Plan

Keep:

- Organization.
- WebSite.
- WebPage.
- Product.
- FAQPage.
- CollectionPage.
- BreadcrumbList.
- BlogPosting.

Do not add:

- Review.
- AggregateRating.
- SearchAction before real search.
- LocalBusiness address unless real.

## Rendering Strategy

| Page | Strategy | Reason |
| --- | --- | --- |
| Home | Static | Content-driven, no user-specific data. |
| Products | Static | Product data from `lib/products.ts`. |
| Product detail | SSG via `generateStaticParams` | Existing pattern, fast. |
| Pillar | Static | SEO content. |
| Blog | Static | Data from `lib/blog.ts`. |
| Blog detail | SSG | Existing pattern. |
| Policies | Static | Stable. |
| Future wishlist | Client island | User-specific localStorage. |
| Future search | Static data + client filtering or server search | Choose based on scale. |

## Loading / Error / Suspense

Current static pages do not need custom loading.

Add later only if:

- Search becomes dynamic.
- Wishlist/cart has client fetch.
- Remote CMS is introduced.

`error.tsx`:

- Not required for static local data.

`loading.tsx`:

- Not required now.

## Image Optimization

Keep:

- `next/image`.
- AVIF/WebP.
- `qualities`.
- Long cache headers.

Improve:

- Optimize `og.png` and `twitter-card.png`.
- Replace oversized SVG/logo assets if possible.
- Use `priority` only for LCP.

## Caching

Current:

- Static build.
- Asset cache headers.

Future:

- ISR not needed until content is CMS-driven.
- If CMS appears, use ISR per route with conservative revalidate.

## Testing Plan

Keep:

- Vitest + React Testing Library.
- Metadata/sitemap tests.
- Image asset tests.

Add:

- Component tests for `NeedGuideCards`.
- Component tests for `OrderFlow`.
- Route tests for future About/Contact/FAQ.

## Phase 9 Checklist

- [x] Current routes reviewed.
- [x] New routes classified by priority.
- [x] No-delete rule defined.
- [x] Server/client rendering rules defined.
- [x] Schema/metadata/image/caching plan defined.
- [ ] Implement P1 components in small PRs.
- [ ] Run `npm run test` and `npm run build` after each PR.

