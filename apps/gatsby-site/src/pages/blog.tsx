import React from "react"
import { graphql } from "gatsby"
import Title from "../components/title"
import Layout from "../components/layout"
import Posts from "../components/posts"

const BlogPostsPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <Title text="Blog" />
      <Posts posts={posts} />
    </Layout>
  )
}

export default BlogPostsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
