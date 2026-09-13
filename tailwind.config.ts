import type { Config } from "tailwindcss";

/**
 * FIELD design tokens.
 * Palette names are the brand's own language — use them, not "the green one".
 * Contrast ratios in comments are measured against FIELD CREAM (#F5F3ED).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ---- Surfaces, lightest ground upward ---- */
        cream: "#F5F3ED",      // FIELD CREAM — the page ground, never pure white
        paper: "#FBFAF6",      // one step up: raised panels, mobile nav
        card: "#FFFFFF",       // card fill
        mist: "#EDF2F0",       // MIST — dividers, form fields, subtle separation
        soft: "#D9E4E2",       // SOFT SAGE — selected states, input fills, session areas

        /* ---- Brand ---- */
        sage: {
          DEFAULT: "#5D8786",  // FIELD SAGE — identity and surfaces. 3.59 on cream: never small text
          soft: "#8FB3B2",     // dark-UI tint only
          deep: "#3F6362",     // 5.97 — links, hover, accented text on light
        },
        deep: {
          DEFAULT: "#304847",  // DEEP FIELD — body text, dark UI, primary button ground. 8.83
          ink: "#243837",      // pressed / deepest
        },
        charcoal: "#202827",   // CHARCOAL — maximum contrast, used sparingly

        /* ---- Text ---- */
        ink: {
          DEFAULT: "#304847",  // 8.83 AAA
          muted: "#4F6663",    // 5.54 AA — secondary body
          faint: "#5B7472",    // 4.52 AA — small labels, still readable
        },

        /* ---- Accent, used carefully ---- */
        sand: {
          DEFAULT: "#C8B99F",  // WARM SAND — fills, rules, premium indicators. 1.74 on cream: never text
          soft: "#DCCFB8",
          ink: "#7A6540",      // 5.03 — the readable form, for premium/bundle labels
        },

        /* ---- Semantic, separate from the brand accent ---- */
        good: "#3F6B59",       // 5.47
        warn: "#9A5A2A",       // 4.89
      },
      fontFamily: {
        display: ["'Schibsted Grotesk'", "system-ui", "sans-serif"],
        body: ["'Hanken Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        soft: "1.25rem",
      },
      boxShadow: {
        /* Quiet elevation. FIELD lifts things with light, not with dark haloes. */
        card: "0 1px 2px -1px rgba(48,72,71,0.06), 0 8px 24px -16px rgba(48,72,71,0.18)",
        lift: "0 2px 4px -2px rgba(48,72,71,0.08), 0 18px 40px -24px rgba(48,72,71,0.28)",
        glow: "0 8px 24px -12px rgba(93,135,134,0.45)",
        press: "0 2px 6px -3px rgba(48,72,71,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 0.9, 0.28, 1) both",
        "pulse-slow": "pulseSlow 6s ease-in-out infinite",
        equalize: "equalize 1.8s ease-in-out infinite",
        settle: "settle 1.1s cubic-bezier(0.22, 0.9, 0.28, 1) both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        equalize: {
          "0%, 100%": { transform: "scaleY(0.3)" },
          "50%": { transform: "scaleY(1)" },
        },
        /* The three-wave settle: each wave arrives from below-left and flattens in. */
        settle: {
          "0%": { opacity: "0", transform: "translate(-16px, 12px) scaleY(0.55)" },
          "60%": { opacity: "1" },
          "100%": { opacity: "1", transform: "translate(0, 0) scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
