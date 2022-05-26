module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,tsx,css}", "./content/**/*.mdx"],
  darkMode: false, // or 'media' or 'class'
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
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
