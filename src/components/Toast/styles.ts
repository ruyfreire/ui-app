import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import { ToastProps } from '.'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const colors = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.mint.base};
    border-color: ${theme.colors.mint.light};
  `,
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.peach.base};
    border-color: ${theme.colors.peach.light};
  `,
  loading: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.background.card};
    border-color: ${theme.colors.background.cardSection};

    ${Text},
    ${BoxIcon} {
      color: ${theme.colors.white};
    }
  `
}

export const Wrapper = styled.div<ToastProps>`
  ${({ theme, variant, show }) => css`
    display: inline-flex;
    align-items: center;
    border-radius: 12px;
    padding: 12px 16px;
    border: 2px solid transparent;
    box-shadow: ${`0px 12px 16px ${theme.colors.black2}`};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    ${show
      ? css`
          transform: translateY(-20px);
        `
      : css`
          transform: translateY(100%);
        `}
    ${variant && colors[variant](theme)};
  `}
`

export const Overlay = styled.div`
  position: fixed;
  right: 10px;
  bottom: 0;
`

type BoxIconProps = Pick<ToastProps, 'variant'>

export const BoxIcon = styled.i<BoxIconProps>`
  ${({ theme }) => css`
    display: flex;
    margin-right: ${theme.spacing('xs')};
    color: ${theme.colors.black2};

    svg {
      width: 24px;
      height: 24px;
    }
  `}
`

export const IconLoading = styled.svg`
  animation: ${rotate} 1s linear infinite;
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.black2};
    line-height: 1.5;
  `}
`
