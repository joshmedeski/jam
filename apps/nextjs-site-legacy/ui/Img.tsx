import React from "react";
import NextImg from "next/image";

type ImgProps = {
  src: any;
  alt: string;
  width: number;
  height: number;
};

const Img: React.FC<ImgProps> = (props) => {
  return (
    <NextImg {...props} layout="intrinsic" className="rounded-lg shadow-lg" />
  );
};

export default Img;
