/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    //Сюда можно вписывать кастомные классы tailwind
    extend: {
      //Для супер маленьких телефон
      screens: {
        mini: '325px',
        'super-mini': '285px',
      },
    },
  },
  plugins: [],
};
