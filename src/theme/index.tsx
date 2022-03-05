import React from 'react'
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from 'styled-components'

export const theme = {
  colors: {
    /**
     * primary #2059A4
     */
    primary: '#2059A4',
    /**
     * primary dark #194783
     */
    primaryDark: '#194783',
    /**
     * primary light #2c75d5
     */
    primaryLight: '#2c75d5',
    /**
     * secondary #5ECCD1
     */
    secondary: '#5ECCD1',
    /**
     * danger #D8655F
     */
    danger: '#D8655F',
    /**
     * warning #F1DC73
     */
    warning: '#F1DC73',
    /**
     * success #64D870
     */
    success: '#64D870',
    /**
     * grayLight #C4C4C4
     */
    grayLight: '#C4C4C4',
    /**
     * grayMedium #565656
     */
    grayMedium: '#565656',
    /**
     * grayDark #191919
     */
    grayDark: '#191919',
    /**
     * dark #000000
     */
    black: '#000000',
    /**
     * white #FFFFFF
     */
    white: '#FFFFFF',
  },
  sizes: {
    /**
     * xxs: 1rem = 10px
     */
    xxs: '1rem',
    /**
     * xxs: 1.2rem = 12px
     */
    xs: '1.2rem',
    /**
     * xxs: 1.6rem = 16px
     */
    md: '1.6rem',
    /**
     * xxs: 2rem = 20px
     */
    lg: '2rem',
    /**
     * xxs: 2.4rem = 24px
     */
    xl: '2.4rem',
    /**
     * xxs: 2.8rem = 28px
     */
    xxl: '2.8rem',
  },
  fontWeights: {
    /**
     * light: 300
     */
    light: 300,
    /**
     * normal: 400
     */
    normal: 400,
    /**
     * medium: 500
     */
    medium: 500,
    /**
     * bold: 700
     */
    bold: 700,
  },
  spacing: {
    /**
     * xs: 8px
     */
    xs: '8px',
    /**
     * md: 16px
     */
    md: '16px',
    /**
     * lg: 24px
     */
    lg: '24px',
    /**
     * xl: 32px
     */
    xl: '32px',
  },
  radius: {
    xs: '2px',
    md: '4px',
    lg: '8px',
    full: '100px',
  },
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
  overrideTheme,
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
