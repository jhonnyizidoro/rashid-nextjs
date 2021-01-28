import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { Colors, Fonts } from './variables'

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(to right, ${Colors.LIGHT_2}, ${Colors.LIGHT_1} 50%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body,
  input,
  textarea,
  button {
    color: ${Colors.DARK_1};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: ${Fonts.REGULAR};
  }
`

export default GlobalStyles
