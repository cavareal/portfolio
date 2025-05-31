/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          'bg-milkyway': '#071114',
          'transparentWhite': 'rgba(255, 0, 255, 0.1)',
      },
      fontFamily: {
        milkyway: ['milkyway', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'scroll-left': 'scrollLeft 40s linear infinite',
        'defilement': 'defilement 30s linear infinite',
        'defilement2': 'defilement2 30s linear infinite',
      },
      keyframes: {
        scrollLeft: {
          '10%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        defilement: {
          '0%': { marginLeft: '0%' },
          '100%': { marginLeft: '-100%' },
        },
        defilement2: {
          '0%': { marginLeft: '100%' },
          '100%': { marginLeft: '0%' },
        },
      },
    },
  },
  plugins: [],
}
