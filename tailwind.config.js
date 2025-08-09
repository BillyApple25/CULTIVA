/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabinet: ['var(--font-cabinet)', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        // Optionnel : tes couleurs de la charte graphique
        primary: "#14230B",     // Vert foncé
        secondary: "#D3FA53",   // Jaune
        cacao: "#40200C",       // Marron
        lightGray: "#E9E9E9",
      }
    },
  },
  plugins: [],
}
