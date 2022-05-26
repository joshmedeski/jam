import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = styled(Link)`
  background-color: var(--cta);
  border-radius: var(--radius);
  border: var(--border-width) solid var(--black);
  color: var(--black);
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 8px 12px;
  text-decoration: none;
  text-transform: uppercase;
`

const CtaButton: React.FC = () => {
  return <Button to="/free-guide">Free Guide</Button>
}

export default CtaButton
