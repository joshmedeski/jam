import React from "react";
import Img from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a className="inline-flex items-center space-x-2">
        <Img
          src="/images/josh-medeski.jpg"
          alt="Josh Medeski"
          className="rounded-lg filter drop-shadow"
          width={40}
          height={40}
        />
        <span className="text-2xl font-semibold uppercase sm:text-3xl">
          Josh Medeski
        </span>
      </a>
    </Link>
  );
};

export default Logo;
