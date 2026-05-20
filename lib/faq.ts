export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "shipping",
    question: "Do you ship nationwide? How long does shipping take?",
    answer:
      "Yes. Most orders are prepared in 1–3 business days. Delivery time depends on your location, but typical shipping is 2–5 business days after dispatch. We’ll send tracking details via your preferred chat app.",
  },
  {
    id: "customization",
    question: "Can I customize colors or add a name tag?",
    answer:
      "Absolutely. You can request color changes, small add-ons (bows, hearts), or a short name tag. Send a message on Instagram/TikTok/Facebook/Zalo with your idea and we’ll confirm the details before making it.",
  },
  {
    id: "handmade",
    question: "Are your keychains fully handmade?",
    answer:
      "Yes. Every piece is crocheted by hand, stitched carefully, and finished with durable hardware. Small variations are normal and are part of the handmade charm.",
  },
  {
    id: "packaging",
    question: "Do you include gift packaging?",
    answer:
      "Yes. We pack every order in a clean, cute, gift-ready style. You can also add a short message for the recipient at no extra cost.",
  },
  {
    id: "order",
    question: "How do I order?",
    answer:
      "Tap any “Order via Instagram” button on the website, or contact us through Instagram, TikTok, Facebook, or Zalo. Share the product name (or screenshot), your color preferences, and your delivery address.",
  },
];

