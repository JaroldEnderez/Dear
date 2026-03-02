"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface UnopenedEnvelopeProps {
  onClick?: () => void;
}

export function UnopenedEnvelope({ onClick }: UnopenedEnvelopeProps) {
  return (
    <motion.button
      type="button"
      className="relative flex flex-col items-center cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/50 focus-visible:ring-offset-4 rounded"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Open letter"
    >
      <motion.div
        className="relative w-56 h-36 rounded-sm md:w-64 md:h-40"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-parchment border border-rose/40 rounded-sm shadow-md" />
        <div
          className="absolute top-0 left-0 right-0 h-full rounded-t-sm"
          style={{
            background: "linear-gradient(180deg, rgba(232,213,210,0.95) 0%, rgba(201,169,166,0.45) 100%)",
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            borderBottom: "1px solid rgba(201,169,166,0.4)",
          }}
        />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-rose/90 flex items-center justify-center shadow-lg border-2 border-rose/60">
          <Heart className="w-7 h-7 text-white fill-white" />
        </div>
      </motion.div>
      <span className="mt-4 text-ink/60 text-sm">Click to open</span>
    </motion.button>
  );
}
