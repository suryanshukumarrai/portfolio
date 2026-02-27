/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        night: "rgb(var(--night) / <alpha-value>)",
        ash: "rgb(var(--ash) / <alpha-value>)",
        frost: "rgb(var(--frost) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        neon: "rgb(var(--neon) / <alpha-value>)",
        glow: "rgb(var(--glow) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glass: "0 10px 30px rgba(8, 12, 24, 0.45)",
        glow: "0 0 30px rgba(125, 211, 252, 0.35)"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        "subtle-glow": "radial-gradient(circle at 20% 20%, rgba(125, 211, 252, 0.18), transparent 60%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
