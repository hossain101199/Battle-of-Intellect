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
        primary: "#013569",
        secondary: "#005693",
        accent: "#FFF8ED",

        info: "#63baff",
        success: "#a4f400",
        warning: "#f87c00",
        error: "#ff5f7f",
      },
    },
  },
  plugins: [],
};
export default config;
