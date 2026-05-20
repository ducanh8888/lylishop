"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

export function HeroDecor() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.div
        className="absolute left-6 top-10 rounded-full border border-border/70 bg-white/70 p-2 shadow-sm backdrop-blur-md"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="h-4 w-4 text-primary" />
      </motion.div>

      <motion.div
        className="absolute right-8 top-14 rounded-full border border-border/70 bg-white/70 p-2 shadow-sm backdrop-blur-md"
        animate={{ y: [0, 10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Star className="h-4 w-4 text-primary" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 rounded-full border border-border/70 bg-white/70 p-2 shadow-sm backdrop-blur-md"
        animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart className="h-4 w-4 text-primary" fill="currentColor" />
      </motion.div>
    </div>
  );
}
