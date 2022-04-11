import Link, { LinkProps } from 'next/link'
import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

import GradientText from '@/ui/GradientText'

type AnchorElement = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

interface AnchorProps extends AnchorElement {
  hasGradient?: boolean
  isBlackWhite?: boolean
}

/**
 * Anchor Element
 */
const A: React.FC<AnchorProps> = ({
  hasGradient,
  isBlackWhite,
  href,
  children,
  ...props
}) => {
  if (!href) throw 'href prop is missing on an <A> element'
  const isExternal = href.startsWith('http')

  const externalProps: AnchorElement = {
    href,
    target: '_blank',
    rel: 'noopener noreferrer'
  }

  const linkProps: React.PropsWithChildren<LinkProps> = {
    href,
    passHref: true
  }

  const anchorClasses = isBlackWhite
    ? 'text-black dark:text-white'
    : 'text-primary-light dark:text-primary-dark'

  if (isExternal) {
    return (
      <a {...externalProps} {...props} className={anchorClasses}>
        {hasGradient ? <GradientText>{children}</GradientText> : children}
      </a>
    )
  } else {
    return (
      <Link {...linkProps}>
        <a {...props} className={anchorClasses}>
          {hasGradient ? (
            <GradientText isLink>{children}</GradientText>
          ) : (
            children
          )}
        </a>
      </Link>
    )
  }
}

export default A
