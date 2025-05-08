import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#93305D',
          light: '#A94570',
          dark: '#7D2950',
          50: '#FCF5F8',
          100: '#F9EBF1',
          200: '#F0CDE0',
          300: '#E7AFCF',
          400: '#D973AD',
          500: '#93305D',
          600: '#852B54',
          700: '#7D2950',
          800: '#5A1E3A',
          900: '#2D0F1D',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      spacing: {
        '128': '32rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config; 