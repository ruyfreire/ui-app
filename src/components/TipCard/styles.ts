import styled, { css, DefaultTheme } from 'styled-components'
import { TipCardProps } from '.'
import { setSpacingMargin } from '../../utils/styles'

const colors = {
  warning: (theme: DefaultTheme) => css`
    color: ${theme.colors.banana.base};
  `,
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.peach.base};
  `,
  success: (theme: DefaultTheme) => css`
    color: ${theme.colors.mint.base};
  `,
  info: (theme: DefaultTheme) => css`
    color: ${theme.colors.blueberry.base};
  `
}

export const Wrapper = styled.div<TipCardProps>`
  ${({ theme, size, ...props }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.background.card};
    border-radius: 8px;

    ${setSpacingMargin(props)};

    ${size === 'small' &&
    css`
      ${BoxIcon} {
        margin-right: ${theme.spacing('xs')};

        svg {
          width: 32px;
          height: 32px;
        }
      }

      ${Text} {
        font-size: ${theme.font.size.xs};
      }
    `}
  `}
`

type BoxIconProps = Pick<TipCardProps, 'variant'>

export const BoxIcon = styled.i<BoxIconProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: ${theme.spacing('md')};
    margin-right: ${theme.spacing('md')};
    border-radius: 8px;
    background-color: ${theme.colors.background.cardSection};

    svg {
      width: 48px;
      height: 48px;
    }

    ${variant && colors[variant](theme)}
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.white};
    line-height: 1.5;
  `}
`
