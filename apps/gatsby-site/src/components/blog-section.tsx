import React from "react"
import styled from "styled-components"
import { Articles } from "../pages/blog"
import ArticleCard from "./article-card"
import Button from "./button"

const Wrapper = styled.section`
  padding: 4rem var(--gutter) 3rem;
`

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 6px;
  padding: 0;

  @media (min-width: 420px) {
    font-size: 40px;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: var(--gutter);
  max-width: 1200px;

  @media (max-width: 420px) {
    flex-direction: column;
    margin: 1em 0.5em 0;
  }
`

const BlogSection: React.FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <Wrapper>
      <Flex>
        <Title>Blog Posts</Title>
        <Button to="/blog">View all posts</Button>
      </Flex>

      <div className="max-w-screen-xl px-4">
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
    </Wrapper>
  )
}

export default BlogSection
