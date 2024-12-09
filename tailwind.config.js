/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        christmas: ["Mountains of Christmas", "serif"],
        mon: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF0000",

          secondary: "#FFFFFF",

          accent: "#c6a664",

          neutral: "#1c542d",

          "base-100": "#800000",

          info: "#00BFFF",

          success: "#00ff00",

          warning: "#dc2626",

          error: "#ff0000",
        },
      },
    ],
  },
};
