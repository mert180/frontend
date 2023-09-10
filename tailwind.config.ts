import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          default: "#694281",
          lighter: "#BBA4D4",
          darker: "#4A2367",
          darkest: "#1C062C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
