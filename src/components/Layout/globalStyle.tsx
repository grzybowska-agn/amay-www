import React from "react"
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import "typeface-open-sans"


const GlobalStyle = createGlobalStyle`
  ${reset};
  body, html {
    height: 100%;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.3625;
    font-size: 18px;
  }
  #___gatsby, div[role="group"][tabindex] {
    height: 100%;
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`

export default GlobalStyle
