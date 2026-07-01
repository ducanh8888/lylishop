# 02 - Blueprint Bố Cục Hiển Thị LyliShop

Task: 02 - Thiết kế lại bố cục hiển thị cho LyliShop  
Ngày lập: 2026-07-01  
Website tham khảo: https://lenlyhandmade.shop  
Website cần chỉnh sửa: https://lylishop.online  
Phạm vi: tài liệu thiết kế Presentation Layer, chưa triển khai code.

## 0. Nguyên Tắc Bắt Buộc

Blueprint này chỉ mô tả bố cục hiển thị. Chưa được viết code, chưa sửa component, chưa chỉnh Next.js, chưa đổi dữ liệu.

Không làm:

- Không đổi loại website. LyliShop vẫn là Landing Page + trang sản phẩm/blog hiện có.
- Không chuyển thành website thương mại điện tử.
- Không thêm checkout.
- Không thêm cart.
- Không thêm wishlist.
- Không thêm tài khoản.
- Không đổi routing.
- Không thêm route mới khi chưa duyệt.
- Không sao chép nội dung, hình ảnh, logo, màu sắc, font, nhận diện của website tham khảo.
- Không tự tạo màu thương hiệu mới.

Được làm ở phase triển khai sau khi blueprint được duyệt:

- Tối ưu thứ tự hiển thị section.
- Tối ưu khoảng cách, grid, card, hierarchy.
- Đổi nhãn menu cho đơn giản hơn.
- Tái bố trí các block hiện có để giống tư duy hiển thị của website tham khảo hơn.
- Bổ sung section ở mức presentation nếu không làm thay đổi routing/chức năng lõi.
- Dùng CTA hiện có dẫn đến Zalo/Facebook/Instagram.

## 1. Kết Luận Từ Website Tham Khảo Cần Học

Website tham khảo có journey trang chủ đáng học:

1. Header rõ danh mục.
2. Hero/banner tạo cảm giác thương hiệu.
3. Danh mục sản phẩm xuất hiện sớm.
4. Sản phẩm bán chạy nằm ngay sau danh mục.
5. Đánh giá khách hàng tăng niềm tin.
6. Tin tức/blog hỗ trợ giáo dục khách hàng.
7. Footer gom chính sách, liên hệ, social, bản đồ.

Điểm cần học:

- Thứ tự section ưu tiên mua hàng/trải nghiệm.
- Grid sản phẩm dễ quét.
- Footer là vùng trust/recovery, không chỉ là phần cuối trang.
- Blog được đặt sau review để vừa hỗ trợ SEO vừa không cản luồng chọn sản phẩm.

Điểm không nên học:

- Không thêm cart/checkout/wishlist/account.
- Không đưa text hệ thống thương mại điện tử vào LyliShop.
- Không dùng Quick View nếu không cần.
- Không dùng empty state của WooCommerce.
- Không sao chép màu, font, ảnh, wording.

## 2. Hiện Trạng LyliShop Cần Giữ

Quan sát từ source và website hiện tại:

- Trang chủ hiện là Landing Page tại `/`.
- Cửa hàng hiện tương ứng route `/products`.
- Tin tức hiện tương ứng route `/blog`.
- Đặt hàng hiện qua Zalo/Facebook/Instagram/TikTok.
- Không có cart/checkout/wishlist/account trong project hiện tại.
- Contact/order đang là section trên Landing Page.
- Chưa có route riêng cho Giới thiệu và Liên hệ.

Do yêu cầu không đổi routing:

- Menu "Giới thiệu" nên trỏ đến section anchor trên trang chủ, ví dụ `/#gioi-thieu`, nếu section này được thêm trong phase triển khai.
- Menu "Liên hệ" nên trỏ đến section liên hệ hiện có, ưu tiên giữ anchor hiện tại `/#order` nếu không đổi id.
- Không tạo `/gioi-thieu` hoặc `/lien-he` trong Task 02.

## 3. Menu Blueprint

Menu desktop/mobile cần đơn giản:

