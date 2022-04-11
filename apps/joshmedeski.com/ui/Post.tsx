import {
  CalendarIcon,
  HashtagIcon,
  VideoCameraIcon
} from '@heroicons/react/outline'
import { format } from 'date-fns'
import React from 'react'

import { MetaData } from '@/pages/posts/[slug]'
import { PostMetaData } from '@/utils/posts'

import { A } from '.'

const Post: React.FC<{ metaData: PostMetaData }> = ({ metaData }) => {
  return (
    <span className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-2xl leading-none font-bold mb-4">
        <A href={`/posts/${metaData.slug}`}>{metaData.title}</A>
      </h3>

      <p className="text-sm">{metaData.description}</p>

      <section className="flex flex-wrap mt-2 gap-x-2 md:gap-x-6 text-sm italic">
        <MetaData icon={CalendarIcon}>
          {format(new Date(metaData.published_on), 'EEE, LLL do, yyyy')}
        </MetaData>

        {metaData.video_length && (
          <MetaData icon={VideoCameraIcon}>{metaData.video_length}</MetaData>
        )}

        <MetaData icon={HashtagIcon}>
          {metaData.categories.map((category, index) => (
            <span key="category" className="capitalize">
              {category}
              {metaData.categories.length > 1 &&
              index < metaData.categories.length - 1
                ? ', '
                : ''}
            </span>
          ))}
        </MetaData>
      </section>
    </span>
  )
}

export default Post
