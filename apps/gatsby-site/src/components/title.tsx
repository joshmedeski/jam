import React from "react"
import SEO from "../components/seo"

const Title: React.FC<{ text: string }> = ({ text }) => {
  return (
    <section className="p-4 pt-8 text-center text-white bg-gray-800 pt-8 md:pt-12">
      <SEO title={text} />
      <h1 className="text-4xl font-bold tracking-wider md:text-6xl">{text}</h1>
    </section>
  )
}

export default Title
