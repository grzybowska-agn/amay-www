import React from "react"
import styled from "styled-components"
import { colors } from "../../../../theme"

const logo = require('../../../../assets/images/logo.jpg')

const StyledFooterLogo = styled.div`
  width: 80px;
  height: auto;
  background-color: ${colors.black};
  img {
    max-width: 100%;
    display: block;
  }
`

const FooterLogo = () => (
  <StyledFooterLogo>
    <img src={logo} alt='Amaya Architekci'/>
  </StyledFooterLogo>
)

export default FooterLogo

