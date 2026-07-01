# 01 - Website Audit: Lenly Handmade vs LyliShop

Audit date: 2026-07-01  
Project: `ducanh8888/lylishop`  
Reference site: `https://lenlyhandmade.shop`  
Target site: `https://lylishop.online`

## Executive Summary

Lenly Handmade is a WordPress/WooCommerce handmade shop. The strongest pattern to learn is not the visual style, but the commerce journey:

1. Header gives product categories, blog, about, contact, tracking, cart, search.
2. Homepage moves from brand feeling to categories, best sellers, testimonials, blog, footer trust.
3. Category pages use filters, sorting, product cards, breadcrumbs, recently viewed products.
4. Product pages use gallery, price, variant/quantity, add-to-cart, buy-now, tabs, reviews, related products.
5. Footer repeats brand positioning, policies, contact, sitemap/login/newsletter.

LyliShop should keep its own Next.js static/message-commerce model. It should not copy WooCommerce cart mechanics unless the business decides to sell with online checkout. The better LyliShop version is:

- Same thinking of complete journey: discover -> choose need -> view products -> understand handmade value -> trust -> message to order.
- Cleaner SEO than Lenly: every page gets H1, meta description, canonical, schema, alt strategy, stable internal links.
- More honest trust: no fake reviews or fake ratings; use real process, real product images, clear ordering steps.
- Stronger UX: fewer noisy widgets, tighter mobile sections, no empty login/cart UI unless functional.

## Brand And Color Findings

Logo source read from `public/logo-lylishop-v3.svg`.

Logo file facts:

- SVG contains a warm background fill `#fffcf7`.
- The embedded raster logo/icon has dominant warm cream tones and yarn-brown accents.
- Current LyliShop CSS already uses a rose primary: `#be185d`, soft pink background `#fdf2f8`, secondary `#f472b6`.

Recommended LyliShop palette derived from logo and current code, not from competitor:

| Role | Token | Hex | Reason |
| --- | --- | --- | --- |
| Primary CTA | Lyli Rose | `#be185d` | Already in `SITE.themeColor`; strong enough for CTA contrast. |
| Soft background | Lyli Blush | `#fdf2f8` | Existing warm pink page background; fits handmade/gift mood. |
| Secondary | Petal Pink | `#f472b6` | Existing secondary; use for badges/highlights, not entire page. |
| Logo cream | Warm Cream | `#fffcf7` | Direct from logo SVG; use for hero/card surfaces. |
| Yarn accent | Yarn Brown | `#704010` | Extracted from logo raster; use sparingly for craft/story accents. |
| Text | Ink | `#111827` or current foreground | Maintains readability and serious trust. |

Recommendation: keep the current rose system, add warm cream/yarn-brown as supporting brand accents. Do not move to a one-note pink site.

## Competitor Crawl Coverage

Observed routes and systems:

| Area | URL / Evidence | Notes |
| --- | --- | --- |
| Home | `/` | Header, categories, best sellers, testimonials, news, footer. |
| Shop/category aggregate | `/cua-hang/` | Product archive, filter, sort, category sidebar. |
| Category detail | `/danh-muc-san-pham/moc-khoa/` | Breadcrumb, two products, sorting, recently viewed. |
| Product detail | `/moc-khoa-len-thu-cong-hinh-cuu-mau-2/` and product pages | Gallery, sale badge, price, quantity, add to cart, buy now, tabs, reviews, related products. |
| Blog index/detail | `/tin-tuc/`, article URLs | Blog detail has table of contents, headings, comments, recent posts. |
| About | `/thong-tin/` | Mission, values, positioning. |
| Contact | `/lien-he/` | Contact form fields. |
| Tracking | `/theo-doi-don/` | Order ID + billing email flow. |
| Wishlist | `/wishlist/` in sitemap | Exists as route; likely plugin-based. |
| Cart | `/gio-hang/` | Exists; empty cart state appears in header/sidebar. |
| Checkout | `/thanh-toan/` | Exists; extracted title showed cart title issue. |
| 404 | Not deeply crawled; should be checked during implementation QA. |
| Robots | `/robots.txt` | Blocks wp-admin and add-to-cart query URLs; points to sitemap index. |
| Sitemap | `/sitemap_index.xml` | Rank Math sitemap index with post/page/product/category sitemaps. |
| Manifest | Likely WordPress theme/plugin output; not a strategic advantage for LyliShop. |
| Schema | JSON-LD present; count varies by page. |

## Global UX Audit Of Competitor

### Header

Purpose: expose full commerce navigation quickly.

Observed thinking:

- Includes home, news, shop with categories, about, contact, tracking.
- Search and cart are globally reachable.
- Repeats brand phrase near top.

Strength:

- Good discoverability.
- Users can jump to shop/category/tracking from anywhere.

