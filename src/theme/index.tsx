import { createGlobalStyle } from 'styled-components'
import { calcSpacing } from '../utils/styles'

export const theme = {
  colors: {
    primary: {
      /** #3643fc */
      base: '#3643fc',
      /** #535FFF */
      light: '#535FFF',
      /** #44488B */
      dark: '#44488B'
    },
    secondary: {
      /** #60648B */
      base: '#60648B',
      /** #989BC1 */
      light: '#989BC1',
      /** #45475A */
      dark: '#45475A'
    },
    blueberry: {
      /** #0AA4E7 */
      base: '#0AA4E7',
      /** #4EC1F3 */
      light: '#4EC1F3',
      /** #1766F9 */
      dark: '#1766F9'
    },
    mint: {
      /** #3EEBBE */
      base: '#3EEBBE',
      /** #68FCD6 */
      light: '#68FCD6',
      /** #32D4AA */
      dark: '#32D4AA'
    },
    banana: {
      /** #FEC166 */
      base: '#FEC166',
      /** #FFD9A0 */
      light: '#FFD9A0',
      /** #EEA02B */
      dark: '#EEA02B'
    },
    peach: {
      /** #FF7387 */
      base: '#FF7387',
      /** #FF96A5 */
      light: '#FF96A5',
      /** #EF586E */
      dark: '#EF586E'
    },
    background: {
      /** #28293D */
      primary: '#28293D',
      /** #2D2F45 */
      section: '#2D2F45',
      /** #373951 */
      card: '#373951',
      /** #3E405B */
      cardSection: '#3E405B'
    },
    /** #FFFFFF */
    white: '#FFFFFF',
    /** #ffffffcc */
    white2: '#ffffffcc',
    /** #ffffff19 */
    white3: '#ffffff19',
    /** #000000 */
    black: '#000000',
    /** #0000007f */
    black2: '#0000007f',
    /** #00000019 */
    black3: '#00000019',
    /** #6E719833 */
    disabled: '#6E719833'
  },
  /**
   * Função que recebe uma string de tamanho pre definida ou um número para calcular o valor (valor * 8)
   *
   * xs: 8px | md: 16px | lg: 24px | xl: 32px
   */
  spacing: (value: number | 'xs' | 'md' | 'lg' | 'xl') => {
    switch (value) {
      case 'xs':
        return `${calcSpacing(1)}px`
      case 'md':
        return `${calcSpacing(2)}px`
      case 'lg':
        return `${calcSpacing(3)}px`
      case 'xl':
        return `${calcSpacing(4)}px`
      default:
        return `${calcSpacing(value)}px`
    }
  },
  radius: {
    /** 4px */
    xs: '4px',
    /** 8px */
    sm: '8px',
    /** 12px */
    md: '12px',
    /** 24px */
    lg: '24px'
  },
  font: {
    family: {
      /** "Sora", Roboto, sans-serif */
      heading: '"Sora", Roboto, sans-serif',
      /** "Inter", Roboto, sans-serif */
      base: '"Inter", Roboto, sans-serif'
    },
    weight: {
      /** 400 */
      normal: 400,
      /** 500 */
      medium: 500,
      /** 600 */
      semiBold: 600,
      /** 700 */
      bold: 700
    },
    size: {
      /** 1.2rem (12px) */
      xs: '1.2rem',
      /** 1.4rem (14px) */
      sm: '1.4rem',
      /** 1.6rem (16px) */
      md: '1.6rem',
      /** 2rem (20px) */
      lg: '2rem',
      /** 2.4rem (24px) */
      xl: '2.4rem'
    }
  },
  transitions: {
    /** all 0.2s ease-in-out */
    all: 'all 0.2s ease-in-out'
  },
  breakpoints: {
    /** 0 */
    xs: 0,
    /** 576 */
    sm: 576,
    /** 768 */
    md: 768,
    /** 992 */
    lg: 992,
    /** 1200 */
    xl: 1200,
    /** 1400 */
    xxl: 1400
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
    color: ${theme.colors.white2};
  }

  .Tooltip_Wrapper {
    position: relative;

    &:hover,
    &:focus {
      .Tooltip_Text {
        opacity: 1;
        z-index: 2;
      }
    }
  }

`
