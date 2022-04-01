import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    primary: {
      base: '#5561FF',
      light: '#6B75FF',
      dark: '#4B4FA0'
    },
    secondary: {
      base: '#6E7198',
      light: '#B9BCD9',
      dark: '#4F5275'
    },
    peach: {
      base: '#FF7387',
      light: '#FF96A5',
      dark: '#EF586E'
    },
    mint: {
      base: '#3EEBBE',
      light: '#68FCD6',
      dark: '#32D4AA'
    },
    banana: {
      base: '#FEC166',
      light: '#FFD9A0',
      dark: '#EEA02B'
    },
    blueberry: {
      base: '#0AA4E7',
      light: '#4EC1F3',
      dark: '#1766F9'
    },
    grape: {
      base: '#7366FE',
      light: '#A19AFE',
      dark: '#5218FF'
    },
    gum: {
      base: '#E666B3',
      light: '#FF8BD5',
      dark: '#DA46A6'
    },
    milk: {
      base: '#C5D2EC',
      light: '#FFFFFF',
      dark: '#7F98BC'
    },
    background: {
      primary: '#28393D',
      section: '#2D2F45',
      card: '#373951',
      cardSection: '#3E405B'
    },
    gradient: {
      matte: 'linear-gradient(106.48deg, #1C1C28 0%, #363649 100%)',
      atlantic:
        'linear-gradient(90.41deg, #FFFFFF 0%, #3EEBBE 0%, #4EC1F3 0.01%, #68FCD6 100%)',
      pacific: 'linear-gradient(140.48deg, #1AD1DA -8.27%, #4A5ACD 90.58%)',
      magma: 'linear-gradient(90.41deg, #F34E4E 0.01%, #FCA668 100%)',
      inferno: 'linear-gradient(90.41deg, #BE0000 0%, #FC7168 100%)'
    },
    black: '#000000',
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