| Label | Target đề xuất | Lý do |
| --- | --- | --- |
| Trang chủ | `/` | Giữ route hiện có. |
| Tin tức | `/blog` | Map với trang blog hiện có. |
| Cửa hàng | `/products` | Map với trang sản phẩm hiện có, không tạo ecommerce flow. |
| Giới thiệu | `/#gioi-thieu` | Anchor section trong Landing Page, không thêm route. |
| Liên hệ | `/#order` hoặc `/#lien-he` | Dẫn tới section liên hệ/đặt hàng qua kênh social hiện có. |

CTA header:

- Desktop: 1 CTA phụ "Xem mẫu" có thể giữ nếu cần, nhưng ưu tiên menu gọn.
- CTA chính: "Liên hệ đặt hàng" dẫn Zalo/Facebook/Instagram hoặc section liên hệ.
- Mobile: menu dropdown chỉ chứa 5 link chính + 1 CTA "Liên hệ đặt hàng".

Không hiển thị:

- Cart.
- Checkout.
- Wishlist.
- Account.
- Tracking.
- Search nếu chưa có trải nghiệm search tốt.

## 4. Trang Chủ Blueprint

Route: `/`  
Vai trò: Landing Page chính của LyliShop.  
Mục tiêu: cho người dùng hiểu sản phẩm, chọn nhóm sản phẩm, xem mẫu bán chạy, tin shop, đọc thêm nội dung và liên hệ đặt hàng.

Thứ tự hiển thị bắt buộc:

1. Hero Banner.
2. Danh mục sản phẩm.
3. Sản phẩm bán chạy.
4. Đánh giá khách hàng.
5. Tin tức.
6. Footer.

### Section 01 - Hero Banner

Mục đích:

- Giữ vai trò mở đầu thương hiệu.
- Cho biết LyliShop bán gì, dành cho ai, đặt hàng thế nào.
- Không biến hero thành landing page marketing quá dài.

Layout desktop:

- Full-width band.
- Inner container tối đa theo container hiện tại.
- Grid 2 cột: nội dung bên trái, hình ảnh/bộ ảnh sản phẩm bên phải.
- Bên phải dùng ảnh thật/sẵn có của LyliShop, không dùng ảnh đối thủ.
- Có thể đặt promotion hiện tại thành một strip nhỏ trong hero nếu vẫn muốn giữ ưu đãi, không tách thành block quá dài trước hero.

Layout mobile:

- Text trước, ảnh sau.
- CTA xếp dọc hoặc 2 nút full width.
- Không để hero cao quá màn hình đầu tiên.

Nội dung:

- Eyebrow ngắn: "LyliShop handmade" hoặc tương đương.
- H1 rõ sản phẩm chính: móc khóa len handmade/quà nhỏ dễ thương.
- Mô tả 1 đoạn ngắn, ưu tiên cảm xúc và cách đặt hàng qua social.
- 3 trust chips nhỏ: handmade, chọn màu, đóng gói làm quà.

CTA:

- Chính: "Liên hệ đặt hàng" -> Zalo/Facebook/Instagram hoặc `/#order`.
- Phụ: "Xem sản phẩm" -> `/products`.

UX:

- H1 chỉ một trên trang.
- Hero không chứa quá nhiều đoạn SEO dài.
- Không dùng carousel bắt buộc; ảnh tĩnh nhẹ hơn và ổn định hơn.

SEO:

- H1 đặt tại hero.
- Ảnh hero có alt mô tả sản phẩm LyliShop.

CRO:

- CTA đặt ngay trong hero.
- Nói rõ "đặt qua tin nhắn" để không tạo kỳ vọng checkout.

Performance:

- Ảnh hero dùng ảnh tối ưu, preload nếu là LCP.
- Không thêm JS slider nếu không cần.

### Section 02 - Danh Mục Sản Phẩm

Mục đích:

- Học tư duy từ website tham khảo: cho người dùng chọn nhóm sản phẩm rất sớm.
- Giúp người dùng không phải đọc quá nhiều trước khi thấy lựa chọn.

Danh mục hiển thị:

1. Móc khóa Mini.
2. Móc khóa Size S.
3. Móc khóa Size M.
4. Móc khóa Size L.
5. Thú bông len.
6. Hoa len.

