/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      accent: {
        DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
        variant: 'rgb(var(--color-accent-variant) / <alpha-value>)',
        front: 'rgb(var(--color-accent-front) / <alpha-value>)',
        2: 'rgb(var(--color-accent-2) / <alpha-value>)',
      },
      body: {
        DEFAULT: 'rgb(var(--color-body) / <alpha-value>)',
        front: 'rgb(var(--color-body-front) / <alpha-value>)',
        frontSoft: 'rgb(var(--color-body-front-soft) / <alpha-value>)',
      },
      section: {
        DEFAULT: 'rgb(var(--color-section) / <alpha-value>)',
        front: 'rgb(var(--color-section-front) / <alpha-value>)',
        frontSoft: 'rgb(var(--color-section-front-soft) / <alpha-value>)',
      },
      surface: {
        DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
        front: 'rgb(var(--color-surface-front) / <alpha-value>)',
        frontSoft: 'rgb(var(--color-surface-front-soft) / <alpha-value>)',
      },
      header: {
        DEFAULT: 'rgb(var(--color-header) / <alpha-value>)',
        front: 'rgb(var(--color-header-front) / <alpha-value>)',
        frontSoft: 'rgb(var(--color-header-front-soft) / <alpha-value>)',
        frontHover: 'rgb(var(--color-header-front-hover) / <alpha-value>)',
      },
      footer: {
        DEFAULT: 'rgb(var(--color-footer) / <alpha-value>)',
        front: 'rgb(var(--color-footer-front) / <alpha-value>)',
        frontSoft: 'rgb(var(--color-footer-front-soft) / <alpha-value>)',
        frontHover: 'rgb(var(--color-footer-front-hover) / <alpha-value>)',
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
