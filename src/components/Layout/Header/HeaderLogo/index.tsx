import React from 'react'
import styled from "styled-components"
import { breakpoints } from "../../../../theme"
import { NavLink } from "../Navigation"

const LogoLink = styled(NavLink)`
  text-transform: uppercase;
  font-weight: 800;
  line-height: 1.3625;
  margin-right: 0;
  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
    text-transform: none;
    font-weight: bold;
    margin-left: 26px;
  }
`

const StyledHeaderLogo = styled.h1`
  max-width: 220px;
  @media screen and (max-width: ${breakpoints.mobile}) {
     max-width: unset;
     flex-grow: 1;
     text-align: center;
   }
`

const HeaderLogo = () => (
  <StyledHeaderLogo>
    <LogoLink to='/'>Amaya Architekci</LogoLink>
  </StyledHeaderLogo>
)

export default HeaderLogo
