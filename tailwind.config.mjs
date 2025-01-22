/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
