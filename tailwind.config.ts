import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf8f5",
        parchment: "#f5f0e8",
        ink: "#2c2420",
        rose: "#c9a9a6",
        blush: "#e8d5d2",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-dancing)", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
