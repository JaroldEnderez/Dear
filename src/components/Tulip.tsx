"use client";

import { motion } from "framer-motion";

interface TulipProps {
  rotate?: number;
  delay?: number;
}

export default function Tulip({ rotate = 0, delay = 0 }: TulipProps) {
  return (
    <motion.div
      initial={{ scale: 0, y: 10 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      style={{ rotate }}
      className="text-6xl sm:text-6xl select-none"
    >
      🌷
    </motion.div>
  );
}