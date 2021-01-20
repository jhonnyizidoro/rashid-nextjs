import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { Colors, Fonts } from './variables'

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    color: ${Colors.DARK_1};
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: ${Fonts.REGULAR};
  }

  body {
    background: linear-gradient(to right, ${Colors.LIGHT_1}, ${Colors.LIGHT_2} 50%);
    padding-bottom: 35px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles
