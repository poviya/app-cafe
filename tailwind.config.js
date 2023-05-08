/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem',
        '7xl': '7rem',
      },
      height: {
        '112': '28rem',
        '128': '32rem',
        '160': '38rem',
      },
      width: {
        '112': '28rem',
        '128': '32rem',
        '160': '38rem',
      },
     colors: {
      primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#027b2d',
          600: '#006524',
          700: '#02501e',
          800: '#115e59',
          900: '#042f2e',
      },
      secondary: {
        50: '#f9fafb',
        100: '#e8eaed', 
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
          500: '#8a96a3',
          600: '#3571a3',
        700: '#374151',
        800: '#374151',
        900: '#111827',
      },
      background: {
        dark: '#161618', //18181b
        light: '#f4f4f4',
      },
      other: {
        whatsapp1: '#25d366',
        whatsapp2: '#1db154',
      },
      tertiary: {
        500: '#ff2a59'
      }
     }
    },

  },
  plugins: [],
}
