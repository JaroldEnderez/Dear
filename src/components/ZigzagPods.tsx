"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Pod from "@/components/Pod";
import Envelope from "@/components/Envelope";
import { FloatingHearts } from "@/components/FloatingHearts";
import { letters } from "@/data/letters";

export function ZigzagPods() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLetter = letters[selectedIndex];

  return (
    <motion.main
      className="relative min-h-screen bg-blush/30 overflow-x-hidden flex flex-col md:flex-row pl-2 pr-2 sm:pl-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <FloatingHearts />

      {/* Sidebar: header + pods */}
      <aside className="w-full md:w-16 sm:w-20 md:w-24 shrink-0 flex flex-row md:flex-col items-center justify-center md:justify-start gap-4 sm:gap-6 py-4 sm:py-8 md:py-12">
        <h1 className="text-[#6b2d3a] font-serif text-base sm:text-lg md:text-xl font-semibold tracking-wide text-center mb-0 sm:mb-1 break-words max-w-[8rem] sm:max-w-none">
          My Dear Alexandra
        </h1>
        {letters.map((letter, index) => (
          <Pod
            key={letter.id}
            letter={letter}
            onClick={() => setSelectedIndex(index)}
            isSelected={index === selectedIndex}
          />
        ))}
      </aside>

      {/* Center: envelope that opens to reveal letter */}
      <div className="flex-1 min-w-0 flex items-center justify-center min-h-[60vh] md:min-h-screen py-6 sm:py-12 px-1 sm:px-0">
        <motion.div
          key={selectedIndex}
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {selectedLetter && <Envelope letter={selectedLetter} />}
          <p className="mt-6 text-ink/70 text-sm font-medium">{selectedLetter?.title}</p>
        </motion.div>
      </div>
    </motion.main>
  );
}
