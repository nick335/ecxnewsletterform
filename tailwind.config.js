/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        underlineDefault: 'rgba(0,0,0, 0.12)',
        outline: '#3498db'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        varela: ['var(--font-varela)']
      }
    },
  },
  plugins: [],
}
