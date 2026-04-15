/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-background",
    "text-foreground",
    "bg-card",
    "text-primary",
    "border-white/5",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
