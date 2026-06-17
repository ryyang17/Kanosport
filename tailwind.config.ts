import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Basis: fris water/teal-blauw
        brand: {
          50: "#eefcfb",
          100: "#d3f6f4",
          200: "#abeceb",
          300: "#72ddde",
          400: "#37c4c8",
          500: "#1ba7ad",
          600: "#158791",
          700: "#166c75",
          800: "#185860",
          900: "#194a52",
          950: "#093137",
        },
        // Energieke accentkleur (koraal/oranje)
        accent: {
          50: "#fff4ed",
          100: "#ffe6d4",
          200: "#ffc8a8",
          300: "#ffa170",
          400: "#fd6f37",
          500: "#fb4d10",
          600: "#ec3406",
          700: "#c42307",
          800: "#9c1d0e",
          900: "#7e1b0f",
        },
        // Kanopolo-accent
        polo: "#ec3406", // koraal/oranje
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
