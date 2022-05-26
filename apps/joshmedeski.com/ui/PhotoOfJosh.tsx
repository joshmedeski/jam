import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

import GradientText from './GradientText'
import Img from './Img'

const PhotoOfJosh: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [photoSrc, setPhotoSrc] = useState('/images/josh-sitting-at-desk.jpg')
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setPhotoSrc(() => {
      switch (theme) {
        case 'light':
          return '/images/josh-sitting-at-desk.jpg'
        case 'dark':
        default:
          return '/images/josh-sitting-at-desk-at-night.jpg'
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return <React.Fragment />

  return (
    <section className="text-center">
      <button type="button" onClick={toggleTheme} className="font-bold block">
        <Img
          src={photoSrc}
          alt="Josh sitting on a bench with a man made out of Legos"
          classNames="rounded-xl shadow-lg w-full"
          width={550}
          height={413}
        />
        <p>
          Come to the{' '}
          <GradientText>{theme === 'light' ? 'dark' : 'light'}</GradientText>{' '}
          side
        </p>
      </button>
    </section>
  )
}

export default PhotoOfJosh
