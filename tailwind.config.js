/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta auténtica riojana
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc2626',    // Rojo riojano principal
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#450a0a',
        },
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',    // Naranja tierra
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',    // Amarillo dorado
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        // Colores específicos de La Rioja
        rioja: {
          tierra: '#dc2626',     // Rojo tierra riojana
          sol: '#f59e0b',        // Naranja del sol
          oro: '#eab308',        // Dorado de los viñedos
          sierra: '#78716c',     // Gris de las sierras
          cielo: '#0ea5e9',      // Azul del cielo riojano
        }
      },
      backgroundImage: {
        'gradient-rioja': 'linear-gradient(135deg, #dc2626 0%, #f59e0b 50%, #eab308 100%)',
        'gradient-tierra': 'linear-gradient(to right, #dc2626, #f59e0b)',
        'gradient-atardecer': 'linear-gradient(to bottom, #f59e0b, #dc2626)',
      },
      boxShadow: {
        'rioja': '0 4px 14px 0 rgba(220, 38, 38, 0.15)',
        'tierra': '0 4px 14px 0 rgba(245, 158, 11, 0.15)',
      }
    },
  },
  plugins: [],
}