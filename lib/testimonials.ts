export type Testimonial = {
  name: string;
  handle: string;
  rating: number;
  quote: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mina Tran",
    handle: "@minatrn",
    rating: 5,
    quote:
      "The bear keychain looks even cuter in person. The stitches are super neat and the packaging felt like a little gift to myself.",
    avatar: "/avatars/mina.png",
  },
  {
    name: "Chloe Nguyen",
    handle: "@chloeng",
    rating: 5,
    quote:
      "I ordered a tulip charm for my backpack and it’s perfect. Lightweight, premium feel, and the clasp is sturdy.",
    avatar: "/avatars/chloe.png",
  },
  {
    name: "Sophie Lee",
    handle: "@sophiel",
    rating: 5,
    quote:
      "Fast replies on Instagram and they helped me customize colors for a birthday gift. My friend was obsessed.",
    avatar: "/avatars/sophie.png",
  },
  {
    name: "Hana Park",
    handle: "@hanapark",
    rating: 4,
    quote:
      "The strawberry charm is adorable and the details are so clean. Shipping updates were clear and friendly.",
    avatar: "/avatars/hana.png",
  },
];

