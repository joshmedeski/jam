import React from 'react'

import Hero from '@/ui/Hero'
import Posts from '@/ui/Posts'
import { NextPageWithLayout } from '@/ui/layouts'
import { PostMetaData, getAllPostsMetadata } from '@/utils/posts'

const HomePage: NextPageWithLayout<{ posts: PostMetaData[] }> = ({ posts }) => {
  return (
    <>
      <Hero />
      <Posts posts={posts} />
    </>
  )
}

HomePage.metaData = {
  title: 'Home',
  description: 'Obsessed with productivity so you don‘t have to be.'
}

export async function getStaticProps() {
  const posts = await getAllPostsMetadata()
  return { props: { posts } }
}

export default HomePage
