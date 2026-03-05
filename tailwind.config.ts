import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1E40AF",
          muted: "rgba(37,99,235,0.12)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          secondary: "var(--surface-2)",
        },
      },
      animation: {
        "float-1": "floatOrb1 14s ease-in-out infinite",
        "float-2": "floatOrb2 11s ease-in-out infinite 2s",
        "pulse-slow": "pulse 6s ease-in-out infinite",
      },
      keyframes: {
        floatOrb1: {
          "0%,100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(28px, -22px) scale(1.06)" },
          "66%": { transform: "translate(-14px, 12px) scale(0.96)" },
        },
        floatOrb2: {
          "0%,100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-20px, 18px) scale(1.04)" },
        },
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-40": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
