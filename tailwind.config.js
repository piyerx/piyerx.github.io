/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        display: ['Bonheur Royale', 'cursive'],
      },
      boxShadow: {
        'glow-subtle': '0 0 20px 5px rgba(255, 255, 255, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in-out',
        'fade-out': 'fadeOut 0.7s ease-in-out forwards',
        'grain-flicker': 'grainFlicker 8s steps(10) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'background-pan': 'backgroundPan 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, visibility: 'hidden' },
        },
        grainFlicker: {
          '0%, 100%': { opacity: 0.07 },
          '50%': { opacity: 0.1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(1rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        backgroundPan: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        }
      }
    },
  },
  plugins: [],
}