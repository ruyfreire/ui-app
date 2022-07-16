import styled, { css } from 'styled-components'
import { CollapseProps } from '.'
import { setSpacingMargin } from '../../utils/styles/spacings'

type WrapperProps = Omit<CollapseProps, 'title' | 'toggleOpen'> & {
  contentHeight?: number
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, open, contentHeight, ...props }) => css`
    background-color: ${theme.colors.black3};
    border-radius: 16px;
    padding: ${theme.spacing('md')};
    transition: ${theme.transitions.all};

    ${setSpacingMargin(props)};

    ${open
      ? css`
          box-shadow: inset 0 0 0 4px ${theme.colors.white3};

          ${Content} {
            max-height: ${contentHeight ? `${contentHeight + 32}px` : 'none'};
            padding: ${theme.spacing('md')};
            opacity: 1;
          }

          ${Icon} {
            transform: rotate(180deg);
          }
        `
      : css`
          ${BoxTitle}:hover {
            background-color: ${theme.colors.white3};
          }
        `}
  `}
`

export const BoxTitle = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    padding: ${theme.spacing('md')};

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.semiBold};
    line-height: 1.5;
    color: ${theme.colors.white};
  `}
`

export const Icon = styled.i`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    color: ${theme.colors.white};
    transition: ${theme.transitions.all};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.medium};
    line-height: 1.5;
    color: ${theme.colors.white};

    max-height: 0;
    padding: 0 16px;
    opacity: 0;
    overflow: hidden;
    transition: ${theme.transitions.all};
  `}
`
