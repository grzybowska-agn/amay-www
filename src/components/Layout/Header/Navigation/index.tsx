import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from '../../../../theme'

const StyledNavigation = styled.nav``

export const NavLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: ${colors.black};
  margin-right: 30px;
  &:last-of-type {
    margin-right: 0;
  }
`

const Navigation = () => (
  <StyledNavigation>
    <NavLink to='/projekty'>Projekty</NavLink>
    <NavLink to='/o-nas'>O nas</NavLink>
    <NavLink to='/kontakt'>Kontakt</NavLink>
  </StyledNavigation>
)

export default Navigation
