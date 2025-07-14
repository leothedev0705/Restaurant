import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand colors - Sophisticated Mediterranean palette
        'brand': {
          'white': '#FFFFFF',
          'cream': '#FAF7F2',        // Warm cream instead of stone
          'primary': '#A67C52',      // Smoky terracotta-brown (main brand color)
          'sage': '#8B956D',         // Mediterranean sage green
          'accent': '#5B7C99',       // Deep Mediterranean blue
        },
        // Extended smoky terracotta palette
        'terracotta': {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e8ddd0',
          300: '#d7c4ab',
          400: '#c4a382',
          500: '#B5926F',           // Light terracotta
          600: '#A67C52',           // Primary brand color - smoky terracotta
          700: '#8a6344',
          800: '#6f4f37',
          900: '#5a3f2c',
        },
        // Mediterranean sage green palette
        'sage': {
          50: '#f6f7f4',
          100: '#ebeee7',
          200: '#d6dccf',
          300: '#bcc7af',
          400: '#a1b18d',
          500: '#8B956D',           // Primary sage
          600: '#747d59',
          700: '#5d6447',
          800: '#4a503a',
          900: '#3e4230',
        },
        // Deep Mediterranean blue palette
        'mediterranean': {
          50: '#f0f4f8',
          100: '#dce7f0',
          200: '#bdd0e3',
          300: '#94b1d0',
          400: '#698eb8',
          500: '#5B7C99',           // Primary blue
          600: '#4a6680',
          700: '#3e5468',
          800: '#364757',
          900: '#2f3d4a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        // Golden ratio spacing system
        'gr': '1rem',       // 1
        'gr-2': '1.618rem', // φ
        'gr-3': '2.618rem', // φ²
        'gr-4': '4.236rem', // φ³
        'gr-5': '6.854rem', // φ⁴
        'gr-6': '11.09rem', // φ⁵
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 20px 0 rgba(0, 0, 0, 0.15)',
        'hard': '0 8px 30px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config 