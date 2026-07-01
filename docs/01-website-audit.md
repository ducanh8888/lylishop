# 01 - Website Audit: Lenly Handmade

Audit date: 2026-07-01  
Reference website: https://lenlyhandmade.shop  
Current LyliShop website: https://lylishop.online  
Scope: Task 01 only - crawl and analyze the reference website to prepare design documentation for LyliShop.  
Non-goals: no code, no UI change, no component creation, no Next.js change.

## 0. Method

I crawled the reference site through:

- `robots.txt`: https://lenlyhandmade.shop/robots.txt
- Sitemap index: https://lenlyhandmade.shop/sitemap_index.xml
- Child sitemaps: post, page, blocks, product, category.
- Header/menu URLs visible on the site.
- Manual checks for search, wishlist, cart, checkout, tracking, FAQ, and 404.
- Representative HTML inspection for metadata, headings, JSON-LD, links, image alt, script/style volume, cache headers.

Important crawl notes:

- The site is WordPress + WooCommerce + Flatsome theme + Rank Math SEO.
- The shop has a full WooCommerce flow, but many utility pages are empty or noindex.
- Product category URLs exist in navigation but are not listed in the sitemap index I observed.
- `/faq/` does not exist and returns a WordPress 404 page.
- Cart/checkout were inspected in empty-cart state only. I did not trigger `add-to-cart` query URLs because they are disallowed in robots and can mutate a session.

## 1. Crawl Inventory

| Area | URL | Status | Indexing / SEO State | Notes |
| --- | --- | --- | --- | --- |
| Home | https://lenlyhandmade.shop/ | 200 | index, canonical present | No H1 found; homepage journey is category -> products -> reviews -> blog. |
| Shop | https://lenlyhandmade.shop/cua-hang/ | 200 | index, canonical present | Product archive with filter, sort, sidebar, grid. |
| Category: moc khoa | https://lenlyhandmade.shop/danh-muc-san-pham/moc-khoa/ | 200 | index, canonical present | 2 products, sorting, recently viewed. |
| Category: kep toc | https://lenlyhandmade.shop/danh-muc-san-pham/kep-toc/ | 200 | index, canonical present | 1 product. |
| Category: lot ly | https://lenlyhandmade.shop/danh-muc-san-pham/lot-ly/ | 200 | index, canonical present | 1 product. |
| Category: thu bong | https://lenlyhandmade.shop/danh-muc-san-pham/thu-bong/ | 200 | index, canonical present | 2 products. |
| Category: vi hoa | https://lenlyhandmade.shop/danh-muc-san-pham/vi-hoa/ | 200 | noindex, no canonical | Empty/no product category. |
| Product | Product URLs in product sitemap | 200 | index, Product schema present | 6 product URLs observed. |
| Blog index | https://lenlyhandmade.shop/tin-tuc/ | 200 | index, canonical present | Blog listing, but no H1 found. |
| Blog detail | 2 article URLs in post sitemap | 200 | index, BlogPosting schema present | Long-form educational content. |
| About | https://lenlyhandmade.shop/thong-tin/ | 200 | index, canonical present | Brand positioning page. |
| Contact | https://lenlyhandmade.shop/lien-he/ | 200 | index, canonical present | Contact form only, weak support copy. |
| FAQ | https://lenlyhandmade.shop/faq/ | 404 | Page Not Found | No FAQ route found. |
| Wishlist | https://lenlyhandmade.shop/wishlist/ | 200 | index, canonical present | English empty-state labels. |
| Cart | https://lenlyhandmade.shop/gio-hang/ | 200 | noindex, no canonical | Empty cart state. |
| Checkout | https://lenlyhandmade.shop/thanh-toan/ | 200 | noindex, no canonical | Empty cart state, title says cart. |
| Tracking | https://lenlyhandmade.shop/theo-doi-don/ | 200 | index, canonical present | WooCommerce order tracking form. |
| Account | https://lenlyhandmade.shop/tai-khoan/ | 200 | noindex, no canonical | Login form. |
| Policies | 4 policy URLs | 200 | index, canonical present | Policy pages exist but visible content is mostly empty. |
| Search | https://lenlyhandmade.shop/?s=moc+khoa | 200 | noindex | Search result returned blog content, not product-first. |
| 404 | random missing URL | 404 | Page Not Found | Default English WordPress 404 copy. |
| Robots | https://lenlyhandmade.shop/robots.txt | 200 | Allows most public pages | Blocks wp-admin, Woo logs/uploads, add-to-cart query URLs. |
| Sitemap | https://lenlyhandmade.shop/sitemap_index.xml | 200 | Rank Math sitemap | Includes post, page, blocks, product, category sitemap. |

## 2. Executive Findings

### Strengths To Learn

- The navigation journey is commerce-oriented: home, blog, shop, categories, about, contact, order tracking.
- Homepage uses a practical ecommerce sequence: categories first, then best sellers, then reviews, then blog.
- Product pages include gallery, sale badge, price, short description, quantity, add-to-cart, buy-now, category, tabs, review form, related products.
- Footer repeats policies, contact, sitemap links, login, and newsletter, which supports trust and task recovery.
- Product schema exists with price, currency, availability, image, and product category.
- Blog content supports top-of-funnel education: trends, care tips, handmade value.
- Order tracking is visible in the main navigation, reducing post-purchase anxiety.

### Weaknesses LyliShop Should Improve

