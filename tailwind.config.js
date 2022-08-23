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
        accent: "var(--color-accent)",
        "accent-variant": "var(--color-accent-variant)",
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        gray: "var(--color-gray)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        header: "var(--color-blue-900)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
