import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Disqus } from "gatsby-plugin-disqus"
import { siteMetadata } from "../../gatsby-config"
import styled from "styled-components"
import Title from "../components/title"
import Prose from "../components/prose"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const { title, description, thumbnail } = post.frontmatter
  const disqusConfig = {
    url: `${siteMetadata.siteUrl + location.pathname}`,
    identifier: post.id,
    title,
  }

  return (
    <Layout>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <SEO title={title} description={description} thumbnail={thumbnail} />
        <Title text={title} />

        <Prose>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Prose>
      </article>
      <div className="my-8 bg-gray-100">
        <div className="mx-4">
          <div className="mx-auto max-w-screen-md">
            <div className="px-6 py-2 my-12 bg-white rounded-lg shadow-lg">
              <Disqus config={disqusConfig} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
