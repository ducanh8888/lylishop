"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SITE } from "@/lib/site";

const productOptions = [
  { icon: "🧶", label: "Móc khóa Mini" },
  { icon: "🔑", label: "Móc khóa Size S" },
  { icon: "🎁", label: "Móc khóa Size M" },
  { icon: "✨", label: "Móc khóa Size L" },
  { icon: "🌷", label: "Hoa len" },
  { icon: "🧸", label: "Thú bông len" },
  { icon: "💬", label: "Khác" },
];

const colorOptions = [
  "🟣 Tím Pastel",
  "🩷 Hồng Pastel",
  "💙 Xanh Pastel",
  "🤍 Trắng",
  "🤎 Kem",
  "🌈 Khác",
];

function getFieldValue(formData: FormData, fieldName: string) {
  const value = formData.get(fieldName);
  return typeof value === "string" ? value.trim() : "";
}

function createOrderMessage(formData: FormData, selectedProducts: string[]) {
  const name = getFieldValue(formData, "name");
  const phone = getFieldValue(formData, "phone");
  const quantity = getFieldValue(formData, "quantity");
  const note = getFieldValue(formData, "note");
  const selectedColors = formData
    .getAll("color")
    .map(String)
    .map((value) => value.trim())
    .filter(Boolean);

  const details = [
    name && `• Họ tên: ${name}`,
    phone && `• Số điện thoại: ${phone}`,
    selectedProducts.length > 0 && `• Sản phẩm: ${selectedProducts.join(", ")}`,
    selectedColors.length > 0 && `• Màu: ${selectedColors.join(", ")}`,
    quantity && `• Số lượng: ${quantity}`,
    note && `• Ghi chú: ${note}`,
  ].filter(Boolean);

  return [
    "Xin chào LyliShop!",
    "",
    "Mình muốn đặt sản phẩm:",
    "",
    ...details,
    "",
    "Mong shop tư vấn giúp mình.",
  ].join("\n");
}

function createZaloUrl(message: string) {
  return `${SITE.socials.zalo}?text=${encodeURIComponent(message)}`;
}

export function ContactOrderCard() {
  const [productError, setProductError] = useState("");
  const firstProductInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const selectedProducts = formData
      .getAll("product")
      .map(String)
      .map((value) => value.trim())
      .filter(Boolean);

    if (selectedProducts.length === 0) {
      setProductError("Bạn chọn ít nhất một sản phẩm để LyliShop tư vấn đúng mẫu nhé.");
      requestAnimationFrame(() => firstProductInputRef.current?.focus());
      return;
    }

    setProductError("");
    const message = createOrderMessage(formData, selectedProducts);
    window.open(createZaloUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <Card className="h-full bg-background/70 p-5 shadow-sm sm:p-6">
      <h3 className="font-display text-xl font-semibold tracking-tight">
        Đặt hàng nhanh
      </h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Form này chỉ giúp bạn chuẩn bị thông tin trước khi nhắn LyliShop qua Zalo.
        Website không lưu dữ liệu và không xử lý thanh toán.
      </p>

      <form className="mt-6 grid gap-5" noValidate onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium">
            Họ và tên
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Nhập tên của bạn"
            className="h-11 rounded-md border border-input bg-white px-4 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-phone" className="text-sm font-medium">
            Số điện thoại
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Nhập số điện thoại"
            className="h-11 rounded-md border border-input bg-white px-4 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>

        <fieldset
          className="grid gap-3"
          aria-describedby={productError ? "contact-product-error" : undefined}
          aria-invalid={productError ? "true" : undefined}
        >
          <legend className="text-sm font-medium">Sản phẩm muốn đặt</legend>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {productOptions.map((option, index) => (
              <label key={option.label} className="group cursor-pointer">
                <input
                  type="checkbox"
                  name="product"
                  value={option.label}
                  ref={index === 0 ? firstProductInputRef : undefined}
                  aria-describedby={productError ? "contact-product-error" : undefined}
                  aria-invalid={productError ? "true" : undefined}
                  className="peer sr-only"
                  onChange={() => setProductError("")}
                />
                <span className="flex min-h-20 flex-col justify-center gap-2 rounded-md border border-border/70 bg-white/75 px-4 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 peer-checked:border-primary/40 peer-checked:bg-primary/10">
                  <span className="text-xl" aria-hidden="true">
                    {option.icon}
                  </span>
                  <span className="font-medium leading-snug">{option.label}</span>
                </span>
              </label>
            ))}
          </div>
          {productError ? (
            <p id="contact-product-error" role="alert" className="text-sm leading-6 text-destructive">
              {productError}
            </p>
          ) : null}
        </fieldset>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium">Màu sắc yêu thích</legend>
          <div className="flex flex-wrap gap-2">
            {colorOptions.map((option) => (
              <label key={option} className="cursor-pointer">
                <input
                  type="checkbox"
                  name="color"
                  value={option}
                  className="peer sr-only"
                />
                <span className="inline-flex min-h-10 items-center rounded-full border border-border/70 bg-white/75 px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 peer-checked:border-primary/40 peer-checked:bg-primary/10">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-2">
          <label htmlFor="contact-quantity" className="text-sm font-medium">
            Số lượng
          </label>
          <input
            id="contact-quantity"
            name="quantity"
            type="number"
            inputMode="numeric"
            min="1"
            placeholder="Ví dụ: 2"
            className="h-11 rounded-md border border-input bg-white px-4 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-note" className="text-sm font-medium">
            Ghi chú
          </label>
          <textarea
            id="contact-note"
            name="note"
            placeholder="Ví dụ: số lượng, dịp tặng, màu muốn phối, ngày cần nhận..."
            rows={5}
            className="resize-none rounded-md border border-input bg-white px-4 py-3 text-sm leading-6 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-fit">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Đặt hàng qua Zalo
        </Button>
        <p className="text-sm leading-6 text-muted-foreground">
          LyliShop sẽ phản hồi sớm nhất qua kênh bạn chọn; nếu cần gấp, hãy ưu tiên Zalo hoặc điện thoại.
        </p>
      </form>
    </Card>
  );
}
