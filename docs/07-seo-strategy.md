# 07 - SEO Strategy By Page

## Global Rules

- All indexable pages need one H1.
- Canonical must point to self for canonical pages.
- OpenGraph and Twitter must be route-specific.
- Product/review schema must match visible real content.
- Utility pages should stay absent or noindex until functional.
- Do not rename current product slugs without redirects.

## Homepage

URL: `/`  
Canonical: `https://lylishop.online/`

Title:

`Móc Khóa Len Handmade Cute Làm Quà | LyliShop`

Description:

`LyliShop làm móc khóa len handmade nhỏ xinh, nhận chọn màu theo yêu cầu, đóng gói làm quà và đặt nhanh qua Zalo/Facebook.`

H1:

`Móc khóa len handmade nhỏ xinh, được chọn màu để làm quà`

H2:

- `Chọn móc khóa len theo người nhận`
- `Mẫu móc khóa len nổi bật`
- `Từng món quà được làm thủ công`
- `Cách đặt hàng tại LyliShop`
- `Câu hỏi thường gặp`

Schema:

- Organization.
- WebSite.
- WebPage.
- ItemList for featured products.
- FAQPage if visible FAQ.

Internal links:

- `/products`
- `/moc-khoa-len`
- product detail pages
- `/#order`

EEAT:

- Real social profiles.
- Real contact phone/Zalo.
- Handmade process.
- Clear order flow.

## Products

URL: `/products`

Title:

`Móc Khóa Len Handmade Từ 45k, Đặt Màu Riêng | LyliShop`

Description:

`Xem các mẫu móc khóa len handmade LyliShop: mẫu mini từ 45k, set làm quà, đặt nhóm, chọn màu và nhắn shop xác nhận trước khi làm.`

H1:

`Móc khóa len handmade giá tốt, đặt số lượng`

H2:

- `Chọn theo nhu cầu`
- `Tất cả mẫu móc khóa len`
- `Cần shop tư vấn mẫu?`

Schema:

- CollectionPage.
- ItemList.
- BreadcrumbList.

Image alt:

- `Móc khóa len [tên mẫu] handmade tại LyliShop`.

## Moc Khoa Len Pillar

URL: `/moc-khoa-len`

Title:

`Móc Khóa Len Handmade Cute, Dễ Thương Làm Quà`

Description:

`Tìm hiểu cách chọn móc khóa len handmade, mẫu móc khóa thú len, quà tặng crochet nhỏ xinh và cách đặt màu riêng tại LyliShop.`

H1:

`Móc khóa len handmade nhỏ xinh, dễ thương`

H2:

- `Thông tin nhanh về móc khóa len`
- `Gợi ý chọn nhanh`
- `Phân loại móc khóa len tại LyliShop`
- `Móc khóa len hợp với ai?`
- `Cách chọn móc khóa len handmade`
- `Câu hỏi về móc khóa len`

Schema:

- CollectionPage.
- FAQPage.
- BreadcrumbList.

Topic cluster:

- Pillar for keychain category.
- Blog posts link back here.

## Product Detail

URL pattern: `/products/[slug]`

Title formula:

`[Product Name] | Móc Khóa Len Handmade LyliShop`

Description formula:

`[Product Name] handmade bằng len mềm, phù hợp treo balo/túi/chìa khóa hoặc làm quà nhỏ. Có thể nhắn shop chọn màu và xác nhận trước khi làm.`

H1:

Product name.

H2:

- `Điểm nổi bật của [product]`
- `Chất liệu móc khóa len`
- `Đặt [product] qua tin nhắn trong 3 bước`
- `Câu hỏi thường gặp về [product]`
- `Móc khóa len liên quan`

Schema:

- Product.
- FAQPage.
- BreadcrumbList.

Canonical:

`https://lylishop.online/products/[slug]`

Internal links:

- `/products`
- `/moc-khoa-len`
- related product pages
- social order links external

## Blog Index

URL: `/blog`

Title:

`Cảm Hứng Quà Handmade Nhỏ Xinh | LyliShop`

Description:

`Gợi ý chọn quà handmade, phụ kiện len nhỏ xinh, cách chọn màu và cách giữ móc khóa len bền đẹp từ LyliShop.`

H1:

`Cảm hứng quà handmade nhỏ xinh`

Schema:

- BreadcrumbList.
- Optional CollectionPage for articles later.

## Blog Detail

URL: `/blog/[slug]`

Title formula:

`[Article Title] | LyliShop`

Description:

Use article-specific summary, 140-160 chars where possible.

H1:

Article title.

H2/H3:

- User question sections.
- Gift criteria.
- Product examples.
- FAQ.

Schema:

- BlogPosting.
- FAQPage if visible FAQ.
- BreadcrumbList.

Internal links:

- `/blog`
- `/products`
- `/moc-khoa-len`
- relevant products.

## Privacy / Terms

Keep:

- Low sitemap priority.
- Route-specific metadata.
- Canonical.

Noindex:

- Not necessary; policy pages can be indexable but low priority.

## Future About

URL: `/about`

Title:

`Câu Chuyện LyliShop | Móc Khóa Len Handmade Làm Quà`

Description:

`Tìm hiểu LyliShop, cách shop làm móc khóa len handmade, chọn màu theo yêu cầu và đóng gói từng món quà nhỏ.`

Schema:

- AboutPage.
- BreadcrumbList.
- Organization already global.

## Future Contact

URL: `/contact`

Title:

`Liên Hệ LyliShop | Nhắn Shop Chọn Móc Khóa Len`

Description:

`Nhắn LyliShop qua Zalo, Facebook, Instagram hoặc TikTok để chọn mẫu móc khóa len, đổi màu, hỏi thời gian làm và đặt quà handmade.`

Schema:

- ContactPage.
- BreadcrumbList.

## Future FAQ

URL: `/faq`

Title:

`Câu Hỏi Thường Gặp Khi Đặt Móc Khóa Len | LyliShop`

Schema:

- FAQPage.
- BreadcrumbList.

## Future Wishlist

URL: `/wishlist`

SEO:

- `noindex, follow` until it has user-specific or functional value.
- Do not include in sitemap initially.

## Future Cart / Checkout / Tracking / Search

Rules:

- Cart/checkout: noindex if utility pages.
- Tracking: noindex unless it contains general helpful content.
- Search result pages: noindex by default.

## OpenGraph / Twitter Formula

OpenGraph:

- `type`: website for home/collection; article for blog detail.
- image: page-specific if available, otherwise brand OG.
- alt: descriptive.

Twitter:

- `summary_large_image`.
- Same title/description intent as page.

## Phase 6 Checklist

- [x] Page-by-page title/description/H1/H2 guidance created.
- [x] Canonical/schema/internal link rules defined.
- [x] Utility page indexation rules defined.
- [x] EEAT opportunities defined.
- [ ] Implement future About/Contact/FAQ metadata if routes are added.

