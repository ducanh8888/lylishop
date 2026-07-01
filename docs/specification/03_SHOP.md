# LYLISHOP - SHOP PAGE SPECIFICATION

Version: 1.0

## Mục Tiêu

Thiết kế lại trang Cửa hàng của LyliShop.

Website tham khảo:

https://lenlyhandmade.shop

Website hiện tại:

https://lylishop.online

Website vẫn là Landing Page.

Không được:

- Chuyển thành website thương mại điện tử.
- Thay đổi Framework.
- Thay đổi Routing.
- Thay đổi logic.
- Thêm Checkout.
- Thêm Cart.
- Thêm Wishlist.
- Thêm Thanh toán.
- Thêm Đăng nhập.
- Thêm Đăng ký.

Chỉ thay đổi:

- UI.
- UX.
- Layout.
- Responsive.
- SEO.
- Trình tự hiển thị.

## Mục Tiêu UX

Trang Cửa hàng phải mang lại cảm giác hiển thị tương tự website tham khảo.

Tham khảo:

- Bố cục.
- Khoảng trắng.
- Grid.
- Card.
- Điều hướng.
- Responsive.

Không sao chép:

- Nội dung.
- Hình ảnh.
- CSS.
- Màu sắc.
- Font.
- Logo.

## Thứ Tự Hiển Thị

Trang Cửa hàng phải hiển thị theo đúng thứ tự:

1. Header.
2. Hero Banner.
3. Danh mục sản phẩm.
4. Danh sách sản phẩm.
5. CTA.
6. Footer.

Không thay đổi thứ tự.

## Section 01 - Header

### Mục Đích

- Điều hướng người dùng trên toàn website.
- Giữ nhận diện LyliShop đồng bộ.
- Cho người dùng truy cập nhanh Trang chủ, Tin tức, Cửa hàng, Giới thiệu, Liên hệ.

### Layout

- Giữ nguyên Header của Homepage.
- Logo bên trái.
- Menu ở giữa.
- Nút liên hệ bên phải.

Menu gồm:

- Trang chủ.
- Tin tức.
- Cửa hàng.
- Giới thiệu.
- Liên hệ.

### Spacing

- Spacing header đồng bộ toàn website.
- Không tạo header riêng cho Shop.
- Chiều cao, padding, gap menu giống Homepage.

### Responsive

- Desktop: hiển thị đủ logo, menu, nút liên hệ.
- Tablet/mobile: dùng menu responsive giống Homepage.
- Không thêm cart icon, account icon hoặc wishlist icon.

### SEO

- Header tạo internal link rõ đến Trang chủ, Tin tức, Cửa hàng, Giới thiệu, Liên hệ.
- Anchor text phải ngắn, rõ nghĩa.
- Không thêm link rác hoặc link chưa có nội dung.

### CTA

- CTA header: "Liên hệ" hoặc "Liên hệ đặt hàng".
- CTA dẫn đến Facebook, Instagram, Zalo hoặc section Liên hệ theo cấu trúc hiện có.
- Không dùng CTA "Mua ngay", "Thanh toán", "Giỏ hàng".

### Image

- Dùng logo LyliShop hiện có.
- Không tạo ảnh mới.

### Developer Note

- Dùng Header chung toàn website.
- Không tạo component Header riêng cho Shop.
- Không đổi routing.

## Section 02 - Hero Banner

### Mục Đích

- Giới thiệu cửa hàng LyliShop.
- Cho người dùng hiểu đây là nơi xem các mẫu móc khóa len handmade.
- Dẫn người dùng xuống danh mục hoặc danh sách sản phẩm.
- Tạo cảm giác banner mở đầu tương tự website tham khảo nhưng dùng phong cách LyliShop.

### Layout

- Có banner lớn.
- Có tiêu đề.
- Có mô tả ngắn.
- Có CTA.
- Có khung ảnh lớn để người quản trị thay ảnh thật sau.

Nội dung:

- Giới thiệu cửa hàng LyliShop.
- Nhấn mạnh sản phẩm handmade, quà tặng nhỏ xinh, đặt hàng qua kênh liên hệ.

### Spacing

- Hero có khoảng trắng thoáng.
- Khoảng cách giữa tiêu đề, mô tả, CTA và khung ảnh đồng bộ với Homepage.
- Không nhồi quá nhiều chữ trong hero.

