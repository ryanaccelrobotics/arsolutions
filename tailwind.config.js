module.exports = {
  purge: [
    "./components/**/*.js", 
    "./pages/**/*.js",
    "./layouts/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        arYellow: '#E5C931',
      },
      fontSize: {
        '8xl': ['5.0rem', { lineHeight: '1' }],
        '3xl': ['2.0rem', { lineHeight: '2.25'}],
        'sm': ['0.813rem', { lineHeight: '1.25'}],
      },
      screens: {
        'xs': '375px',
        'mdlg' : '960px',
        'lgxl' : '1140px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
        '5xl': '2400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
