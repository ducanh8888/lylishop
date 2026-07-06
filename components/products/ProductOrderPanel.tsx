"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { MessageCircle } from "lucide-react";

import type { Product } from "@/lib/products";
import { formatVnd } from "@/lib/format";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function getFieldValue(formData: FormData, fieldName: string) {
  const value = formData.get(fieldName);
  return typeof value === "string" ? value.trim() : "";
}

function createZaloUrl(message: string) {
  return `${SITE.socials.zalo}?text=${encodeURIComponent(message)}`;
}

export function ProductOrderPanel({ product }: { product: Product }) {
  const [sampleError, setSampleError] = useState("");
  const [selectedSample, setSelectedSample] = useState("");
  const firstSampleRef = useRef<HTMLInputElement>(null);
  const noteOptions = [
    product.allowPhotoReference && "Muốn giống ảnh",
    product.allowCustom && "Muốn đổi màu",
    product.allowGiftWrap && "Gói quà",
    product.allowGreetingCard && "Có thiệp",
  ].filter((option): option is string => Boolean(option));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const selectedSample = getFieldValue(formData, "sample");
    const selectedColors = formData
      .getAll("color")
      .map(String)
      .map((value) => value.trim())
      .filter(Boolean);
    const selectedNotes = formData
      .getAll("note")
      .map(String)
      .map((value) => value.trim())
      .filter(Boolean);
    const customNote = getFieldValue(formData, "customNote");
    const sample = product.orderOptions.find((option) => option.id === selectedSample);

    if (!selectedSample) {
      setSampleError("Bạn chọn một mẫu để LyliShop tư vấn đúng sản phẩm nhé.");
      requestAnimationFrame(() => firstSampleRef.current?.focus());
      return;
    }

    setSampleError("");

    const details = [
      `• Sản phẩm: ${product.name}`,
      sample &&
        `• Mẫu: ${sample.name}${sample.price ? ` (${formatVnd(sample.price)})` : ""}`,
      selectedColors.length > 0 && `• Màu: ${selectedColors.join(", ")}`,
      selectedNotes.length > 0 && `• Ghi chú: ${selectedNotes.join(", ")}`,
      customNote && `• Ghi chú thêm: ${customNote}`,
    ].filter(Boolean);

    const message = [
      "Xin chào LyliShop!",
      "",
      "Mình muốn đặt sản phẩm:",
      "",
      ...details,
      "",
      "Mong shop tư vấn giúp mình.",
    ].join("\n");

    window.open(createZaloUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <Card className="mt-6 bg-white/75 p-5 shadow-sm backdrop-blur-md sm:p-6">
      <h2 className="font-display text-xl font-semibold tracking-tight">Tùy chọn đặt hàng</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Chọn mẫu, màu và ghi chú mong muốn. LyliShop sẽ nhận thông tin qua Zalo để tư vấn trước
        khi chốt đơn.
      </p>

      <form className="mt-5 grid gap-5" noValidate onSubmit={handleSubmit}>
        <fieldset
          className="grid gap-3"
          aria-describedby={sampleError ? "product-sample-error" : undefined}
          aria-invalid={sampleError ? "true" : undefined}
        >
          <legend className="text-sm font-medium">Chọn mẫu</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {product.orderOptions.map((option, index) => (
              <label key={option.id} className="cursor-pointer">
                <input
                  ref={index === 0 ? firstSampleRef : undefined}
                  type="radio"
                  name="sample"
                  value={option.id}
                  aria-describedby={sampleError ? "product-sample-error" : undefined}
                  className="peer sr-only"
                  onChange={(event) => {
                    setSelectedSample(event.currentTarget.value);
                    setSampleError("");
                  }}
                />
                <span className="flex min-h-20 flex-col justify-center gap-1 rounded-md border border-border/70 bg-white/75 px-4 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 peer-checked:border-primary/40 peer-checked:bg-primary/10">
                  <span className="font-medium leading-snug text-foreground">{option.name}</span>
                  {option.price ? (
                    <span className="text-xs font-medium text-primary">
                      {formatVnd(option.price)}
                    </span>
                  ) : null}
                  {option.description ? (
                    <span className="text-xs leading-5 text-muted-foreground">
                      {option.description}
                    </span>
                  ) : null}
                </span>
              </label>
            ))}
          </div>
          {sampleError ? (
            <p id="product-sample-error" role="alert" className="text-sm leading-6 text-destructive">
              {sampleError}
            </p>
          ) : null}
          {product.orderOptions.find((option) => option.id === selectedSample)?.isCustom ? (
            <p className="text-sm leading-6 text-muted-foreground">
              Bạn có thể gửi ảnh mẫu hoặc mô tả ý tưởng trong phần ghi chú.
            </p>
          ) : null}
        </fieldset>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium">Chọn màu</legend>
          <div className="flex flex-wrap gap-2">
            {product.availableColors.map((option) => (
              <label key={option} className="cursor-pointer">
                <input type="checkbox" name="color" value={option} className="peer sr-only" />
                <span className="inline-flex min-h-10 items-center rounded-full border border-border/70 bg-white/75 px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 peer-checked:border-primary/40 peer-checked:bg-primary/10">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="grid gap-3">
          <legend className="text-sm font-medium">Ghi chú nhanh</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {noteOptions.map((option) => (
              <label key={option} className="cursor-pointer">
                <input type="checkbox" name="note" value={option} className="peer sr-only" />
                <span className="flex min-h-11 items-center rounded-md border border-border/70 bg-white/75 px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 peer-checked:border-primary/40 peer-checked:bg-primary/10">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-2">
          <label htmlFor="product-custom-note" className="text-sm font-medium">
            Ghi chú thêm
          </label>
          <textarea
            id="product-custom-note"
            name="customNote"
            rows={4}
            placeholder={`Ví dụ:
Muốn giống ảnh số 2
Đổi màu sang hồng
Có gói quà
Có thiệp
Làm theo ảnh gửi`}
            className="resize-none rounded-md border border-input bg-white px-4 py-3 text-sm leading-6 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Đặt hàng qua Zalo
        </Button>
      </form>
    </Card>
  );
}
