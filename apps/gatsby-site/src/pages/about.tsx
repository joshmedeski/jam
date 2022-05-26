import React from "react"
import PhotoOfJosh from "../../static/josh-sitting-with-man-made-of-legos.jpg"
import Layout from "../components/layout"
import Title from "../components/title"
import Prose from "../components/prose"
import SEO from "../components/seo"

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Title text="About" />
      <SEO
        title="About Josh"
        description="At an early age, I always loved technology and problem solving. I
          would pull apart computers, read books about how cars are made and
          constantly ask my mom questions about the world around me."
        thumbnail={PhotoOfJosh}
      />
      <Prose>
        <p>
          At an early age, I always loved technology and problem solving. I
          would pull apart computers, read books about how cars are made and
          constantly ask my mom questions about the world around me. While
          growing up, I became fascinated with drawing, acting, graphic design
          and magic. I was a creative kid.
        </p>

        <img
          src={PhotoOfJosh}
          alt="Josh"
          className="shadow-lg rounded-lg md:float-right md:ml-4 md:my-0 md:-mr-12 lg:-mr-40"
        />

        <p>
          Paying my way through college as a professional magician, I quickly
          graduated with an art degree and entered the freelance world as a
          designer and web developer (while continuing to perform magic).
        </p>

        <p>
          Over the years, I moved into front-end development full-time. I built
          a partnership with a successful entrepreneur in Houston and helped him
          build many products in different industries including medical
          eCommerce, promotional marketing, drug testing, and office hardware. I
          built a team of developers and become a team lead and manager.
        </p>

        <p>
          Now, I am a full-stack developer specializing in JavaScript, including
          the Angular, React, and Express frameworks. I also continue to write
          and discuss productivity and personal development online.
        </p>

        <h2>Personality Typings</h2>

        <p>
          Personality typings and systems are fun. They are not a full measure
          of who a person is but they are a great way for me to explore my
          behaviors and motivations for more self-awareness. Here's a summary of
          the different systems I use and my types.
        </p>

        <ul>
          <li>
            <strong>Enneagram:</strong> 7w6
          </li>
          <li>
            <strong>Myers Briggs:</strong> The Protagonists (ENFJ-A)
          </li>
          <li>
            <strong>DiSC:</strong> Influence
          </li>
          <li>
            <strong>Strengths Finder:</strong> Includer, Input, Adaptability,
            Command
          </li>
          <li>
            <strong>Fascination Advantage:</strong> Innovation & Mysticque
          </li>
          <li>
            <strong>Zodiac Sign:</strong> Pisces
          </li>
        </ul>
      </Prose>
    </Layout>
  )
}

export default AboutPage
