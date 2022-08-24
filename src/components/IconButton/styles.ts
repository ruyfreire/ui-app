import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import { IconButtonProps } from '.'
import { setSpacingMargin } from '../../utils/styles'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const sizes = {
  small: (theme: DefaultTheme) => css`
    width: 28px;
    height: 28px;
    padding: 6px;

    box-shadow: inset 0 0 0 2px transparent;

    :hover:not(:disabled),
    :focus:not(:disabled) {
      box-shadow: inset 0 0 0 2px ${theme.colors.white3};
    }
  `,
  medium: (theme: DefaultTheme) => css`
    width: 48px;
    height: 48px;
    padding: 12px;

    box-shadow: inset 0 0 0 4px transparent;

    :hover:not(:disabled),
    :focus:not(:disabled) {
      box-shadow: inset 0 0 0 4px ${theme.colors.white3};
    }
  `
}

export const Wrapper = styled.button<IconButtonProps>`
  ${({ theme, size, ...props }) => css`
    color: ${theme.colors.white};
    font-size: 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    transition: ${theme.transitions.all};
    position: relative;
    background-color: ${theme.colors.white3};

    ${setSpacingMargin(props)};

    :disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.disabled};
      color: ${theme.colors.white2};
    }

    svg {
      width: 100%;
      height: 100%;
    }

    ${size && sizes[size](theme)}
  `}
`

export const IconLoader = styled.i`
  ${({ theme }) => css`
    position: relative;
    transition: ${theme.transitions.all};

    svg {
      animation: ${rotate} 1s linear infinite;
      width: 100%;
      height: 100%;
    }
  `}
`
