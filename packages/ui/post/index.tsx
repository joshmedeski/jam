import PostHeader from "./PostHeader";

type PostMetaData = {
  title: "string";
  published_on: Date;
  updated_on: Date;
  thumbnail: string | undefined;
  description: string | undefined;
  categories: string[];
};

export type { PostMetaData };
export { PostHeader };
