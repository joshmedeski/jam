import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [themeColor, setThemeColor] = useState<string>()
  const [mounted, setMounted] = useState(false)

  const iconClasses = 'w-8 h-8 text-secondary-light dark:text-secondary-dark'

  const toggleTheme = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setThemeColor(() => {
      switch (theme) {
        case 'light':
          return '#ffffff'
        case 'dark':
        default:
          return '#222222'
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="theme-color" content={themeColor} />
      </Head>
      <button type="button" onClick={toggleTheme} aria-label="Toggle Dark Mode">
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <MoonIcon className={iconClasses} />
        ) : (
          <SunIcon className={iconClasses} />
        )}
      </button>
    </>
  )
}

export default ThemeSwitcher
