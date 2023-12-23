import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
