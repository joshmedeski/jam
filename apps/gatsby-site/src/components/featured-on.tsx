import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Img = styled.img`
  height: auto;
  width: 150px;
  margin-right: 16px;
`

const FeaturedOn: React.FC = () => {
  return (
    <Wrapper>
      <Img alt="Todoist" src="/todoist.png" />
      <Img alt="Trello" src="/trello.png" />
      <Img alt="Produtivityist" src="/productivityist.png" />
      <Img alt="Lifehack.org" src="/lifehackorg.png" />
    </Wrapper>
  )
}

export default FeaturedOn
