/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#859594',
        'custom-blue-darker': '#596666',
      }
    },
  },
  plugins: [],
}