- Many important pages have no visible H1: home, shop, categories, blog index, contact, wishlist, cart, checkout, tracking, policies.
- Several category pages have empty meta descriptions.
- Policy pages exist but have almost no visible policy content.
- Checkout page title appears as cart in empty state, which can confuse users and search systems.
- Search is not product-first; a product query returned blog content.
- Wishlist empty state is in English, breaking Vietnamese UX consistency.
- 404 page is default English WordPress copy and does not recover shoppers well.
- Homepage meta description is pulled from review copy, not a deliberate brand/search message.
- Product sale pricing looks extreme on at least one product, which may reduce trust if not intentional.
- HTML and script footprint are heavy for a small catalog: observed homepage HTML around 147KB, 10 stylesheet links, 38 script sources, 24 image tags.
- Many images have `alt=""`; this is fine for decorative images but weak for meaningful product/section imagery.

### Best Direction For LyliShop

Do not copy UI, colors, fonts, images, or copy. Learn the system:

- Keep the journey complete: discover -> choose category/need -> compare products -> trust -> order/contact -> post-purchase support.
- Build fewer but stronger blocks than the reference site.
- Prefer clear message-commerce CTAs if LyliShop does not run full online checkout.
- Make every page SEO-intentful with H1, metadata, canonical, breadcrumb, JSON-LD, and internal links.
- Use original product photography and owner-approved brand colors only.
- Keep performance lean: no heavy plugin-like widgets unless they directly support conversion.

## 3. Global Website Systems

### Header

Purpose:

- Give immediate brand recall, category access, search, cart, and order-tracking access.
- Move users from browsing to shopping quickly.

Observed structure:

1. Skip link.
2. Top slogan repeated in markup.
3. Logo area.
4. Main menu: home, news, shop, product categories, about, contact, tracking.
5. Search trigger/input.
6. Cart icon/dropdown with empty cart preview.

UX:

- Strong because categories are available from the main menu.
- Good because tracking is in the primary nav; this is post-purchase trust.
- Weak because the slogan appears duplicated in extracted text.
- Weak because cart empty state is repeated in header and off-canvas/cart panel.
- Search exists, but search quality is not product-first.

SEO:

- Header creates strong internal links to category, shop, blog, about, contact, tracking.
- Anchor text is short and clear.
- Product category URLs are linked from header even though not listed in sitemap.

Content formula:

- Brand promise -> category access -> utility access.
- This is useful for LyliShop, but LyliShop should make the header cleaner and avoid duplicated utility text.

Section order:

1. Skip link.
2. Brand slogan/topbar.
3. Logo.
4. Main navigation.
5. Search.
6. Cart preview/off-canvas.

### Footer

Purpose:

- Reinforce brand trust, policy reassurance, contact routes, and site recovery.

Observed structure:

1. Logo/brand description.
2. Policy links.
3. Contact information.
4. Sitemap/menu.
5. Login form.
6. Newsletter label.

UX:

- Good: footer repeats high-intent support links.
- Good: contact info is available without hunting.
- Weak: login form in footer creates noise for users who only need product/support links.
- Weak: newsletter appears as a label but does not read as a complete signup experience.

SEO:

- Strong internal links to policies, shop, categories, about/contact/tracking.
- External Facebook link appears.
- A suspicious `http://url` external link appeared in link extraction; should be avoided by LyliShop.

Content formula:

- Brand reassurance -> policies -> contact -> sitemap.
- LyliShop should keep this structure, but make each footer item purposeful and localized.

Section order:

1. Brand statement.
2. Policy group.
3. Contact group.
4. Sitemap/menu group.
5. Account/login group.
6. Newsletter placeholder.

### Search

Purpose:

- Help users find products/content by keyword.

Observed:

- Search URL pattern: `/?s=query`.
- Search results page for a product-like query returned blog content first.
- Search result page is `noindex`, which is correct for internal search.

UX:

- Search exists globally, but results quality is weak for ecommerce.
- No visible filters by product/blog/category on the search result.

SEO:

- `noindex, follow` on search results is appropriate.
- WebSite JSON-LD includes `SearchAction`.

For LyliShop:

- Keep search discoverable.
- Make product results first for product keywords.
- Add empty-state guidance: popular products, categories, gift occasions.

### Wishlist

Purpose:

- Let users save products for later consideration.

Observed:

- Wishlist route exists and is indexable.
- Empty state says product table headings and empty message in English.

UX:

- Helpful feature if product catalog has comparison behavior.
- Current empty state is not persuasive and not localized.

SEO:

- Wishlist should usually be noindex unless it has public curated value. The reference has it indexable, which is not ideal.

For LyliShop:

- Only add wishlist if it works end to end.
- If added, use Vietnamese empty state and suggest categories/featured products.

### Cart And Checkout

Purpose:

- Move from product selection to transaction.

Observed:

- Cart and checkout exist.
- Both were observed in empty-cart state.
- Both are `noindex, follow`, which is appropriate.
- Checkout empty state title appears as cart, which is confusing.

UX:

- Empty state includes return-to-shop CTA.
- Weak because checkout route does not communicate why user cannot checkout.

SEO:

- Noindex is correct.
- No canonical in noindex state is acceptable but should be deliberate.

For LyliShop:

- If LyliShop remains message-commerce, do not copy full cart/checkout.
- If adding cart later, checkout must have correct page title, empty state, progress steps, and trust microcopy.

### Tracking

Purpose:

- Reduce anxiety after purchase by letting customers check order status.

Observed:

- Inputs: order ID and billing email.
- CTA: track.
- Route is indexable and canonical.

UX:

- Good utility page.
- Weak because it lacks help text for lost order ID or support contact.

SEO:

- This page does not need to rank for broad queries but can be indexable as support content.

For LyliShop:

- If no automated tracking exists, provide manual order-check CTA via Zalo/Messenger/phone.
- Add support fallback and expected response time.

### 404

Purpose:

- Recover users who hit broken URLs.

Observed:

- Default English WordPress message.
- Has search suggestion and generic links.
- JSON-LD includes WebPage + Organization + WebSite.

