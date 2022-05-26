import React from "react";

const ColophonLink: React.FC<{ href: string }> = ({ href, children }) => (
  <a className="underline" href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const PageFooter: React.FC = () => {
  const copyrightDate = new Date().getFullYear();

  return (
    <footer className="text-gray-200 bg-gray-900">
      <div className="p-3 pb-6 text-sm text-center">
        &copy; {copyrightDate} Josh Medeski. Built with
        {` `}
        <ColophonLink href="https://nextjs.org">NextJS</ColophonLink>
        {` `}
        and
        {` `}
        <ColophonLink href="https://tailwindcss.com">TailwindCSS</ColophonLink>
        <span className="hidden sm:inline">, deployed</span> on
        {` `}
        <ColophonLink href="https://vercel.com">Vercel</ColophonLink>.
      </div>
    </footer>
  );
};

export default PageFooter;
