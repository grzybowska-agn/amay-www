import React from "react"
import styled from "styled-components"
import {FacebookIcon, InstagramIcon} from "../../../../assets/icons"

interface FooterContentProps {
  data: string[][]
}

const FooterBlock = styled.div``
const SocialMediaBlock = styled(FooterBlock)`
  & > ${FooterBlock} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const StyledFooterContent = styled.div`
  display: flex;
  & > ${FooterBlock} {
    margin-right: 70px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const FooterContent = ({ data }: FooterContentProps) => (
  <StyledFooterContent>
  {data.map((el, i) => (
    <FooterBlock key={i}>
      {el.map(item => <FooterBlock>{item}</FooterBlock>)}
    </FooterBlock>))}
    <SocialMediaBlock>
      <FooterBlock>Social media</FooterBlock>
      <FooterBlock>
        <a href='https://www.facebook.com/amayaarchitekci/' target='_blank'>
          <FacebookIcon />
        </a>
        <a href=''>
          <InstagramIcon />
        </a>
      </FooterBlock>
    </SocialMediaBlock>
  </StyledFooterContent>
)

export default FooterContent
