/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    //Сюда можно вписывать кастомные классы tailwind
    extend: {
      //Для адаптивки
      screens: {
        xll: '1920px',
        lg: '916px',
        md: '768px',
        sm: '576px',
        xs: '376px',
        xss: '325px',
        mini: '275px',
      },
    },
  },
  plugins: [],
};
