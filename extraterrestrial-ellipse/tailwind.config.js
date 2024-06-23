/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}', // Füge alle Dateitypen hinzu, die Tailwind-Klassen verwenden könnten
  ],  theme: {
    extend: {},
  },
  plugins: [],
}

