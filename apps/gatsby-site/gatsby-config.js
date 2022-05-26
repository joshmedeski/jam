module.exports = {
  siteMetadata: {
    title: `Josh Medeski`,
    author: {
      name: `Josh Medeski`,
      summary: `Helping knowledge workers find clarity, focus and joy in work and life.`,
    },
    description: `Helping knowledge workers find clarity, focus and joy in work and life.`,
    siteUrl: `https://www.joshmedeski.com`,
    social: {
      twitter: `joshmedeski`,
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        siteId: "VLMOLRDQ",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/templates/page.tsx`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jsoh Medeski`,
        short_name: `joshmedeski`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#7C3AED`,
        display: `minimal-ui`,
        icon: `content/assets/josh-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `joshmedeski`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
  ],
}
