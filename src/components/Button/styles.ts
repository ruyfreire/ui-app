import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import { IButtonProps } from '.'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const variants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary.base};

    :hover,
    :focus {
      background-color: ${theme.colors.primary.light};
      box-shadow: 0px 12px 16px 0px ${theme.colors.black}4D;
    }

    :active {
      background-color: ${theme.colors.primary.dark};
    }

    :disabled {
      background-color: ${theme.colors.secondary.base};
      cursor: not-allowed;
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary.base};

    :hover,
    :focus {
      background-color: ${theme.colors.secondary.light};
      box-shadow: 0px 12px 16px 0px ${theme.colors.black}4D;
    }

    :active {
      background-color: ${theme.colors.secondary.dark};
    }
  `,
  tertiary: (theme: DefaultTheme) => css`
    color: ${theme.colors.peach.base};

    :hover,
    :focus {
      color: ${theme.colors.peach.light};
      box-shadow: 0px 12px 16px 0px ${theme.colors.black}4D;
    }

    :active {
      color: ${theme.colors.peach.dark};
    }
  `,
  ghost: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.secondary.base};
    color: ${theme.colors.secondary.base};

    :hover,
    :focus {
      border-color: ${theme.colors.secondary.light};
      color: ${theme.colors.secondary.light};
    }

    :active {
      border-color: ${theme.colors.secondary.dark};
      color: ${theme.colors.secondary.dark};
    }
  `
}

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xs};
    padding: 12px 32px;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.md};
    padding: 8px 24px;
  `
}

export const IconLoader = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  opacity: 0;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`

export const Button = styled.button<IButtonProps>`
  ${({ theme, variant, size, loading }) => css`
    font-family: ${theme.font.family.base};
    color: ${theme.colors.white};
    letter-spacing: -5%;
    line-height: 24px;

    display: inline-flex;
    align-items: center;
    cursor: pointer;
    border-radius: ${theme.radius.md};
    border: inset 2px transparent;
    transition: all 0.2s ease-in-out;
    position: relative;

    ${!!variant && variants[variant](theme)}
    ${size && sizes[size](theme)}
    ${loading &&
    css`
      color: transparent;
      background-color: ${theme.colors.primary.dark};
      :hover,
      :focus {
        background-color: ${theme.colors.primary.dark};
        box-shadow: none;
      }

      ${IconLoader} {
        display: flex;
        opacity: 1;
      }
    `}
  `}
`

interface IIconButtonStyleProps {
  pos?: 'left' | 'right'
}

export const Icon = styled.i<IIconButtonStyleProps>`
  ${({ pos }) => css`
    display: flex;
    margin: ${pos === 'right' ? '0 0 0 8px' : '0 8px 0 0'};
  `}
`
