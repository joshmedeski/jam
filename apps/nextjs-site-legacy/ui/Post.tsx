import { PostMetaData } from "@jam/utils/posts";
import Link from "next/link";
import React from "react";

const Post: React.FC<{ metaData: PostMetaData }> = ({ metaData }) => {
  return (
    <Link href={`/${metaData.slug}`}>
      <a className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-2xl leading-none font-bold text-indigo-500 mb-4">
          {metaData.title}
        </h3>
        <p className="text-sm">{metaData.description}</p>
      </a>
    </Link>
  );
};

export default Post;
