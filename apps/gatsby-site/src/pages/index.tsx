import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHero from "../components/about-hero"
import Posts from "../components/posts"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <AboutHero />
      <Posts posts={posts} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(limit: 6, sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
