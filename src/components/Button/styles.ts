import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const colors = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary.base};

    :hover,
    :focus {
      background-color: ${theme.colors.primary.light};
    }

    :active {
      background-color: ${theme.colors.primary.dark};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary.base};

    :hover,
    :focus {
      background-color: ${theme.colors.secondary.light};
    }

    :active {
      background-color: ${theme.colors.secondary.dark};
    }
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger.base};

    :hover,
    :focus {
      background-color: ${theme.colors.danger.light};
    }

    :active {
      background-color: ${theme.colors.danger.dark};
    }
  `
}

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.xs};
    padding: 4px 14px;
    min-height: 28px;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.md};
    padding: 6px 20px;
    min-height: 32px;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.lg};
    padding: 8px 26px;
    min-height: 38px;
  `
}

interface ButtonStyleProps extends ButtonProps {
  theme: DefaultTheme
}

export const Button = styled.button`
  ${({ theme, color = 'primary', size = 'medium' }: ButtonStyleProps) => css`
    border: none;
    border-radius: ${theme.radius.md};
    cursor: pointer;
    letter-spacing: 2px;
    color: ${theme.colors.offWhite};
    font-family: ${theme.fontFamily.base};

    ${colors[color](theme)}
    ${sizes[size](theme)}
  `}
`
