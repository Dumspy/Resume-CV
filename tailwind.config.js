/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        a4: '210mm',
      },
      height: {
        a4: '297mm',
      }
    },
  },
  plugins: [],
}
