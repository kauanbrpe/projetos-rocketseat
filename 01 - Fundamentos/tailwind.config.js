const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'custom-font': ['"Nome da Sua Fonte"', 'sans-serif'], 
      },
    },
  },
};