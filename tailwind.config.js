function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        y2k: {
          bg: withOpacity('--color-bg'),
          surface: withOpacity('--color-surface'),
          card: withOpacity('--color-card'),
          border: withOpacity('--color-border'),
          pink: withOpacity('--color-pink'),
          lightPink: withOpacity('--color-light-pink'),
          silver: withOpacity('--color-silver'),
          paleSilver: withOpacity('--color-pale-silver'),
          textMain: withOpacity('--color-text-main'),
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Syne', 'Inter', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
