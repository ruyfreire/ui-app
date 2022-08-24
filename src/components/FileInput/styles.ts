import styled, { css } from 'styled-components'
import { MarginTypes, setSpacingMargin } from '../../utils/styles'

type WrapperProps = MarginTypes & {
  added?: boolean
  over?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, over, added, ...props }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 24px;
    padding: ${theme.spacing('xs')};
    border: 4px dashed ${theme.colors.white3};
    min-width: 260px;
    min-height: 260px;
    cursor: pointer;
    position: relative;
    transition: ${theme.transitions.all};

    ${setSpacingMargin(props)};

    ${(over || added) &&
    css`
      border-color: ${theme.colors.mint.base};
    `}

    ${added &&
    css`
      cursor: initial;

      ${Description} {
        color: ${theme.colors.mint.base};
      }

      ${IconDelete}:hover {
        box-shadow: inset 0 0 0 4px ${theme.colors.white3};
      }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.md};
    line-height: 1.5;
    color: ${theme.colors.white};
    text-align: center;
    margin-bottom: ${theme.spacing('xs')};
  `}
`

export const Sub = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.md};
    line-height: 1.5;
    color: ${theme.colors.white2};

    .ellipsis {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 50%;
    }
  `}
`

export const IconDelete = styled.i`
  ${({ theme }) => css`
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    color: ${theme.colors.white};
    transition: ${theme.transitions.all};
  `}
`

export const Icon = styled.i`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    color: ${theme.colors.white2};
    margin-right: 4px;
  `}
`
