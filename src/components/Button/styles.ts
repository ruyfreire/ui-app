import styled, { css, DefaultTheme } from 'styled-components'
import { IButtonProps } from '.'

const variantContained = {
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

const variantOutline = {
  primary: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary.base};
    color: ${theme.colors.primary.base};

    :hover,
    :focus {
      border-color: ${theme.colors.primary.light};
      color: ${theme.colors.primary.light};
    }

    :active {
      border-color: ${theme.colors.primary.dark};
      color: ${theme.colors.primary.dark};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
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
  `,
  danger: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.danger.base};
    color: ${theme.colors.danger.base};

    :hover,
    :focus {
      border-color: ${theme.colors.danger.light};
      color: ${theme.colors.danger.light};
    }

    :active {
      border-color: ${theme.colors.danger.dark};
      color: ${theme.colors.danger.dark};
    }
  `
}

const variantText = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.base};

    :hover,
    :focus {
      color: ${theme.colors.primary.light};
    }

    :active {
      color: ${theme.colors.primary.dark};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary.base};

    :hover,
    :focus {
      color: ${theme.colors.secondary.light};
    }

    :active {
      color: ${theme.colors.secondary.dark};
    }
  `,
  danger: (theme: DefaultTheme) => css`
    color: ${theme.colors.danger.base};

    :hover,
    :focus {
      color: ${theme.colors.danger.light};
    }

    :active {
      color: ${theme.colors.danger.dark};
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

interface IButtonStyleProps extends IButtonProps {
  theme: DefaultTheme
}

export const Button = styled.button`
  ${({ theme, color, variant, size }: IButtonStyleProps) => css`
    font-family: ${theme.fontFamily.base};
    color: ${theme.colors.offWhite};
    letter-spacing: 2px;
    line-height: 1px;

    display: inline-flex;
    align-items: center;
    cursor: pointer;
    border-radius: ${theme.radius.md};
    border: 1px solid transparent;
    background-color: transparent;

    ${color &&
    (variant === 'text'
      ? variantText[color](theme)
      : variant === 'outline'
      ? variantOutline[color](theme)
      : variantContained[color](theme))}
    ${size && sizes[size](theme)}
  `}
`

interface IIconButtonStyleProps {
  theme?: DefaultTheme
  pos?: 'left' | 'right'
}

export const Icon = styled.i`
  ${({ pos }: IIconButtonStyleProps) => css`
    padding: 2px;
    margin: ${pos === 'right' ? '0 0 0 8px' : '0 8px 0 0'};
  `}
`
