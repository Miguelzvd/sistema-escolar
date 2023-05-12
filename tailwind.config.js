/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "hsl(205, 88%, 30%)",
        primary: "hsl(205, 88%, 22%)",
        primaryDark: "hsl(205, 88%, 16%)",
      },
      width: {
        128: "32rem",
        140: "40rem",
        192: "48rem",
      },
    },
  },
};
