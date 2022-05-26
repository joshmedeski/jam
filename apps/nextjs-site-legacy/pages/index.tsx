import React from "react";
import { NextPage } from "next";
import Img from "next/image";

import Posts from "@jam/ui/Posts";
import PageLayout from "@jam/ui/PageLayout";
import { getAllPostsMetadata, PostMetaData } from "@jam/utils/posts";

const HomePage: NextPage<{ posts: PostMetaData[] }> = ({ posts }) => {
  return (
    <PageLayout title="Home">
      <section className="bg-white">
        <div className="flex justify-center">
          <Img
            src="/images/collage-of-josh.jpg"
            alt="Photo collage of Josh"
            width={1000}
            height={648}
          />
        </div>
      </section>

      <Posts posts={posts} />
    </PageLayout>
  );
};

export async function getStaticProps() {
  const posts = await getAllPostsMetadata();
  return { props: { posts } };
}

export default HomePage;
