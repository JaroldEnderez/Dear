"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Letter } from "@/data/letters";
import TulipBouquet from "./TulipBouquet";

interface EnvelopeProps {
  letter: Letter;
}

export default function Envelope({ letter }: EnvelopeProps) {
  const [open, setOpen] = useState(false);

  // Reset to closed when letter changes
  useEffect(() => {
    setOpen(false);
  }, [letter.id]);

  return (
    <div className="flex justify-center items-center min-h-[60vh] sm:min-h-[70vh] relative">
      {/* Tulips */}
      <TulipBouquet visible={open} />

      <div
        className="relative w-80 h-56 cursor-pointer"
        style={{ perspective: "800px" }}
        onClick={() => setOpen(!open)}
      >
        {/* Letter */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 w-72 bg-white p-6 rounded shadow-lg transition-all duration-700 max-h-[50vh] overflow-y-auto z-10 ${
            open
              ? "-translate-y-[18vh] sm:-translate-y-32 opacity-100"
              : "translate-y-6 opacity-0 pointer-events-none"
          }`}
        >
          <p className="text-sm text-ink/90 leading-relaxed">
            {letter.content}
          </p>
        </div>

        {/* Envelope body */}
        <div className="absolute bottom-0 w-full h-40 bg-parchment border border-rose/40 rounded-b-md shadow-md" />

        {/* Flap */}
        <div
          className="absolute top-0 w-full h-40 rounded-t-md shadow-sm transition-transform duration-700 ease-out"
          style={{
            background:
              "linear-gradient(180deg, rgba(232,213,210,0.98) 0%, rgba(201,169,166,0.5) 100%)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            transformOrigin: "top center",
            transform: open ? "rotateX(-180deg)" : "rotateX(0deg)",
            backfaceVisibility: "hidden",
          }}
        />

        {/* ❤️ Photo Seal (ONLY when closed) */}
        {!open && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-rose-300 shadow-lg z-20">
            <Image
              src={letter.photo}
              alt="Our memory"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}