import React from 'react'

import { NextPageWithLayout } from '@/ui/layouts'

const SecondBrainPage: NextPageWithLayout = () => {
  const title: string = "Josh Medeski's Second Brain"

  return (
    <iframe
      allowTransparency={true}
      style={{ background: '#0b181c' }}
      src="https://www.craft.do/s/PnbBBY5FTQ4yD7"
      title={title}
      className="w-full min-h-[90vh] -mt-2"
    ></iframe>
  )
}

SecondBrainPage.metaData = {
  title: 'Second Brain',
  description: 'This is how I have set up my Second Brain.'
}

export default SecondBrainPage