### Responsive

- Desktop: có thể chia text và khung ảnh thành 2 cột.
- Tablet: 2 cột nếu đủ rộng, nếu không chuyển stack.
- Mobile: text trước, khung ảnh sau, CTA dễ bấm.

### SEO

- H1 duy nhất của trang đặt trong Hero.
- Mô tả ngắn hỗ trợ intent: cửa hàng móc khóa len handmade, quà tặng handmade, đặt qua Facebook/Zalo/Instagram.
- Hero image phải có alt khi thay ảnh thật.

### CTA

- CTA chính: "Khám phá sản phẩm".
- CTA scroll/dẫn xuống danh sách sản phẩm.
- Không dùng nút "Mua ngay".
- Không Checkout.
- Không Thanh toán.

### Image

- Chỉ tạo khung ảnh.
- Không tạo ảnh.
- Khung ảnh phải có kích thước ổn định để tránh layout shift.

### Developer Note

- Ưu tiên tái sử dụng Hero/Page Hero hiện có nếu phù hợp.
- Không thêm logic mua hàng.
- Không thêm form đặt hàng trong Hero.

## Section 03 - Danh Mục Sản Phẩm

### Mục Đích

- Giúp người dùng chọn nhanh nhóm sản phẩm.
- Học cách website tham khảo đưa danh mục lên trước grid sản phẩm.
- Tăng khả năng người dùng tìm được mẫu phù hợp.

### Layout

- Hiển thị dạng grid.
- Card danh mục đồng bộ với card toàn website.

Danh mục:

- Móc khóa Mini.
- Móc khóa Size S.
- Móc khóa Size M.
- Móc khóa Size L.
- Hoa len.
- Thú bông len.

Mỗi card gồm:

1. Ảnh.
2. Tên.
3. Mô tả ngắn.
4. Nút "Xem sản phẩm".

Không hiển thị giá trong card danh mục.

### Spacing

- Khoảng cách giữa heading và grid đồng bộ với Homepage.
- Gap giữa card cân đối như website tham khảo.
- Không để card quá sát nhau trên mobile.

### Responsive

- Desktop: grid cân đối, ưu tiên 3 cột x 2 hàng.
- Tablet: 2 cột.
- Mobile: 1 cột hoặc 2 cột nếu text không vỡ.
- Không đổi thứ tự danh mục.

### SEO

- Section dùng H2.
- Tên danh mục dùng H3 hoặc link text rõ.
- Internal link có thể dẫn xuống nhóm sản phẩm tương ứng.
- Ảnh danh mục phải có alt nếu dùng ảnh thật.

### CTA

- CTA mỗi card: "Xem sản phẩm".
- CTA không dẫn tới Checkout/Cart.
- CTA có thể scroll đến nhóm sản phẩm hoặc dẫn tới `/products` anchor.

### Image

- Chỉ tạo khung ảnh.
- Người quản trị sẽ thay ảnh thật sau.
- Tỷ lệ ảnh của các card phải đồng bộ.

### Developer Note

- Ưu tiên tạo cấu trúc data presentation riêng nếu dữ liệu category chưa có.
- Không sửa dữ liệu sản phẩm hiện có nếu không cần.
- Không tạo component trùng nếu đã có card phù hợp.

## Section 04 - Danh Sách Sản Phẩm

### Mục Đích

- Hiển thị toàn bộ hoặc nhóm sản phẩm chính của LyliShop.
- Cho người dùng xem ảnh, tên, giá, mô tả ngắn và liên hệ đặt hàng.
- Tạo cảm giác product grid giống website tham khảo nhưng không thêm chức năng thương mại điện tử.

### Layout

- Hiển thị dạng grid giống tư duy website tham khảo.
- Có thể có bộ lọc nếu phù hợp.
- Có thể có phân trang nếu số lượng sản phẩm nhiều.

Card sản phẩm gồm:

1. Ảnh.
2. Tên.
3. Giá.
4. Mô tả ngắn.
5. Nút "Liên hệ đặt hàng".

Card phải đồng bộ với Homepage.

### Spacing

- Khoảng cách giữa filter/danh sách/grid phải rõ ràng.
- Gap giữa product cards đồng bộ toàn website.
- Padding trong card thống nhất với design system.

### Responsive

