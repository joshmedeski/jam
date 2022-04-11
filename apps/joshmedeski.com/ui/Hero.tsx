import classNames from 'classnames'
import React from 'react'

import GradientText from './GradientText'
import Img from './Img'
import PhotoOfJosh from './PhotoOfJosh'
import SubscribeButton from './SubscribeButton'

const Hero: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-12 px-6">
      <div className="flex flex-col gap-10 md:flex-row-reverse items-center">
        <div className="mb-6 md:mb-0 col-span-1">
          <PhotoOfJosh />
        </div>

        <div className="col-span-2 max-w-xl sm:max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            I'm obsessed with
            <GradientText> productivity </GradientText>
            so you don&lsquo;t have to be.
          </h1>

          <p className="mx-auto text-lg mb-10">
            The{' '}
            <strong>
              <GradientText>weekly review</GradientText>
            </strong>{' '}
            is a place to recommend music and movies, as well as what I'm up to
            as a software developer and indie entrepreneur.
          </p>

          <SubscribeButton />
        </div>
      </div>
    </section>
  )
}

export default Hero