UX:

- Functional but not brand-aligned.
- Does not direct shoppers to best categories or support.

SEO:

- Correct HTTP 404 status.
- Page title is generic.

For LyliShop:

- Keep real 404 status.
- Add Vietnamese copy, search, category links, best sellers, and contact CTA.

### Robots And Sitemap

Robots findings:

- Blocks WooCommerce logs/uploads.
- Blocks `add-to-cart` query URLs.
- Blocks `/wp-admin/`, allows admin ajax.
- Points to Rank Math sitemap index.

Sitemap findings:

- Sitemap index includes post, page, blocks, product, category.
- Product sitemap includes 6 products and also includes `/cua-hang/`.
- Page sitemap includes home, wishlist, contact, about, policies, tracking, checkout, cart, shop, account.
- Product category URLs observed in navigation were not present in the sitemap output I checked.

For LyliShop:

- Sitemap should include all public indexable pages.
- Utility pages should be explicitly noindex if they are private/session-based.
- Category pages should be included only when they have useful content and products.

## 4. Page Analysis

## Page 01 - Home

URL: https://lenlyhandmade.shop/

### 1. Page Goal

Purpose:

- Introduce the brand and push users into product discovery.
- Surface categories, popular products, review/social proof, and educational blog.

Conversion goal:

- Click a category or product.
- Build enough trust to continue shopping.

Target users:

- Gift buyers.
- Young users looking for handmade/cute accessories.
- Returning users checking new products or reviews.

### 2. UX

- Layout uses ecommerce homepage logic: hero/banner imagery, category cards, product grid, reviews, blog, footer.
- Navigation is product-category-first, which is good for shoppers who know what type of item they want.
- Product cards show image, quick view, name, price, sale badge.
- Review section builds social proof before blog content.
- CTA pattern is mostly implicit through clickable cards and product links; there is no strong emotional CTA above the fold in text extraction.
- Responsive is likely handled by Flatsome grid; however, HTML is noisy and duplicated text can appear in assistive/text extraction.
- Animation likely comes from Flatsome slider/lazy assets and product hover/quick-view behavior.
- Spacing/grid appear card-based: category grid, product grid, testimonial row.
- Typography hierarchy is weak in semantic HTML: no H1 found; main sections are H3.

### 3. SEO

- Title: `Trang chủ - Lenly Handmade`.
- Meta description: appears to use customer review copy, not deliberate homepage positioning.
- H1: not found.
- H3: product category, best sellers, customer reviews, news, footer headings.
- Canonical: present.
- OG/Twitter: present.
- JSON-LD: Organization, WebSite, WebPage, Article, Person, ImageObject, SearchAction.
- Internal links: strong links to categories, products, blog, policies, contact.
- External links: Facebook plus an observed suspicious `http://url`.
- Image alt: all inspected images had alt attributes, but about half on homepage were empty.

### 4. Content

Formula:

- Discover categories -> see best sellers -> read social proof -> consume blog -> footer trust.

Content tactics:

- Social proof uses short customer comments with channel labels.
- Product titles contain product type + material + motif.
- Blog headlines use trend/care education.
- Emotional hook is present in brand slogan and reviews, but homepage metadata does not express a clear value proposition.

What LyliShop should learn:

- The sequence is useful.
- LyliShop should add a clear H1, a stronger gift/emotion promise, and direct CTAs.

### 5. Sections

SECTION 01 - Header

- Purpose: navigation and shopping utility.
- Content: logo, slogan, nav, categories, search, cart.
- CTA: search, cart, category links.
- Image: logo.

SECTION 02 - Hero/banner imagery

- Purpose: brand mood and first visual impression.
- Content: large visual banners.
- CTA: not clearly exposed in text extraction.
- Image: banner images.

SECTION 03 - Product categories

- Purpose: route users by product type.
- Content: category names and product counts.
- CTA: category cards.
- Image: category thumbnail.

SECTION 04 - Best-selling products

- Purpose: accelerate product selection.
- Content: six products, price, sale badge, quick view.
- CTA: product card and quick view.
- Image: product thumbnails.

SECTION 05 - Customer reviews

- Purpose: social proof.
- Content: short comments, names, source channels.
- CTA: implicit trust-building, no direct CTA.
- Image: avatars.

SECTION 06 - News/blog preview

- Purpose: education and SEO support.
- Content: two blog cards with date and excerpt.
- CTA: blog title links.
- Image: blog thumbnails.

SECTION 07 - Footer

- Purpose: policy/contact/site recovery.
- Content: brand text, policies, contact, sitemap, login/newsletter.
- CTA: policy links, contact link, login.

## Page 02 - Shop

URL: https://lenlyhandmade.shop/cua-hang/

### 1. Page Goal

Purpose:

- Show all products and allow sorting/filtering.

Conversion goal:

- Move users from browsing to product detail or quick view.

Target users:

- Shoppers comparing multiple handmade items.
- Users who arrived from search/navigation and want the full catalog.

### 2. UX

- Layout: breadcrumb, filter trigger, result count, sort dropdown, sidebar category/price filter, product grid.
- Navigation is familiar WooCommerce archive behavior.
- Filters include category and price.
- Sorting includes popularity, rating, newest, price.
- CTA is mostly product card/quick view.
- Responsive likely collapses filters behind a filter button.
- Grid is practical for a small catalog.
- Weakness: no shop intro copy to explain handmade value, gift use cases, delivery/customization.

### 3. SEO

- Title: `Cua hang - Lenly Handmade`.
- Meta description: generic product archive description.
- H1: not found.
- Canonical: present.
- Schema: CollectionPage, BreadcrumbList, ListItem, Organization, WebSite.
- Internal links: product/category links.
- Image alt: product thumbnails mostly meaningful, some empty secondary images.

