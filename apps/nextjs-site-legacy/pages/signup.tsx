import React from "react";
import { NextPage } from "next";

import NewsletterCTA from "@jam/ui/NewsletterCTA";
import Logo from "@jam/ui/Logo";
import Link from "next/link";

const SignUpPage: NextPage = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen py-4">
      <div className="flex justify-center">
        <Logo />
      </div>
      <NewsletterCTA />
      <Link href="/">
        <a className="block text-center underline text-indigo-500">
          Back to home
        </a>
      </Link>
    </div>
  );
};

export default SignUpPage;
