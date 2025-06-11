/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0052CC',       // Bleu principal (remplace indigo-600)
        primaryLight: '#E6F0FF',  // Bleu clair (remplace indigo-100)
        primaryBorder: '#003FA3', // Optionnel pour les bordures
      },
    },
  },
  plugins: [],
};
