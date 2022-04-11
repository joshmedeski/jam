const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./**/*.{tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.blue,
          light: colors.blue['500'],
          dark: colors.blue['300']
        },
        secondary: {
          ...colors.emerald,
          light: colors.emerald['500'],
          dark: colors.emerald['300']
        },
        gray: {
          ...colors.neutral,
          800: '#222222',
          900: '#1e1e1e'
        },
        theme: {
          light: '#ffffff',
          dark: '#050b0d'
        }
      },
      transitionProperty: {
        width: 'width'
      },
      typography: (theme) => ({
        DEFAULT: {
          a: {
            color: theme('colors.primary.light'),
            '&:hover': {
              color: '#A78BFA'
            }
          }
        },

        dark: {
          css: {
            color: theme('colors.gray.300'),
            blockquote: {
              color: theme('colors.gray.300')
            },
            a: {
              color: theme('colors.primary.dark'),
              '&:hover': {
                color: '#A78BFA'
              }
            },
            code: {
              backgroundColor: theme('colors.blue.700'),
              paddingLeft: '5px',
              paddingRight: '5px',
              borderRadius: '4px'
            },
            svg: {
              color: theme('colors.gray.100')
            },

            h1: {
              color: theme('colors.gray.300')
            },
            h2: {
              color: theme('colors.gray.300')
            },
            h3: {
              color: theme('colors.gray.300')
            },
            h4: {
              color: theme('colors.gray.300')
            },
            h5: {
              color: theme('colors.gray.300')
            },
            h6: {
              color: theme('colors.gray.300')
            },

            strong: {
              color: theme('colors.gray.300')
            },

            code: {
              color: theme('colors.gray.300')
            },

            figcaption: {
              color: theme('colors.gray.500')
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
