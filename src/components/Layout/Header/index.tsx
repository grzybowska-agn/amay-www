import React from "react"
import styled from "styled-components"
import { colors } from "../../../theme"
import Navigation from "./Navigation"
import HeaderLogo from "./HeaderLogo"
import Container from '../Container'
import { Link } from "gatsby"

const StyledHeader = styled.header`
  width: 100%;
  padding: 40px 55px 50px;
  background-color: ${colors.white};
  ${Container} {
    align-items: flex-start;
  }
`

const Header = () => (
  <StyledHeader>
    <Container>
      <HeaderLogo />
      <Navigation />
    </Container>
  </StyledHeader>
)

export default Header