### 4. Content

Formula:

- Catalog utility first: filter -> sort -> product grid.

Missing content:

- No category narrative.
- No buying guidance.
- No trust block above or below grid.

For LyliShop:

- Keep catalog utility if a catalog page exists.
- Add short SEO intro and gift-choice helper without bloating the page.

### 5. Sections

SECTION 01 - Header

- Purpose: persistent nav.
- CTA: search/cart/category links.

SECTION 02 - Breadcrumb

- Purpose: orientation.
- Content: home/shop path.

SECTION 03 - Filter and sort controls

- Purpose: compare and narrow products.
- CTA: filter, sort.

SECTION 04 - Sidebar filters

- Purpose: category and price refinement.
- CTA: category links, price filter.

SECTION 05 - Product grid

- Purpose: product discovery.
- Content: product cards, prices, categories, sale badges.
- CTA: quick view/product detail.

SECTION 06 - Footer

- Purpose: trust and site recovery.

## Page 03 - Product Category Detail

Representative URL: https://lenlyhandmade.shop/danh-muc-san-pham/moc-khoa/

Other category URLs:

- https://lenlyhandmade.shop/danh-muc-san-pham/kep-toc/
- https://lenlyhandmade.shop/danh-muc-san-pham/lot-ly/
- https://lenlyhandmade.shop/danh-muc-san-pham/thu-bong/
- https://lenlyhandmade.shop/danh-muc-san-pham/vi-hoa/

### 1. Page Goal

Purpose:

- Let users browse products within one product type.

Conversion goal:

- Click a product or quick view.

Target users:

- Users who already know the product type they want.
- Gift buyers comparing style/price inside one category.

### 2. UX

- Layout mirrors shop archive.
- Breadcrumb gives orientation.
- Sidebar category links allow cross-category movement.
- Recently viewed products block appears on the moc khoa page, useful for return paths.
- Empty/noindex category exists for `vi-hoa`; this avoids thin indexable content but still exposes an empty menu item.
- Weakness: category pages have no educational intro, use-case guide, FAQ, or collection-level CTA.

### 3. SEO

- Titles: category name + brand.
- Meta description: missing on observed category pages.
- H1: not found.
- Canonical: present for populated categories, absent for noindex empty category.
- Robots: populated categories index/follow; empty `vi-hoa` noindex/follow.
- Schema: CollectionPage, BreadcrumbList, ListItem, Organization, WebSite.
- Internal links: category siblings, products.

### 4. Content

Formula:

- Narrow selection -> show product grid -> recover via related/recently viewed.

Missing content:

- No category positioning.
- No gift/persona angle.
- No FAQ.

For LyliShop:

- Category pages should include a short category H1, 80-150 words of helpful copy, product grid, FAQ, and internal links to relevant blog/gift guides.

### 5. Sections

SECTION 01 - Header

- Purpose: global navigation.

SECTION 02 - Breadcrumb

- Purpose: orient within category.

SECTION 03 - Category controls

- Content: filter button, result count, sorting.
- CTA: filter/sort.

SECTION 04 - Sidebar

- Content: category list, recently viewed products on some pages.
- CTA: sibling category/product links.

SECTION 05 - Product grid

- Content: products in category, sale badges, price.
- CTA: quick view/product detail.

SECTION 06 - Footer

- Purpose: policies/contact/site map.

## Page 04 - Product Detail

Representative URL: https://lenlyhandmade.shop/moc-khoa-len-thu-cong-hinh-cuu-mau-2/

Product URLs observed in sitemap:

- https://lenlyhandmade.shop/kep-toc-len-thu-cong-hinh-bong-hoa/
- https://lenlyhandmade.shop/tho-nhoi-bong-len-hinh-tho/
- https://lenlyhandmade.shop/gau-nhoi-bong-len-hinh-thu-mini/
- https://lenlyhandmade.shop/moc-khoa-len-thu-cong-hinh-cuu-mau-2/
- https://lenlyhandmade.shop/lot-ly-len-thu-cong-hinh-chau-hoa-mau-1/
- https://lenlyhandmade.shop/moc-khoa-len-thu-cong-hinh-con-ong-mau-1/

### 1. Page Goal

Purpose:

- Convert product interest into add-to-cart or buy-now action.

Conversion goal:

- Add to cart.
- Buy now.
- Submit review after purchase.

Target users:

- High-intent shoppers evaluating one item.
- Gift buyers checking price, material, use case, and trust.

### 2. UX

- Layout: breadcrumb, image gallery, sale badge, product title, price, short description, quantity, add-to-cart, buy-now, category link.
- Product tabs include description and reviews.
- Related products appear after reviews.
- Social sharing links are present on product pages.
- Good: buy-now reduces steps.
- Good: product details mention material, size, weight, design, color variety, use cases.
- Weak: no shipping/return/payment trust near CTA.
- Weak: review form appears even when no reviews exist, but no review summary or proof block.
- Weak: huge sale percentage may reduce perceived credibility if not explained.

### 3. SEO

- Title: product name + brand.
- Meta description: product-specific and useful.
- H1: present.
- Canonical: present.
- Robots: index/follow.
- Schema: Product, Offer, ImageObject, ItemPage, Organization, WebSite.
- Product schema includes price in VND, availability, condition, image, seller.
- Breadcrumb visible, but product schema extraction did not show BreadcrumbList on the representative product.
- OG/Twitter: present.
- Image alt: product primary image has meaningful alt; several secondary images have empty alt.

### 4. Content

Formula:

- Product identity -> price/sale -> handmade description -> add-to-cart/buy-now -> detail bullets -> uses -> review -> related product.

Content techniques:

