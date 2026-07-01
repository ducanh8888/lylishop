# 04 - LyliShop Wireframe Blueprint

Design principle: keep the reference site's commerce thinking, but rebuild for LyliShop's message-commerce brand. Layout should feel complete like WooCommerce, but lighter, faster, more emotional, and more SEO-controlled.

## Global Layout

### Header

Order:

1. Logo + brand name.
2. Main nav: `Móc khóa len`, `Sản phẩm`, `Làm quà`, `Câu hỏi`, `Đặt hàng`.
3. Secondary action: `Xem mẫu`.
4. Primary action: `Nhắn Zalo đặt mẫu`.
5. Mobile menu with same hierarchy.

Reason:

- Mirrors full-commerce discoverability without adding nonfunctional cart/search.
- Keeps conversion path visible.

### Footer

Columns:

1. Brand story.
2. Quick links.
3. Policies.
4. Contact/order channels.
5. Optional newsletter/message reminder later.

Reason:

- Supports crawl depth and trust.
- Repeats ordering mechanism.

## Homepage

Purpose: brand impression + product discovery + conversion to message.

### Section Order

1. Hero: emotional promise.
2. Choose by need.
3. Featured products.
4. Handmade process/story.
5. Personalization/color guide.
6. Trust/order steps.
7. Gallery.
8. FAQ.
9. Blog/guide cards.
10. Final CTA.

### Wireframe

```text
[Header]
[Hero: copy left, product/lifestyle image right]
[Need cards: Gift | Daily use | Group order | Self reward]
[Featured product grid]
[Story/process band: 3 steps]
[Color personalization: swatches + explanation]
[Trust/order steps]
[Gallery]
[FAQ accordion]
[Guides/blog]
[Final CTA]
[Footer]
```

Hero copy:

- H1: `Móc khóa len handmade nhỏ xinh, được chọn màu để làm quà`
- Subheading: `LyliShop làm những món quà len nho nhỏ, có thể đổi màu và đóng gói gọn để người nhận cảm thấy được quan tâm.`
- CTA: `Xem mẫu từ 45k`, `Nhắn shop tư vấn màu`.

Image position:

- Desktop: right side product/lifestyle.
- Mobile: image below CTA.

## Category / Pillar: `/moc-khoa-len`

Purpose: SEO category guide + commercial bridge.

### Section Order

1. Breadcrumb.
2. Hero/definition.
3. Quick info card.
4. Pillar nav.
5. Quick-choice cards.
6. Product grid.
7. Gift use cases.
8. How to choose.
9. Trust signals.
10. FAQ.
11. CTA to order.

Current implementation already has most of this; keep improving around quick choice and CTA clarity.

## Product Collection: `/products`

Purpose: product listing.

### Section Order

1. Breadcrumb.
2. H1 + short buying guide.
3. Need chips: gift, mini, group, under 50k, custom color.
4. Product grid.
5. Ordering support block.
6. FAQ teaser.
7. CTA.

Reason:

- Product count is small; filtering should be lightweight and possibly static.

## Product Detail: `/products/[slug]`

Purpose: convert product interest into message/order.

### Section Order

1. Breadcrumb.
2. Back link.
3. Product image/gallery.
4. Product title + long description.
5. Price and note.
6. Highlights.
7. Material/benefits/gift fit.
8. Tags.
9. Promotion if real.
10. Order flow.
11. CTA row.
12. Product FAQ.
13. Related products.

CTA:

- Primary: `Nhắn Zalo để đặt hàng`.
- Secondary: `Xem thêm sản phẩm`.
- Secondary: `Cách chọn móc khóa len`.

## Blog Index

Purpose: supporting content hub.

### Section Order

1. Breadcrumb.
2. H1: `Cảm hứng quà handmade nhỏ xinh`.
3. Category chips.
4. Featured guide.
5. Blog grid.
6. Product CTA band.

## Blog Detail

Purpose: answer a specific question and route to product/guide.

### Section Order

1. Breadcrumb.
2. Article header.
3. Table of contents.
4. Content sections.
5. Inline related product/guide block.
6. FAQ.
7. Related posts.
8. CTA.

## FAQ Page

Purpose: objection handling.

Route status: future optional.

### Section Order

1. H1.
2. Category tabs/anchor nav.
3. Product FAQ.
4. Customization FAQ.
5. Ordering FAQ.
6. Shipping/packaging FAQ.
7. CTA.

## About Page

Purpose: entity trust and brand story.

Route status: future recommended.

### Section Order

1. Brand story hero.
2. Why LyliShop exists.
3. Handmade values.
4. Process photos.
5. Packaging/gifting promise.
6. CTA to products/order.

## Contact Page

Purpose: help buyers choose and contact.

Route status: future recommended.

### Section Order

1. H1: `Nhắn LyliShop để chọn mẫu và màu`.
2. Zalo/Facebook/Instagram/TikTok buttons.
3. Message template.
4. Response expectation.
5. FAQ.

## Wishlist

Route status: future optional.

Experience:

- No account.
- Save product slug in localStorage.
- CTA: `Gửi danh sách mẫu cho shop`.
- Noindex until useful and linked intentionally.

## Cart

Route status: future optional only if business changes.

Message-commerce alternative:

- "Danh sách mẫu muốn đặt".
- User can add products locally.
- CTA generates Zalo message with product names, colors, quantities.

## Checkout

Route status: not recommended now.

If implemented:

- Step 1: items.
- Step 2: customization.
- Step 3: contact/shipping.
- Step 4: confirmation by shop.
- Payment only after fulfillment policy is ready.

## Tracking

Route status: optional informational page.

Experience:

- Explain how to check order through shop message.
- If carrier code exists, link to carrier.
- No fake order lookup.

## Search

Route status: optional when inventory/blog grows.

Experience:

- Search products/blog locally.
- URL: `/search?q=...`.
- Noindex search result pages unless curated.

## 404

Section order:

1. Friendly message.
2. `Xem sản phẩm`.
3. `Móc khóa len`.
4. `Nhắn shop`.

## Phase 4 Checklist

- [x] Homepage blueprint complete.
- [x] Category/pillar blueprint complete.
- [x] Product collection/detail blueprint complete.
- [x] Blog/blog detail blueprint complete.
- [x] Optional FAQ/About/Contact/Wishlist/Cart/Checkout/Tracking/Search/404 defined.
- [ ] Turn wireframes into component tickets.

