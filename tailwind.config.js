/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101114",
        panel: "#17191d",
        line: "#2b2e35",
        brand: "#e11d48",
      },
      boxShadow: {
        soft: "0 16px 45px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
};
