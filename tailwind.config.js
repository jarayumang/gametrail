/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#decdb5",
        secondary: "#0f2224",
        background: "#050505",
        text: "#fafafa",
        accent: "#95aed0",
      },
    },
  },
  plugins: [],
};
