import styled, { css } from 'styled-components'
import {
  calcSpacing,
  setSpacingMargin,
  setSpacingPadding,
  SpacingTypes
} from '../../utils/styles'

import { GridProps } from '.'

const getWidth = (
  value?: number | boolean,
  paddings?: Pick<SpacingTypes, 'p' | 'pr' | 'pl'>
) => {
  if (value === true) return 'flex-grow: 1'

  if (typeof value === 'number') {
    if (value > 0 && value <= 12) {
      const { p = 0, pl = 0, pr = 0 } = paddings || {}
      const left = pl || p
      const right = pr || p
      const extra = calcSpacing(left) + calcSpacing(right)
      const width = value / 12
      const max = width * 100

      return `
        width: 100%;
        max-width: calc(${max}% - ${width * extra}px)
      `
    }
  }
}

export const Wrapper = styled.div<GridProps>`
  ${({
    theme,
    container,
    item,
    justifyContent,
    flexDirection,
    alignItems,
    flexWrap,
    gap,
    ...props
  }) => css`
    ${container
      ? css`
          display: flex;
          flex-wrap: ${flexWrap};
          justify-content: ${justifyContent};
          flex-direction: ${flexDirection};
          align-items: ${alignItems};
          gap: ${gap}px;

          ${setSpacingMargin(props)};
          ${setSpacingPadding(props)};
        `
      : css`
          display: block;
        `}

    ${item &&
    css`
      @media (min-width: 0) and (max-width: ${theme.breakpoints.xs - 1}px) {
        ${getWidth(props.xs, props)};
      }

      @media (min-width: ${theme.breakpoints.xs}px) and (max-width: ${theme
          .breakpoints.sm - 1}px) {
        ${getWidth(props.sm || props.xs, props)};
      }

      @media (min-width: ${theme.breakpoints.sm}px) and (max-width: ${theme
          .breakpoints.md - 1}px) {
        ${getWidth(props.md || props.sm || props.xs, props)};
      }

      @media (min-width: ${theme.breakpoints.md}px) and (max-width: ${theme
          .breakpoints.lg - 1}px) {
        ${getWidth(props.lg || props.md || props.sm || props.xs, props)};
      }

      @media (min-width: ${theme.breakpoints.lg}px) and (max-width: ${theme
          .breakpoints.xl - 1}px) {
        ${getWidth(
          props.xl || props.lg || props.md || props.sm || props.xs,
          props
        )};
      }

      @media (min-width: ${theme.breakpoints.xl}px) {
        ${getWidth(
          props.xxl || props.xl || props.lg || props.md || props.sm || props.xs,
          props
        )};
      }
    `}
  `}
`
