/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        // 'whitish': 'aliceblue'
        'custom-color': '#0d6efd',
      },
    },
  },
  plugins: [],
}

