import React from "react";

import { PostMetaData } from "@jam/utils/posts";
import Post from "@jam/ui/Post";

const Posts: React.FC<{ posts: PostMetaData[] }> = ({ posts }) => {
  return (
    <div className="py-12">
      <div className="px-4 mx-auto max-w-screen-2xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Post metaData={post} key={post.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
