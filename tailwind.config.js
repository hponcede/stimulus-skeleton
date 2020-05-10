module.exports = {
  purge: {
    mode: "all",
    content: [
      './src/**/*.html',
      './src/**/*.js',
    ],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#333',
      white: '#fff',
	  },
    extend: {
      screens: {
        xs: "320px"
      }
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false,
  }
}
