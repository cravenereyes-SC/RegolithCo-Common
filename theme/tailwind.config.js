/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Star Citizen Primary - Teals & Cyans
        'sc': {
          'bright': '#00d9ff',      // Bright cyan
          'teal': '#00b8d4',         // Rich teal
          'teal-dark': '#0088a0',    // Deep teal
          'blue-darkest': '#0a1628', // Deep space black-blue
          'blue-dark': '#0f1f3c',    // Dark blue
          'blue-medium': '#1a2f4d',  // Medium blue
          'blue-light': '#2a4166',   // Light blue
          'orange': '#ff6600',       // Bright orange
          'gold': '#ffa500',         // Gold accent
          'red': '#ff3333',          // Warning red
          'green': '#00ff88',        // Success green
          'neutral-white': '#e8eef2',// Off-white
          'neutral-light': '#a8b5c4',// Light gray
          'neutral-medium': '#7a8699',// Medium gray
          'neutral-dark': '#4a5568', // Dark gray
        }
      },
      backgroundColor: {
        'sc-dark': 'linear-gradient(180deg, #0a1628 0%, #0f1f3c 50%, #0a1628 100%)',
      },
      fontFamily: {
        'sc-primary': ['Orbitron', 'Audiowide', 'Courier New', 'monospace'],
        'sc-secondary': ['Inter', 'Segoe UI', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'sc-glow-cyan': '0 0 10px rgba(0, 217, 255, 0.3), 0 0 20px rgba(0, 217, 255, 0.1)',
        'sc-glow-orange': '0 0 10px rgba(255, 102, 0, 0.3), 0 0 20px rgba(255, 102, 0, 0.1)',
        'sc-glow-cyan-lg': '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.2)',
        'sc-elevation': '0 10px 30px rgba(0, 0, 0, 0.5)',
      },
      textShadow: {
        'sc-glow': '0 0 10px rgba(0, 217, 255, 0.5)',
        'sc-glow-orange': '0 0 10px rgba(255, 102, 0, 0.5)',
      },
      borderRadius: {
        'sc': '4px',
        'sc-md': '8px',
      },
      spacing: {
        'sc-xs': '0.25rem',
        'sc-sm': '0.5rem',
        'sc-md': '1rem',
        'sc-lg': '1.5rem',
        'sc-xl': '2rem',
        'sc-2xl': '3rem',
      },
      letterSpacing: {
        'sc': '0.1em',
        'sc-sm': '0.05em',
      },
      animation: {
        'sc-glow': 'sc-glow 2s ease-in-out infinite',
        'sc-scan': 'sc-scan 3s linear infinite',
      },
      keyframes: {
        'sc-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 217, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
        },
        'sc-scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      variants: {
        extend: {
          textShadow: ['hover'],
          boxShadow: ['focus', 'hover'],
        },
      },
    },
  },
  plugins: [],
};
