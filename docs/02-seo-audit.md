# 02 - Technical SEO Audit

## Scope

This audit compares the reference site's SEO mechanics with LyliShop's current Next.js implementation. It focuses on practical improvements that can be implemented without copying design or content.

## Current LyliShop SEO Foundation

Current repo strengths:

- Next.js 15 App Router.
- `metadataBase`, canonical, OpenGraph, Twitter, icons, manifest in `lib/seo.ts`.
- Route metadata exists for homepage, products, product detail, blog, guide, privacy, terms.
- `app/robots.ts` and `app/sitemap.ts`.
- JSON-LD helpers: Organization, WebSite, WebPage, Product, FAQPage, BreadcrumbList, ItemList, CollectionPage, BlogPosting.
- Product pages use `generateStaticParams`.
- Local assets and `next/image`.
- Cache headers in `next.config.ts`.

Current SEO risks:

- No About/Contact page yet, so entity trust depends on homepage/footer/socials.
- Blog exists but should stay secondary to avoid topic cannibalization.
- Product slugs include legacy English names; do not rename without redirects.
- Social preview images may be larger than needed.
- Wishlist/cart/checkout/tracking routes do not exist; do not expose them in sitemap until functional.

## Competitor SEO Findings

| Area | Reference finding | Impact | LyliShop recommendation |
| --- | --- | --- | --- |
| Sitemap | Rank Math sitemap index includes page, product, post, category sitemaps. | Good coverage for WooCommerce. | Keep lean Next sitemap with only intentional indexable routes. |
| Robots | Blocks wp-admin, WooCommerce logs, add-to-cart query URLs. | Good crawl hygiene for WordPress. | Current robots can stay simple; add blocks only if future cart/search creates crawl traps. |
| Meta descriptions | Several pages empty; homepage description extracted from testimonial. | Weak snippets and poor query matching. | Every LyliShop page needs owned description written for intent. |
| H1 | Some archive/contact/tracking pages extracted no H1. | Reduced semantic clarity. | Every LyliShop route gets one clear H1. |
| Canonical | Cart/checkout lacked extracted canonical. | Utility page indexing risk. | Utility pages should be noindex or absent until implemented. |
| JSON-LD | Present on pages, but generic WordPress output. | Useful but not necessarily differentiated. | Keep factual schema aligned with visible content. |
| URL structure | Vietnamese product slugs are descriptive. | Good for users. | Keep current slugs stable; future products use ASCII Vietnamese slugs. |
| Blog category | `Uncategorized` appears. | Weak topical cluster. | Use explicit categories: Gift Guide, Handmade Care, Color Guide. |

## LyliShop Route SEO Plan

| Route | Intent | Status | Action |
| --- | --- | --- | --- |
| `/` | Brand + commercial overview | Strong | Keep as main brand/pillar surface. Add stronger story modules later. |
| `/products` | Product collection | Strong | Add optional lightweight filters if product count grows. |
| `/products/[slug]` | Product-specific commercial | Strong | Keep order-flow block and product schema. Add verified review/photo block only with real data. |
| `/moc-khoa-len` | Informational category/pillar | Strong | Keep guide + product links + FAQ schema. |
| `/blog` | Secondary inspiration content | Medium | Keep low sitemap priority. Use categories/tags in data model later. |
| `/blog/[slug]` | Supporting SEO content | Medium | Add stronger internal CTAs and related products. |
| `/privacy`, `/terms` | Policy trust | Good | Keep metadata and low sitemap priority. |
| `/about` | Entity trust | Missing | Add when real brand story is ready. |
| `/contact` | Support and ordering | Missing | Add as message-commerce contact page, no backend required initially. |
| `/wishlist` | Save favorites | Missing | Optional future localStorage feature; noindex until useful. |
| `/cart`, `/checkout` | Ecommerce flow | Missing | Do not add unless business model changes. |
| `/tracking` | Post-order support | Missing | Add only as information page or carrier-code guide. |
| `/search` | Product/blog search | Missing | Add only when product/blog count justifies it. |

