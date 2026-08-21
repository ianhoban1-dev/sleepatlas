import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#05070F",
          900: "#090D1A",
          800: "#0C111F",
          700: "#121829",
          600: "#1A2136",
        },
        indigoGlow: {
          DEFAULT: "#7C8AFF",
          soft: "#A5AEFF",
          deep: "#4F5DE8",
        },
        dawn: {
          DEFAULT: "#F5A524",
          soft: "#FFC15E",
        },
        ink: {
          DEFAULT: "#E7EAF4",
          muted: "#98A2B8",
          faint: "#5D6780",
        },
        teal: { glow: "#3FDCC5" },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        bento: "1.25rem",
      },
      boxShadow: {
        glow: "0 12px 40px -12px rgba(124, 138, 255, 0.4), 0 4px 12px -4px rgba(0, 0, 0, 0.5)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 2px 4px -2px rgba(0,0,0,0.5), 0 12px 32px -16px rgba(0,0,0,0.7)",
        lift: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 4px 8px -4px rgba(0,0,0,0.5), 0 20px 48px -20px rgba(124,138,255,0.25), 0 16px 32px -20px rgba(0,0,0,0.8)",
        press: "0 6px 16px -8px rgba(124,138,255,0.5), 0 2px 4px -2px rgba(0,0,0,0.5)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-slow": "pulseSlow 6s ease-in-out infinite",
        equalize: "equalize 1.8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        equalize: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
