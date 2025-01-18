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
      },
    },
  },
  plugins: [],
};
