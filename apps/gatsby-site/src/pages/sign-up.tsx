import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CtaSection from "../components/cta-section"

const UsesPage: React.FC = () => {
  return (
    <Layout disableCta>
      <SEO
        title="Email Subscription Successful"
        description={""}
        thumbnail={""}
      />
      <CtaSection />
    </Layout>
  )
}

export default UsesPage
