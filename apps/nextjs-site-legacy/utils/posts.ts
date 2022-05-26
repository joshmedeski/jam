import glob from "glob";
import matter from "gray-matter";

export interface PostFrontMatter {
  title: string;
  published_on: string;
  updated_on: string;
  description: string;
  thumbnail?: string;
}

export interface PostMetaData extends PostFrontMatter {
  slug: string;
}

export const getPostSlug = (filePath: string) => {
  const slug = filePath.split("/")[1].replace(/ /g, "-").slice(0, -4).trim();
  return slug;
};

export const getAllPostsMetadata = async () => {
  const slugs = glob.sync("posts/*.mdx").map(getPostSlug);

  const postsFromSlugs: PostMetaData[] = await Promise.all(
    slugs.map(async (slug) => {
      const source = await import(`../posts/${slug}.mdx`);
      const { data } = matter(source.default);
      return {
        ...data,
        slug,
      } as PostMetaData;
    })
  );

  const filteredPosts = postsFromSlugs.filter(
    (post: PostMetaData) => !!post.published_on
  );

  const sortByDate = (a: PostMetaData, b: PostMetaData) =>
    new Date(b.published_on).getTime() - new Date(a.published_on).getTime();

  const posts = filteredPosts.sort(sortByDate);

  return posts;
};
