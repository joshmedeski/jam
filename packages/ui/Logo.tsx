import profile from "./images/josh-medeski-profile-sm.webp";
import React from "react";

const Logo: React.FC = () => {
  return (
    <span className="inline-flex items-center space-x-2">
      <img
        src={profile}
        alt="Josh Medeski"
        className="rounded-xl filter drop-shadow"
        width={40}
        height={40}
      />
      <span className="text-2xl sm:text-3xl text-black dark:text-white tracking-wide font-bold">
        Josh Medeski
      </span>
    </span>
  );
};

export default Logo;
