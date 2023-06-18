/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': 'Inter'
      },
      colors: {
        'primary': 'rgba(213,52,58)'
      },
      screens: {
        'ssm': '360px'
      }
    },
  },
  plugins: [],
}