Layout desktop:

- Grid 3 cột x 2 hàng.
- Card có ảnh thumbnail, tên danh mục, mô tả 1 dòng ngắn, CTA nhỏ.
- Không cần số lượng sản phẩm nếu dữ liệu hiện tại chưa hỗ trợ chính xác.

Layout tablet:

- Grid 2 cột.

Layout mobile:

- Grid 1 cột hoặc horizontal scroll nếu ảnh đẹp và số lượng đủ.
- Ưu tiên card cao vừa phải, không quá nặng ảnh.

Target link:

- Vì không đổi routing, mỗi card nên trỏ về `/products#mini`, `/products#size-s`, `/products#size-m`, `/products#size-l`, `/products#thu-bong-len`, `/products#hoa-len` nếu triển khai nhóm trên trang products.
- Nếu chưa triển khai anchor nhóm, tạm trỏ tất cả về `/products`.

UX:

- Card phải giống "lối vào lựa chọn", không phải banner quảng cáo.
- Tên danh mục ngắn, dễ hiểu.

SEO:

- Heading section dùng H2.
- Danh mục dùng H3 hoặc link text rõ nghĩa.

CRO:

- Người mua quà có thể chọn nhanh theo kích thước/mục đích.
- Giảm tải cho section sản phẩm bán chạy.

### Section 03 - Sản Phẩm Bán Chạy

Mục đích:

- Tương tự website tham khảo: đưa sản phẩm nổi bật ngay sau danh mục.
- Tăng khả năng click vào mẫu cụ thể.

Layout desktop:

- Grid 4 cột nếu card gọn và ảnh đồng đều.
- Hoặc grid 3 cột nếu cần mô tả dài hơn.
- Giữ khoảng cách đều, card không quá bo tròn/không quá trang trí.

Layout mobile:

- 1 cột hoặc 2 cột tùy ảnh.
- Nếu 2 cột mobile, text phải ngắn để không vỡ card.

Card sản phẩm:

- Ảnh.
- Category/tag nhỏ.
- Tên sản phẩm.
- Giá hoặc "từ ...".
- 1 câu mô tả ngắn.
- CTA: "Xem chi tiết mẫu".
- CTA phụ nếu cần: "Nhắn shop".

Không có:

- Add to cart.
- Buy now theo kiểu ecommerce.
- Quick View nếu không có modal hoàn chỉnh.

Số lượng đề xuất:

- Trang chủ: 6-8 sản phẩm nổi bật.
- Nếu muốn cảm giác giống tham khảo hơn, hiển thị 6 sản phẩm trước, có link "Xem tất cả sản phẩm".

SEO:

- H2: "Sản phẩm bán chạy" hoặc wording riêng của LyliShop.
- Product cards giữ link đến trang chi tiết sản phẩm hiện có.

CRO:

- Đặt CTA liên hệ sau grid cho đơn số lượng hoặc chọn màu.
- Nói rõ shop xác nhận mẫu/giá/thời gian qua tin nhắn.

Performance:

- Lazy load ảnh ngoài vùng nhìn đầu tiên.
- Giữ aspect ratio ổn định để tránh layout shift.

### Section 04 - Đánh Giá Khách Hàng

Mục đích:

- Tạo social proof giống website tham khảo nhưng không copy review.
- Giúp người mua quà tin vào chất lượng, đóng gói, tư vấn.

Layout desktop:

- 3 card cùng hàng.
- Mỗi card có avatar/initial hoặc ảnh thật nếu có quyền.
- Nội dung 2-4 dòng, nguồn kênh: Facebook/Instagram/Zalo.

Layout mobile:

- Stack 1 cột.
- Có thể dùng slider nhẹ nếu đã có pattern, nhưng ưu tiên static cards để nhẹ.

Nội dung cần có:

- Review về độ xinh.
- Review về đóng gói.
- Review về shop tư vấn/chọn màu.

Lưu ý:

- Không tạo review giả.
- Nếu chưa có review thật, dùng "Phản hồi khách hàng" chỉ khi có nguồn thật, hoặc chuyển thành "Lý do khách chọn LyliShop" để tránh fake social proof.

