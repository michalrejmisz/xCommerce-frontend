/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    // 1080 , 720, 900
    screens: {
      sm: '520px',
      md: '720px',
      lg: '900px',
      xl: '1080px',
      xxl: '1600px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'gray-dropdown' : '#f5f5f5',
        'gray-border' : '#cccccc',
        'gray-banner-hover' : '#333333',
        'gray-banner-font' : '#4d4d4d',
        'gray-banner-hover-button' : '#EBEBEB',
        // 'gray-span' : '#c9c9c9',
      }
    },
  },
  plugins: [],
}
