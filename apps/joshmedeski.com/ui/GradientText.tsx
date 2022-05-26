import classNames from 'classnames'
import React from 'react'

const baseGradient = [
  'text-transparent bg-clip-text bg-gradient-to-bl',
  'dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br'
]

export const highlightGradientClasses = classNames([
  ...baseGradient,
  'dark:from-secondary-300 dark:to-primary-300',
  'from-secondary-700 to-primary-700'
])

export const linkGradientClasses = classNames([
  ...baseGradient,
  'from-primary-800 to-primary-dark',
  'dark:from-primary-200 dark:to-primary-light'
])

const GradientSpan: React.FC<{ isLink?: boolean }> = ({ children, isLink }) => {
  return (
    <span className={isLink ? linkGradientClasses : highlightGradientClasses}>
      {children}
    </span>
  )
}

export default GradientSpan