- Desktop: 3 hoặc 4 cột tùy chiều rộng và độ dài nội dung.
- Tablet: 2 cột.
- Mobile: 1 cột; chỉ dùng 2 cột nếu text không bị vỡ.
- Không bỏ sản phẩm hoặc CTA trên mobile.

### SEO

- Product name nên là H3 hoặc link text rõ nghĩa.
- Ảnh sản phẩm phải có alt.
- Internal link đến chi tiết sản phẩm phải crawlable nếu có trang chi tiết.
- Giữ canonical, OpenGraph, Twitter Card, schema, JSON-LD hiện có nếu đang hoạt động tốt.

### CTA

- CTA chính: "Liên hệ đặt hàng".
- Nút dẫn tới:
  - Facebook.
  - Instagram.
  - Zalo.
- Có thể có CTA phụ: "Xem chi tiết".
- Không Checkout.
- Không Cart.
- Không Wishlist.

### Image

- Không tạo ảnh.
- Chỉ dùng ảnh hiện có hoặc khung ảnh.
- Người quản trị sẽ thay ảnh thật sau nếu cần.
- Ảnh phải giữ tỷ lệ ổn định để tránh layout shift.

### Developer Note

- Ưu tiên tái sử dụng `ProductCard`.
- Nếu cần chỉnh ProductCard, chỉ chỉnh presentation, không đổi logic dữ liệu.
- Không thêm add-to-cart, quantity, checkout hoặc payment.

## Bộ Lọc

Có thể có:

- Theo danh mục.
- Theo loại sản phẩm.
- Theo kích thước.
- Theo giá.

Nếu chưa có dữ liệu thì chỉ dựng giao diện.

Developer Note:

- Bộ lọc không được làm thay đổi routing nếu chưa được duyệt.
- Nếu chỉ là UI presentation, cần ghi rõ chưa có logic lọc thật.
- Không làm ảnh hưởng SEO hoặc ẩn sản phẩm khỏi HTML nếu cần crawl.

## Phân Trang

Hiển thị giống tư duy website tham khảo.

Responsive.

Quy tắc:

- Nếu sản phẩm ít, có thể chưa cần phân trang thật.
- Nếu dựng UI phân trang, phải không tạo route mới khi chưa được duyệt.
- Không thêm `/products/page/2` hoặc query routing mới nếu task không cho phép.

## Section 05 - CTA

### Mục Đích

- Chốt luồng sau khi người dùng xem sản phẩm.
- Nhắc lại cách đặt hàng: liên hệ qua Facebook, Instagram hoặc Zalo.
- Tăng chuyển đổi mà không tạo checkout.

### Layout

- Banner CTA.
- Có tiêu đề.
- Có mô tả.
- Có nhóm nút liên hệ.

### Spacing

- CTA tách rõ khỏi grid sản phẩm.
- Padding thoáng, không chật.
- Text ngắn, không nhồi chữ.

### Responsive

- Desktop: text và nhóm nút có thể nằm cùng hàng hoặc 2 cột.
- Mobile: stack theo thứ tự tiêu đề, mô tả, nút.
- Nút đủ lớn để bấm.

### SEO

- Dùng H2 nếu CTA là section độc lập.
- Có internal link đến Liên hệ hoặc các kênh social.
- Không dùng wording gây hiểu nhầm về checkout/thanh toán.

### CTA

- "Liên hệ đặt hàng".
- Facebook.
- Instagram.
- Zalo.

### Image

- Có thể có khung ảnh nếu phù hợp.
- Không tạo ảnh.

### Developer Note

- Ưu tiên tái sử dụng CTASection/ContactSection nếu đang có.
- Không tạo form đặt hàng.
- Link social external dùng thuộc tính an toàn nếu mở tab mới.

## Section 06 - Footer

### Mục Đích

- Cung cấp thông tin liên hệ, chính sách và social.
- Giữ footer thống nhất toàn website.
- Tăng độ tin cậy sau khi người dùng xem sản phẩm.

### Layout

- Dùng Footer thống nhất toàn website.
- Không tạo Footer riêng cho Shop.

Bao gồm:

- Logo.
- Thông tin.
- Chính sách.
- Facebook.
- Instagram.
- Zalo.
- Điện thoại.
- Email.
- Google Maps.

### Spacing

