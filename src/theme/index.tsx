import React from 'react'
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme
} from 'styled-components'

export const theme = {
  colors: {
    primary: '#2059A4',
    primaryDark: '#194783',
    primaryLight: '#2c75d5',
    secondary: '#5ECCD1',
    danger: '#D8655F',
    warning: '#F1DC73',
    success: '#64D870',
    grayLight: '#C4C4C4',
    grayMedium: '#565656',
    grayDark: '#191919',
    black: '#000000',
    white: '#FFFFFF'
  },
  sizes: {
    xxs: '1rem',
    xs: '1.2rem',
    md: '1.6rem',
    lg: '2rem',
    xl: '2.4rem',
    xxl: '2.8rem'
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700
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
    lg: '8px',
    full: '100px'
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
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
