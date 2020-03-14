import React from 'react'
import styled from "styled-components"
import { NavLink } from "../Navigation"

const StyledHeaderLogo = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;
  max-width: 220px;
  line-height: 1.3625;
`

const HeaderLogo = () => (
  <StyledHeaderLogo>
    <NavLink to='/'>Amaya Architekci</NavLink>
  </StyledHeaderLogo>
)

export default HeaderLogo
