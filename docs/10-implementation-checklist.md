# 10 - Implementation Checklist

Use this as the working checklist after each phase. Do not mark a phase complete until test/build pass.

## Phase 1 - Reference And Current Audit

- [x] Audit reference homepage.
- [x] Audit reference shop/category.
- [x] Audit reference product detail.
- [x] Audit reference blog/blog detail.
- [x] Audit reference about/contact/tracking.
- [x] Check reference robots/sitemap.
- [x] Extract reference meta/schema samples.
- [x] Read LyliShop logo SVG and current palette.
- [ ] Optional: browser screenshot audit on desktop/mobile.

## Phase 2 - SEO Audit

- [x] Review LyliShop metadata.
- [x] Review LyliShop schema helpers.
- [x] Review sitemap/robots.
- [x] Define schema policy.
- [x] Define internal link model.
- [ ] Validate rendered HTML after implementation.

## Phase 3 - Content Audit

- [x] Define positioning.
- [x] Define content pillars.
- [x] Define hook/story/CTA formulas.
- [x] Define blog/social formulas.
- [x] Define trust and FAQ formulas.
- [ ] Convert formulas into live page copy.

## Phase 4 - Wireframe

- [x] Homepage wireframe.
- [x] Category/pillar wireframe.
- [x] Product collection/detail wireframe.
- [x] Blog/blog detail wireframe.
- [x] Future route wireframes.
- [ ] Create implementation tickets per section.

## Phase 5 - Image Plan

- [x] Image inventory defined.
- [x] AI layout prompts defined.
- [x] Alt formula defined.
- [x] Performance requirements defined.
- [ ] Source original images.
- [ ] Optimize images.
- [ ] Replace any placeholder-like assets.

## Phase 6 - SEO Strategy

- [x] Page-level metadata defined.
- [x] Heading structures defined.
- [x] Schema per route defined.
- [x] Internal/external link rules defined.
- [x] Utility page indexation rules defined.
- [ ] Implement and test metadata.

## Phase 7 - Blog Strategy

- [x] Topic clusters defined.
- [x] Pillar/supporting content defined.
- [x] Blog categories/tags proposed.
- [x] Content calendar defined.
- [ ] Update `lib/blog.ts` data model if implementing.
- [ ] Add inline blog CTAs.

## Phase 8 - Component Plan

- [x] Existing components mapped.
- [x] New components proposed.
- [x] Props/state/accessibility rules defined.
- [ ] Build `NeedGuideCards`.
- [ ] Build `OrderFlow`.
- [ ] Build `ProcessStory`.
- [ ] Build `InlineProductCta`.

## Phase 9 - Next.js Plan

- [x] Route strategy defined.
- [x] Server/client rules defined.
- [x] Metadata/schema plan defined.
- [x] Image/caching strategy defined.
- [ ] Implement P1 changes.
- [ ] Keep routes stable.

## Phase 10 - QA Before Deploy

- [ ] `npm run test` passes.
- [ ] `npm run build` passes.
- [ ] No console errors in local browser.
- [ ] Desktop responsive check.
- [ ] Mobile responsive check.
- [ ] Keyboard navigation check.
- [ ] Focus states visible.
- [ ] Images have alt text.
- [ ] No text overflow on mobile buttons/cards.
- [ ] Lighthouse Performance target > 95.
- [ ] Lighthouse Accessibility target > 95.
- [ ] Lighthouse Best Practices target > 95.
- [ ] Lighthouse SEO target > 95.
- [ ] Canonical correct per route.
- [ ] OpenGraph/Twitter preview correct.
- [ ] JSON-LD validates in Rich Results Test where applicable.
- [ ] Sitemap includes only intentional pages.
- [ ] Robots does not block indexable pages.
- [ ] Deploy preview reviewed.
- [ ] Production deploy.

## Ongoing Governance

- [ ] Do not add fake reviews.
- [ ] Do not add fake address/email.
- [ ] Do not change slugs without redirects.
- [ ] Do not add cart/checkout unless business model changes.
- [ ] Keep content written for LyliShop voice.
- [ ] Keep images original.

