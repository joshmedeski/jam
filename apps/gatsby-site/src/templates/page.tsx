import React from "react"
import Layout from "../components/layout"
import { PageProps } from "gatsby"
import Title from "../components/title"

type JamPageProps = {
  frontmatter: {
    title: string
  }
}

const Page: React.FC<PageProps<unknown, JamPageProps>> = ({
  children,
  pageContext,
}) => {
  const { title } = pageContext.frontmatter
  return (
    <Layout>
      <Title text={title} />
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
        {children}
      </div>
    </Layout>
  )
}

export default Page
