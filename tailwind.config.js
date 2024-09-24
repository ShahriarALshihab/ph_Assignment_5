module.exports = {
  theme: {
    extend: {
      backdropFilter: {
        none: 'none',
        blur: 'blur(10px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
