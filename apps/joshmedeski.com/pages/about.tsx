import Img from 'next/image'
import React from 'react'

import PageTitle from '@/ui/PageTitle'
import { NextPageWithLayout } from '@/ui/layouts'

const AboutPage: NextPageWithLayout<any> = () => {
  return (
    <>
      <PageTitle>About Josh</PageTitle>

      <div className="mx-4 my-6 sm:my-12">
        <div className="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-dark">
          <p>
            At an early age, I always loved technology and problem solving. I
            would pull apart computers, read books about how cars are made and
            constantly ask my mom questions about the world around me. While
            growing up, I became fascinated with drawing, acting, graphic design
            and magic. I was a creative kid.
          </p>

          <div className="md:float-right md:ml-4 md:my-0 md:-mr-12 lg:-mr-40">
            <Img
              src="/images/josh-sitting-with-man-made-of-legos.jpg"
              alt="Josh sitting on a bench with a man made out of legos"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
              width={400}
              height={300}
            />
          </div>

          <p>
            Paying my way through college as a professional magician, I quickly
            graduated with an art degree and entered the freelance world as a
            designer and web developer (while continuing to perform magic).
          </p>

          <p>
            Over the years, I moved into front-end development full-time. I
            built a partnership with a successful entrepreneur in Houston and
            helped him build many products in different industries including
            medical eCommerce, promotional marketing, drug testing, and office
            hardware. I built a team of developers and become a team lead and
            manager.
          </p>

          <p>
            Now, I am a full-stack developer specializing in JavaScript,
            including the Angular, React, and Express frameworks. I also
            continue to write and discuss productivity and personal development
            online.
          </p>

          <h2>Personality Typings</h2>

          <p>
            Personality typings and systems are fun. They are not a full measure
            of who a person is but they are a great way for me to explore my
            behaviors and motivations for more self-awareness. Here&apos;s a
            summary of the different systems I use and my types.
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
        </div>
      </div>
    </>
  )
}

AboutPage.metaData = {
  title: 'About',
  description: 'At an early age, I always loved technology and problem solving.'
}

export default AboutPage
