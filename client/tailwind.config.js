/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#24354C',
      },
      backgroundImage: {
        'main-bg': 'url(/images/background.webp)',
      },
    },
  },
  plugins: [],
};
