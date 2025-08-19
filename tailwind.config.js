/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(0,0,0,0.08)',
      },
      borderRadius: {
        'xl': '1rem',
      },
      colors: {
        'primary-dark': '#283618',
        'primary-light': '#606C38',
        'accent-1': '#DDA15E',
        'accent-2': '#BC6C25',
        background: '#FEFAE0',
        'text-dark': '#283618',
        'text-light': '#606C38',
        muted: '#a1a1aa', // Zinc 400
        border: '#e4e4e7', // Zinc 300
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(to right, #52796F, #52796F)',
      },
    },
  },
  plugins: [],
}; 