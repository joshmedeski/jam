import React from "react"
import Layout from "../components/layout"
import { PageProps } from "gatsby"
import styled from "styled-components"
import Title from "../components/title"

const ComingSoon = styled.h2`
  font-size: 3em;
  text-align: center;
  padding: 0;
`

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <ComingSoon>Coming Soon</ComingSoon>
    </Layout>
  )
}

export default ServicesPage
