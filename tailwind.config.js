/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        blue_gray: {
          800: '#374151',
        },
        green: {
          500: '#10b981',
        },
        red: {
          500: '#ef4444',
          600: '#dc2626',
        },
        teal: {
          700: '#116961',
        },
        gray: {
          100: '#f4f6f9',
          200: '#e0e0e0',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#718ebf',
          600: '#4b5563',
          700: '#374151',
          800: '#232323',
          900: '#111827',
        },
      },
      boxShadow: {
        card: '0px 1px 2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}