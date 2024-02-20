import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 1024px) { ... }

      xl: "1140px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1950px) { ... }
    },
    extend: {
      screens: {
        xs: { min: "320px", max: "720px" },
        // => @media (min-width: 320px) { ... }
      },
      fontFamily: {
        herofont: ["Oswald, sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