- FAB: material/features -> benefit -> use case.
- Emotion: handmade uniqueness, cute, giftable.
- Social proof: review system exists but product has no reviews.
- CTA: direct ecommerce CTA.

For LyliShop:

- Keep product page intent strong.
- Add trust near CTA: made-to-order note, delivery estimate, gift packaging, care instruction, support contact.
- Use real review snippets or process proof if reviews are not yet available.

### 5. Sections

SECTION 01 - Header

- Purpose: global navigation.

SECTION 02 - Breadcrumb

- Purpose: product orientation.

SECTION 03 - Product hero/gallery

- Purpose: visual proof.
- Content: product image, sale badge.
- CTA: gallery interaction/zoom.

SECTION 04 - Product purchase panel

- Purpose: conversion.
- Content: title, price, description, quantity.
- CTA: add to cart, buy now.

SECTION 05 - Product meta

- Purpose: categorization.
- Content: category link.

SECTION 06 - Tabs

- Purpose: detailed evaluation.
- Content: description and reviews.

SECTION 07 - Review form

- Purpose: collect user-generated proof.
- CTA: submit review.

SECTION 08 - Related products

- Purpose: recover if current product is not right.
- CTA: product cards.

SECTION 09 - Footer

- Purpose: trust and support.

## Page 05 - Blog Index / News

URL: https://lenlyhandmade.shop/tin-tuc/

### 1. Page Goal

Purpose:

- Aggregate educational and inspiration content.

Conversion goal:

- Click into article, build trust, return to products.

Target users:

- Top-of-funnel users researching handmade trends/care.
- Existing shoppers who need care instructions.

### 2. UX

- Layout: article cards, recent posts sidebar, calendar widget, footer.
- Blog list is simple and easy to scan.
- Weak: no visible H1.
- Weak: no blog category/topic organization beyond recent posts/calendar.
- Weak: no product CTA on blog index.

### 3. SEO

- Title: `Tin tuc - Lenly Handmade`.
- Meta description: missing.
- H1: not found.
- Canonical: present.
- Schema: CollectionPage, Organization, WebSite.
- Internal links: article links, recent posts, footer links.
- Image alt: some empty.

### 4. Content

Formula:

- List educational hooks with excerpts and date.

For LyliShop:

- Keep blog index.
- Add H1, intro, topic groups, and product/category internal links.

### 5. Sections

SECTION 01 - Header

- Purpose: global nav.

SECTION 02 - Blog list

- Purpose: show available articles.
- Content: article title, excerpt, date.
- CTA: article title.

SECTION 03 - Sidebar

- Purpose: discovery and archive.
- Content: recent posts, calendar.
- CTA: post links.

SECTION 04 - Footer

- Purpose: trust/support.

## Page 06 - Blog Detail

Representative URLs:

- https://lenlyhandmade.shop/diem-danh-nhung-phu-kien-do-len-handmade-de-thuong-cho-phai-dep/
- https://lenlyhandmade.shop/7-meo-cham-soc-do-len-handmade-dung-cach-giu-dep-ben-lau-nhu-moi/

### 1. Page Goal

Purpose:

- Educate users and capture SEO demand around handmade trends and care.

Conversion goal:

- Build trust, lead readers to product categories or related articles.

Target users:

- Users researching handmade/crochet accessories.
- Buyers who need care instructions.
- Gift buyers looking for confidence before purchase.

### 2. UX

- Layout: title, date/author, intro, table of contents, structured headings, comment form, sidebar, footer.
- Table of contents helps long article scanning.
- Headings are clear in the care article.
- Weak: article sidebar calendar is generic and not conversion-focused.
- Weak: product/category CTAs are not prominent inside article body.
- Weak: comment form is default WordPress style.

### 3. SEO

- Title and meta descriptions are article-specific.
- H1 present.
- H2/H3 structure present.
- Canonical present.
- Schema: BlogPosting, WebPage, Organization, Person, WebSite, ImageObject. One article also showed AggregateRating/CreativeWorkSeries.
- Internal links: related/recent posts; footer links.
- Weak: article appears under uncategorized category in extracted text.
- Weak: no clear product cluster links in body.

### 4. Content

Formula:

- Trend article: fashion context -> handmade differentiation -> benefits -> product examples -> closing encouragement.
- Care article: problem awareness -> rules -> common issues -> fixes -> preservation.

Copywriting frameworks:

- AIDA: attention from trend/care headline, interest through context, desire through handmade benefits, action through soft encouragement.
- PAS: care article addresses problem of damaged handmade items, explains risk, gives steps.
- FAB: lightweight, unique, customizable features are converted into style and gift benefits.
- EEAT: moderate; practical advice exists, but author credentials and proof are thin.

For LyliShop:

- Use blog to support product pages with internal links.
- Add author/expertise note, product examples, care checklist, and FAQ schema where appropriate.

### 5. Sections

SECTION 01 - Header

- Purpose: navigation.

SECTION 02 - Article title/meta

- Purpose: orient reader and establish freshness.

SECTION 03 - Intro

- Purpose: hook the reader with trend/problem context.

SECTION 04 - Table of contents

- Purpose: improve scanning.
- CTA: jump links.

SECTION 05 - Main article body

- Purpose: education.
- Content: H2/H3 sections, examples, tips.

SECTION 06 - Rating/category/post navigation

- Purpose: engagement and discovery.
- CTA: rate, move to related/previous content.

SECTION 07 - Comment form

- Purpose: UGC collection.
- CTA: submit comment.

SECTION 08 - Sidebar

- Purpose: more posts/archive.

SECTION 09 - Footer

- Purpose: policy/contact recovery.

## Page 07 - About

URL: https://lenlyhandmade.shop/thong-tin/

### 1. Page Goal

Purpose:

