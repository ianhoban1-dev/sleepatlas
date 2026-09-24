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
          haze: "#B7CBC8",     // secondary text ON Deep Sleyp surfaces. 5.78 on deep, 8.89 on charcoal
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
        /* Editorial serif for headlines only: the Granola / Claude move that
           makes a calm brand read as considered rather than templated. */
        serif: ["'Instrument Serif'", "'Iowan Old Style'", "Georgia", "serif"],
        display: ["'Schibsted Grotesk Variable'", "'Schibsted Grotesk'", "system-ui", "sans-serif"],
        body: ["'Hanken Grotesk Variable'", "'Hanken Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono Variable'", "'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      borderRadius: {
        soft: "1.25rem",
        panel: "1.75rem",
      },
      maxWidth: {
        site: "76rem",
      },
      boxShadow: {
        /* Quiet elevation. FIELD lifts things with light, not with dark haloes. */
        card: "0 1px 2px -1px rgba(48,72,71,0.06), 0 8px 24px -16px rgba(48,72,71,0.18)",
        lift: "0 2px 4px -2px rgba(48,72,71,0.08), 0 18px 40px -24px rgba(48,72,71,0.28)",
        glow: "0 8px 24px -12px rgba(93,135,134,0.45)",
        press: "0 2px 6px -3px rgba(48,72,71,0.25)",
        /* Product-frame depth: a layered, low-contrast stack like a real
           app window sitting on the page. */
        frame:
          "0 0 0 1px rgba(48,72,71,0.06), 0 2px 4px -2px rgba(48,72,71,0.06), 0 24px 48px -24px rgba(48,72,71,0.22), 0 64px 96px -48px rgba(48,72,71,0.18)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.12)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 0.9, 0.28, 1) both",
        "pulse-slow": "pulseSlow 6s ease-in-out infinite",
        equalize: "equalize 1.8s ease-in-out infinite",
        settle: "settle 1.1s cubic-bezier(0.22, 0.9, 0.28, 1) both",
        drift: "drift 22s ease-in-out infinite alternate",
        "wave-flow": "waveFlow 14s linear infinite",
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
        drift: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "100%": { transform: "translate3d(4%, -3%, 0) scale(1.08)" },
        },
        waveFlow: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
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
