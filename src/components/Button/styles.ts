import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import { ButtonProps } from '.'
import { setSpacingMargin } from '../../utils/styles/spacings'

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

    :hover:not(:disabled),
    :focus:not(:disabled) {
      background-color: ${theme.colors.primary.light};
      box-shadow: 0px 12px 16px 0px ${theme.colors.black}4D;
    }

    :active:not(:disabled) {
      background-color: ${theme.colors.primary.dark};
      box-shadow: none;
    }

    :disabled {
      background-color: ${theme.colors.disabled};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary.base};

    :hover:not(:disabled),
    :focus:not(:disabled) {
      box-shadow: 0px 12px 16px 0px ${theme.colors.black}4D;
    }

    :active:not(:disabled) {
      background-color: ${theme.colors.secondary.dark};
      box-shadow: none;
    }

    :disabled {
      background-color: ${theme.colors.disabled};
    }
  `,
  tertiary: (theme: DefaultTheme, loading?: boolean) => css`
    background-color: ${loading ? theme.colors.black3 : 'transparent'};

    :hover:not(:disabled),
    :focus:not(:disabled) {
      box-shadow: 0px 12px 16px 0px ${theme.colors.black}4D;
    }

    :active:not(:disabled) {
      background-color: ${theme.colors.black3};
    }
  `,
  ghost: (theme: DefaultTheme) => css`
    border: 2px solid;
    border-color: ${theme.colors.secondary.base};
    background-color: transparent;

    :hover:not(:disabled),
    :focus:not(:disabled) {
      border-color: ${theme.colors.secondary.light};
    }

    :active:not(:disabled) {
      border-color: ${theme.colors.secondary.dark};
    }

    :disabled {
      border-color: ${theme.colors.disabled};
    }
  `
}

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xs};
    padding: 8px 24px;
    max-height: 40px;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.md};
    padding: 12px 32px;
    max-height: 48px;
  `
}

export const IconLoader = styled.i`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.all};
    opacity: 0;

    svg {
      animation: ${rotate} 1s linear infinite;
    }
  `}
`

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant, size, isLoading, fullWidth, ...props }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.semiBold};
    color: ${theme.colors.white};
    letter-spacing: -5%;
    line-height: 24px;

    ${setSpacingMargin(props)};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${fullWidth ? '100%' : 'auto'};
    cursor: pointer;
    border-radius: ${theme.radius.md};
    border: none;
    transition: ${theme.transitions.all};
    position: relative;

    :disabled {
      cursor: not-allowed;

      &,
      ${Icon} {
        color: ${!isLoading && theme.colors.white2};
      }
    }

    ${!!variant && variants[variant](theme, isLoading)}
    ${size && sizes[size](theme)}

    ${isLoading &&
    css`
      color: transparent;

      :hover,
      :focus {
        box-shadow: none;
      }

      ${IconLoader} {
        display: flex;
        opacity: 1;
      }

      ${Icon} {
        opacity: 0;
      }
    `}
  `}
`

type IconButtonStyleProps = Pick<ButtonProps, 'size'> & {
  pos?: 'left' | 'right'
}

export const Icon = styled.i<IconButtonStyleProps>`
  ${({ pos, size }) => css`
    display: flex;
    margin: ${pos === 'right' ? '0 0 0 8px' : '0 8px 0 0'};
    width: ${size === 'small' ? '16px' : '24px'};
    height: ${size === 'small' ? '16px' : '24px'};
  `}
`
