import React from 'react'

import PageTitle from '@/ui/PageTitle'
import Posts from '@/ui/Posts'
import { NextPageWithLayout } from '@/ui/layouts'
import { PostMetaData, getAllPostsMetadata } from '@/utils/posts'

const PostsPage: NextPageWithLayout<{ posts: PostMetaData[] }> = ({
  posts
}) => {
  return (
    <>
      <PageTitle>Blog Posts</PageTitle>
      <Posts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostsMetadata()
  return { props: { posts } }
}

PostsPage.metaData = {
  title: 'Blog Posts',
  description: 'Blog posts by Josh Medeski.'
}

export default PostsPage
