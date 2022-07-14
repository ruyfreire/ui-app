import styled, { css } from 'styled-components'
import {
  setSpacingMargin,
  setSpacingPadding
} from '../../utils/styles/spacings'

import { BoxProps, BorderProps, RadiusProps } from '.'

const setRadius = ({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
}: RadiusProps) => {
  const result = []

  if (topLeft) result.push(`border-top-left-radius: ${topLeft}px`)
  if (topRight) result.push(`border-top-right-radius: ${topRight}px`)
  if (bottomLeft) result.push(`border-bottom-right-radius: ${bottomLeft}px`)
  if (bottomRight) result.push(`border-bottom-left-radius: ${bottomRight}px`)

  return result.join(';')
}

const setBorder = ({ color, style, width }: BorderProps) => {
  const result = []

  if (color) result.push(`border-color: ${color}px`)
  if (style) result.push(`border-style: ${style}px`)
  if (width) result.push(`border-width: ${width}px`)

  return result.join(';')
}

export const Wrapper = styled.div<BoxProps>`
  ${({ theme, radius, border, bgColor, elevation, ...props }) => css`
    ${setSpacingMargin(props)};
    ${setSpacingPadding(props)};

    ${elevation &&
    css`
      box-shadow: ${elevation}px ${elevation}px 4px ${theme.colors.black2};
    `}

    ${bgColor &&
    css`
      background-color: ${bgColor};
    `}

    ${typeof radius === 'object'
      ? css`
          ${setRadius(radius)};
        `
      : css`
          border-radius: ${radius}px;
        `}

    ${typeof border === 'object'
      ? css`
          ${setBorder(border)};
        `
      : css`
          border: ${border}px solid ${theme.colors.secondary.base};
        `}
  `}
`
