/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        'hyperlegible': ['"Atkinson Hyperlegible"', 'sans-serif'],
        'noto': ['"Noto Sans Display"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Keeps the existing plugin
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari, and Opera
        },
      });
    },
  ],
};

