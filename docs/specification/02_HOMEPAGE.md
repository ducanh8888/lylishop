# LYLISHOP - HOMEPAGE SPECIFICATION

Version: 1.0

## Mục Tiêu

Thiết kế lại giao diện Trang chủ của LyliShop.

Website vẫn là Landing Page.

Không thay đổi:

- Chức năng.
- Framework.
- Routing.
- Mô hình website.

Không chuyển thành website thương mại điện tử.

Website tham khảo:

https://lenlyhandmade.shop

Mục tiêu là tạo cảm giác hiển thị gần giống website tham khảo nhưng vẫn giữ thương hiệu LyliShop.

## Thứ Tự Hiển Thị

Trang chủ phải hiển thị theo đúng thứ tự dưới đây:

1. Header.
2. Hero Banner.
3. Danh mục sản phẩm.
4. Sản phẩm bán chạy.
5. Đánh giá khách hàng.
6. Tin tức.
7. Footer.

Không được thay đổi thứ tự.

## Section 01 - Header

Mục tiêu:

- Điều hướng người dùng.
- Hiển thị thương hiệu.
- Menu rõ ràng.

Hiển thị:

- Logo LyliShop.
- Menu.
- Nút Liên hệ.

Menu gồm:

- Trang chủ.
- Tin tức.
- Cửa hàng.
- Giới thiệu.
- Liên hệ.

Responsive:

- Desktop phải rõ ràng giống tư duy website tham khảo: logo bên trái, menu ở giữa, nút liên hệ bên phải.
- Mobile phải có menu gọn, dễ bấm, giữ đủ 5 mục chính.

## Section 02 - Hero Banner

Mục tiêu:

- Giới thiệu thương hiệu.
- Tạo ấn tượng đầu tiên.
- Dẫn người dùng đến hành động liên hệ.

Có:

- Tiêu đề.
- Mô tả ngắn.
- Nút Liên hệ đặt hàng.

Nút dẫn tới:

- Facebook.
- Instagram.
- Zalo.

Không dùng:

- Checkout.
- Thanh toán.
- Cart.

Ảnh:

- Để một khung Hero lớn.
- Không tạo ảnh.
- Chỉ giữ chỗ để sau này thay ảnh thật.

## Section 03 - Danh Mục Sản Phẩm

Hiển thị dạng grid.

Tư duy hiển thị tham khảo website mẫu:

- Danh mục xuất hiện sớm sau Hero.
- Grid cân đối.
- Mỗi danh mục là một lối vào nhanh tới nhóm sản phẩm.

Danh mục:

- Móc khóa Mini.
- Móc khóa Size S.
- Móc khóa Size M.
- Móc khóa Size L.
- Thú bông len.
- Hoa len.

Mỗi card gồm:

- Ảnh.
- Tên.
- Mô tả ngắn.
- Nút Xem sản phẩm.

Không hiển thị giá trong card danh mục.

## Section 04 - Sản Phẩm Bán Chạy

Hiển thị dạng grid.

Số lượng:

- Khoảng 4-8 sản phẩm.

Card gồm:

- Ảnh.
- Tên.
- Mô tả ngắn.
- Giá nếu có.
- Nút Liên hệ đặt hàng.

Nút mở:

- Facebook.
- Instagram.
- Zalo.

Không có:

- Checkout.
- Cart.
- Wishlist.
- Thanh toán.

## Section 05 - Đánh Giá Khách Hàng

Hiển thị giống website tham khảo về tư duy bố cục.

Có thể dùng:

- Slider.
- Grid.

Tùy responsive.

Mỗi đánh giá gồm:

- Avatar.
- Tên khách.
- Nội dung.
- Số sao.
- Ngày đánh giá.

Lưu ý:

- Chỉ dùng đánh giá thật hoặc nội dung đã được chủ shop xác nhận.
- Không tự tạo review giả.

## Section 06 - Tin Tức

Hiển thị đúng tinh thần website tham khảo.

Trang chủ chỉ hiển thị 2 bài.

Bài 01:

