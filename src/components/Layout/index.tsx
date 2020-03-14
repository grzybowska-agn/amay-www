import React from "react"
import styled from "styled-components"
import GlobalStyle from './globalStyle'
import { useStaticQuery, graphql } from "gatsby"
import Footer from './Footer'
import Header from './Header'
import Content from './Content'

interface SiteProps {
  children: React.ReactNode
}

const StyledLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Index = ({ children }: SiteProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <GlobalStyle />
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </StyledLayout>
  )
}

export default Index
