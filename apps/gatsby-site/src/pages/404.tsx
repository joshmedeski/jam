import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Page Not Found (404)" />
      <div className="p-12 mx-auto max-w-7xl text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          Page Not Found (404)
        </h1>

        <p className="pt-4">
          Whoops, you just visited a page that doesn't exist... my bad.
        </p>

        <div className="flex justify-center mt-8">
          <div className="inline-flex shadow rounded-md">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
            >
              Read Blog
            </Link>
          </div>
          <div className="inline-flex ml-3">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
