import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

import { MetaDataProps } from './MetaData'

export type NextPageWithLayout<T = void> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode
  metaData?: MetaDataProps
}
