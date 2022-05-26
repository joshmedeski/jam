import React from "react";
import glob from "glob";
import { NextPage } from "next";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { getPostSlug, PostFrontMatter } from "@jam/utils/posts";
import PageLayout from "@jam/ui/PageLayout";
import PageTitle from "@jam/ui/PageTitle";
import Float from "@jam/ui/Float";
import Img from "@jam/ui/Img";
import Head from "next/head";

const components = {
  Img: Img,
  Float: Float,
};

const PostPage: NextPage<{
  frontMatter: PostFrontMatter;
  source: any;
  slug: string;
}> = ({ frontMatter, source, slug }) => {
  const { title, description, thumbnail } = frontMatter;
  const thumbnailSrc = thumbnail
    ? `https://www.joshmedeski.com/images/posts/${slug}/${thumbnail}`
    : `https://www.joshmedeski.com/images/josh-sitting-at-desk.jpg`;

  return (
    <PageLayout title={title}>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnailSrc} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:alt" content={`${title} thumbnail`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@joshmedeski" />
        <meta name="twitter:creator" content="@joshmedeski" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={thumbnailSrc} />
      </Head>
      <PageTitle>{title}</PageTitle>
      <div className="bg-white px-4 py-6 sm:py-12">
        <div className="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </PageLayout>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const source = await import(`../posts/${slug}.mdx`);
  const { content, data } = matter(source.default);
  const mdxSource = await serialize(content, { scope: data });
  console.log("base url: ", process.env.BASE_URL);
  return { props: { source: mdxSource, frontMatter: data, slug } };
}

export async function getStaticPaths() {
  const blogs = glob.sync("posts/**/*.mdx");
  const blogSlugs = blogs.map((file: string) => getPostSlug(file));
  const paths = blogSlugs.map((slug: string) => `/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default PostPage;
