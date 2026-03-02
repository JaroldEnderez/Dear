"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const HEARTS = [
  { left: "10%", top: "15%", size: 18, duration: 4, delay: 0 },
  { left: "88%", top: "22%", size: 14, duration: 5, delay: 0.5 },
  { left: "22%", top: "70%", size: 16, duration: 4.5, delay: 1 },
  { left: "75%", top: "65%", size: 12, duration: 3.5, delay: 0.2 },
  { left: "50%", top: "35%", size: 13, duration: 5.5, delay: 1.2 },
  { left: "15%", top: "45%", size: 15, duration: 4, delay: 0.8 },
  { left: "82%", top: "48%", size: 17, duration: 4.2, delay: 0.3 },
  { left: "35%", top: "85%", size: 14, duration: 5, delay: 0.6 },
  { left: "65%", top: "12%", size: 12, duration: 3.8, delay: 1 },
];

export function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {HEARTS.map((heart, i) => (
        <motion.div
          key={i}
          className="absolute text-rose/70 animate-pulse"
          style={{
            left: heart.left,
            top: heart.top,
            width: heart.size,
            height: heart.size,
          }}
          animate={{
            y: [0, -12, 0],
            x: [0, 4, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-full h-full fill-current" />
        </motion.div>
      ))}
    </div>
  );
}
