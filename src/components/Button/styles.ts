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
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger.base};
  `
}

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.xs};
    padding: 4px 8px;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.md};
    padding: 6px 12px;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.sizes.lg};
    padding: 8px 16px;
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
    letter-spacing: 1px;
    color: ${theme.colors.white};

    ${colors[color](theme)}
    ${sizes[size](theme)}
  `}
`
