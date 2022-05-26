import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import Logo from '@/ui/Logo'
import NewsletterCTA from '@/ui/NewsletterCTA'
import { NextPageWithLayout } from '@/ui/layouts'

const SignUpPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen py-4">
      <div className="flex justify-center">
        <Logo />
      </div>
      <NewsletterCTA />
      <Link href="/">
        <a className="block text-center underline text-primary-500">
          Back to home
        </a>
      </Link>
    </div>
  )
}

SignUpPage.metaData = {
  title: 'Sign Up',
  description: 'Sign up for my email newsletter'
}

export default SignUpPage
