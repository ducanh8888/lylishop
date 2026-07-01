# 08 - Component Map

This map is based on the current Next.js project and the redesign blueprint. It avoids unnecessary refactors.

## Existing Components To Keep

| Component | File | Keep because |
| --- | --- | --- |
| Navbar | `components/Navbar.tsx` | Already server-rendered, clear nav, mobile details menu. |
| Footer | `components/Footer.tsx` | Good link/contact structure. |
| ProductCard | `components/ProductCard.tsx` | Reusable, image optimized, links to detail. |
| Breadcrumbs | `components/Breadcrumbs.tsx` | Needed for SEO and UX. |
| SectionHeading | `components/SectionHeading.tsx` | Consistent section typography. |
| JsonLd | `components/JsonLd.tsx` | Keeps schema injection centralized. |
| Button/Badge/Card | `components/ui/*` | Small reusable UI primitives. |
| FAQ section | `components/sections/FaqSection.tsx` | Native details, low JS. |
| ContactSection | `components/sections/ContactSection.tsx` | Message-commerce CTA. |

## New Components Recommended

### `BrandHero.tsx`

Purpose:

- Homepage hero with emotional promise and product image.

Props:

```ts
type BrandHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: { src: string; alt: string; width: number; height: number };
};
```

State/hooks:

- None. Server Component.

Tailwind:

- Responsive two-column grid.
- Stable image aspect ratio.
- Use warm cream and rose tokens.

Accessibility:

- One H1 on page.
- CTA links have descriptive text.

SEO:

- H1 rendered in page content.
- Hero image has descriptive alt.

### `NeedGuideCards.tsx`

Purpose:

- Choose by need: gift, daily use, group order, self-reward.

Props:

```ts
type NeedGuideItem = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: React.ComponentType<{ className?: string }>;
};
```

State/hooks:

- None.

Responsive:

- 1 column mobile, 2 tablet, 4 desktop or 3 depending page.

SEO:

- Internal links to product/guide pages.

### `OrderFlow.tsx`

Purpose:

- Reusable three-step message-commerce ordering block.

Props:

```ts
type OrderFlowProps = {
  title?: string;
  productName?: string;
  compact?: boolean;
};
```

State/hooks:

- None.

Accessibility:

- Use ordered list.

SEO/CRO:

- Reduces uncertainty and creates crawlable order process copy.

### `TrustSignalGrid.tsx`

Purpose:

- Reusable trust facts.

Props:

```ts
type TrustSignal = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};
```

Rules:

- Only factual claims.
- No fake numbers.

### `ProcessStory.tsx`

Purpose:

- Show handmade journey: choose yarn -> crochet -> finish -> package.

Props:

- steps.
- optional image.

Animation:

- Subtle reveal only if existing `Reveal` wrapper is kept lightweight.

### `ProductNeedFilter.tsx`

Purpose:

- Optional static links/chips on `/products`.

State:

- Prefer server-rendered anchor links or queryless category chips first.
- Client filtering only when product count grows.

### `InlineProductCta.tsx`

Purpose:

- Blog detail product suggestion.

Props:

- product.
- copy variant.

SEO:

- Internal product links with natural anchors.

### `FaqGroup.tsx`

Purpose:

- Reusable grouped FAQ for future `/faq`.

Props:

- title.
- items.

Accessibility:

- Native `details`.

### `FavoriteButton.tsx` (future)

Purpose:

- Wishlist localStorage.

State/hooks:

- Client Component.
- `useState`, `useEffect`, localStorage.

SEO:

- Button only; wishlist page noindex until useful.

### `MessageCart.tsx` (future)

Purpose:

- Convert selected products into Zalo message.

State:

- Client Component if add/remove quantity/custom notes.

Rules:

- Do not call it checkout unless payment exists.

## Route-Level Component Map

### Homepage

- `Navbar`
- `PromotionBanner`
- `BrandHero`
- `NeedGuideCards`
- `FeaturedProductsSection`
- `ProcessStory`
- `TrustSignalGrid`
- `GallerySection`
- `FaqSection`
- `ContactSection`
- `FinalCtaSection`
- `Footer`

### `/moc-khoa-len`

- `Breadcrumbs`
- page hero content
- `NeedGuideCards`
- `ProductCard` grid
- `TrustSignalGrid`
- FAQ block
- optional `OrderFlow`

### `/products`

- `Breadcrumbs`
- `SectionHeading`
- `ProductNeedFilter`
- `ProductCard`
- `OrderFlow`

### `/products/[slug]`

- `Breadcrumbs`
- product gallery
- product info
- `OrderFlow`
- product FAQ
- related product cards/links

### `/blog/[slug]`

- `Breadcrumbs`
- article header
- TOC
- content sections
- `InlineProductCta`
- FAQ
- related posts

## Animation Rules

- Avoid heavy carousel libraries.
- Use CSS transitions for hover.
- Use existing `Reveal` only if it remains a pass-through/lightweight wrapper.
- Honor `prefers-reduced-motion`.

## Accessibility Rules

- Buttons with icons still need visible text or aria-label.
- Native links for navigation.
- Native `details/summary` for FAQ.
- Focus visible ring must remain.
- Text must not overflow buttons/cards on mobile.

## Phase 8 Checklist

- [x] Existing components mapped.
- [x] New components identified.
- [x] Props/state/server-client rules defined.
- [x] Accessibility/SEO/performance rules defined.
- [ ] Create components only when implementation reaches that section.

