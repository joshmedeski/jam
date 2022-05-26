import classNames from 'classnames'
import NextImg from 'next/image'
import React from 'react'

type ImgProps = {
  classNames?: string
  src: any
  alt: string
  width: number
  height: number
}

const Img: React.FC<ImgProps> = (props) => {
  return (
    <NextImg
      {...props}
      layout="intrinsic"
      className={classNames(['rounded-lg shadow-lg', props.classNames])}
    />
  )
}

export default Img
