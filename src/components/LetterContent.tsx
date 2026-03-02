"use client";

import { motion } from "framer-motion";

const LOREM_LETTERS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus. Nulla facilisi. Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, at molestie magna ligula a libero. Integer in magna. Phasellus dolor elit, vestibulum vel, aliquet nec, tempor a, libero.",
  "Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi.",
  "Nam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
];

interface LetterContentProps {
  content: string;
  letterIndex: number;
}

export function LetterContent({ content, letterIndex }: LetterContentProps) {
  const paragraphs = content.split(". ").filter(Boolean).map((s) => (s.endsWith(".") ? s : s + "."));

  return (
    <motion.article
      className="text-ink leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-rose/70 text-sm font-medium tracking-widest uppercase block mb-6">
        Letter {letterIndex + 1}
      </span>
      {paragraphs.map((para, i) => (
        <p key={i} className="mb-4 text-lg md:text-xl">
          {para}
        </p>
      ))}
    </motion.article>
  );
}

export { LOREM_LETTERS };
