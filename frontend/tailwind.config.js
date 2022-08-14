/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      rotate: {
        25: '25deg',
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'drop-1': {
          '0%': { bottom: '100%', left: '42%' },
          '100%': { bottom: 'calc(50% - 30px)', left: '15%' },
        },
        'drop-2': {
          '0%': { bottom: '100%', left: '46%' },
          '100%': { bottom: 'calc(50% - 100px)', left: '29%' },
        },
        'drop-5': {
          '0%': { bottom: '100%', right: '42%' },
          '100%': { bottom: 'calc(50% - 30px)', right: '15%' },
        },
        'drop-4': {
          '0%': { bottom: '100%', right: '46%' },
          '100%': { bottom: 'calc(50% - 100px)', right: '29%' },
        },
        'drop-3': {
          '0%': { bottom: '100%', left: 'calc(50% - 88px)' },
          '100%': { bottom: 'calc(50% - 125px)', left: 'calc(50% - 88px)' },
        },
      },
      animation: {
        scale: 'scale 0.5s linear forwards',
        'drop-1': 'drop-1 0.3s linear forwards',
        'drop-2': 'drop-2 0.3s linear 0.1s forwards',
        'drop-3': 'drop-3 0.3s linear 0.2s forwards',
        'drop-4': 'drop-4 0.3s linear 0.3s forwards',
        'drop-5': 'drop-5 0.3s linear 0.4s forwards',
      },
    },
    fontFamily: {
      'courier-prime': 'Courier Prime',
    },
  },
  plugins: [],
};
