import classNames from 'classnames'
import React from 'react'

import { A } from '@/ui'
import { NavItem } from '@/utils/nav'

const MenuItem: React.FC<{ item: NavItem; index: number }> = ({
  item,
  index
}) => {
  return (
    <A href={item.to} isBlackWhite>
      <span className="text-lg inline-flex align-center items-center">
        <item.icon
          className={classNames([
            'mr-2 w-6 h-6',
            {
              'text-primary-light dark:text-primary-dark': !(index % 2)
            },
            {
              'text-secondary-light dark:text-secondary-dark': index % 2
            }
          ])}
        />
        <span className="leading-none">{item.text}</span>
      </span>
    </A>
  )
}

export default MenuItem