- Explain brand identity, mission, values, and positioning.

Conversion goal:

- Increase trust and brand affinity before shopping.

Target users:

- First-time buyers.
- Gift buyers who need trust.
- Users comparing small handmade shops.

### 2. UX

- Layout is simple: title, brand intro, mission, values, positioning, footer.
- Good: clear brand positioning as an emotional gift brand.
- Weak: no team/process/product proof imagery in extracted content beyond logo/footer image.
- Weak: no direct CTA to shop/contact from body.

### 3. SEO

- Title: `Gioi thieu - Lenly Handmade`.
- Meta description: brand-specific.
- H1: present as split title.
- H3: mission, values, positioning.
- Canonical: present.
- Schema: Article, WebPage, Organization, Person, WebSite, ImageObject.

### 4. Content

Formula:

- Brand origin -> mission -> values -> positioning.

Storytelling:

- The brand frames itself as emotional gifting rather than a generic handmade shop.
- This is the strongest content idea LyliShop should learn, but LyliShop must rewrite it in its own voice.

For LyliShop:

- About page should include real maker/process proof, care standards, ordering promise, and CTA to product/gift guide.

### 5. Sections

SECTION 01 - Header

- Purpose: navigation.

SECTION 02 - Brand intro

- Purpose: identity.
- Content: short description.

SECTION 03 - Mission

- Purpose: emotional reason to exist.

SECTION 04 - Core values

- Purpose: trust and differentiation.

SECTION 05 - Brand positioning

- Purpose: clarify market position.

SECTION 06 - Footer

- Purpose: policies/contact/site links.

## Page 08 - Contact

URL: https://lenlyhandmade.shop/lien-he/

### 1. Page Goal

Purpose:

- Collect customer inquiries.

Conversion goal:

- Submit a contact form.

Target users:

- Buyers with questions.
- Customers needing support.
- Potential custom/order inquiries.

### 2. UX

- Layout is minimal: form heading and fields.
- Fields: subject, name, phone, email, message.
- Weak: no support hours, expected response time, direct contact buttons, map, FAQ, or order guidance.
- Weak: no visible H1.

### 3. SEO

- Title: `Lien he - Lenly Handmade`.
- Meta description: missing.
- H1: not found.
- Canonical: present.
- Schema: Article, WebPage, Organization, Person, WebSite, ImageObject.
- Footer contains phone/email/Facebook.

### 4. Content

Formula:

- Direct form-only support.

For LyliShop:

- Contact page should combine form + direct message CTA + order support + expected response time + FAQ links.

### 5. Sections

SECTION 01 - Header

- Purpose: navigation.

SECTION 02 - Contact form

- Purpose: inquiry collection.
- CTA: submit form, though submit label was not visible in text extraction.

SECTION 03 - Footer

- Purpose: alternate contact and policies.

## Page 09 - FAQ

URL checked: https://lenlyhandmade.shop/faq/

### 1. Page Goal

Expected purpose:

- Answer common buyer questions before purchase.

Observed:

- No FAQ page exists; URL returns 404.

### 2. UX

- Missing FAQ is a lost conversion-support opportunity.
- Buyers of handmade items usually need answers about material, size, custom color, delivery time, packaging, care, returns.

### 3. SEO

- No FAQ schema.
- No FAQ content cluster.

### 4. Content

Missing formulas:

- Objection handling.
- Trust reassurance.
- Delivery/customization clarity.

For LyliShop:

- LyliShop should have FAQ blocks on product/category/contact pages and a dedicated FAQ/support section if enough questions exist.

### 5. Sections

Not applicable on reference site because route is 404.

## Page 10 - Wishlist

URL: https://lenlyhandmade.shop/wishlist/

### 1. Page Goal

Purpose:

- Let users save products for later.

Conversion goal:

- Return saved products to cart.

Target users:

- Browsers comparing cute/gift items.

### 2. UX

- Empty wishlist table is visible.
- Labels are in English, which breaks Vietnamese consistency.
- No suggested products or categories are shown in empty state.

### 3. SEO

- Title: `Wishlist - Lenly Handmade`.
- Meta description: missing.
- H2: My wishlist.
- Canonical: present.
- Robots: index/follow.
- Schema: Article/WebPage style.

### 4. Content

Formula:

- Utility state only.

For LyliShop:

- If wishlist is implemented, empty state should say why saving helps and show product/category CTAs.
- Consider noindex for account/session utility pages.

### 5. Sections

SECTION 01 - Header.

SECTION 02 - Wishlist table.

- Content: product name, unit price, stock status, empty state.
- CTA: none in empty state.

SECTION 03 - Footer.

## Page 11 - Cart

URL: https://lenlyhandmade.shop/gio-hang/

### 1. Page Goal

Purpose:

- Review selected items before checkout.

Conversion goal:

- Continue checkout or return to shop if empty.

Target users:

- High-intent shoppers.

### 2. UX

- Empty state says no products in cart.
- CTA returns user to shop.
- Good: noindex.
- Weak: empty cart does not suggest popular products/categories.

### 3. SEO

- Title: `Gio hang - Lenly Handmade`.
- Meta description: missing.
- Robots: noindex/follow.
- Canonical: absent in observed empty state.
- Schema: Article/WebPage style.

### 4. Content

Formula:

- Utility empty state -> return to shop.

For LyliShop:

- If cart exists, empty state should include product/category suggestions and a trust reminder.

### 5. Sections

SECTION 01 - Header.

SECTION 02 - Empty cart state.

- CTA: return to shop.

SECTION 03 - Footer.

## Page 12 - Checkout

URL: https://lenlyhandmade.shop/thanh-toan/

### 1. Page Goal

Purpose:

- Complete purchase.

Conversion goal:

