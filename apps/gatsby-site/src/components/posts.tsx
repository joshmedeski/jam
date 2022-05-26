import React from "react"
import ArticleCard from "./article-card"

const Posts: React.FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="px-4 mx-auto max-w-screen-xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post: any) => {
            return (
              <ArticleCard
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                uri={post.fields.slug}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Posts
