/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
      },
    },
    extend: {
      colors: {
        brand: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
      },
      boxShadow: {
        card: '0 10px 25px -10px rgba(59, 130, 246, 0.15)',
      },
      borderRadius: {
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
};
