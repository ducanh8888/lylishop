# LyliShop (Next.js 15) - Website trưng bày móc khóa crochet handmade

Domain mục tiêu: `https://lylishop.online`

LyliShop là website **trưng bày sản phẩm** (product showcase) cho brand móc khóa crochet handmade và phụ kiện len cute.

Dự án này **KHÔNG** có: giỏ hàng, thanh toán, backend API, database, CMS, đăng nhập.

---

## 1) Chạy dự án (Commands)

```bash
npm install
npm run dev

# build production
npm run build
npm run start

# tests
npm run test
```

Mở web local: `http://localhost:3000`

---

## 2) Tech Stack

- Next.js 15 (App Router) + TypeScript
- TailwindCSS
- shadcn/ui-style components (Radix + CVA)
- Lucide React
- SEO: Metadata + OpenGraph/Twitter + robots + sitemap + JSON-LD
- Test: Vitest + React Testing Library

---

## 3) Cấu trúc thư mục (quan trọng nhất)

```
app/
  layout.tsx                # metadata + fonts + navbar/footer
  page.tsx                  # homepage (đầy đủ sections + JSON-LD)
  robots.ts                 # /robots.txt
  sitemap.ts                # /sitemap.xml
  products/
    page.tsx                # /products (danh sách sản phẩm)
    [slug]/page.tsx         # /products/:slug (chi tiết sản phẩm + Product JSON-LD)
  privacy/page.tsx          # /privacy
  terms/page.tsx            # /terms

lib/
  site.ts                   # domain + title/description + social links (sửa đầu tiên)
  products.ts               # danh sách sản phẩm + giá + nội dung
  gallery.ts                # danh sách ảnh gallery
  faq.ts                    # FAQ
  seo.ts                    # default metadata (canonical/OG/Twitter/robots)
  schema.ts                 # JSON-LD (Organization/Product/FAQ/ItemList)

public/
  product-assets/           # ảnh sản phẩm
  gallery/                  # ảnh gallery bạn upload
```

---

## 4) Chỉnh nội dung (dễ nhất)

### 4.1 Domain + mạng xã hội

Sửa file: `lib/site.ts`

- `SITE.url` phải đúng: `https://lylishop.online`
- `SITE.socials.*` sửa link Instagram/TikTok/Facebook/Zalo của bạn

### 4.2 Sản phẩm + giá

Sửa file: `lib/products.ts`

Mỗi sản phẩm có:
- `slug` (URL, ví dụ: `/products/crochet-bear-keychain`)
- `name` (tên hiển thị)
- `priceVnd` (giá VND)
- `shortDescription` / `longDescription`
- `image.src` (đường dẫn ảnh trong `public/`)

### 4.3 Gallery / FAQ

- Gallery: `lib/gallery.ts`
- FAQ: `lib/faq.ts`

---

## 5) Ảnh (bạn tự upload, không dùng ảnh placeholder)

### 5.1 Thư mục ảnh

- Ảnh sản phẩm: `public/product-assets/`
- Ảnh gallery: `public/gallery/`

### 5.2 Tên file ảnh mặc định

Website đang trỏ tới các file này (bạn có thể đổi trong `lib/products.ts` và `lib/gallery.ts`):

- `public/product-assets/crochet-bear-keychain.jpg`
- `public/product-assets/strawberry-yarn-charm.jpg`
- `public/product-assets/tulip-crochet-keychain.jpg`
- `public/product-assets/bunny-plush-charm.jpg`
- `public/product-assets/cat-paw-crochet-accessory.jpg`

### 5.3 Gợi ý tối ưu ảnh (để Lighthouse cao)

- Ảnh sản phẩm: tỉ lệ **1:1**, tối thiểu `1200x1200`
- Dung lượng mục tiêu: ~`150KB - 400KB`/ảnh (tùy chất lượng)
- Ưu tiên `webp` hoặc `avif`

Công cụ miễn phí:
- Squoosh
- TinyPNG / TinyJPG

---

## 6) SEO đã có sẵn

- Metadata + canonical + OpenGraph + Twitter card: `lib/seo.ts`, `app/layout.tsx`
- `robots.txt`: `app/robots.ts`
- `sitemap.xml` (có URL sản phẩm): `app/sitemap.ts`
- JSON-LD:
  - Organization + WebSite + FAQPage + ItemList (homepage)
  - Product (trang chi tiết sản phẩm)

Kiểm tra sau khi deploy:
- `https://lylishop.online/robots.txt`
- `https://lylishop.online/sitemap.xml`

---

## 7) Test

Chạy:

```bash
npm run test
```

Các test chính:
- Homepage render
- ProductCard
- FAQ accordion
- Navbar mobile menu
- SEO metadata config

---

# 8) Triển khai bằng giao diện Vercel + gắn domain `lylishop.online`

## 8.1 Deploy lên Vercel (UI)

