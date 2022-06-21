/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1em',
      'lg': '2em',
      'xl': '1.25rem',
    },
    colors: {
      'footer': '#0B2776'
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio')
  ],
}
