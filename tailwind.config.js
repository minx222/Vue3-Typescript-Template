module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screens: {
      '2xl': { min: '1535px' },
      xl: { max: '1535px', min: '1023px' },
      lg: { min: '767px', max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' }
    }
  },
  plugins: []
}