SEO:

- Không thêm AggregateRating schema nếu chưa có review thật và đủ dữ liệu.

CRO:

- Review nên nằm trước Tin tức để người dùng đã được củng cố niềm tin trước khi đọc thêm.

### Section 05 - Tin Tức

Mục đích:

- Hỗ trợ SEO và giáo dục khách hàng.
- Học cách website tham khảo đặt blog sau review.

Hiển thị:

- 2 bài viết nổi bật.
- Card có ảnh cover, title, excerpt ngắn, ngày hoặc reading time.

Tiêu đề đề xuất:

1. "Móc khóa len handmade - Món quà nhỏ mang ý nghĩa lớn"
2. "5 lý do móc khóa len handmade được nhiều người lựa chọn làm quà tặng"

Không sao chép:

- Không copy bài viết từ website tham khảo.
- Không copy thumbnail/ảnh.

Layout desktop:

- 2 card ngang, cùng chiều cao.
- Có link "Xem tất cả tin tức" -> `/blog`.

Layout mobile:

- 1 cột, ảnh trên, nội dung dưới.

SEO:

- H2: "Tin tức" hoặc "Cẩm nang quà handmade".
- Link về `/blog` và bài viết chi tiết.
- Title bài viết nên chứa chủ đề: móc khóa len, quà tặng handmade, crochet, câu chuyện sản phẩm.

CRO:

- Mỗi bài có CTA mềm: "Đọc bài viết".
- Dưới 2 bài có CTA quay lại sản phẩm: "Xem các mẫu móc khóa len".

### Section 06 - Footer

Mục đích:

- Vùng trust/recovery giống website tham khảo nhưng gọn hơn, đúng mô hình LyliShop.

Footer phải bao gồm:

- Chính sách đổi trả.
- Chính sách vận chuyển.
- Thông tin liên hệ.
- Fanpage Facebook.
- Instagram.
- Zalo.
- Số điện thoại.
- Email.
- Google Maps.

Do không đổi routing:

- "Chính sách đổi trả" và "Chính sách vận chuyển" có thể là 2 block text ngắn trong footer hoặc link đến section/chính sách hiện có nếu sau này được duyệt.
- Không bắt buộc tạo route chính sách mới trong phase này.
- Nếu cần trang chính sách riêng, phải tách thành task khác vì đó là thay đổi routing/nội dung pháp lý.

Layout desktop:

- 4 cột:
  1. Brand summary.
  2. Chính sách.
  3. Liên hệ.
  4. Social/Maps.

Layout mobile:

- Stack theo thứ tự: brand -> liên hệ -> chính sách -> social/maps.

Google Maps:

- Cần URL Google Maps chính thức của LyliShop trước khi triển khai.
- Nếu chưa có địa chỉ công khai, dùng link "Xem trên Google Maps" thay vì embed map nặng.

Performance:

- Không embed Google Maps iframe mặc định nếu không cần; iframe có thể lazy load hoặc dùng link.

## 5. Trang Cửa Hàng Blueprint

Route hiện có: `/products`  
Không chuyển thành ecommerce. Không thêm cart/checkout/wishlist/account.

Mục tiêu:

- Hiển thị danh mục sản phẩm và grid sản phẩm giống tư duy website tham khảo.
- Cho người dùng xem mẫu, sau đó liên hệ qua social.

Thứ tự đề xuất:

1. Header.
2. Breadcrumb.
3. Page intro/H1.
4. Danh mục sản phẩm.
5. Product grid.
6. CTA liên hệ chọn màu/đặt số lượng.
7. Footer.

### Section - Danh Mục Sản Phẩm

Danh mục:

- Móc khóa Mini.
- Móc khóa Size S.
- Móc khóa Size M.
- Móc khóa Size L.
- Thú bông len.
- Hoa len.

Hiển thị:

- Dạng chip/card filter presentation.
- Nếu chưa có filter logic, card chỉ scroll đến nhóm sản phẩm tương ứng trên cùng trang.
- Không thêm search/filter phức tạp nếu dữ liệu chưa sẵn sàng.

