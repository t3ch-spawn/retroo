/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "-1024": { max: "1024px" },
        "-800": { max: "800px" },
        "-768": { max: "768px" },
        "-600": { max: "600px" },
      },
    },
  },
  plugins: [],
};
