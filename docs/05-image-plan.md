# 05 - Image Plan

No image should be generated in this phase. This plan defines what images are needed and gives prompts for layout direction only.

## Brand Image Rules

- Use LyliShop product assets or new original photos.
- Do not use reference-site images.
- Do not copy competitor composition exactly.
- Use LyliShop palette: warm cream, rose, soft pink, yarn brown accents.
- Images should leave negative space for text when used as hero/section backgrounds.
- Prefer real product photos over abstract illustrations.

## Required Image Inventory

| Placement | Size | Type | Notes |
| --- | --- | --- | --- |
| Homepage hero | 1920x1080 or 1600x1200 | Lifestyle/product | Crochet keychains on soft warm setup, right side product focus, left negative space. |
| Category banner | 1600x900 | Collection flatlay | Multiple keychains grouped by use case. |
| Product primary | 1200x1200 | Product | Clean background, full product visible. |
| Product lifestyle | 1200x900 | Usage | Product hanging on tote/balo/keys. |
| Process image | 1200x800 | Hands/craft | Yarn, hook, in-progress piece. |
| Packaging image | 1200x900 | Gift packaging | Shows care and scale. |
| Review image | 900x1200 | Customer/photo proof | Only if real permission. |
| Blog cover | 1200x630 | Editorial | Topic-specific, not generic stock. |
| Footer decoration | 1200x400 | Light texture | Yarn/tools, very subtle. |
| OG/Twitter | 1200x630 | Brand preview | Logo/product collection, readable at small size. |

## Prompt Direction

### Homepage Hero

GPT Image prompt:

> A warm cream and soft rose product photography scene for a handmade crochet keychain brand, several cute yarn keychains arranged on the right side, natural soft daylight, clean negative space on the left for website headline, cozy handmade table setting, no text, no logo, original composition, high detail, realistic product photography.

Midjourney prompt:

> handmade crochet keychains, warm cream background, soft rose accents, product cluster on right, empty space on left, natural daylight, cozy craft table, realistic product photography, no text, no watermark --ar 16:9

Flux prompt:

> Realistic website hero photo, cute handmade yarn keychains on a warm cream surface, soft pink props, right-weighted composition, large clean empty area for copy, gentle shadows, handmade gift mood, no text.

Ideogram prompt:

> Product photography hero background for handmade crochet keychains, warm cream and rose palette, keychains on right, empty copy space on left, cozy gift feeling, no words.

### Category Banner

Prompt:

> Flatlay of multiple handmade crochet keychains grouped by gift use: birthday gift, daily bag charm, friend pair, group order. Warm cream background, soft rose accents, clear spacing, realistic, no text, no copied brand.

### Product Primary

Prompt:

> Single handmade crochet keychain centered on clean warm cream background, full product visible, soft natural shadow, high detail yarn texture, square ecommerce product photo, no text.

### Product Lifestyle

Prompt:

> Handmade crochet keychain attached to a tote bag or backpack zipper, soft daylight, young feminine lifestyle, warm cream and rose styling, product clearly visible, no face focus, no text.

### Process Image

Prompt:

> Close-up of hands crocheting a small yarn keychain, crochet hook, milk cotton yarn, warm natural light, cozy craft workspace, shallow depth of field, no text, original scene.

### Packaging Image

Prompt:

> Small handmade crochet keychain gift packaging, neat kraft/cream wrapping with soft rose ribbon, product partly visible, gift-ready feeling, warm daylight, no text or logo.

### Review / Customer Proof Image

Use only real customer photos. If no real photo:

- Use "order packed" image.
- Use "before shipping" image.
- Label as process proof, not customer review.

### Blog Cover

Gift guide:

> Editorial flatlay of small handmade yarn gifts, birthday card, soft pastel colors, warm cream background, gentle negative space, no text.

Care guide:

> Crochet keychain with small brush, soft cloth, yarn skein, clean warm background, tutorial mood, no text.

Color guide:

> Yarn color palette swatches beside cute handmade keychains, warm cream background, organized grid, no text.

## Alt Text Formula

Alt = product type + material/style + use case/context.

Examples:

- `Móc khóa len thỏ handmade màu hồng treo balo`
- `Set móc khóa len mini dùng làm quà tặng nhóm`
- `LyliShop đóng gói móc khóa len handmade làm quà`

Avoid:

- `image`
- `ảnh đẹp`
- Keyword stuffing.

## Performance Requirements

- Convert large JPG/PNG to WebP/AVIF where possible.
- Product images target 150KB-400KB each.
- Hero target under 500KB.
- OG/Twitter target under 250KB.
- Use stable dimensions.
- Use `priority` only for hero/LCP.

## Phase 5 Checklist

- [x] Image inventory defined.
- [x] Prompts created for GPT Image, Midjourney, Flux, Ideogram.
- [x] Alt formula defined.
- [x] Performance requirements defined.
- [ ] Produce/source real original images.
- [ ] Optimize generated/photographed assets before committing.