### Section - Product Grid

Grid giống tư duy tham khảo:

- Desktop: 3 hoặc 4 cột.
- Tablet: 2 cột.
- Mobile: 1 hoặc 2 cột tùy khả năng chứa text.
- Card có ảnh vuông hoặc tỷ lệ ổn định.
- Card gồm category, tên, giá, mô tả ngắn, CTA "Xem chi tiết mẫu".

Không dùng:

- Quick View nếu chưa cần.
- Add to cart.
- Buy now.
- Quantity selector.

CTA sau grid:

- "Liên hệ chọn màu".
- "Nhắn Zalo đặt số lượng".
- "Inbox Facebook".

SEO:

- H1 giữ rõ intent "Cửa hàng móc khóa len handmade LyliShop" hoặc tương đương.
- Danh mục có heading rõ.
- Product card link đến trang chi tiết hiện có.

UX:

- Người dùng vào `/products` phải thấy sản phẩm nhanh hơn hiện tại.
- Không đẩy quá nhiều text SEO lên trước grid.

## 6. Trang Tin Tức Blueprint

Route hiện có: `/blog`

Mục tiêu:

- Hiển thị danh sách bài viết về móc khóa len, quà tặng handmade, crochet, câu chuyện sản phẩm.
- Hỗ trợ SEO và niềm tin thương hiệu.

Thứ tự đề xuất:

1. Header.
2. Breadcrumb.
3. Hero nhỏ/H1.
4. Topic chips.
5. Featured posts.
6. Blog grid.
7. CTA về sản phẩm hoặc liên hệ.
8. Footer.

Topic chips:

- Móc khóa len.
- Quà tặng handmade.
- Crochet.
- Câu chuyện sản phẩm.

Blog card:

- Ảnh cover.
- Chủ đề/tag.
- Title.
- Excerpt 2 dòng.
- Reading time/ngày đăng.
- CTA "Đọc bài viết".

Bài nổi bật:

- "Móc khóa len handmade - Món quà nhỏ mang ý nghĩa lớn".
- "5 lý do móc khóa len handmade được nhiều người lựa chọn làm quà tặng".

Không copy:

- Không copy title/content/image của website tham khảo.
- Có thể học công thức: vấn đề/quà tặng -> cảm xúc -> cách chọn -> CTA mềm.

SEO:

- H1 rõ "Tin tức LyliShop" hoặc "Cẩm nang quà handmade".
- Mỗi bài có internal link về `/products`, sản phẩm liên quan hoặc section liên hệ.

## 7. Giới Thiệu Blueprint

Ràng buộc routing:

- Hiện project chưa có route riêng cho Giới thiệu.
- Đề xuất trong phase presentation: tạo section "Giới thiệu" trên Landing Page với anchor `/#gioi-thieu`.
- Không tạo route `/gioi-thieu` trong Task 02.

Mục tiêu:

- Nói LyliShop là ai.
- Tăng tin tưởng bằng câu chuyện handmade.
- Dẫn người dùng đến liên hệ đặt hàng.

Thứ tự section:

1. Giới thiệu LyliShop.
2. 3 khối cùng hàng: Sứ mệnh, Giá trị cốt lõi, Định vị thương hiệu.
3. Câu chuyện thương hiệu.
4. CTA liên hệ.

### Block 01 - Giới Thiệu LyliShop

Layout:

- 2 cột desktop: text + ảnh/process/product.
- Mobile: text trước, ảnh sau.

Nội dung:

- LyliShop làm móc khóa len handmade.
- Sản phẩm nhỏ, dễ tặng, có thể chọn màu.
- Đặt hàng qua Zalo/Facebook/Instagram.

### Block 02 - 3 Khối Cùng Hàng

Desktop:

- 3 card cùng một hàng.

Mobile:

- Stack 1 cột.

Card 1 - Sứ mệnh:

- Biến món quà nhỏ thành kỷ niệm có cảm xúc.

Card 2 - Giá trị cốt lõi:

- Tỉ mỉ, dễ thương, rõ ràng khi tư vấn, đóng gói chỉn chu.

