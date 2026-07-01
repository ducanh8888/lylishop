# LYLISHOP DESIGN SYSTEM SPECIFICATION

Version: 1.0

## Mục Tiêu

Tài liệu này định nghĩa toàn bộ quy chuẩn thiết kế của website LyliShop.

Website tham khảo:

https://lenlyhandmade.shop

Chỉ học:

- Nhịp điệu giao diện.
- Khoảng trắng.
- Bố cục.
- Tính đồng nhất.
- Trải nghiệm người dùng.

Không sao chép:

- Màu sắc.
- Font.
- Icon.
- Logo.
- Hình ảnh.
- Branding.

## Nguyên Tắc Thiết Kế

Website vẫn là Landing Page.

Thiết kế phải:

- Sạch.
- Thoáng.
- Hiện đại.
- Dễ đọc.
- Tập trung vào sản phẩm handmade.
- Tối ưu trải nghiệm người dùng.

## Màu Sắc

Không sử dụng màu của website tham khảo.

Toàn bộ màu phải lấy từ Logo LyliShop.

Màu sắc gồm:

- Primary.
- Secondary.
- Background.
- Surface.
- Border.
- Text.
- Accent.

Nếu chưa có màu thì trích từ logo.

Không tự chọn màu ngẫu nhiên.

## Typography

Toàn website dùng chung một hệ thống.

Bao gồm:

- Heading 1.
- Heading 2.
- Heading 3.
- Paragraph.
- Caption.
- Button.

Không để mỗi trang một kiểu.

## Spacing

Toàn bộ website phải dùng chung spacing.

Khoảng cách giữa các phần phải thống nhất:

- Section.
- Heading.
- Paragraph.
- Button.
- Card.

Không section nào quá chật.

Không section nào quá rộng.

## Grid

Grid phải đồng nhất.

Áp dụng cho:

- Danh mục.
- Sản phẩm.
- Tin tức.
- Review.

Không tự thay đổi số cột nếu không cần thiết.

## Card

Card trên toàn website phải cùng phong cách.

Card gồm:

1. Ảnh.
2. Tiêu đề.
3. Mô tả.
4. CTA.

Các yếu tố phải thống nhất:

- Border radius.
- Shadow.
- Padding.
- Hover.

## Button

Button phải đồng bộ.

Bao gồm:

- Primary Button.
- Secondary Button.
- Text Link.
- Hover.
- Focus.
- Disabled.

Tất cả trạng thái phải thống nhất.

## Form

Form liên hệ phải thống nhất.

Bao gồm:

- Input.
- Textarea.
- Button.
- Label.
- Placeholder.
- Validation.

Form không được tạo chức năng đặt hàng hoặc thanh toán trên website.

## Border Radius

Tất cả các thành phần sau phải cùng phong cách:

- Card.
- Button.
- Input.
- Image.

Không để nơi vuông, nơi khác bo tròn nếu không có lý do thiết kế rõ ràng.

## Shadow

Shadow nhẹ.

Không dùng quá nhiều hiệu ứng.

Shadow chỉ dùng để tạo phân cấp và khả năng quét nội dung tốt hơn.

## Icon

Toàn website chỉ sử dụng một phong cách icon.

Không trộn nhiều bộ icon.

Nếu project đang dùng một thư viện icon chính thì ưu tiên tiếp tục dùng thư viện đó.

## Hình Ảnh

Không tạo ảnh.

Chỉ tạo vùng chứa.

Áp dụng cho:

- Hero.
- Banner.
- Card.
- Review.
- Tin tức.
- Footer.

Người quản trị sẽ thay ảnh thật sau.

Mọi ảnh khi triển khai phải có `alt` phù hợp.

## Animation

Animation phải nhẹ.

Ưu tiên:

- Fade.
- Slide.
- Hover.

Không dùng animation gây rối.

Không dùng animation làm giảm Core Web Vitals hoặc gây khó chịu trên mobile.

## Responsive

Áp dụng cho:

- Desktop.
- Tablet.
- Mobile.

Phải giữ đúng:

- Thứ tự.
- Khoảng cách.
- Trải nghiệm.

Không bỏ section trên mobile nếu specification yêu cầu hiển thị.

## Accessibility

Ưu tiên:

- Độ tương phản tốt.
- Font dễ đọc.
- Button dễ bấm.
- Khoảng cách hợp lý.
- Hỗ trợ bàn phím.
- Alt cho hình ảnh.
- ARIA khi cần.

Không dùng màu hoặc hiệu ứng làm giảm khả năng đọc.

## SEO UI

Không được thiết kế gây ảnh hưởng SEO.

Yêu cầu:

- Heading đúng cấp.
- Ảnh có alt.
- Lazy load ảnh ngoài vùng quan trọng.
- Responsive.
- Tối ưu Core Web Vitals.

Không dùng layout làm che khuất nội dung chính hoặc tạo layout shift lớn.

## Component Design

Các component phải dùng cùng ngôn ngữ thiết kế:

- Header.
- Hero.
- Category Card.
- Product Card.
- Review Card.
- Blog Card.
- Footer.

Không để mỗi component có một phong cách riêng.

## Không Được Phép

Không được:

- Sao chép giao diện từng pixel.
- Copy CSS.
- Copy màu.
- Copy hình.
- Copy icon.
- Copy typography.
- Copy hiệu ứng.

Chỉ học cách tổ chức bố cục và trải nghiệm.

## Yêu Cầu Đối Với AI

Trước khi chỉnh sửa bất kỳ trang nào, AI phải đọc:

- `docs/00-master-specification.md`.
- `docs/specification/01_REFERENCE_LAYOUT.md`.
- `docs/specification/02A_COMPONENT_LAYOUT.md`.
- `docs/specification/02B_CONTENT_STRUCTURE.md`.
- `docs/specification/02C_DESIGN_SYSTEM.md`.

Sau đó mới được phép sửa giao diện.

## Điều Kiện Hoàn Thành

Sau khi triển khai:

- [ ] Toàn bộ website đồng bộ.
- [ ] Mọi trang có cùng ngôn ngữ thiết kế.
- [ ] Trải nghiệm người dùng tương tự website tham khảo.
- [ ] Vẫn giữ nguyên nhận diện thương hiệu LyliShop.
- [ ] Không thay đổi loại website.
- [ ] Không thay đổi Landing Page.
- [ ] Không thêm chức năng thương mại điện tử.

Đây là tài liệu chuẩn về Design System của toàn bộ dự án.
