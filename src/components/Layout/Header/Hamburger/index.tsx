import React from "react"
import styled from "styled-components"
import { colors, breakpoints } from "../../../../theme"
import { NavigationProps } from "../Navigation"

const HamburgerLine = styled.div`
  position: absolute;
  height: 2px;
  background: ${colors.black};
  border-radius: 9px;
  transition: .25s ease-in-out;
`

const StyledHamburger = styled.div<NavigationProps>`
  display: none;
  width: 26px;
  height: 14px;
  position: relative;
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.mobile}) {
    display: block;
  }
  ${HamburgerLine}:first-of-type {
    top: ${p => p.isOpen ? '6px' : 0};
    width: ${p => p.isOpen ? 0 : '100%'};
    left: ${p => p.isOpen ? '50%' : 0};
  }
  ${HamburgerLine}:nth-of-type(2) {
    top: 6px;
    width: 100%;
    transform: ${p => p.isOpen ? 'rotate(45deg)' : 'rotate(0)' };
  }
  ${HamburgerLine}:nth-of-type(3) {
    top: 6px;
    width: 100%;
    transform: ${p => p.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
  ${HamburgerLine}:nth-of-type(4) {
    top: ${p => p.isOpen ? '6px' : '12px'};
    width: ${p => p.isOpen ? 0 : '100%'};
    left: ${p => p.isOpen ? '50%' : 0 };
  }
`

const Hamburger = ({ isOpen , onClick} : NavigationProps) => (
    <StyledHamburger isOpen={isOpen} onClick={onClick}>
      {Array.from({ length: 4 }).map((el, i) => <HamburgerLine key={i} />)}
    </StyledHamburger>
)

export default Hamburger
