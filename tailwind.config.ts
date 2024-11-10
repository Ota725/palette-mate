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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        zenkaku: ["var(--font-ZenKakuGothicAntique)", "sans-serif"],
        viga: ["var(--font-Viga)", "sans-serif"],
      },
    },
  },
  darkMode: ["selector", ".dark"],
  plugins: [],
} satisfies Config;
