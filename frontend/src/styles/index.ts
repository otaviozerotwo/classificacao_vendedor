import styled, { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.platinum};
    color: ${colors.inkBlack};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`

export default GlobalStyle