- Submit order/payment.

Target users:

- Ready-to-buy shoppers.

### 2. UX

- Observed checkout route shows empty cart state.
- Title appears as cart in empty state.
- No checkout fields visible because cart is empty.

### 3. SEO

- Robots: noindex/follow.
- Canonical: absent.
- Title/OG title mismatch with checkout intent.

### 4. Content

Formula:

- Empty state only.

For LyliShop:

- Do not add checkout unless LyliShop will support full transaction flow.
- If message-commerce, use "dat hang qua tin nhan" flow instead of fake checkout.

### 5. Sections

SECTION 01 - Header.

SECTION 02 - Empty cart/checkout state.

- CTA: return to shop.

SECTION 03 - Footer.

## Page 13 - Order Tracking

URL: https://lenlyhandmade.shop/theo-doi-don/

### 1. Page Goal

Purpose:

- Let users check order status after purchase.

Conversion goal:

- Enter order ID/email and track status.

Target users:

- Existing customers.

### 2. UX

- Clear instruction text.
- Two fields: order ID and billing email.
- CTA: track.
- Weak: no support fallback if user lost order ID.
- Weak: no direct contact option near form.

### 3. SEO

- Title: `Theo doi don - Lenly Handmade`.
- Meta description: missing.
- H1: not found.
- Canonical: present.
- Schema: Article/WebPage style.

### 4. Content

Formula:

- Utility instruction -> form -> action.

For LyliShop:

- If tracking is manual, replace with support flow: "gui ma don qua Zalo/Messenger".
- Add expected update time and contact fallback.

### 5. Sections

SECTION 01 - Header.

SECTION 02 - Tracking instruction.

SECTION 03 - Tracking form.

- CTA: track.

SECTION 04 - Footer.

## Page 14 - Search Results

URL tested: https://lenlyhandmade.shop/?s=moc+khoa

### 1. Page Goal

Purpose:

- Show matching content for a user query.

Conversion goal:

- Click a relevant product/article.

Target users:

- Users with specific product intent.

### 2. UX

- Search result page shows title and listing.
- Query tested was product-oriented but returned blog content.
- Sidebar shows recent posts/calendar.
- Weak: no product-first search, no filters, no empty/suggestion state.

### 3. SEO

- Robots: noindex/follow, appropriate.
- Schema: SearchResultsPage, Organization, WebSite.
- Canonical: absent.

### 4. Content

Formula:

- Search title -> result cards -> sidebar.

For LyliShop:

- Prioritize products for product queries.
- Add suggested categories and direct contact if no products match.

### 5. Sections

SECTION 01 - Header.

SECTION 02 - Search result heading.

SECTION 03 - Result list.

SECTION 04 - Sidebar recent posts/calendar.

SECTION 05 - Footer.

## Page 15 - Policy Pages

URLs:

- https://lenlyhandmade.shop/chinh-sach-mua-hang/
- https://lenlyhandmade.shop/chinh-sach-doi-tra/
- https://lenlyhandmade.shop/chinh-sach-van-chuyen/
- https://lenlyhandmade.shop/chinh-sach-bao-mat/

### 1. Page Goal

Purpose:

- Reduce purchase anxiety and answer policy objections.

Conversion goal:

- Make buyers confident enough to order.

Target users:

- Cautious buyers.
- Gift buyers who need delivery/return clarity.

### 2. UX

- Pages exist and are linked from footer.
- Visible extracted content is mostly header/footer; policy body appears empty or not meaningfully rendered.
- This is a major trust gap.

### 3. SEO

- Titles are policy-specific.
- Meta descriptions are missing.
- H1 not found.
- Canonical present.
- Robots index/follow.
- Schema: Article/WebPage style.

### 4. Content

Missing content:

- Purchase steps.
- Delivery timeline.
- Return/exchange conditions.
- Privacy data handling.
- Payment method clarity.

For LyliShop:

- Policy pages should be real, concise, and linked from product/cart/contact.
- Add H1 and structured sections.

### 5. Sections

SECTION 01 - Header.

SECTION 02 - Policy body.

- Observed as missing/empty in visible text extraction.

SECTION 03 - Footer.

## Page 16 - 404

URL tested: https://lenlyhandmade.shop/khong-ton-tai-codex-audit/

### 1. Page Goal

Purpose:

- Recover users from broken or deleted URLs.

Conversion goal:

- Send users to search, shop, category, or support.

Target users:

- Users from broken links, expired products, mistyped URLs.

### 2. UX

- Default WordPress English 404.
- Has generic message and search suggestion.
- Weak: not Vietnamese, not brand-specific, no product/category recovery.

### 3. SEO

- HTTP 404 status confirmed.
- Title: Page Not Found.
- Schema: WebPage/Organization/WebSite.

### 4. Content

Formula:

- Error notice -> search suggestion.

For LyliShop:

- Use Vietnamese friendly recovery copy.
- Add product categories, best sellers, gift guide, contact CTA.

### 5. Sections

SECTION 01 - Header.

SECTION 02 - 404 message.

SECTION 03 - Search/recovery links.

SECTION 04 - Footer.

## 5. Content Audit Summary

### Content Formulas Found

| Area | Formula | Strength | Weakness |
| --- | --- | --- | --- |
| Home | Category -> best seller -> review -> blog | Good ecommerce journey | Lacks H1 and strong brand CTA. |
| Product | Product identity -> price -> handmade description -> CTA -> details -> review -> related | Clear purchase logic | Trust details near CTA are thin. |
| Blog trend | Trend hook -> handmade benefit -> examples -> soft action | Good top-of-funnel | Weak internal product links. |
| Blog care | Problem -> rules -> fixes -> preservation | Useful SEO education | Needs stronger EEAT and product support links. |
| About | Origin -> mission -> values -> positioning | Strong strategic idea | Needs more proof and CTA. |
| Contact | Form-only | Simple | Too thin for support/conversion. |
| Policies | Footer-linked trust pages | Good IA | Body content missing/weak. |

