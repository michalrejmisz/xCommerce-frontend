/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      lg: ['22px', '28px'],
    },

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
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },

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
        'green-cart' : 'rgb(17, 158, 0)',
        // 'gray-span' : '#c9c9c9',
        gray: {
          50: '#f5f5f5',
          75: '#f9f9f9',
          100: '#EBEBEB',
          200: '#cccccc',
          250: '#707070FF',
          300: '#4d4d4d',
          400: '#333333',
          'test' : '#dddddd',
          'x' : 'rgb(249, 249, 249)',
        },

        blue: {
          custom: 'rgb(0,130,250)',
          'custom-hover': 'rgb(0, 112, 204)',
        }
      },

      flexBasis: {
        '1/3' : '31.66666666666665%',
        '2/3' : '68.33333333333332%'
      },


    },
  },
  plugins: [],
}
