import { Head } from "next/document";
import React from "react";

const PageTitle: React.FC = ({ children }) => {
  return (
    <section className="p-4 pt-8 text-center text-white bg-gray-800 md:pt-12">
      <h1 className="text-4xl font-bold tracking-wider md:text-6xl">
        {children}
      </h1>
    </section>
  );
};

export default PageTitle;