Weakness:

- Too many elements for a small handmade brand.
- Empty cart/login blocks appear even when no product is selected.
- Search/cart make sense for WooCommerce but may distract LyliShop if still message-commerce.

LyliShop blueprint:

- Desktop nav: `Móc khóa len`, `Sản phẩm`, `Chọn làm quà`, `Câu hỏi`, `Đặt hàng`.
- Keep one primary CTA: `Nhắn Zalo đặt mẫu`.
- Add secondary link: `Cách chọn mẫu`.
- Mobile menu should prioritize ordering and product browsing, not long policy links.

### Footer

Purpose: reinforce trust and crawl paths.

Observed thinking:

- Brand description.
- Policies.
- Contact info.
- Sitemap/navigation.
- Login/newsletter blocks.

Strength:

- Good for SEO crawl depth and trust.
- Policy links make the site feel operational.

Weakness:

- Some contact fields look placeholder-like.
- Login/newsletter without clear purpose can add noise.

LyliShop blueprint:

- Keep footer with brand story, quick links, policies, socials.
- Add "Cách đặt hàng qua tin nhắn" and "Cần chuẩn bị gì khi nhắn shop".
- Do not add fake address/email/login.

## Page Audit

## Home

Purpose: brand impression + product discovery + trust.

Audience: first-time buyer, gift buyer, cute handmade lover.

Intent: learn what the shop sells and decide whether to browse products.

SEO intent: brand + handmade gift/product category.

Conversion goal: click product/category or message shop.

Content goal: explain emotional value, categories, best sellers, trust.

UX goal: show enough product variety without forcing checkout.

Observed section order:

1. Top/header + brand phrase.
2. Product category grid.
3. Best-selling products.
4. Customer testimonials.
5. News/blog.
6. Footer policies/contact/sitemap.

Section reasoning:

- Categories appear early because WooCommerce users need quick product sorting.
- Best sellers create shortcut to purchase.
- Testimonials create trust before blog/footer.
- Blog provides SEO support and keeps page from feeling only transactional.

Weaknesses to improve for LyliShop:

- Homepage lacks clear H1 in extracted HTML.
- Meta description appears pulled from testimonial, which is weak for SEO.
- Trust/reviews may be unverified.
- No strong "how to order handmade/custom color" education before conversion.

LyliShop redesign direction:

1. Hero: emotional promise + product/lifestyle image + CTA.
2. Choose by need: gift, daily use, group order, self-reward.
3. Featured products.
4. Handmade story/process.
5. Personalization/color selection.
6. Trust/order steps.
7. Real gallery.
8. FAQ.
9. Blog/guide links.
10. Final CTA.

## Shop / Category Aggregate

Purpose: commercial product browsing.

Audience: users already looking for product options.

Intent: compare products, prices, categories.

SEO intent: category/listing commercial intent.

Conversion goal: product detail click or add to cart.

Observed sections:

- Breadcrumb.
- Product count.
- Sort dropdown.
- Category sidebar.
- Price filter.
- Product cards.
- Footer.

Strength:

- Strong commerce pattern.
- Filtering and sorting are useful if product count is high.

Weakness:

- Only 6 results, so filters are heavier than the inventory requires.
- Category content is thin; almost no intro copy or buying guidance.
- No clear emotional hook.

LyliShop redesign:

- Keep `/products` simple because inventory is small.
- Add compact "choose by intent" chips or filters without client-heavy logic.
- Add collection intro: price from 45k, handmade, choose color, message to order.
- Use product cards with price, category, highlights, and CTA "Xem chi tiết".

## Category Detail

Purpose: narrow listing for one type, e.g. keychains.

Audience: users with product category intent.

Observed:

- Breadcrumb.
- Sort.
- Category sidebar.
- Recently viewed.
- Product grid.

Weakness:

- Category page has no H1 in extracted HTML.
- No category story, FAQ, or buying guide.

LyliShop:

- `/moc-khoa-len` already does this better as a category/pillar page.
- Add "Gợi ý chọn nhanh" and "Cách chọn" sections.
- Include internal links to product details and FAQ schema.

## Product Detail

Purpose: convert product interest into order.

Audience: buyer comparing one item.

Intent: understand price, size, material, use case, order path.

Observed sections:

1. Breadcrumb.
2. Product image/gallery.
3. H1.
4. Price/sale.
5. Short description.
6. Variant/quantity.
7. Add to cart / buy now.
8. Category/sidebar.
9. Tabs: description, additional info, reviews.
10. Related products.

Strength:

- Gallery and price are immediate.
- Add-to-cart/buy-now pattern is clear.
- Product tabs keep long detail compact.
- Related products preserve shopping path.

Weakness:

