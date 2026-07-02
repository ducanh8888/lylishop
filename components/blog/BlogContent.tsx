import Image from "next/image";
import { AlertTriangle, Info, Lightbulb, Quote } from "lucide-react";

import type { BlogContentBlock, BlogPost } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function getBlogSectionId(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function CalloutBlock({ block }: { block: Extract<BlogContentBlock, { type: "callout" }> }) {
  const tone = {
    info: {
      icon: Info,
      className: "border-sky-200 bg-sky-50/80 text-sky-950",
      iconClassName: "text-sky-600",
      label: "Thông tin",
    },
    tip: {
      icon: Lightbulb,
      className: "border-emerald-200 bg-emerald-50/80 text-emerald-950",
      iconClassName: "text-emerald-600",
      label: "Gợi ý",
    },
    warning: {
      icon: AlertTriangle,
      className: "border-amber-200 bg-amber-50/80 text-amber-950",
      iconClassName: "text-amber-600",
      label: "Lưu ý",
    },
  }[block.tone];
  const Icon = tone.icon;

  return (
    <aside
      className={cn("rounded-xl border p-5 shadow-sm", tone.className)}
      aria-label={block.title ?? tone.label}
    >
      <div className="flex gap-3">
        <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", tone.iconClassName)} aria-hidden="true" />
        <div>
          <p className="font-display text-base font-semibold">{block.title ?? tone.label}</p>
          <p className="mt-2 text-sm leading-7 opacity-90">{block.body}</p>
        </div>
      </div>
    </aside>
  );
}

function TableBlock({ block }: { block: Extract<BlogContentBlock, { type: "table" }> }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border/70 bg-white/75 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          {block.caption ? (
            <caption className="caption-bottom px-4 py-3 text-left text-xs leading-5 text-muted-foreground">
              {block.caption}
            </caption>
          ) : null}
          <thead className="bg-rose-50/90 text-foreground">
            <tr>
              {block.headers.map((header) => (
                <th key={header} scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/70">
            {block.rows.map((row, rowIndex) => (
              <tr key={`${row.join("-")}-${rowIndex}`} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className="min-w-36 px-4 py-3 leading-6 text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function ImageBlock({ block }: { block: Extract<BlogContentBlock, { type: "image" }> }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-border/70 bg-white/75 shadow-sm">
      <Image
        src={block.src}
        alt={block.alt}
        width={block.width}
        height={block.height}
        className="h-auto w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 720px"
        loading="lazy"
        quality={58}
      />
      {block.caption ? (
        <figcaption className="border-t border-border/70 px-4 py-3 text-sm leading-6 text-muted-foreground">
          {block.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className={cn("grid gap-3 pl-5", block.ordered ? "list-decimal" : "list-disc")}>
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </List>
      );
    }
    case "table":
      return <TableBlock block={block} />;
    case "quote":
      return (
        <blockquote className="rounded-xl border-l-4 border-primary bg-white/75 p-5 shadow-sm">
          <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
          <p className="mt-3 font-display text-xl font-semibold leading-8 text-foreground">
            {block.quote}
          </p>
          {block.cite ? <cite className="mt-3 block text-sm not-italic text-muted-foreground">{block.cite}</cite> : null}
        </blockquote>
      );
    case "callout":
      return <CalloutBlock block={block} />;
    case "image":
      return <ImageBlock block={block} />;
    default:
      return null;
  }
}

export function BlogContent({ sections }: { sections: BlogPost["sections"] }) {
  return (
    <div className="space-y-12">
      {sections.map((section) => {
        const blocks = section.blocks ?? section.body?.map((text) => ({ type: "paragraph" as const, text })) ?? [];

        return (
          <section key={section.heading} id={getBlogSectionId(section.heading)} className="scroll-mt-24">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {section.heading}
            </h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-muted-foreground sm:text-[1.03rem]">
              {blocks.map((block, index) => (
                <ContentBlock key={`${section.heading}-${index}`} block={block} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
