import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import CtaButton from "./cta-button"
import Wrapper from "./wrapper"
import HeroImage from "../../static/josh-profile.jpg"

const HeroSection = styled.section`
  background-color: var(--black);
  display: flex;
  align-items: flex-end;
  padding-top: 2em;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Img = styled.img`
  margin-right: 4rem;
  height: auto;
  border-radius: 5px;
  box-shadow: var(--shadow);

  @media (max-width: 500px) {
    margin-bottom: 1em;
    width: 200px;
  }
`

const Quote = styled.h2`
  color: var(--white);
  line-height: 1.4;
  padding-top: 0;
  padding-bottom: 0;

  @media (mix-width: 500px) {
    font-size: 42px;
  }
`

const Logos = styled.section`
  background-color: var(--white);
  border-radius: var(--radius);
  margin-top: 2rem;
  margin-bottom: -32px;
  box-shadow: var(--shadow);

  display: grid;
  grid-gap: var(--gutter);
  grid-template-columns: auto auto;

  @media (min-width: 550px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 750px) {
    grid-template-columns: auto auto auto;
  }
`

const LogoImg = styled.img`
  padding-left: var(--gutter);
  max-width: 120px;
  height: 60px;
  object-fit: contain;
`

const Hero = () => {
  return (
    <HeroSection>
      <Wrapper>
        <Flex>
          <Img src={HeroImage} alt="Josh" />
          <div>
            <Quote>
              "I'm here to help you
              <br />
              find clarity, focus, and joy
              <br />
              in work and life."
            </Quote>
            <Logos>
              <LogoImg src="/todoist.png" alt="Todoist" />
              <LogoImg src="/trello.png" alt="Trello" />
              <LogoImg src="/productivityist.png" alt="Productivityist" />
              <LogoImg src="/lifehackorg.png" alt="Lifehack" />
            </Logos>
          </div>
        </Flex>
      </Wrapper>
    </HeroSection>
  )
}

export default Hero
