/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // Custom extra small breakpoint for small phones like iPhone SE
      xs: "375px", // min-width: 375px

      // Default Tailwind breakpoints (mobile-first)
      sm: "640px", // min-width: 640px
      md: "768px", // min-width: 768px
      lg: "1024px", // min-width: 1024px
      xl: "1280px", // min-width: 1280px
      "2xl": "1536px", // min-width: 1536px

      // ✅ Max-width breakpoints for targeting smaller than a certain size
      "max-xs": { max: "374px" }, // max-width: 374px (smaller than xs)
      "max-sm": { max: "639px" }, // max-width: 639px (smaller than sm)
      "max-md": { max: "767px" }, // max-width: 767px (smaller than md)
      "max-lg": { max: "1023px" }, // max-width: 1023px (smaller than lg)
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        gold: "#FFD45C",
        bronze: "#A97C50",
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(90deg, #FFD45C 0%, #A97C50 52.5%, #FFD45C 100%)",
        "custom-gradient":
          "linear-gradient(to bottom, rgba(52, 52, 52, 0.64) 16%, rgba(36, 36, 36, 0.48) 32%, rgba(15, 15 , 15, 0.32) 48%, rgba(8, 8, 8, 0.16) 64%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.1) 100%)",
        "white-glass-gradient":
          "linear-gradient(90.2deg, rgba(255, 255, 255, 0.3) 0.07%, rgba(255, 255, 255, 0.2) 97%)",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
