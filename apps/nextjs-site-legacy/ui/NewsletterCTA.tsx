import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { footerNavItems } from "@jam/utils/nav";

const NewsletterCTA: React.FC = () => {
  return (
    <div className="relative px-6 py-10 overflow-hidden bg-gray-800 sm:px-12 sm:py-20">
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
            className="text-gray-700 text-opacity-40"
            fill="currentColor"
            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
          />
          <path
            className="text-gray-900 text-opacity-40"
            fill="currentColor"
            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
          />
        </svg>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        <div className="relative sm:mb-0 mb-6">
          <div>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
              Sign up for my newsletter
            </h2>
            <p className="mt-2 text-lg leading-none text-indigo-100">
              Get the latest blog posts and updates strait to your inbox.
            </p>
          </div>

          <form
            action="https://sendy.joshmedeski.com/subscribe"
            method="POST"
            acceptCharset="utf-8"
            className="mt-8 sm:max-w-lg sm:flex"
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
                  className="inline-flex items-stretch w-full overflow-hidden text-white bg-indigo-500 group transition-all transition-slowest ease rounded-md sm:w-auto relative"
                >
                  <span className="absolute w-16 h-16 bg-white -top-4 -left-2 bg-opacity-10 transform -skew-x-6 group-hover:skew-x-0 group-hover:w-0 transition-width duration-300 ease-in-out overflow-hidden"></span>
                  <span className="flex flex-col justify-center px-5 py-3">
                    <LockClosedIcon className="flex-initial w-4 h-4" />
                  </span>
                  <span className="flex-grow px-5 py-3 text-center wf">
                    Notify me
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <ul className="flex flex-wrap sm:flex-col gap-2 text-white relative flex gap-2">
          {footerNavItems.map(({ text, to, icon: Icon }) => (
            <li className="text-lg" key={`${to}-footer`}>
              <Link href={to}>
                <a className="hover:text-indigo-200 inline-flex gap-2">
                  <span className="w-6 h-6 text-indigo-300">
                    <Icon />
                  </span>
                  <span>{text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsletterCTA;
