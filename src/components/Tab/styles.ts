import styled, { css } from 'styled-components'
import { TabProps } from '.'

type TabStyleProps = Omit<TabProps, 'items' | 'active' | 'onChange'>

export const Wrapper = styled.div<TabStyleProps>`
  ${({ theme }) => css`
    display: flex;
    border-radius: 16px;
    width: 100%;
    height: 56px;
    position: relative;
    z-index: 2;

    background-color: ${theme.colors.black3};
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
  pos?: number
}

export const ItemSelected = styled.div<ItemSelectedProps>`
  ${({ theme, pos }) => css`
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: ${pos ? `${pos - 4}px` : '-4px'};
    width: calc(100% + 8px);
    z-index: -1;

    transition: left 0.3s cubic-bezier(0.25, 0.4, 0.7, 1.1);

    border-radius: 16px;
    background: ${theme.colors.primary.base} content-box;
    border: 4px solid ${theme.colors.white3};
  `}
`
