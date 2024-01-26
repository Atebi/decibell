/** @type {import('tailwindcss').Config} */

// import { gradient_primary } from "tailwindcss/colors";
import { transparent } from "tailwindcss/colors";

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      comfortaa: ["var(--font-comfortaa)"],
      poppins: ["var(--font-poppins)"],
    },
    backgroundImage: {
      "gradient-primary":
        "linear-gradient(to right bottom,  rgb(255,196,0, 0.8), rgb(255, 0, 49), rgb(255, 0, 161))",
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
  colors: {
    // primary: gradient_primary,
    transparent: transparent,
    white: "#ffff",
    darkBlue: "#001A41",
    blueGrey: "#697694",
    blueLightGrey: "#BBC8D4",
    black: "#08090D",
    blackish: "#333333",
    grey: "#808080",
    lightGrey: "#A1A1A1",
    yellow: "#FFB200",
    whiteShade: "#FaFaFa",
    red: "#FF0031",
  },
};
export const plugins = [];
