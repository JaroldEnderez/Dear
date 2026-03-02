"use client";

import { useState } from "react";
import { EnvelopeCover } from "@/components/EnvelopeCover";
import { ZigzagPods } from "@/components/ZigzagPods";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {!isOpen ? (
        <EnvelopeCover onOpen={() => setIsOpen(true)} />
      ) : (
        <ZigzagPods />
      )}
    </main>
  );
}
