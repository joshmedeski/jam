import Img from 'next/image'
import React from 'react'

import A from './A'

const Logo: React.FC = () => {
  return (
    <A href="/">
      <span className="inline-flex items-center space-x-2">
        <Img
          src="/images/josh-medeski.jpg"
          alt="Josh Medeski"
          className="rounded-xl filter drop-shadow"
          width={40}
          height={40}
        />
        <span className="text-2xl sm:text-3xl text-black dark:text-white tracking-wide font-bold">
          Josh Medeski
        </span>
      </span>
    </A>
  )
}

export default Logo