- Padding/footer spacing đồng bộ toàn website.
- Các nhóm thông tin tách rõ.
- Không dồn toàn bộ nội dung vào một cột trên desktop.

### Responsive

- Desktop: chia cột rõ ràng.
- Tablet: 2 cột nếu phù hợp.
- Mobile: stack 1 cột, dễ đọc.

### SEO

- Footer chứa internal link quan trọng: Trang chủ, Tin tức, Giới thiệu, Liên hệ, chi tiết sản phẩm nếu phù hợp.
- Social link phải đúng.
- Google Maps phải là link/iframe được duyệt.

### CTA

- Footer có thể có CTA "Liên hệ đặt hàng".
- Không thêm Cart/Checkout/Account.

### Image

- Logo LyliShop.
- Không tạo ảnh.
- Google Maps nếu embed phải lazy load khi triển khai.

### Developer Note

- Dùng Footer chung.
- Nếu chưa có Email/Google Maps chính thức, cần chủ shop xác nhận trước khi triển khai.
- Không tự tạo route chính sách mới nếu chưa được duyệt.

## SEO Bắt Buộc

Trang Shop phải kiểm tra:

- Meta Title.
- Meta Description.
- Heading.
- Breadcrumb.
- Internal Link.
- Schema.
- OpenGraph.
- Twitter Card.
- Canonical.
- Image Alt.
- JSON-LD.

Không làm giảm SEO hiện tại.

## Internal Link

Liên kết đến:

- Trang chủ.
- Tin tức.
- Giới thiệu.
- Liên hệ.
- Chi tiết sản phẩm.

Link phải rõ nghĩa và không dẫn đến chức năng chưa có.

## CTA Toàn Trang

CTA thống nhất toàn website.

Ví dụ:

- Liên hệ đặt hàng.
- Khám phá sản phẩm.
- Xem chi tiết.

Không dùng CTA thương mại điện tử như:

- Thêm vào giỏ.
- Mua ngay.
- Thanh toán.

## Component

Ưu tiên tái sử dụng:

- Hero.
- CategoryCard.
- ProductCard.
- CTASection.
- Footer.

Không tạo component trùng chức năng.

## File Được Phép Chỉnh Khi Triển Khai

Chỉ sửa các file liên quan đến:

- Shop Page.
- Component Shop.
- Component Product Card.
- Category Grid.
- Hero.
- Footer.

Không sửa logic toàn website.

## Output Sau Khi Triển Khai

Sau khi hoàn thành phải ghi rõ:

1. Các file đã sửa.
2. Component đã sửa.
3. Component mới nếu có.
4. Các section đã triển khai.
5. Những điểm được tham khảo từ website mẫu, chỉ về bố cục và trải nghiệm.
6. Xác nhận:
   - Không sao chép nội dung.
   - Không sao chép hình ảnh.
   - Không sao chép thương hiệu.
   - Không thay đổi loại website.
   - Vẫn giữ Landing Page.
   - Không thêm Checkout.
   - Không thêm Cart.
   - Không thêm Wishlist.
   - Không thêm Thanh toán.

## Điều Kiện Hoàn Thành Khi Triển Khai Shop

- [ ] Đã đọc `docs/00-master-specification.md`.
- [ ] Đã đọc `docs/specification/01_REFERENCE_LAYOUT.md`.
- [ ] Đã đọc `docs/specification/02A_COMPONENT_LAYOUT.md`.
- [ ] Đã đọc `docs/specification/02B_CONTENT_STRUCTURE.md`.
- [ ] Đã đọc `docs/specification/02C_DESIGN_SYSTEM.md`.
- [ ] Header đồng bộ Homepage.
- [ ] Shop đúng thứ tự: Header -> Hero -> Danh mục -> Danh sách sản phẩm -> CTA -> Footer.
- [ ] Danh mục có đủ 6 nhóm.
- [ ] Product card có ảnh, tên, giá, mô tả, liên hệ đặt hàng.
- [ ] Không có Checkout/Cart/Wishlist/Thanh toán/Đăng nhập/Đăng ký.
- [ ] Responsive desktop/tablet/mobile giữ đúng thứ tự.
- [ ] SEO không giảm so với hiện tại.
- [ ] Không sao chép nội dung, hình ảnh, CSS, màu, font, logo từ website tham khảo.
