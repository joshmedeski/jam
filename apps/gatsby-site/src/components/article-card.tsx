import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Card = styled.section`
  background-color: var(--white);
  border-radius: var(--radius);
  border: 1rem solid var(--white);
  box-shadow: var(--shadow);
`

const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`

const ImgTag = styled.span`
  background-color: var(--highlight);
  border-radius: var(--radius);
  bottom: -7px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  color: var(--white);
  left: 10px;
  padding: 5px 10px;
  position: absolute;
`

const Img = styled.img`
  border-radius: 5px 5px 0 0;
  height: auto;
  max-width: 100%;
`

const Description = styled.p`
  font-size: 14px;
  margin: 1rem 0;
`

type Props = {
  title: string
  description: string
  uri: string
  img?: string
  highlight?: string
}

const ArticleCard: React.FC<Props> = ({
  title,
  description,
  uri,
  img,
  highlight,
}) => {
  return (
    <div className="shadow-lg rounded-lg bg-white p-4">
      {img && (
        <ImgWrapper>
          {highlight && <ImgTag>{highlight}</ImgTag>}
          <Link to={uri}>
            <Img src={img} alt="Josh writing at a desk" />
          </Link>
        </ImgWrapper>
      )}
      <div>
        <h3 className="text-2xl font-bold leading-none">
          <Link to={uri}>{title}</Link>
        </h3>
        <div>
          <p className="mt-4 mb-4 text-sm">{description}</p>

          <Link to={uri} className="font-bold text-indigo-600">
            Read Article
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
