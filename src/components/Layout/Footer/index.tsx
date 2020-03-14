import React from "react"
import styled from 'styled-components'
import { colors } from '../../../theme'
import FooterLogo from './FooterLogo'
import Container from '../Container'
import FooterContent from "./FooterContent"
import { contact } from "./staticData"

const StyledFooter = styled.footer`
  background-color: ${colors.grey};
  width: 100%;
  padding: 40px 55px 50px;
  flex-shrink: 1;
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <FooterLogo />
      <FooterContent data={contact} />
    </Container>
  </StyledFooter>
)

export default Footer
