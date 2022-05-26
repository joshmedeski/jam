module.exports = {
  mode: "jit",
  purge: ["./**/*.{tsx,mdx}"],
  darkMode: false,
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
