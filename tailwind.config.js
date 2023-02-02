/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    //Сюда можно вписывать кастомные классы tailwind
    extend: {
      height: {
        'mobile-card': '1000px',
      },
    },
  },
  plugins: [],
};
