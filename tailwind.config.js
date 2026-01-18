/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Pastel solarpunk palette
        'pastel-pink': {
          50: '#fef7f9',
          100: '#fdeef3',
          200: '#fbd5e5',
          300: '#f8b4cf',
          400: '#f287ad',
          500: '#e85d8c',
          600: '#d43d6d',
          700: '#b22d55',
          800: '#942847',
          900: '#7c263f',
        },
        'pastel-purple': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        'pastel-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'pastel-cream': {
          50: '#fffbf5',
          100: '#fff7eb',
          200: '#ffefd6',
          300: '#ffe4bd',
          400: '#ffd699',
          500: '#ffc266',
        },
      },
      fontFamily: {
        'display': ['"Cormorant Garamond"', 'serif'],
        'body': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'solarpunk-gradient': 'linear-gradient(135deg, #fdeef3 0%, #f3e8ff 50%, #dcfce7 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(253,238,243,0.9) 0%, rgba(243,232,255,0.8) 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(232, 93, 140, 0.15)',
        'card': '0 8px 30px -4px rgba(168, 85, 247, 0.12)',
      },
    },
  },
  plugins: [],
}
