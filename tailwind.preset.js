/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aori', 'sans-serif'],
        aori: ['Aori', 'sans-serif'],
      },
      // You can add other typography-related styles here
      fontSize: {
        // Example custom sizes
        'aori-h1': ['2.5rem', { lineHeight: '3rem' }],
        'aori-h2': ['2rem', { lineHeight: '2.5rem' }],
        'aori-body': ['1rem', { lineHeight: '1.5rem' }],
      },
      letterSpacing: {
        'aori-tight': '-0.02em',
        'aori-normal': '0em',
        'aori-wide': '0.02em',
      },
    },
  },
  plugins: [],
} 