- Review form appears even when no reviews exist.
- Large discount percentages may reduce trust if not explained.
- Product content is descriptive but not always structured by buyer questions.
- No "how custom order works" near CTA.

LyliShop:

- Keep product page as message-commerce.
- Add order-flow block: choose sample -> shop confirms -> make/deliver.
- Add "best for" and "gift occasion" copy.
- Related products should remain simple and deterministic.
- No fake reviews. Add real customer photos only when verified.

## Blog Detail

Purpose: SEO education and discovery.

Observed:

- H1.
- Date/author.
- Image.
- Table of contents.
- H2/H3 hierarchy.
- Comments.
- Recent posts/calendar/sidebar.

Strength:

- TOC helps long-form readability.
- Headings create SEO structure.
- Recent posts keep internal browsing.

Weakness:

- Some language is broad trend content, not always tied to product conversion.
- Uncategorized blog category weakens topical authority.
- Comment form is probably low-value for a small store.

LyliShop:

- Keep blog secondary, not primary funnel.
- Topic clusters should link to `/moc-khoa-len`, `/products`, and product detail pages.
- Add product suggestion blocks inside blog, but avoid hard-selling every paragraph.

## About

Purpose: brand trust and emotional differentiation.

Observed:

- Brand origin.
- Mission.
- Values.
- Positioning as emotional gift brand.

Strength:

- Strategic positioning is strong: not just a random yarn shop.
- Gives customer a reason to remember brand.

Weakness:

- Too short for EEAT.
- Needs real founder/process/story images for stronger trust.

LyliShop:

- Add `/about` only if real story and owner-approved content are available.
- Use story: small handmade pieces, chosen colors, gift moments, careful packaging.

## Contact

Purpose: lead capture and support.

Observed:

- Form fields: title, name, phone, email, message.
- Footer contact.

Weakness:

- No immediate answer expectations.
- No social/contact CTA visible in extracted text.

LyliShop:

- Since sales happen via Zalo/Facebook, contact page should prioritize message CTA.
- Form is optional; do not add backend unless needed.
- Add "send this info" checklist: mẫu, màu, số lượng, ngày cần nhận.

## Tracking

Purpose: post-purchase reassurance.

Observed:

- Order ID + billing email.

LyliShop:

- If no backend/order system, do not add fake tracking.
- Create "Theo dõi đơn" informational page only if it explains how to check via Zalo/Facebook or carrier code.

## Wishlist

Purpose: save products for later.

LyliShop:

- Near-term: use "Lưu mẫu yêu thích" as a content pattern, not a persisted feature.
- Future: localStorage wishlist if product count grows; no account needed.

## Cart / Checkout

Purpose: ecommerce purchase flow.

Competitor has WooCommerce cart/checkout.

LyliShop:

- Current README says no cart/checkout/backend. Keep it that way unless business model changes.
- If implemented later, use "request order" flow first: collect selected items and open Zalo message.
- Full payment checkout should be a later phase with policies, inventory, and fulfillment readiness.

## 404

LyliShop blueprint:

- Keep friendly not-found.
- Add paths: `Về trang chủ`, `Xem sản phẩm`, `Nhắn shop`.
- Include noindex default if dynamic unknown pages are generated; current App Router 404 is acceptable.

## Technical Observations From Competitor

| Area | Finding | LyliShop action |
| --- | --- | --- |
| Robots | Blocks admin/log/add-to-cart URLs and points to sitemap index. | Current LyliShop robots are simple and good. Keep sitemap. |
| Sitemap | Rank Math index with posts/pages/products/categories. | Current Next sitemap should remain intentional and lean. |
| Meta | Some pages lack descriptions; homepage description came from testimonial. | LyliShop must keep route-specific descriptions. |
| H1 | Extracted H1 missing on some archive/contact/tracking pages. | Ensure every indexable page has exactly one useful H1. |
| Canonical | Cart/checkout extracted without canonical. | Do not index utility pages unless useful. |
| Schema | JSON-LD exists but generic. | Keep Product/FAQ/Breadcrumb/Collection schema factual. |
| Performance | WordPress/WooCommerce likely heavier; server headers show PHP/LiteSpeed/Hostinger. | LyliShop Next static pages can beat it on CWV if images stay optimized. |
| Accessibility | Skip link exists. Forms need labeling review. | LyliShop already has skip link; keep native controls and focus states. |

## Phase 1 Checklist

- [x] Crawled home, shop, category, product, blog, about, contact, tracking.
- [x] Checked sitemap and robots.
- [x] Extracted meta/canonical/schema signals for representative routes.
- [x] Read LyliShop logo SVG and current CSS palette.
- [x] Identified competitor strengths to learn.
- [x] Identified competitor weaknesses LyliShop can improve.
- [ ] Visual screenshot audit in browser, optional before final implementation.

