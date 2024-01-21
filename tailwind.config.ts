import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        acodeblack: '#1C1818',
        acodewhite: '#ffffff',
        acodered: '#ff003d',
        acodegray: {
          50: '#f7f7f7',
          100: '#ecebea',
          200: '#d9d8d7',
          300: '#c0bebb',
          400: '#a6a49f',
          500: '#989592',
          600: '#85827f',
          700: '#676461',
          800: '#413f3d',
          900: '#292323',
        },
        acodepoint: '#e31243',
        acodeerror: '#ff114a',
      },
      keyframes: {
        vibration: {
          from: { transform: 'rotate(1deg)' },
          to: { transform: 'rotate(-1deg)' },
        },
      },
      animation: {
        vibration: 'vibration 0.1s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
