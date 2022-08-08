/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-variant": "var(--color-primary-variant)",
        secondary: "var(--color-secondary)",
        "secondary-variant": "var(--color-secondary-variant)",
        dark: "var(--color-dark)",
        gray: "var(--color-gray)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
