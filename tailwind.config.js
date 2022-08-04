/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        // 'white': 'ZZZZZZ 35px 35px rgba(0, 0, 0, 0.25)',
        'soft': [
            '-5px -5px 5px rgba(255, 255, 255, 1)',
            '5px 5px 5px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}