import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import React from 'react'

import { NextPageWithLayout } from '@/ui/layouts'
import PageMetaData from '@/ui/layouts/MetaData'
import PageLayout from '@/ui/layouts/PageLayout'
import useFathomAnalytics from '@/utils/useFathomAnalytics'

import '../styles/globals.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<any>
}

const JoshMedeskiApp: React.FC<AppPropsWithLayout> = ({
  Component,
  pageProps
}) => {
  useFathomAnalytics()
  const getLayout =
    Component.getLayout ?? ((page) => <PageLayout>{page}</PageLayout>)
  const metaData = Component.metaData

  return (
    <ThemeProvider attribute="class">
      {metaData && <PageMetaData metaData={metaData} />}
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default JoshMedeskiApp
