"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FloatingHearts } from "@/components/FloatingHearts";
import Image from "next/image";
import type { Letter } from "@/data/letters";

export function EnvelopeCover({ onOpen }: { onOpen: () => void }) {
  const [phase, setPhase] = useState<"idle" | "opening">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("opening");
    timeoutRef.current = setTimeout(() => onOpen(), 1600);
  };

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  return (
    <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blush/30 to-cream cursor-pointer select-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={handleClick}
          >
            <FloatingHearts />
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              {/* Envelope wrapper - moves up and fades when opening */}
              <motion.div
                className="relative"
                animate={
                  phase === "opening"
                    ? { y: -120, opacity: 0, scale: 0.9 }
                    : { y: 0, opacity: 1, scale: 1 }
                }
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Envelope body */}
                <motion.div
                  className="relative w-56 h-36 rounded-sm overflow-visible"
                  animate={
                    phase === "opening"
                      ? { y: [0, -12, -80], rotateX: [0, 8, 45] }
                      : { y: [0, -8, 0], rotateX: 0 }
                  }
                  transition={
                    phase === "opening"
                      ? { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                      : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }
                  style={{ transformOrigin: "bottom center" }}
                >
                  <div className="absolute inset-0 bg-parchment border border-rose/40 rounded-sm shadow-md" />
                  {/* Flap - folds back when opening */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 overflow-hidden rounded-t-sm"
                    style={{
                      height: "50%",
                      transformOrigin: "top center",
                    }}
                    animate={
                      phase === "opening"
                        ? { rotateX: -120, opacity: 0.9 }
                        : { rotateX: 0, opacity: 1 }
                    }
                    transition={{
                      duration: 1,
                      delay: phase === "opening" ? 0.2 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 h-full bg-rose/30 border border-rose/40"
                      style={{
                        clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                      }}
                    />
                  </motion.div>
                  {/* Seal */}
                  <motion.div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-rose/90 flex items-center justify-center shadow-lg z-10 border-2 border-rose/60"
                    animate={
                      phase === "opening"
                        ? { scale: [1, 1.2, 0], opacity: [1, 1, 0] }
                        : { scale: 1, opacity: 1 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: phase === "opening" ? 0.4 : 0,
                    }}
                  >
                    <Image
                      src={sealPhoto}
                      alt="Our photo"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              {phase === "idle" && (
                <motion.p
                  className="mt-8 text-ink/70 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  Click to open
                </motion.p>
              )}
            </motion.div>
          </motion.div>
  );
}