Card 3 - Định vị thương hiệu:

- LyliShop là shop quà handmade nhỏ xinh, không phải website bán hàng đại trà.

### Block 03 - Câu Chuyện Thương Hiệu

Mục đích:

- Tạo chiều sâu thương hiệu.
- Cho người dùng thấy sản phẩm có bàn tay và cảm xúc phía sau.

Không nên:

- Viết quá dài.
- Dùng lời sáo rỗng.

### Block 04 - CTA Liên Hệ

CTA:

- "Nhắn LyliShop để chọn mẫu".
- "Xem sản phẩm".

## 8. Liên Hệ Blueprint

Ràng buộc routing:

- Hiện project chưa có route riêng cho Liên hệ.
- Đề xuất giữ dưới dạng section trên Landing Page, ưu tiên anchor hiện có `/#order` hoặc đổi tên hiển thị thành "Liên hệ".
- Không tạo route `/lien-he` trong Task 02.

Mục tiêu:

- Cho người dùng cách liên hệ rõ ràng.
- Không tạo chức năng đặt hàng trên website.
- Nút "Liên hệ đặt hàng" dẫn đến Facebook, Zalo hoặc Instagram như hiện tại.

Nội dung bắt buộc:

- Form liên hệ.
- Facebook.
- Instagram.
- Zalo.
- Email.
- Điện thoại.
- Google Maps.

Lưu ý về form:

- Vì yêu cầu không thay đổi chức năng hiện có, form ở blueprint chỉ là thiết kế hiển thị.
- Khi triển khai, nếu chưa có backend/form handler, form không được giả vờ gửi thành công.
- Phương án an toàn: form đóng vai trò "soạn nội dung liên hệ", CTA cuối mở Zalo/Facebook/Instagram với nội dung người dùng tự gửi.
- Nếu muốn form gửi email thật, cần task kỹ thuật riêng và duyệt chức năng mới.

Layout desktop:

- 2 cột:
  1. Form liên hệ/soạn tin.
  2. Contact cards: Facebook, Instagram, Zalo, Email, Điện thoại, Google Maps.

Layout mobile:

- Form trước.
- Contact cards sau.
- CTA social full width.

CTA:

- "Nhắn Zalo".
- "Inbox Facebook".
- "Nhắn Instagram".

Không thêm:

- Đặt hàng tự động.
- Thanh toán.
- Giỏ hàng.

## 9. Khoảng Cách Và Nhịp Hiển Thị

Mục tiêu:

- Có cảm giác section rõ như website tham khảo.
- Không biến Landing Page thành quá nhiều block nhỏ rời rạc.

Spacing đề xuất:

- Section desktop: padding top/bottom khoảng 72-96px.
- Section mobile: padding top/bottom khoảng 48-64px.
- Khoảng cách heading -> content: 24-40px.
- Card grid gap desktop: 20-28px.
- Card grid gap mobile: 16px.

Hierarchy:

- H1 chỉ ở Hero.
- H2 cho từng section chính.
- H3 cho category/product/review cards.
- Text mô tả section ngắn, không quá 2 dòng desktop hoặc 3 dòng mobile.

Visual rhythm:

- Hero có ảnh lớn.
- Category là card ngắn.
- Product grid là vùng chính.
- Review là vùng trust nhẹ.
- News là vùng đọc thêm.
- Footer là vùng thông tin dày hơn.

## 10. Mobile UX

Menu:

- 5 link chính.
- CTA liên hệ đặt hàng dưới menu.
- Không đưa quá nhiều anchor phụ.

Hero:

- H1 không quá dài.
- CTA dễ bấm, full width nếu cần.

Category:

- Card dễ chạm.
- Không nhồi mô tả dài.

Product grid:

- 1 cột nếu card nhiều text.
- 2 cột chỉ dùng khi title/price không vỡ.

Review:

- Stack 1 cột.
- Giới hạn chiều dài review.

Footer:

- Contact/social đặt lên trước chính sách nếu mobile.

## 11. SEO Và CRO Khi Triển Khai Sau Duyệt

SEO:

