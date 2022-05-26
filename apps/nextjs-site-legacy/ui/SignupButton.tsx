import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";

const SignupButton: React.FC = () => {
  return (
    <Link href="/signup">
      <a className="relative inline">
        <div
          className="inline-flex items-stretch text-white bg-indigo-600 group transition-all transition-slowest ease rounded-md overflow-hidden
          "
        >
          <span className="flex-initial px-3 py-2">Sign Up</span>
          <span className="absolute w-12 bg-white h-14 -top-3 -right-2 bg-opacity-10 transform -skew-x-6 group-hover:skew-x-0 group-hover:w-0 transition-width duration-300 ease-in-out"></span>
          <span className="flex flex-col justify-center px-3 py-2">
            <ArrowRightIcon className="flex-initial w-4 h-4" />
          </span>
        </div>
      </a>
    </Link>
  );
};

export default SignupButton;
