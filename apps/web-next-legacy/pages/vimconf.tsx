import { ArrowRightIcon } from '@heroicons/react/outline'
import Img from 'next/image'
import Link from 'next/link'
import React from 'react'

import PageTitle from '@/ui/PageTitle'
import { NextPageWithLayout } from '@/ui/layouts'

const VimConfPage: NextPageWithLayout = () => {
  return (
    <>
      <PageTitle>VimConf</PageTitle>

      <div className="text-center mx-4">
        <a
          href="https://joshmedeski.typeform.com/to/NKqLYGqw"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-stretch w-full overflow-hidden text-white bg-primary-light dark:bg-primary-600 group transition-all transition-slowest ease rounded-md sm:w-auto relative shadow-md"
        >
          <span className="absolute w-16 h-16 bg-primary-900 -top-4 -right-2 group-hover:right-0 bg-opacity-20 transform -skew-x-6 group-hover:skew-x-0 group-hover:w-full transition-width duration-300 ease-in-out overflow-hidden"></span>
          <span className="flex-grow px-5 py-3 text-center wf">
            Claim Free Coaching
          </span>
          <span className="flex flex-col justify-center px-5 py-3">
            <ArrowRightIcon className="flex-initial w-4 h-4" />
          </span>
        </a>
      </div>

      <div className="mx-4 my-6 sm:my-12">
        <div className="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-dark">
          <p>
            Thanks for watching my talk,{' '}
            <strong>Abbreviate Everything: Lessons from a Stenographer</strong>.
            I hope it inspired you to start using text expanders and shorthand
            to start typing less and getting more done.
          </p>

          <Link href="/pdfs/josh-medeski-vimconf-abbreviate-everything.pdf">
            <a target="_blank">
              <Img
                src="/images/abbreviate-everything-preview.jpg"
                alt="Abbreviate Everything Preview"
                className="rounded-lg shadow-lg"
                layout="intrinsic"
                width={900}
                height={503}
              />
            </a>
          </Link>

          <div className="text-center">
            <Link href="/pdfs/josh-medeski-vimconf-abbreviate-everything.pdf">
              <a target="_blank">View presentation</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

VimConfPage.metaData = {
  title: 'VimConf Talk (2020)',
  description: 'Abbreviate Everything: Lessons from a Stenographer'
}

export default VimConfPage
