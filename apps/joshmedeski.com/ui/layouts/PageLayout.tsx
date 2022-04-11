import { Dialog, Transition } from '@headlessui/react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import React, { Fragment, useState } from 'react'

import Logo from '@/ui/Logo'
import NewsletterCTA from '@/ui/NewsletterCTA'
import ThemeSwitcher from '@/ui/ThemeSwitcher'
import { headerNavItems, sidebarNavItems } from '@/utils/nav'

import MenuItem from '../MenuItem'
import PageColophon from '../PageColophon'

const PageLayout: React.FC = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex">
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
            <Dialog.Overlay className="fixed inset-0 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50" />
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white dark:bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-20 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex bg-primary-50 items-center justify-center h-10 w-10 rounded-full"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon
                      className="h-6 w-6 text-primary-light dark:text-primary-dark"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>

              <div className="flex-shrink-0 flex items-center px-4">
                <Logo />
              </div>

              <div className="mt-5 flex-1 h-0 p-4 overflow-y-auto">
                <nav className="flex flex-col space-y-2">
                  {sidebarNavItems.map((item, index) => (
                    <MenuItem
                      key={item.text + '-sidebar-nav'}
                      index={index}
                      item={item}
                    />
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
        </Dialog>
      </Transition.Root>

      <div className="flex flex-col w-0 flex-1 min-h-screen justify-between">
        <header className="p-4 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 fixed w-full z-50 backdrop-filter backdrop-blur-md h-18">
          <div className="mx-auto max-w-screen-2xl">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Logo />
                <div className="flex items-center space-x-2 md:hidden">
                  <ThemeSwitcher />

                  <button
                    type="button"
                    className="p-2 rounded-lg bg-primary-50 dark:bg-gray-800"
                    onClick={() => setSidebarOpen((prev) => !prev)}
                  >
                    <MenuAlt1Icon className="w-6 h-6 text-primary-light dark:text-primary-dark" />
                  </button>
                </div>
              </div>

              <div className="hidden md:flex flex-wrap align-center items-center justify-center font-normal tracking-wide space-x-6">
                {headerNavItems.map((item, index) => (
                  <MenuItem
                    index={index}
                    item={item}
                    key={`${item.to}-footer`}
                  />
                ))}

                <div className="mb-1">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow mt-20">{children}</main>

        <div>
          <NewsletterCTA />
          <PageColophon />
        </div>
      </div>
    </div>
  )
}

export default PageLayout
