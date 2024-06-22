/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update these paths to include all files where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        green: "#8Bc34a",
        btnBg: "#6a9739",
        bgOverlay: "#00000060",
        border: "#dddddd",
      },
      fontFamily: {
        merriweather: ["Merriweather", "sans-serif"],
        openSans: ["Open-sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
