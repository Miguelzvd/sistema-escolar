/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secundaryDark: "hsl(240, 3%, 20%)",
        secundary: "hsl(240, 3%, 25%)",
        primaryLight: "hsl(240, 3%, 30%)",
        primary: "hsl(240, 3%, 12%)",
        primaryDark: "hsl(240, 3%, 9%)",
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