- Không đổi URL.
- Không bỏ H1 hiện tại.
- Nếu thêm section Giới thiệu/Liên hệ trên Landing Page, dùng anchor không ảnh hưởng routing.
- Product/category cards cần link text rõ.
- Blog card cần title/excerpt riêng của LyliShop.
- Footer cần thông tin liên hệ nhất quán.

CRO:

- Luồng mới phải rõ: xem mẫu -> tin tưởng -> đọc thêm -> liên hệ.
- Không làm người dùng nghĩ có checkout nếu thực tế đặt hàng qua tin nhắn.
- CTA chính nên nhất quán: "Liên hệ đặt hàng" hoặc "Nhắn shop".
- Review chỉ dùng phản hồi thật.

Performance:

- Không thêm slider/carousel nặng.
- Không embed Google Maps nặng mặc định nếu chưa cần.
- Dùng ảnh đã tối ưu.
- Giữ layout ổn định bằng aspect ratio.
- Không thêm JS cho filter nếu anchor/group là đủ.

## 12. Mapping Từ Hiện Trạng Sang Blueprint

| Hiện tại | Blueprint đề xuất | Ghi chú |
| --- | --- | --- |
| Menu nhiều anchor: Móc khóa len, Sản phẩm, Lý do chọn, Hình ảnh, Câu hỏi, Đặt hàng | Menu 5 mục: Trang chủ, Tin tức, Cửa hàng, Giới thiệu, Liên hệ | Đổi nhãn/menu presentation, không đổi routing. |
| Promotion banner dài trước hero | Gộp thành strip nhỏ trong Hero hoặc đặt dưới Hero nếu cần | Không để ưu đãi che mất H1. |
| Featured products xuất hiện sớm | Giữ, nhưng đặt sau Danh mục sản phẩm | Đúng yêu cầu trang chủ. |
| WhyChooseUs/SEO/Gallery/FAQ nhiều block | Tái bố trí/gộp vào Hero, Review, About, Footer hoặc sau News nếu thật cần | Không xóa nội dung hữu ích khi triển khai, nhưng cần giảm cảm giác rời rạc. |
| ContactSection/FinalCTA | Đổi thành khu Liên hệ rõ hơn | Dẫn social, không tạo checkout. |
| Footer hiện có privacy/terms | Bổ sung hiển thị đổi trả/vận chuyển ở dạng text/link được duyệt | Không tạo route mới trong Task 02. |

## 13. Checklist Duyệt Blueprint

- [ ] Giữ LyliShop là Landing Page, không chuyển ecommerce.
- [ ] Menu chỉ còn 5 mục.
- [ ] Không thêm cart.
- [ ] Không thêm checkout.
- [ ] Không thêm wishlist.
- [ ] Không thêm account.
- [ ] Không đổi routing.
- [ ] Trang chủ đúng thứ tự: Hero -> Danh mục -> Sản phẩm bán chạy -> Đánh giá -> Tin tức -> Footer.
- [ ] Cửa hàng hiển thị danh mục + product grid.
- [ ] Tin tức có chủ đề móc khóa len/quà handmade/crochet/câu chuyện sản phẩm.
- [ ] Giới thiệu có 3 khối cùng hàng trên desktop.
- [ ] Liên hệ có form presentation + social/contact/maps.
- [ ] Footer có chính sách đổi trả, vận chuyển, contact, social, phone, email, maps.
- [ ] Không copy content/hình ảnh/màu/font/logo từ website tham khảo.
- [ ] Chỉ triển khai code sau khi blueprint này được duyệt.

## 14. Việc Cần Chủ Shop Xác Nhận Trước Khi Triển Khai

1. Link Google Maps chính thức của LyliShop.
2. Email công khai muốn hiển thị ở footer/contact.
3. Có dùng số điện thoại hiện tại `0356839196` cho toàn bộ website không.
4. Có review khách hàng thật nào được phép hiển thị không.
5. Có ảnh riêng cho 6 danh mục: Mini, Size S, Size M, Size L, Thú bông len, Hoa len không.
6. Chính sách đổi trả/vận chuyển sẽ hiển thị dạng text trong footer hay cần trang riêng ở task sau.
