import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },

      fontFamily: {
        instrumentSans: ["Instrument Sans", "sans-serif"],
      },

      backgroundImage: {
        heroBg: "url('/images/hero/hero-bg.svg')",
      },
      colors: {
        grey: "#9E9E9E",
        heroBgColor: "#2146A4",
      },
    },
  },
  plugins: [],
};
export default config;
