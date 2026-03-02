"use client";

import { motion, AnimatePresence } from "framer-motion";
import Tulip from "./Tulip";

const BOUQUET = [
  { side: "left", top: "20%", rotate: -50, delay: 0.1 },
  { side: "left", top: "40%", rotate: -50, delay: 0.18 },
  { side: "left", top: "60%", rotate: -50, delay: 0.26 },

  { side: "right", top: "20%", rotate: 50, delay: 0.14 },
  { side: "right", top: "40%", rotate: 50, delay: 0.22 },
  { side: "right", top: "60%", rotate: 50, delay: 0.3 },
];

interface TulipBouquetProps {
  visible: boolean;
}

export default function TulipBouquet({ visible }: TulipBouquetProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {BOUQUET.map((t, i) => (
            <motion.div
              key={i}
              className={`absolute ${
                t.side === "left" ? "-left-6 sm:-left-8" : "-right-6 sm:-right-8"
              }`}
              style={{ top: t.top }}
              initial={{ x: 0 }}
              animate={{ x: t.side === "left" ? -20 : 20 }}
              transition={{ delay: t.delay }}
            >
              <Tulip rotate={t.rotate} delay={t.delay} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}