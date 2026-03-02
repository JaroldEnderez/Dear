"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import type { Letter } from "@/data/letters";

interface PodProps {
  letter: Letter;
  onClick: () => void;
  isSelected?: boolean;
}

export default function Pod({ letter, onClick, isSelected }: PodProps) {
  return (
    <motion.button
      type="button"
      className={`paper w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose/50 focus-visible:ring-offset-2 transition-transform ${
        isSelected ? "border-rose border-2 shadow-lg scale-105" : "border-rose/40 hover:border-rose/70"
      }`}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      aria-label={`Open ${letter.title}`}
    >
      <Mail className="w-6 h-6 md:w-7 md:h-7 text-rose/80" />
    </motion.button>
  );
}
