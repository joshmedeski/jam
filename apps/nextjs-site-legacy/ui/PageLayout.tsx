import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";
import React, { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

import { footerNavItems, headerNavItems } from "@jam/utils/nav";
import NewsletterCTA from "@jam/ui/NewsletterCTA";
import PageFooter from "@jam/ui/PageFooter";
import Logo from "@jam/ui/Logo";

const PageLayout: React.FC<{ title: string }> = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100">
      <Head>
        <title>{title} | Josh Medeski</title>
      </Head>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon
                      className="h-6 w-6 text-white text-indigo-500"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <Logo />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {footerNavItems.map((item) => (
                    <a
                      key={item.text}
                      href={item.to}
                      className={classNames(
                        false
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-indigo-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <div
                        className={classNames(
                          false
                            ? "text-indigo-300"
                            : "text-indigo-300 group-hover:text-indigo-500",
                          "mr-4 flex-shrink-0 h-6 w-6"
                        )}
                      >
                        <item.icon aria-hidden="true" />
                      </div>
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </Dialog>
      </Transition.Root>

      <div className="flex flex-col w-0 flex-1 min-h-screen justify-between">
        <header className="p-4 bg-white border-b-4 border-indigo-400">
          <div className="mx-auto max-w-screen-2xl">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Logo />
                <button
                  type="button"
                  className="p-2 rounded-lg bg-indigo-50 md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <MenuAlt1Icon className="w-6 h-6 text-indigo-500" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center hidden font-normal tracking-wide uppercase space-x-6 md:block">
                {headerNavItems.map(({ text, to, icon: Icon }) => (
                  <Link key={text} href={to}>
                    <a className="hover:text-indigo-500 inline-flex gap-1">
                      <div className="w-6 h-6 text-indigo-300">
                        <Icon />
                      </div>
                      <span>{text}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <div>
          <NewsletterCTA />
          <PageFooter />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
