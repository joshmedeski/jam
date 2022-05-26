import { PostMetaData } from ".";
import React from "react";

const PostHeader: React.FC<{ meta: PostMetaData }> = ({ meta }) => {
  return (
    <header>
      <h1>{meta.title}</h1>
    </header>
  );
};

export default PostHeader;
