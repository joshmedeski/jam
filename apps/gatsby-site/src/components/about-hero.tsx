import React from "react"
import { Link } from "gatsby"

const AboutHero = () => {
  return (
    <div className="bg-gray-800 text-white px-4 py-12">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col items-center justify-center sm:flex-row gap-x-4">
          <Link to="/about">
            <img
              src="/josh-sitting-with-man-made-of-legos.jpg"
              alt="Josh sitting with a man made of legos"
              className="mb-6 mr-8 rounded-lg shadow-lg sm:mb-0"
            />
          </Link>

          <div className="max-w-lg">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Hi, I'm Josh 👋
            </h2>

            <p>
              I am fascinated by <strong>technology</strong> and{" "}
              <strong>self-improvement.</strong> In college, I discovered
              authors like Steven Covey and David Allen. I realized I have every
              opportunity to optimize, refine, and redirect my efforts to
              produce the work and life that I most wanted. This website shares
              my personal and professional journey through life.
            </p>

            <Link className="block mt-4 font-bold text-indigo-300" to="/about">
              Read Josh's Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
