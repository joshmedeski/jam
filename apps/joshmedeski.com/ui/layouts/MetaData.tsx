import Head from 'next/head'
import React from 'react'

export type MetaDataProps = {
  title: string
  description: string
  socialImage?: string
  dimensions?: {
    width: number
    height: number
  }
}

const PageMetaData: React.FC<{ metaData: MetaDataProps }> = ({ metaData }) => {
  const { title, description, socialImage, dimensions } = metaData

  return (
    <Head>
      <title>{title} | Josh Medeski</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@joshmedeski" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:site" content="@joshmedeski" />
      <meta name="twitter:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={title} />
      <meta
        property="og:image:height"
        content={dimensions?.height.toString() || '900'}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta
        property="og:image:width"
        content={dimensions?.width.toString() || '1600'}
      />
      <meta property="og:title" content={title} />
    </Head>
  )
}

export default PageMetaData