Móc khóa len handmade - Món quà nhỏ mang ý nghĩa lớn

Bài 02:

5 lý do móc khóa len handmade được nhiều người lựa chọn làm quà tặng

Mỗi card gồm:

- Ảnh.
- Tiêu đề.
- Mô tả.
- Ngày đăng.
- Nút Đọc thêm.

Không copy bài viết từ website tham khảo.

## Section 07 - Footer

Footer phải hiển thị theo bố cục website tham khảo nhưng dùng nội dung và nhận diện LyliShop.

Có:

- Logo.
- Thông tin liên hệ.
- Chính sách đổi trả.
- Chính sách vận chuyển.
- Điều khoản.
- Facebook.
- Instagram.
- Zalo.
- Điện thoại.
- Email.
- Google Maps.
- Copyright.

## Hình Ảnh

AI không tạo ảnh.

Chỉ tạo khung ảnh/placeholder cho:

- Hero.
- Danh mục.
- Sản phẩm.
- Review.
- Tin tức.
- Footer.

Các khung ảnh để trống để người quản trị thay ảnh thật sau.

Mọi ảnh khi triển khai phải có `alt` phù hợp.

## SEO

Homepage phải có:

- H1 duy nhất.
- Heading đúng thứ tự.
- Schema Organization.
- Breadcrumb nếu phù hợp.
- OpenGraph.
- Twitter Card.
- Meta Title.
- Meta Description.
- Alt cho toàn bộ hình.
- Internal Link.

Không làm giảm SEO hiện tại.

## Responsive

Áp dụng cho:

- Desktop.
- Tablet.
- Mobile.

Quy tắc:

- Giữ đúng thứ tự section.
- Không bỏ section.
- Không đổi vị trí section.
- Không làm CTA khó bấm trên mobile.
- Không để text tràn khỏi card/button.

## Component

Được phép sử dụng hoặc tạo:

- Header.
- Hero.
- CategoryGrid.
- FeaturedProducts.
- ReviewSection.
- NewsSection.
- Footer.

Không sửa logic.

Chỉ thay đổi giao diện.

Ưu tiên tái sử dụng component hiện có.

## Yêu Cầu Quan Trọng

Website phải vẫn là Landing Page.

Không tạo:

- Cart.
- Wishlist.
- Checkout.
- Thanh toán.
- Đăng nhập.
- Đăng ký.

Không thay đổi hành vi website.

Chỉ tối ưu:

- UI.
- UX.
- SEO.
- Thứ tự hiển thị.
- Khoảng cách.
- Responsive.

## Output Sau Khi Triển Khai

Sau khi hoàn thành implementation task tương ứng, phải ghi rõ:

- Các file đã sửa.
- Các component đã chỉnh.
- Các component mới nếu có.
- Giải thích lý do thay đổi.
- Đối chiếu với website tham khảo để đảm bảo bố cục hiển thị tương tự nhưng không sao chép nội dung hay thương hiệu.

## Điều Kiện Hoàn Thành Homepage

- [ ] Đã đọc `docs/00-master-specification.md`.
- [ ] Đã đọc `docs/specification/01_REFERENCE_LAYOUT.md`.
- [ ] Header đúng menu 5 mục.
- [ ] Homepage đúng thứ tự 7 section.
- [ ] Hero có CTA liên hệ ngoài website.
- [ ] Danh mục có đủ 6 nhóm sản phẩm.
- [ ] Sản phẩm bán chạy hiển thị dạng grid 4-8 sản phẩm.
- [ ] Không có cart/checkout/wishlist/payment/login/register.
- [ ] Review dùng dữ liệu được xác nhận.
- [ ] Tin tức chỉ hiển thị 2 bài nổi bật.
- [ ] Footer có đủ liên hệ, chính sách, social, Google Maps và copyright.
- [ ] Có H1 duy nhất.
- [ ] Không giảm SEO hiện tại.
- [ ] Responsive giữ nguyên thứ tự section.
- [ ] Không copy nội dung, hình ảnh, màu sắc, font, logo hoặc branding từ website tham khảo.
