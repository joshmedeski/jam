import React from 'react'

import { footerNavItems, socialFooterNavItems } from '@/utils/nav'

import GradientSpan from './GradientText'
import MenuItem from './MenuItem'
import SubscribeButton from './SubscribeButton'

const NewsletterCTA: React.FC = () => {
  return (
    <div className="relative px-6 py-10 overflow-hidden bg-gray-50 dark:bg-gray-900 lg:px-12 lg:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
      >
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1463 360"
        >
          <path
            className="text-gray-100 dark:text-gray-800"
            fill="currentColor"
            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
          />
          <path
            className="text-white dark:text-gray-700 text-opacity-80 dark:text-opacity-20"
            fill="currentColor"
            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
          />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
        <div className="relative mb-6 lg:mb-0">
          <h2 className="text-4xl font-extrabold mb-2">
            Sign up for my <GradientSpan>weekly review</GradientSpan> newsletter
          </h2>

          <p className="block text-lg max-w-screen-sm mb-8">
            The weekly review is a place to recommend music and movies, as well
            as what I&apos;m up to as a software developer and indie
            entrepreneur.
          </p>

          <SubscribeButton />
        </div>

        <ul className="flex lg:flex-col flex-wrap lg:max-h-[150px] gap-4 relative">
          {footerNavItems.concat(socialFooterNavItems).map((item, index) => (
            <MenuItem index={index} item={item} key={`${item.to}-footer`} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NewsletterCTA