### CTA Patterns Found

- Product card click.
- Quick View.
- Add to cart.
- Buy now.
- Return to shop.
- Track order.
- Form submission.
- Blog title links.
- Footer policy/contact links.

CTA weaknesses:

- Home CTA is not explicit enough.
- Blog CTAs do not strongly return users to products.
- Empty states do not suggest next best actions.
- Contact page lacks direct messaging CTAs.

### Trust Signals Found

- Customer review section on home.
- Product review form.
- Policies in footer.
- Contact details in footer.
- Order tracking page.
- Product schema with offer/availability.
- Blog education.

Trust weaknesses:

- Reviews may not be connected to specific products.
- Policy pages are thin.
- No visible process proof, packaging proof, delivery promise near product CTA.
- Contact details differ between footer and floating chat plugin data observed in HTML, which could confuse if inconsistent.

### EEAT Observations

- Brand positioning is present on about page.
- Blog has educational structure.
- Author is generic.
- No maker credentials, process photos, product care standards, or sourcing details found.
- Policies lack depth.

## 6. SEO Audit Summary

### Strong

- Rank Math outputs canonical, robots, OG, Twitter Card on most indexable pages.
- Product pages have Product schema with Offer.
- Blog details have BlogPosting schema.
- Category/shop pages have CollectionPage and BreadcrumbList.
- WebSite schema has SearchAction.
- Sitemap and robots exist.

### Weak

- Missing H1 on many important pages.
- Homepage meta description is not strategic.
- Category meta descriptions are missing.
- Blog index meta description is missing.
- Contact/tracking/policy pages have missing descriptions.
- Product category URLs are not clearly represented in sitemap.
- Empty category is still visible in navigation.
- Search results noindex is correct, but result quality is weak.
- Wishlist is indexable though it is likely a user utility page.
- Checkout title mismatch in empty state.
- Some meaningful images have empty alt.

### Recommended SEO Principle For LyliShop

- Every indexable page must have one clear H1.
- Metadata must match search intent.
- Public category pages need useful intro copy and FAQ.
- Utility/session pages should be noindex.
- Product pages need Product schema, FAQ where relevant, breadcrumb, and image alt.
- Blog pages need topic clusters and internal links to products/categories.

## 7. UX/CRO Audit Summary

### Strong

- Complete ecommerce IA.
- Visible categories.
- Product cards show price and sale state.
- Product pages have direct purchase CTAs.
- Tracking page supports post-purchase trust.
- Footer supports recovery.

### Weak

- Too much default WooCommerce/WordPress UI remains visible.
- Empty states are underused.
- Some labels are English.
- Search does not match commerce intent well.
- Policy pages are empty/thin.
- Blog does not push users back to shopping.
- Contact page is too bare for a handmade shop.

### Recommended CRO Principle For LyliShop

- Keep the journey complete, but make every block answer a buyer question.
- Put trust close to action: delivery, care, handmade proof, packaging, support.
- Use direct message/order CTAs if that is the actual business flow.
- Do not add cart/wishlist/checkout unless the feature is complete and useful.

## 8. Performance / Technical Observations

Observed from homepage HTML and headers:

- Server/cache: Hostinger CDN, LiteSpeed cache hit.
- PHP version header exposed.
- Homepage HTML size observed around 147KB.
- Homepage had 10 stylesheet links, 38 script sources, 5 prefetch hints, 24 image tags.
- Uses WooCommerce scripts, Flatsome scripts, Rank Math, Chaty floating contact widget, quick-buy-now plugin.
- Uses lazy/image sizing-related WordPress output.

Implications:

- The site works as a WordPress/WooCommerce stack, but carries many plugin scripts.
- For LyliShop in Next.js, the better implementation is lean server-rendered pages, optimized images, minimal client JS, and no plugin-equivalent bloat.

## 9. What LyliShop Should Learn Without Copying

Keep the thinking:

- Header with product categories and support routes.
- Homepage sequence: product discovery -> proof -> education.
- Product page structure: image, price, short description, CTA, details, reviews, related.
- Blog as SEO education and trust builder.
- Footer as policy/contact/recovery hub.
- Tracking/support as trust signal.

Improve the execution:

- Use LyliShop's own brand voice, product imagery, colors, font system, and copy.
- Add semantic SEO structure from the start.
- Make empty states useful.
- Keep utility pages noindex.
- Make policy pages real and concise.
- Add internal links between products, categories, FAQ, and blog.
- Avoid heavy widgets unless needed.
- Make search product-first.

## 10. Checklist - Task 01

- [x] Crawled homepage.
- [x] Crawled shop page.
- [x] Crawled product category pages.
- [x] Crawled product detail pages from product sitemap.
- [x] Crawled blog index.
- [x] Crawled blog detail pages.
- [x] Crawled about page.
- [x] Crawled contact page.
- [x] Checked FAQ route.
- [x] Crawled header and footer structure through page extraction.
- [x] Checked search.
- [x] Checked wishlist.
- [x] Checked cart.
- [x] Checked checkout empty state.
- [x] Checked tracking.
- [x] Checked 404.
- [x] Checked sitemap index and child sitemap types.
- [x] Checked robots.txt.
- [x] Audited title/meta/headings/canonical/OG/Twitter/schema patterns.
- [x] Audited internal/external links at representative page level.
- [x] Audited image alt pattern at representative page level.
- [x] Documented UX, SEO, content formulas, sections, strengths and weaknesses.
- [x] No code changes made for this task.