1. Đưa code lên GitHub (repo private cũng được)
2. Vào Vercel -> **Add New...** -> **Project**
3. Import repo
4. Framework: Next.js (Vercel tự nhận)
5. Build Command: `npm run build` (mặc định)
6. Output: tự động
7. Bấm **Deploy**

## 8.2 Gắn domain `lylishop.online`

1. Vercel -> Project -> **Settings** -> **Domains**
2. Add domain:
   - `lylishop.online`
   - (khuyến nghị) `www.lylishop.online`
3. Vercel sẽ hiện “Required DNS Records” (bảng record cần tạo). Bạn làm đúng theo bảng đó.

### DNS thường gặp (tham khảo)

Lưu ý: luôn ưu tiên record mà Vercel hiển thị trong project của bạn.

- Apex domain (`lylishop.online`):
  - Type: `A`
  - Name/Host: `@`
  - Value: `76.76.21.21`
- WWW (`www.lylishop.online`):
  - Type: `CNAME`
  - Name/Host: `www`
  - Value: Vercel cung cấp (ví dụ `cname.vercel-dns-0.com`)

## 8.3 Bật HTTPS/SSL

Vercel sẽ tự cấp SSL khi domain “Valid Configuration”.

1. Chờ DNS cập nhật (thường vài phút, đôi khi vài giờ)
2. Khi Vercel báo domain hợp lệ, thử mở: `https://lylishop.online`

## 8.4 Redeploy khi bạn cập nhật sản phẩm/ảnh

- Nếu deploy từ GitHub: chỉ cần `git push`, Vercel tự build & deploy lại
- Nếu bạn thay ảnh trong `public/`, nhớ commit ảnh lên repo rồi push

---

## 9) Google/Bing indexing (khuyến nghị)

### Google Search Console

1. Thêm website (Domain property)
2. Verify bằng DNS TXT record
3. Submit sitemap: `https://lylishop.online/sitemap.xml`

### Bing Webmaster Tools

1. Add site
2. Verify ownership
3. Submit sitemap: `https://lylishop.online/sitemap.xml`

---

## 10) Setup SEO, Analytics, Search Console cho Next.js

Website này dùng Next.js, không phải WordPress, nên không cài Rank Math SEO và không có trang Permalink trong wp-admin. Các phần tương đương đã được xử lý bằng code:

- SEO metadata: `lib/seo.ts`
- robots.txt: `app/robots.ts`
- sitemap.xml: `app/sitemap.ts`
- JSON-LD schema: `lib/schema.ts`
- Google Analytics: `components/GoogleAnalytics.tsx`
- Google Search Console verification: `SITE.google.searchConsoleVerification`

### 10.1 Công cụ nền tảng thay cho Rank Math

Không cần cài Rank Math. Next.js đang sinh sẵn:

- Title, description, canonical
- OpenGraph/Twitter card
- robots.txt
- sitemap.xml
- Product/Organization/FAQ JSON-LD

Kiểm tra sau deploy:

- `https://lylishop.online/robots.txt`
- `https://lylishop.online/sitemap.xml`

### 10.2 Link thân thiện và HTTPS

URL hiện tại đã là dạng thân thiện:

- `/products`
- `/products/crochet-bear-keychain`
- `/privacy`
- `/terms`

Không cần cấu hình Permalink như WordPress.

HTTPS cần kiểm tra trong Vercel:

1. Vercel -> Project -> Settings -> Domains
2. Domain `lylishop.online` phải ở trạng thái hợp lệ
3. Mở `https://lylishop.online` và kiểm tra trình duyệt có biểu tượng ổ khóa

### 10.3 Cài Google Analytics

1. Vào Google Analytics và tạo GA4 property cho `lylishop.online`
2. Lấy Measurement ID, dạng ví dụ: `G-XXXXXXXXXX`
3. Mở file `lib/site.ts`
4. Dán mã vào:

```ts
google: {
  analyticsMeasurementId: "G-XXXXXXXXXX",
  searchConsoleVerification: "",
},
```

5. Redeploy website

Sau khi deploy, code trong `components/GoogleAnalytics.tsx` sẽ tự gắn Google Analytics vào toàn bộ website.

### 10.4 Kết nối Google Search Console

Cách khuyến nghị: dùng Domain property và xác minh bằng DNS TXT record trong trang quản lý domain.

Nếu dùng cách URL-prefix với thẻ meta, mở file `lib/site.ts` và dán mã xác minh vào:

```ts
google: {
  analyticsMeasurementId: "G-XXXXXXXXXX",
  searchConsoleVerification: "ma_xac_minh_google",
},
```

Sau đó redeploy. Metadata trong `lib/seo.ts` sẽ tự thêm thẻ xác minh Google vào website.

### 10.5 Nộp sitemap vào Google Search Console

Sau khi website đã verify:

1. Vào Google Search Console
2. Chọn property `lylishop.online`
3. Vào mục Sitemaps
4. Nhập sitemap:

```text
https://lylishop.online/sitemap.xml
```

5. Bấm Submit

