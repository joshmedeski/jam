const colors = require("tailwindcss/colors");

module.exports = {
  content: ["**/*.tsx"],
  darkMode: "class",

  theme: {
    colors: {
      white: colors.white,
      neutral: { ...colors.slate },
      black: colors.black,

      primary: { ...colors.blue },
      cta: { ...colors.teal },

      error: { ...colors.rose },
      dangerous: { ...colors.orange },
      warning: { ...colors.yellow },
      success: { ...colors.green },
      uncommon: { ...colors.indigo },
    },
    extend: {},
  },

  plugins: [],
};
