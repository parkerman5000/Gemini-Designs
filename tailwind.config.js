/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Light elegant palette
        'blush': '#F8E8E8',
        'rose': '#D4A5A5',
        'cream': '#FDF8F5',
        'charcoal': '#374151',
        'mpower-blue': '#2563EB',
        'mpower-orange': '#F97316',
        'sage': '#9CAF88',
      },
      fontFamily: {
        'script': ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
