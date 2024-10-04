/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"], // Para asegurar que Tailwind escanee los archivos correctos
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};
