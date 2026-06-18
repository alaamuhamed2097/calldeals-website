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
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
