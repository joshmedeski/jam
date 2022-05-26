import React from "react"
import { useGoal } from "gatsby-plugin-fathom"
import { LockClosedIcon } from "@heroicons/react/solid"

const CtaSection: React.FC = () => {
  return (
    <div className="py-8">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden md:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
          <svg
            className="absolute -ml-3 top-8 left-1/2"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative px-6 py-10 overflow-hidden bg-indigo-600 shadow-xl rounded-2xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-indigo-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-indigo-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Sign up for my newsletter
                </h2>
                <p className="max-w-2xl mx-auto mt-2 text-lg text-indigo-200">
                  Get the latest blog posts and updates strait to your inbox.
                </p>
              </div>

              <form
                action="https://sendy.joshmedeski.com/subscribe"
                method="POST"
                accept-charset="utf-8"
                onSubmit={() => useGoal("XYTTAMX5")}
                className="mt-8 sm:mx-auto sm:max-w-lg sm:flex items-center"
              >
                <div className="flex-1 min-w-0">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder="Enter your email"
                    required
                  />
                  <input
                    type="hidden"
                    name="list"
                    value="0nhNH7xQDr8NcPxOY892rrbA"
                  />

                  <input type="hidden" name="subform" value="yes" />
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <div className="relative inline">
                    <button
                      type="submit"
                      className="inline-flex flex-row-reverse items-stretch overflow-hidden text-white bg-indigo-500 group transition-all transition-slowest ease rounded-md"
                    >
                      <span className="flex-initial px-5 py-3">Notify me</span>
                      <span className="absolute w-16 h-16 bg-white -top-4 -left-2 bg-opacity-10 transform -skew-x-6 group-hover:skew-x-0 group-hover:w-0 transition-width duration-300 ease-in-out"></span>
                      <span className="flex flex-col justify-center px-5 py-3">
                        <LockClosedIcon className="flex-initial w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaSection
