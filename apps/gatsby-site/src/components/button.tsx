import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  background-color: var(--white);
  border-radius: var(--radius);
  border: var(--border-width) solid var(--link);
  box-shadow: var(--shadow);
  color: var(--link);
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px 16px;
  text-decoration: none;
  text-transform: uppercase;
`

type ButtonProps = {
  to: string
}

const Button: React.FC<ButtonProps> = ({ to, children }) => {
  return <StyledButton to={to}>{children}</StyledButton>
}

export default Button
