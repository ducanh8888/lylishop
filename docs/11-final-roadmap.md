# 11 - Final Roadmap

## Strategic Direction

Build LyliShop as a fast, emotionally clear, SEO-strong message-commerce site for handmade crochet keychains.

Reference site learning:

- Complete commerce journey matters.
- Category/product/blog/policy/contact/tracking routes create trust.
- Product pages need gallery, price, description, CTA, reviews/related products.
- Blog helps SEO when organized.

LyliShop improvement:

- Cleaner technical SEO.
- Faster Next.js static experience.
- More honest trust.
- Stronger gift-first storytelling.
- No unnecessary WooCommerce noise.

## Roadmap Overview

### P1 - High Impact, Low Risk

1. Extract reusable `OrderFlow` component.
2. Extract reusable `NeedGuideCards` component.
3. Improve homepage order: hero -> need guide -> products -> process -> trust -> FAQ -> CTA.
4. Add stronger `/products` choose-by-need section.
5. Add blog inline CTA to `/products` and `/moc-khoa-len`.
6. Add route-specific About/Contact blueprint only if content is ready.

Expected impact:

- SEO: clearer internal links and headings.
- UX: faster decision-making.
- CRO: fewer ordering doubts.
- Performance: neutral if server components remain.

### P2 - Brand And EEAT

1. Add `/about` page with real brand story.
2. Add `/contact` page with social message CTAs and message template.
3. Add process/story section with original photos.
4. Add real packaging proof.
5. Create blog categories/tags in `lib/blog.ts`.
6. Add product-related blog blocks.

Expected impact:

- SEO: stronger entity and topical authority.
- UX: more confidence.
- CRO: better trust before messaging.

### P3 - Optional Commerce Expansion

Only if business wants more ecommerce behavior:

1. Local wishlist.
2. Message cart that generates Zalo text.
3. Search page.
4. Tracking information page.
5. Full checkout only with backend/payment/policy readiness.

Expected impact:

- UX: more convenience.
- CRO: easier multi-product ordering.
- Risk: higher complexity and maintenance.

## Recommended Implementation Sequence

### Step 1: Component Extraction

Files:

- `components/sections/OrderFlow.tsx`
- `components/sections/NeedGuideCards.tsx`

Why:

- Current pages already contain these patterns.
- Extraction reduces duplication before redesigning homepage.

### Step 2: Homepage Blueprint Implementation

Files:

- `app/page.tsx`
- possibly `components/sections/ProcessStory.tsx`

Why:

- Homepage is the first impression and highest brand leverage page.

Do:

- Keep existing hero/product/gallery/FAQ/contact logic where useful.
- Reorder and rewrite content, not rebuild everything.

### Step 3: Product Collection Upgrade

Files:

- `app/products/page.tsx`

Do:

- Add need chips/cards.
- Add ordering support block.
- Keep product grid.

### Step 4: Blog Conversion Bridge

Files:

- `app/blog/[slug]/page.tsx`
- `lib/blog.ts`
- optional `components/blog/InlineProductCta.tsx`

Do:

- Add topic/category fields.
- Add product/guide links.

### Step 5: About/Contact Pages

Files:

- `app/about/page.tsx`
- `app/contact/page.tsx`
- update `components/Navbar.tsx`
- update `components/Footer.tsx`
- update `app/sitemap.ts`

Do only if:

- Real story/contact copy is approved.

### Step 6: Image Refresh

Files:

- `public/product-assets/*`
- `public/gallery/*`
- `public/og.png`
- `public/twitter-card.png`

Do:

- Replace/optimize with original images.
- Keep alt text and dimensions.

## Do Not Do

- Do not copy reference colors, image style, layout pixel-for-pixel, or wording.
- Do not add fake testimonials.
- Do not add review schema without real visible reviews.
- Do not add cart/checkout routes just because the competitor has them.
- Do not remove blog URLs without Search Console data.
- Do not rename product URLs casually.
- Do not add heavy UI libraries for simple sections.

## Success Metrics

SEO:

- 100% indexable pages have title, description, canonical, H1.
- Sitemap contains only intentional public URLs.
- Product/FAQ/Breadcrumb schema validates.

UX:

- User can understand what LyliShop sells within 5 seconds.
- User can find products within 1 click from home.
- User can understand how to order within 1 screen on product detail.

CRO:

- Primary CTA visible on home/product/category.
- Product detail has order steps and contact CTA.
- Blog pages have soft product/guide CTA.

Performance:

- Lighthouse Performance target > 95.
- No new heavy client JS.
- LCP image optimized and prioritized.

Brand:

- Copy sells emotion and gift value.
- Colors align with the owner-provided original LyliShop logo SVG; runtime color changes require approval before implementation.
- Images are original.

## Final Checklist

- [x] Audit documents created.
- [x] SEO strategy created.
- [x] Content strategy created.
- [x] Wireframes created.
- [x] Image plan created.
- [x] Blog strategy created.
- [x] Component map created.
- [x] Next.js plan created.
- [x] Implementation checklist created.
- [x] Final roadmap created.
- [ ] Begin P1 implementation in a separate code pass.
