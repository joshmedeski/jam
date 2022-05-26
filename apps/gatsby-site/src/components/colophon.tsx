import React from "react"

const ColophonLink: React.FC<{ href: string }> = ({ href, children }) => (
  <a className="underline" href={href} target="_blank" rel="nofollow">
    {children}
  </a>
)

const Colophon: React.FC = () => {
  const copyrightDate = new Date().getFullYear()

  return (
    <footer className="p-2 pb-6 text-center bg-gray-900 text-sm text-gray-200">
      &copy; {copyrightDate} Josh Medeski. Built with
      {` `}
      <ColophonLink href="https://www.gatsbyjs.com">Gatsby</ColophonLink>
      <span className="hidden sm:inline">, deployed</span> on
      {` `}
      <ColophonLink href="https://www.netlify.com">Netlify</ColophonLink>.
    </footer>
  )
}

export default Colophon
