import Img from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

import { NextPageWithLayout } from '@/ui/layouts'

const SignedUpPage: NextPageWithLayout = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window?.fathom?.trackGoal('XYTTAMX5', 0)
    }
  }, [])

  return (
    <>
      <div className="p-12 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <div>
            <Img
              src="/images/josh-thumbs-up.jpg"
              alt="Josh giving a thumbs up"
              className="rounded-lg shadow-lg"
              width={225}
              height={300}
            />
          </div>

          <div className="px-4 py-12 text-center">
            <h1 className="text-2xl font-extrabold tracking-tight md:text-4xl">
              ✅ Successfully Signed Up!
            </h1>

            <p className="max-w-lg pt-4 mx-auto">
              Thanks for signing up for my email newsletter. You&apos;ll be
              getting my latest blog posts and updates in your email inbox soon.
            </p>

            <div className="flex justify-center mt-8">
              <div className="inline-flex shadow rounded-md">
                <Link href="/posts">
                  <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-primary-600 border border-transparent rounded-md hover:bg-primary-700">
                    Read Latests Posts
                  </a>
                </Link>
              </div>
              <div className="inline-flex ml-3">
                <Link href="/about">
                  <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-primary-700 bg-primary-100 border border-transparent rounded-md hover:bg-primary-200">
                    Learn About Josh
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SignedUpPage.metaData = {
  title: 'Successfully signed up',
  description: 'Thanks for signing up for my email newsletter.'
}

export default SignedUpPage
