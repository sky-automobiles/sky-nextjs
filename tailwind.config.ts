import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#303a9b",
        primaryRed: "#EA3A51",
        primaryGray: "#313131",
        secondaryRed2: "#EA3A51",
        secondaryGray2: "#707070",
        secondaryGray3: "#EBEBEB",
        secondaryGray4: "#F8F8F8",
        tertiary: "#333333",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        shake: "shake infinite 0.1s linear",
        "custom-spin": "customSpin 10s linear infinite", // Custom slow spin
      },
      keyframes: {
        shake: {
          "0%": { marginLeft: "0rem" },
          "25%": { marginLeft: "1rem" },
          "75%": { marginLeft: "-1rem" },
          "100%": { marginLeft: "0rem" },
        },
        customSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
