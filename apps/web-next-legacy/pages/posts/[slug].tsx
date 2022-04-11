import {
  CalendarIcon,
  ClockIcon,
  HashtagIcon,
  VideoCameraIcon
} from '@heroicons/react/outline'
import classNames from 'classnames'
import { format } from 'date-fns'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'

import Float from '@/ui/Float'
import Img from '@/ui/Img'
import Note from '@/ui/Note'
import { NextPageWithLayout } from '@/ui/layouts'
import PageMetaData from '@/ui/layouts/MetaData'
import { PostFrontMatter, getPostPaths } from '@/utils/posts'

const metaDataTextClasses = 'text-gray-600 dark:text-gray-400'

function readingTime(text: string) {
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}

export const MetaData: React.FC<{
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
}> = (props) => {
  return (
    <span
      className={classNames([metaDataTextClasses, 'inline-flex items-center'])}
    >
      <props.icon
        className={classNames([metaDataTextClasses, 'w-5 h-5 mr-1'])}
      />
      <span>{props.children}</span>
    </span>
  )
}

const PostPage: NextPageWithLayout<{
  slug: string
  source: MDXRemoteSerializeResult
  frontMatter: PostFrontMatter
  rawContent: string
}> = ({ frontMatter, source, slug, rawContent }) => {
  const {
    title,
    description,
    thumbnail,
    published_on,
    categories,
    video_length
  } = frontMatter

  const socialImage = thumbnail
    ? `https://www.joshmedeski.com/images/posts/${slug}/${thumbnail}`
    : `https://www.joshmedeski.com/images/josh-sitting-at-desk.jpg`

  const components = { Img, Float, Note }

  return (
    <>
      <PageMetaData metaData={{ title, description, socialImage }} />
      <div className="px-4 py-6 sm:py-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold tracking-wider md:text-5xl">
            {title}
          </h1>

          <section className="flex flex-wrap mb-6 gap-4 sm:gap-6 text-sm italic">
            <MetaData icon={CalendarIcon}>
              {format(new Date(published_on), 'EEE, LLL do, yyyy')}
            </MetaData>

            <MetaData icon={ClockIcon}>{readingTime(rawContent)} mins</MetaData>

            {video_length && (
              <MetaData icon={VideoCameraIcon}>{video_length}</MetaData>
            )}

            <MetaData icon={HashtagIcon}>
              {categories.map((category, index) => (
                <span key="category" className="capitalize">
                  {category}
                  {categories.length > 1 && index < categories.length - 1
                    ? ', '
                    : ''}
                </span>
              ))}
            </MetaData>
          </section>

          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-dark max-w-none ">
            <MDXRemote {...source} components={components} />
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<
  {
    slug: string
    source: MDXRemoteSerializeResult
    frontMatter: { [key: string]: any }
    rawContent: string
  },
  { slug: string }
> = async (context) => {
  const slug = context?.params?.slug as string
  const source = await import(`../../posts/${slug}.mdx`)
  const { content: rawContent, data: frontMatter } = matter(source.default)
  const mdxSource = await serialize(rawContent, { scope: frontMatter })
  return { props: { source: mdxSource, frontMatter, slug, rawContent } }
}

export async function getStaticPaths() {
  const paths = getPostPaths()
  return { paths, fallback: false }
}

export default PostPage
