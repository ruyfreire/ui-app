import styled, { css } from 'styled-components'
import { TabProps } from '.'
import { MarginTypes, setSpacingMargin } from '../../utils/styles/spacings'

type TabStyleProps = Omit<TabProps, 'items' | 'active' | 'onChange'> &
  MarginTypes

export const Wrapper = styled.div<TabStyleProps>`
  ${({ theme, ...props }) => css`
    display: flex;
    border-radius: 16px;
    height: 56px;
    position: relative;
    z-index: 2;

    background-color: ${theme.colors.black3};

    ${setSpacingMargin(props)};
  `}
`

type TabItemProps = {
  active?: boolean
}

export const TabItem = styled.div<TabItemProps>`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid transparent;
    border-radius: 16px;
    flex: 1;
    cursor: pointer;
    position: relative;

    ${!active &&
    css`
      :hover {
        background: ${theme.colors.white3} content-box;
      }
    `}
  `}
`

export const Item = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.size.md};
    line-height: 1.5;
    color: ${theme.colors.white};
  `}
`

export const Icon = styled.i`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    color: ${theme.colors.white};
    margin-right: ${theme.spacing('xs')};
  `}
`

type ItemSelectedProps = {
  active: number
  size: number
}

export const ItemSelected = styled.div<ItemSelectedProps>`
  ${({ theme, active, size }) => css`
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: ${active ? `${active * size - 4}px` : '-4px'};
    width: calc(100% + 8px);
    z-index: -1;

    transition: left 0.3s cubic-bezier(0.25, 0.4, 0.7, 1.1);

    border-radius: 16px;
    background: ${theme.colors.primary.base} content-box;
    border: 4px solid ${theme.colors.white3};
  `}
`
