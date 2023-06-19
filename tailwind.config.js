module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: 'PatsySans, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
    screens: {
      xs: '360px',
      sm: '640px',
      md: '720px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      spacing: {
        0.75: '0.19rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  content: [
    './public/index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}',
    './src/**/*.svg',
  ],
  purge: ['./src/**/*.{vue,js,jsx,ts,tsx}', './src/**/*.svg'],
};
