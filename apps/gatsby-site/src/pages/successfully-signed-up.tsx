import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import JoshGivingThumbsUp from "./josh-thumbs-up.jpg"

const UsesPage: React.FC = () => {
  return (
    <Layout disableCta>
      <SEO
        title="Email Subscription Successful"
        description={""}
        thumbnail={""}
      />
      <div className="p-12 mx-auto max-w-7xl">
        <div className="flex flex-col items-center sm:flex-row">
          <div>
            <img
              src={JoshGivingThumbsUp}
              alt="Josh giving a thumbs up"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="px-4 py-12 mx-auto text-center max-w-7xl">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              ✅ Successfully Signed Up!
            </h1>

            <p className="max-w-lg pt-4 mx-auto">
              Thanks for signing up for my email newsletter. You'll be getting
              my latest blog posts and updates in your email inbox soon.
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
        </div>
      </div>
    </Layout>
  )
}

export default UsesPage
