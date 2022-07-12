import styled, { css, DefaultTheme } from 'styled-components'
import { ChipProps } from '.'

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xs};
    line-height: 18px;
    padding: 8px 10px;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.md};
    line-height: 24px;
    padding: 4px 10px;
  `
}

export const Chip = styled.div<ChipProps>`
  ${({ theme, size, disabled, selected }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.white2};
    max-height: 32px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.radius.lg};
    border: 2px solid ${theme.colors.white2};
    transition: ${theme.transitions.all};
    user-select: none;
    cursor: pointer;

    ${selected &&
    css`
      background-color: ${theme.colors.blueberry.light};
      border-color: ${theme.colors.blueberry.base};
    `}

    ${selected &&
    !disabled &&
    css`
      color: ${theme.colors.black2};
    `}

    ${disabled &&
    css`
      cursor: not-allowed;
      background-color: ${theme.colors.disabled};
      border-color: ${theme.colors.disabled};
    `}

    ${!selected &&
    !disabled &&
    css`
      :hover,
      :focus {
        background-color: ${theme.colors.white3};
      }
    `}

    ${size && sizes[size](theme)}
  `}
`

export const Icon = styled.i`
  display: flex;
  height: 16px;
  width: 16px;
  margin: 0 8px 0 0;
`

type IconCloseProps = Pick<ChipProps, 'disabled'>

export const IconClose = styled.i<IconCloseProps>`
  ${({ theme, disabled }) => css`
    display: flex;
    margin: 0 0 0 8px;
    transition: ${theme.transitions.all};
    border-radius: 50%;
    padding: 4px;
    height: 18px;
    width: 18px;

    svg {
      width: 100%;
      height: 100%;
    }

    ${!disabled &&
    css`
      :hover,
      :focus {
        background-color: ${theme.colors.peach.light};
      }
    `}
  `}
`
