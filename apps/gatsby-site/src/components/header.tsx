import React from "react"
import { Link } from "gatsby"
import JoshIcon from "../../content/assets/josh-icon.png"
import { ArrowRightIcon } from "@heroicons/react/solid"

class NavItem {
  text: string
  to: string
  constructor(text: string, to: string) {
    this.text = text
    this.to = to
  }
}

const SignupButton = () => {
  return (
    <div className="relative inline overflow-hidden">
      <Link
        to="/sign-up"
        className="group transition-all transition-slowest ease inline-flex items-stretch bg-indigo-600 text-white rounded-md"
      >
        <span className="flex-initial px-3 py-2">Sign Up</span>
        <span className="absolute w-12 bg-white h-14 -top-3 -right-2 bg-opacity-10 transform -skew-x-6 group-hover:skew-x-0 group-hover:w-0 transition-width duration-300 ease-in-out"></span>
        <span className="flex flex-col justify-center px-3 py-2">
          <ArrowRightIcon className="flex-initial w-4 h-4" />
        </span>
      </Link>
    </div>
  )
}

const navItems: NavItem[] = [
  new NavItem("Home", "/"),
  new NavItem("About", "/about"),
  new NavItem("Blog", "/blog"),
  new NavItem("Publications", "/publications"),
  new NavItem("Uses", "/uses"),
]

const Header = () => (
  <header className="p-4 border-b-4 border-indigo-400">
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h1 className="mb-6 text-3xl font-semibold uppercase sm:mb-0">
          <Link to="/" className="flex items-center">
            <img
              src={JoshIcon}
              alt="Josh Medeski"
              className="w-8 h-8 mr-2 filter drop-shadow"
            />
            Josh Medeski
          </Link>
        </h1>

        <div className="flex flex-wrap items-center justify-center font-normal tracking-wide uppercase gap-4">
          {navItems.map(({ text, to }) => (
            <Link
              className="hover:text-gray-600"
              key={text}
              to={to}
              activeClassName="text-indigo-500"
            >
              {text}
            </Link>
          ))}
          <SignupButton />
        </div>
      </div>
    </div>
  </header>
)

export default Header
