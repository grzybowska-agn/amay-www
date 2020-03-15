import React, {useState} from "react"
import styled from "styled-components"
import {breakpoints, colors} from "../../../theme"
import Navigation from "./Navigation"
import HeaderLogo from "./HeaderLogo"
import Hamburger from './Hamburger'
import Container from '../Container'

const StyledHeader = styled.header`
  width: 100%;
  padding: 40px 55px 50px;
  background-color: ${colors.white};
  ${Container} {
    align-items: flex-start;
  }
  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 25px 30px;
    ${Container} {
      align-items: center;
    }
`

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <StyledHeader>
      <Container>
        <HeaderLogo />
        <Navigation isOpen={isOpen} />
        <Hamburger isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      </Container>
    </StyledHeader>
  )

}

export default Header
