/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "hsl(205, 88%, 30%)",
        primary: "hsl(205, 88%, 22%)",
        primaryDark: "hsl(205, 88%, 16%)",
        secundary: "#07416B",
        home: "#1E1E20",
        green: "hsl(122, 70%, 65%)",
      },
      width: {
        128: "32rem",
        140: "40rem",
        160: "46rem",
        192: "48rem",
        224: "56rem",
      },
      height: {
        128: "32rem",
        140: "40rem",
        192: "48rem",
        224: "56rem",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        md: "960px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