## Metadata Blueprint

Rules:

- Title length target: 45-60 characters where possible.
- Description target: 140-160 characters, written for human click intent.
- Use route-specific OpenGraph/Twitter.
- Do not rely on global homepage Twitter tags for subpages.
- Keep canonical stable.
- No meta keywords required for ranking; if kept, avoid stuffing.

Metadata helper recommendation:

- Keep current `lib/seo.ts`.
- Add `buildPageMetadata({ title, description, path, image, type })` only when duplication grows.
- Do not refactor all metadata until there is enough duplication to justify it.

## Schema Blueprint

| Schema | Where | Required fields | Warning |
| --- | --- | --- | --- |
| Organization | Layout/home | name, url, logo, sameAs, contactPoint | Do not add fake address/email. |
| WebSite | Home | name, url, publisher | Do not add SearchAction until real search exists. |
| WebPage | Home/about/contact | name, description, url, inLanguage | Keep page-specific. |
| CollectionPage | `/products`, `/moc-khoa-len` | name, description, ItemList | Keep products visible on page. |
| Product | product pages | name, image, description, brand, offers | No aggregateRating/review without verified visible reviews. |
| FAQPage | FAQ sections | visible question/answer | Must match visible content. |
| BreadcrumbList | all deep pages | visible page path | Align UI and JSON-LD. |
| BlogPosting | blog detail | headline, dates, author, publisher | Use real modified dates. |

## Image SEO

Current LyliShop:

- Local product images.
- `next/image`.
- AVIF/WebP output enabled.
- `qualities` configured.

Rules:

- Every product image needs descriptive Vietnamese alt.
- Hero image alt should describe product/scene, not "image".
- Decorative SVG/backgrounds should be `aria-hidden`.
- Image filenames for future products should be ASCII, keyword-readable, and stable.
- Use `priority` only for LCP images.

Recommended image dimensions:

- Homepage hero: 1600x1200 or 1920x1080, optimized to WebP/AVIF.
- Product primary: 1200x1200.
- Product lifestyle: 1200x900.
- Blog cover: 1200x630.
- OG/Twitter: 1200x630, under 250KB if possible.

## Internal Link Strategy

Core hub model:

- `/`: brand + emotional promise.
- `/products`: all available products.
- `/moc-khoa-len`: keyword/informational category guide.
- Product pages: product-specific long-tail.
- Blog posts: supporting educational and gift-intent articles.

Internal link formulas:

- From homepage hero: `/products`, `/moc-khoa-len`, `/#order`.
- From category guide: product details, `/products`, `/#order`.
- From product pages: `/products`, `/moc-khoa-len`, related products.
- From blog: one contextual link to guide, one to product collection, optional product cards.
- From footer: home, products, guide, FAQ/order, policies, socials.

Anchor text examples:

- "móc khóa len handmade"
- "mẫu móc khóa len làm quà"
- "cách chọn móc khóa len"
- "nhắn LyliShop chọn màu"
- "xem sản phẩm từ 45k"

## Technical Performance SEO

Current Next.js advantage over WordPress/WooCommerce:

- Static/SSG pages.
- No WooCommerce JS bundle.
- Local images and cache headers.
- Minimal client components.

Implementation rules:

- Keep product cards server-rendered.
- Avoid client filtering until necessary.
- Use CSS/native details for FAQ.
- Avoid heavy sliders/carousels unless measurement proves need.
- Use CSS animation only; honor `prefers-reduced-motion`.
- Do not add review widgets, chat widgets, or tracking scripts without performance budget.

## Phase 2 Checklist

- [x] Competitor robots/sitemap checked.
- [x] Competitor metadata and H1 extraction sampled.
- [x] Current LyliShop metadata/schema reviewed.
- [x] Schema policy defined.
- [x] Internal link model defined.
- [x] Utility pages noindex/absence guidance defined.
- [ ] Validate final metadata after implementation with production HTML.
- [ ] Run Lighthouse/PageSpeed after visual implementation.

