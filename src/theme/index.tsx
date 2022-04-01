import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: {
      base: '#2059A4',
      light: '#2567be',
      dark: '#1c5093'
    },
    secondary: {
      base: '#47A4A9',
      light: '#53b2b7',
      dark: '#3f9398'
    },
    danger: {
      base: '#D8655F',
      light: '#db746f',
      dark: '#d14c45'
    },
    warning: {
      base: '#F1DC73',
      light: '#f2df80',
      dark: '#edd352'
    },
    success: {
      base: '#64D870',
      light: '#73db7e',
      dark: '#4ad158'
    },
    gray: {
      base: '#838383',
      light: '#c7c7c7',
      dark: '#565656'
    },
    text: '#2d2d2d',
    black: '#000000',
    offWhite: '#fafafa',
    white: '#FFFFFF'
  },
  spacing: {
    xs: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  radius: {
    xs: '2px',
    md: '4px',
    lg: '8px'
  },
  font: {
    family: {
      heading: '"R-Flex", Roboto, sans-serif',
      base: '"Inter", Roboto, sans-serif'
    },
    weight: {
      medium: 400,
      bold: 700
    },
    size: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '2rem',
      xl: '2.4rem'
    }
  }
}

/**
 * Estilo global usado na base do tema
 */
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: ${theme.font.family.base};
    font-size: ${theme.font.size.md};
  }
`
