# LyliShop (Next.js 15) — Handmade Crochet Keychain Showcase

Domain: `https://LyliShop.online`

LyliShop is a production-ready, mobile-first product showcase website for handmade crochet keychains and cute yarn accessories. It’s intentionally simple: no cart, no checkout, no payments, no backend.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui-style components (Radix + CVA)
- Framer Motion
- Lucide React
- Testing: Vitest + React Testing Library

## Quick Start (Commands)

```bash
npm install
npm run dev

# production build
npm run build
npm run start

# tests
npm run test
```

Local dev URL (default): `http://localhost:3000`

## Folder Structure (Key Files)

```
app/
  page.tsx                  # homepage (all sections + JSON-LD)
  layout.tsx                # global metadata + fonts + navbar/footer
  robots.ts                 # generates /robots.txt
  sitemap.ts                # generates /sitemap.xml
  products/
    page.tsx                # /products listing
    [slug]/page.tsx         # /products/:slug product detail (SSG + Product JSON-LD)
  privacy/page.tsx          # /privacy
  terms/page.tsx            # /terms
components/
  Navbar.tsx
  Footer.tsx
  ProductCard.tsx
  StarRating.tsx
  JsonLd.tsx
  sections/                 # homepage sections (Hero, Gallery, FAQ, Contact, etc.)
  ui/                       # shadcn/ui-style primitives (Button, Accordion, Sheet, ...)
lib/
  site.ts                   # brand + domain + social links (edit here first)
  products.ts               # products + pricing (easy manual edits)
  gallery.ts                # gallery images list
  testimonials.ts
  faq.ts
  seo.ts                    # default metadata (OG/Twitter/canonical/robots)
  schema.ts                 # JSON-LD helpers (Org/Product/FAQ/ItemList)
public/
  products/                 # product images you upload
  gallery/                  # gallery images you upload
styles/
  globals.css               # Tailwind + design tokens
tests/                      # Vitest + RTL tests
```

## Editing Content (Easy Manual Updates)

1. Brand name, domain, social links:
   - `lib/site.ts`

2. Products, prices, descriptions, images:
   - `lib/products.ts`
   - Each product has `slug`, `name`, `priceUsd`, descriptions, rating, and `image.src`.

3. Gallery images:
   - `lib/gallery.ts`

4. Testimonials:
   - `lib/testimonials.ts`

5. FAQ:
   - `lib/faq.ts`

## Replacing Product Images (No Placeholder Generation)

Put your real images in:

- `public/products/`
- `public/gallery/`

The code expects these filenames by default (edit in `lib/products.ts` / `lib/gallery.ts` if you prefer different names):

- `public/products/crochet-bear-keychain.png`
- `public/products/strawberry-yarn-charm.png`
- `public/products/tulip-crochet-keychain.png`
- `public/products/bunny-plush-charm.png`
- `public/products/cat-paw-crochet-accessory.png`

Recommended image specs:

- Product images: square (1:1), at least `1200x1200`
- Gallery images: vertical or square, at least `1200px` wide
- Format: `webp` or `avif` preferred (PNG/JPG also supported)

## SEO Overview (What’s Already Implemented)

- App Router metadata with canonical URLs, OpenGraph, and Twitter cards (`lib/seo.ts`, `app/layout.tsx`)
- `/robots.txt` (`app/robots.ts`)
- `/sitemap.xml` including product URLs (`app/sitemap.ts`)
- JSON-LD structured data:
  - Organization + Website (homepage)
  - FAQPage (homepage)
  - ItemList (homepage featured products)
  - Product (each product detail page)

## Testing

- `npm run test` runs Vitest in CI-friendly mode.
- Coverage includes: homepage rendering, product card, FAQ accordion, navbar mobile sheet, metadata config.

---

# Deployment Runbook (Beginner-Friendly, Step-by-Step)

## 1) Install Node.js

1. Go to the official Node.js website.
2. Download the **LTS** version for your operating system.
3. Install it using the default options.
4. Verify installation:

```bash
node -v
npm -v
```

## 2) Download / Open the Project

You can use one of these options:

- If you have a ZIP: unzip it, then open the folder.
- If you use Git:

```bash
git clone <your-repo-url>
cd web_lyli
```

## 3) Install Dependencies

From the project folder:

```bash
npm install
```

## 4) Run Locally (Development)

```bash
npm run dev
```

Open: `http://localhost:3000`

## 5) Build the Production Version

```bash
npm run build
```

## 6) Start the Production Server Locally

```bash
npm run start
```

## 7) Deploy to Vercel (Recommended)

### Option A: Deploy from GitHub (Easiest)

1. Push your project to GitHub.
2. Go to Vercel and click **Add New… → Project**.
3. Import the GitHub repo.
4. Framework preset: Next.js.
5. Click **Deploy**.

### Option B: Deploy with Vercel CLI

1. Install CLI:

```bash
npm i -g vercel
```

2. Login:

```bash
vercel login
```

3. Deploy:

```bash
vercel
```

## 8) Connect Your Domain: `LyliShop.online`

1. In Vercel, open your Project → **Settings → Domains**.
2. Add:
   - `lylishop.online`
   - `www.lylishop.online` (optional but recommended)
3. Vercel will show the exact DNS records needed for your DNS provider.

## 9) Configure DNS (Typical Setup)

In your domain registrar / DNS provider dashboard:

- Apex domain (`lylishop.online`):
  - Type: `A`
  - Host/Name: `@`
  - Value: `76.76.21.21` (Vercel Anycast IP)
- WWW subdomain (`www.lylishop.online`):
  - Type: `CNAME`
  - Host/Name: `www`
  - Value: use the exact CNAME target Vercel shows (often `cname.vercel-dns.com` or `cname.vercel-dns-0.com`)

Important:
- Use the exact values Vercel shows in your Domain settings, because they may vary by project/provider.
- DNS propagation can take minutes to hours.

## 10) Enable HTTPS/SSL

Vercel automatically provisions SSL after the domain is verified.

1. Wait until Vercel shows “Valid Configuration” for the domain.
2. Test `https://lylishop.online` in your browser.

## 11) Update Products Manually Later

Edit:

- `lib/products.ts`

Common edits:
- Change price: update `priceUsd`
- Rename product: update `name`
- Update description: update `shortDescription` / `longDescription`
- Update URL slug: update `slug` (also rename the image file + update links)

## 12) Replace Product Images

1. Put your new image file in `public/products/`.
2. Keep the same filename (easy) OR update `image.src` in `lib/products.ts`.
3. Prefer `webp`/`avif` and keep at least `1200x1200` for product images.

## 13) Edit Product Prices

Update `priceUsd` in `lib/products.ts`. The UI and Product JSON-LD will update automatically on rebuild.

## 14) Redeploy the Website

- If you deployed via GitHub: push commits → Vercel redeploys automatically.
- If you deployed via CLI:

```bash
vercel --prod
```

## 15) Common Deployment Errors (And Fixes)

- `EADDRINUSE` (port already in use):
  - Stop the process using the port, or run dev on a different port:

```bash
npm run dev -- -p 3001
```

- Build fails on Vercel:
  - Confirm you can run `npm run build` locally.
  - Make sure you committed `package-lock.json`.

- Domain not verifying:
  - Double-check DNS records (A/CNAME), remove duplicates, then wait for propagation.

## 16) Optimize SEO Indexing

Checklist:
- Make sure `https://lylishop.online/sitemap.xml` loads.
- Make sure `https://lylishop.online/robots.txt` loads.
- Add your site to Google Search Console and submit the sitemap.

## 17) Submit Sitemap to Google Search Console

1. Go to Google Search Console.
2. Add a property for `lylishop.online` (Domain property recommended).
3. Verify ownership (DNS TXT record).
4. Open **Sitemaps**.
5. Submit: `sitemap.xml`

## 18) Submit to Bing Webmaster Tools

1. Go to Bing Webmaster Tools.
2. Add your site.
3. Verify ownership.
4. Submit sitemap: `https://lylishop.online/sitemap.xml`

## 19) Improve Google Ranking (Practical Tips)

- Upload real, high-quality product photos (this matters most for handmade goods).
- Keep product names and slugs consistent and descriptive.
- Add more products over time (fresh content helps).
- Share your product pages on TikTok/Instagram and link back to your domain.
- Encourage customers to share photos and let you reuse them as testimonials (with permission).

## 20) Optimize Images Before Upload (Free Tools)

Recommended:
- Squoosh (web) for WebP/AVIF conversion
- TinyPNG / TinyJPG (web) for quick compression
- ImageOptim (macOS) for batch optimization

Targets:
- Keep most images under ~250–400KB if possible (without harming quality).
- Use WebP/AVIF whenever possible.

