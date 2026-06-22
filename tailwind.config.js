/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        navy: "#061B3A",
        gold: "#D4AF37",
        ivory: "#F5F1E8",
        mist: "#A7A7A7",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Arial", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 24px 70px rgba(0, 0, 0, 0.34)",
        gold: "0 12px 36px rgba(212, 175, 55, 0.16)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 72% 40%, rgba(19, 59, 104, 0.42), transparent 35%), linear-gradient(115deg, #05090e 10%, #061b3a 66%, #03070c 100%)",
      },
    },
  },
  plugins: [],
};
