/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel-decorative': ['"Cinzel Decorative"', 'serif'],
      },
      colors: {
        primary: '#060B73',
        "cardBg-60": 'rgba(4, 7, 64, 0.6)',
        secondary: '#1877F2',
        "white-90": 'rgba(255, 255, 255, 0.8)',
      }
    },
  },
  plugins: [],
}