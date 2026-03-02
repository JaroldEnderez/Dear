"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LetterContent, LOREM_LETTERS } from "./LetterContent";
import { ChevronRight } from "lucide-react";

const TOTAL_LETTERS = 5;

export function LetterReveal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((i) => (i + 1) % TOTAL_LETTERS);
  };

  return (
    <motion.div
      className="min-h-screen pt-20 pb-24 px-4 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-xl flex-1 flex flex-col">
        <motion.div
          className="paper rounded-sm p-10 md:p-14 min-h-[60vh] flex flex-col cursor-pointer select-none touch-manipulation"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={goNext}
        >
          <AnimatePresence mode="wait">
            <LetterContent
              key={currentIndex}
              content={LOREM_LETTERS[currentIndex]}
              letterIndex={currentIndex}
            />
          </AnimatePresence>
        </motion.div>

        <div className="mt-6 flex items-center justify-between text-ink/60">
          <span className="text-sm">
            {currentIndex + 1} / {TOTAL_LETTERS}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="flex items-center gap-1 text-sm font-medium text-rose hover:text-ink transition-colors"
          >
            Next letter
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
