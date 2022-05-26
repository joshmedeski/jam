import styled from "styled-components"

interface WrapperProps {
  readonly width?: number
}

const Wrapper = styled.section<WrapperProps>`
  margin: 0 0.5rem;
  max-width: ${props => (props.width ? props.width + "px" : "1200px")};

  @media (min-width: ${props =>
    props.width ? props.width + "px" : "1200px"}) {
    margin: 0 auto;
  }
`
export default Wrapper
