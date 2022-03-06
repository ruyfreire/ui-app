import React from 'react'
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme
} from 'styled-components'

export const theme = {
  colors: {
    primary: {
      /** base: '#2059A4' */
      base: '#2059A4',
      /** light: '#2567be' */
      light: '#2567be',
      /** dark: '#1c5093' */
      dark: '#1c5093'
    },
    secondary: {
      /** base: '#47A4A9' */
      base: '#47A4A9',
      /** light: '#53b2b7' */
      light: '#53b2b7',
      /** dark: '#3f9398' */
      dark: '#3f9398'
    },
    danger: {
      /** base: '#D8655F' */
      base: '#D8655F',
      /** light: '#db746f' */
      light: '#db746f',
      /** dark: '#d14c45' */
      dark: '#d14c45'
    },
    warning: {
      /** base: '#F1DC73' */
      base: '#F1DC73',
      /** light: '#f2df80' */
      light: '#f2df80',
      /** dark: '#edd352' */
      dark: '#edd352'
    },
    success: {
      /** base: '#64D870' */
      base: '#64D870',
      /** light: '#73db7e' */
      light: '#73db7e',
      /** dark: '#4ad158' */
      dark: '#4ad158'
    },
    gray: {
      /** base: '#838383' */
      base: '#838383',
      /** light: '#c7c7c7' */
      light: '#c7c7c7',
      /** dark: '#565656' */
      dark: '#565656'
    },
    /** text: '#2d2d2d' */
    text: '#2d2d2d',
    /** black: '#000000' */
    black: '#000000',
    /** offWhite: '#fafafa' */
    offWhite: '#fafafa',
    /** white: '#FFFFFF' */
    white: '#FFFFFF'
  },
  sizes: {
    /** xxs: '1px' */
    xxs: '1rem',
    /** xs: '12px' */
    xs: '1.2rem',
    /** md: '16px' */
    md: '1.6rem',
    /** lg: '2px' */
    lg: '2rem',
    /** xl: '24px' */
    xl: '2.4rem',
    /** xxl: '28px' */
    xxl: '2.8rem'
  },
  fontWeights: {
    /** light: 100 */
    light: 100,
    /** normal: 300 */
    normal: 300,
    /** medium: 400 */
    medium: 400,
    /** bold: 700 */
    bold: 700
  },
  spacing: {
    /** xs: '8px' */
    xs: '8px',
    /** md: '16px' */
    md: '16px',
    /** lg: '24px' */
    lg: '24px',
    /** xl: '32px' */
    xl: '32px'
  },
  radius: {
    /** xs: '2px' */
    xs: '2px',
    /** md: '4px' */
    md: '4px',
    /** lg: '8px' */
    lg: '8px'
  },
  fontFamily: {
    base: '"Lato", Roboto, sans-serif'
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
    font-family: ${theme.fontFamily.base};
    font-size: ${theme.sizes.md};
  }
`

export interface ThemeProviderUiAppProps {
  /**
   * Conteúdo para receber o tema
   */
  children: React.ReactNode
  /**
   * Possibilita concatenar/sobrepor o tema padrão
   */
  overrideTheme?: DefaultTheme
}

/**
 * Tema padrão com GlobalStyle aplicado
 */
export const ThemeProviderUiApp = ({
  children,
  overrideTheme
}: ThemeProviderUiAppProps) => {
  let applyTheme = theme

  if (overrideTheme) {
    applyTheme = { ...theme, ...overrideTheme }
  }

  return (
    <ThemeProvider theme={applyTheme}>
      <GlobalStyle />

      {children}
    </ThemeProvider>
  )
}
