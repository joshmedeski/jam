import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "./button"

const Title = styled.h2`
  font-size: 40px;
  padding: 0;
`

const Section = styled.section`
  background-color: var(--light);
  padding: 3rem var(--gutter);
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1em;
  padding-bottom: 1em;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 775px) {
    flex-direction: column;
    margin: 1em 0.5em 0;
  }
`

const ServicesWrapper = styled(Link)`
  background-color: var(--white);
  border-radius: var(--radius);
  border: 10px solid var(--white);
  box-shadow: var(--shadow);
  color: var(--dark);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto auto;
  margin: 0 auto;
  text-decoration: none;
`

const Service = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ServiceImg = styled.img`
  width: 100%;
`

const ServiceTitle = styled.p`
  color: var(--emphasis);
  margin: 0;
  line-height: 1;
  font-size: 50px;
`

const ServicesHero: React.FC = () => {
  return (
    <Section>
      <Flex>
        <Title>Services</Title>
        <Button to="/services">View Services</Button>
      </Flex>
      <ServicesWrapper to="/services">
        <ServiceImg src="/josh-giving-talk.jpg" alt="Josh giving a talk" />
        <Service style={{ backgroundColor: "var(--light)" }}>
          <ServiceTitle>
            Software
            <br />
            Development
          </ServiceTitle>
        </Service>
        <ServiceImg src="/josh-consulting.jpg" alt="Josh consulting" />
        <Service style={{ backgroundColor: "var(--dark)" }}>
          <ServiceTitle style={{ color: "var(--white)" }}>
            Public
            <br />
            Speaking
          </ServiceTitle>
        </Service>
        <ServiceImg src="/josh-training.jpg" alt="Josh training" />
        <Service style={{ backgroundColor: "var(--black)" }}>
          <ServiceTitle
            style={{ color: "var(--white)", borderRadius: "0 0 10px 0" }}
          >
            Training /
            <br />
            Consulting
          </ServiceTitle>
        </Service>
      </ServicesWrapper>
    </Section>
  )
}

export default ServicesHero
