import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors, breakpoints } from '../../../../theme'

export interface NavigationProps {
  isOpen?: boolean
  onClick?: () => void
}

export const NavLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: ${colors.black};
  margin-right: 30px;
  &:last-of-type {
    margin-right: 0;
  }
  @media screen and (max-width: ${breakpoints.mobile}) {
    margin-right: 0;
    font-size: 42px;
  }
`

const StyledNavigation = styled.nav<NavigationProps>`
  @media screen and (max-width: ${breakpoints.mobile}) {
    display: flex;
    transition: all .3s ease-in-out;
    opacity: ${p => p.isOpen ? 1 : 0};
    pointer-events: ${p => !p.isOpen && 'none'};
    width: 100%;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .8);
    padding: 30px;
    align-items: center;
    flex-direction: column;
  }
`

const Navigation = ({ isOpen }: NavigationProps) => (
  <StyledNavigation isOpen={isOpen}>
    <NavLink to='/projekty'>Projekty</NavLink>
    <NavLink to='/o-nas'>O nas</NavLink>
    <NavLink to='/kontakt'>Kontakt</NavLink>
  </StyledNavigation>
)

export default Navigation
