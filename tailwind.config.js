const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    },
  },
  // darkMode: "",  // Modo oscuro activado con la clase "dark"
  plugins: [nextui()],  // Integración con NextUI
};
