# LYLISHOP - COMPONENT & LAYOUT SPECIFICATION

Version: 1.0

## Mục Tiêu

Đây là tài liệu quy định toàn bộ cách hiển thị giao diện của website LyliShop.

Website tham khảo:

https://lenlyhandmade.shop

Mọi trang của LyliShop phải thống nhất về:

- Layout.
- Grid.
- Card.
- Khoảng cách.
- Hình ảnh.
- Typography.
- Button.
- Responsive.

Không tự ý sáng tạo layout khác.

Ưu tiên cảm giác hiển thị gần giống website tham khảo.

## Container

Tất cả section phải dùng chung một chuẩn container.

Không để mỗi section một chiều rộng khác nhau.

Container phải cân đối trên:

- Desktop.
- Tablet.
- Mobile.

Container phải đồng bộ giữa các trang và các section.

## Section

Khoảng cách giữa các section phải đồng đều.

Không được:

- Để section quá sát nhau.
- Để section quá xa nhau.

Khoảng trắng phải tạo cảm giác thoáng giống website tham khảo.

## Grid

Toàn website sử dụng cùng một quy tắc grid.

Áp dụng cho:

- Danh mục.
- Sản phẩm.
- Tin tức.
- Review nếu dùng dạng grid.

Không để mỗi trang một kiểu grid riêng.

## Card

Card phải thống nhất.

Áp dụng cho:

- Danh mục.
- Sản phẩm.
- Tin tức.
- Review.

Card gồm:

1. Ảnh.
2. Tiêu đề.
3. Mô tả.
4. CTA.

Không thay đổi kiểu card giữa các trang nếu không có lý do rõ ràng và được duyệt.

## Button

Button phải đồng bộ.

Yêu cầu:

- Style giống nhau.
- Hover giống nhau.
- Bo góc giống nhau.
- Animation giống nhau.

Không tạo nhiều kiểu button dư thừa.

CTA chính trên toàn website ưu tiên cùng một logic: liên hệ qua Facebook, Instagram hoặc Zalo.

## Hero

Hero Banner của mọi trang phải thống nhất.

Cấu trúc:

1. Ảnh lớn.
2. Tiêu đề.
3. Mô tả.
4. CTA.

Không tự ý thay đổi bố cục hero.

## Hình Ảnh

Không tạo ảnh.

Chỉ tạo khung ảnh.

Mỗi section phải có vị trí đặt ảnh rõ ràng.

Ví dụ:

- Hero: 01 ảnh lớn.
- Danh mục: 01 ảnh mỗi card.
- Sản phẩm: 01 ảnh mỗi card.
- Review: avatar.
- Tin tức: ảnh bìa.

Tất cả ảnh khi triển khai phải có `alt` phù hợp.

## Typography

Toàn website sử dụng cùng một hệ thống typography.

Thứ bậc:

1. H1.
2. H2.
3. H3.
4. Paragraph.
5. Button.

Không để mỗi trang một kiểu typography khác nhau.

Mỗi trang chỉ nên có một H1.

## Màu Sắc

Không dùng màu website tham khảo.

Toàn bộ màu phải lấy từ Logo LyliShop.

Nếu cần accent color thì chọn từ Logo LyliShop.

Không tự tạo palette mới khi chưa được duyệt.

## Icon

Icon phải cùng phong cách.

Không trộn nhiều bộ icon.

Nếu project đang dùng một thư viện icon chính thì ưu tiên tiếp tục dùng thư viện đó.

## Animation

Animation phải nhẹ.

Không lạm dụng.

Ưu tiên:

- Fade.
- Slide.
- Hover.

Animation phải đồng nhất giữa các component.

Không dùng animation làm ảnh hưởng Core Web Vitals hoặc khả năng đọc nội dung.

## Responsive

Responsive áp dụng cho:

- Desktop.
- Tablet.
- Mobile.

Không được:

- Đổi thứ tự section.
- Bỏ section.
- Thay đổi trải nghiệm cốt lõi.

Thứ tự nội dung phải giữ đúng specification của từng trang.

## CTA

CTA trên toàn website phải thống nhất.

Luồng CTA:

1. Liên hệ đặt hàng.
2. Facebook.
3. Instagram.
4. Zalo.

Không tạo:

- Checkout.
- Cart.
- Wishlist.
- Thanh toán.

CTA phải phản ánh đúng mô hình chốt đơn ngoài website.

## Khoảng Cách

Khoảng cách phải thống nhất giữa:

- Heading.
- Paragraph.
- Button.
- Card.
- Section.

Không để mỗi component tự tạo nhịp spacing riêng.

## Footer

Footer của tất cả các trang phải giống nhau.

Không được để mỗi trang một footer riêng.

Footer phải tuân thủ master specification và reference layout specification.

## Header

Header của tất cả các trang phải giống nhau.

Menu:

- Trang chủ.
- Tin tức.
- Cửa hàng.
- Giới thiệu.
- Liên hệ.

Không thêm menu item ngoài specification nếu chưa được duyệt.

## Quy Tắc Component

Ưu tiên tái sử dụng component.

Ví dụ component:

- Header.
- Hero.
- CategoryCard.
- ProductCard.
- ReviewCard.
- BlogCard.
- Footer.

Không tạo component trùng chức năng.

Khi cần component mới, phải kiểm tra xem component hiện có có thể mở rộng hoặc tái sử dụng không.

## Điều Kiện Hoàn Thành

Trước khi thực hiện bất kỳ task nào, AI phải đọc:

- `docs/00-master-specification.md`.
- `docs/specification/01_REFERENCE_LAYOUT.md`.
- `docs/specification/02A_COMPONENT_LAYOUT.md`.

Sau đó mới được phép chỉnh sửa giao diện.

Nếu giao diện khác website tham khảo thì được phép điều chỉnh bố cục hiển thị.

Không được:

- Thay đổi loại website.
- Thay đổi Landing Page.
- Thêm chức năng thương mại điện tử.

Mục tiêu cuối cùng:

Người dùng khi truy cập LyliShop sẽ có cảm giác trải nghiệm và cách hiển thị tương tự website tham khảo, nhưng toàn bộ nội dung, hình ảnh và thương hiệu đều là của LyliShop.
