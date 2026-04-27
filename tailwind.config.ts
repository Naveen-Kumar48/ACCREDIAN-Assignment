import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: 'var(--color-light-blue)',
          600: 'var(--color-primary-blue)',
          700: 'var(--color-secondary-blue)',
          800: '#1e40af',
        },
        success: {
          500: 'var(--color-success-green)',
        },
        surface: 'var(--color-pure-white)',
        whisper: 'var(--color-light-gray)',
        ink: 'var(--color-pure-black)',
        charcoal: 'var(--color-dark-gray)',
        medium: 'var(--color-medium-gray)',
        border: 'var(--color-border-gray)',
      },
      fontFamily: {
        sans: ['var(--font-circular)', 'Arial', 'sans-serif'],
        display: ['var(--font-circular)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 24px rgba(0, 0, 0, 0.10)',
        'soft-lg': '0 14px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};

export default config;