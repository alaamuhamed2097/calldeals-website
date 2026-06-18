import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#172F4F",
        ink: "#0F2745",
        deep: "#0078A0",
        slate: "#64748A",
        slateblue: "#3E526C",
        mist: "#F2FBFE",
        ice: "#CCEFFC",
        mint: "#34C759",
        cyan: {
          DEFAULT: "#00AEEF",
          dark: "#0098D2",
        },
        midnight: {
          DEFAULT: "#0B1F3C",
          light: "#0F2A4A",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1240px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease both",
        "fade-in": "fade-in 0.6s ease both",
        "scale-in": "scale-in 0.5s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
