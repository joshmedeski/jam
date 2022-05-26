import React from "react";
import { NextPage } from "next";

import { getAllPostsMetadata, PostMetaData } from "@jam/utils/posts";
import Posts from "@jam/ui/Posts";
import PageLayout from "@jam/ui/PageLayout";
import PageTitle from "@jam/ui/PageTitle";

const PostsPage: NextPage<{ posts: PostMetaData[] }> = ({ posts }) => {
  return (
    <PageLayout title="Posts">
      <PageTitle>Blog Posts</PageTitle>
      <Posts posts={posts} />
    </PageLayout>
  );
};

export async function getStaticProps() {
  const posts = await getAllPostsMetadata();
  return { props: { posts } };
}

export default PostsPage;
