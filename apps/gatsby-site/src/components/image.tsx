import React from "react"
import styled from "styled-components"

type Props = {
  src: string
  alt: string
  float?: string
}

const Img: React.FC<Props> = ({ src, alt, float }) => {
  return <img className="shadow-lg rounded-lg" src={src} alt={alt} />
}

export default Img
