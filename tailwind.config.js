import designTokens from './data/designTokens.json'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Dynamic colors from CSS custom properties (set by branding API)
        backgroundColor: 'var(--color-background, #FDFAF6)',
        bodyColor: 'var(--color-body, #000000)',
        accentColor1: {
          DEFAULT: 'var(--color-accentColor1, #A75809)',
          50: 'color-mix(in srgb, var(--color-accentColor1, #A75809) 50%, transparent)',
        },
        accentColor2: 'var(--color-accentColor2, #F8F2EC)',
      },
      fontFamily: {
        // Fonts automatically loaded from designTokens.json
        headingFont: [designTokens.fonts.heading, "sans-serif"],
        bodyFont: [designTokens.fonts.body, "sans-serif"],
        defaultSerif: [designTokens.fonts.serif, "serif"],
      },
    },
  },
  plugins: [],
};
