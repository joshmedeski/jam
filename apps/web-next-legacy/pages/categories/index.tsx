import React from 'react'

import DoughnutChart from '@/ui/DoughnutChart'
import PageTitle from '@/ui/PageTitle'
import { NextPageWithLayout } from '@/ui/layouts'
import { getAllPostsMetadata } from '@/utils/posts'

const CategoriesPage: NextPageWithLayout<{
  cats: { [key: string]: number }
}> = ({ cats }) => {
  return (
    <>
      <PageTitle>Categories</PageTitle>
      <section className="mx-auto max-w-2xl p-4">
        <DoughnutChart data={cats} />
      </section>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostsMetadata()

  const categories: string[] = posts
    .filter((post) => !!post?.categories?.length)
    .flatMap((post) => post.categories)

  let cats: { [key: string]: number } = {}
  categories.forEach((cat: string) => {
    cats[cat] = (cats[cat] || 0) + 1
  })

  return { props: { cats } }
}

CategoriesPage.metaData = {
  title: 'Categories',
  description: 'Categories I have written about.'
}

export default CategoriesPage
