import styled, { css } from 'styled-components'
import { TabsProps } from '.'
import { MarginTypes, setSpacingMargin } from '../../utils/styles'

type TabStyleProps = Omit<TabsProps, 'active' | 'onChange'> & MarginTypes

export const Wrapper = styled.div<TabStyleProps>`
  ${({ theme, ...props }) => css`
    display: flex;
    border-radius: 16px;
    height: 56px;
    position: relative;
    z-index: 2;
    overflow: hidden;

    background-color: ${theme.colors.black3};

    ${setSpacingMargin(props)};
  `}
`

type ItemSelectedProps = {
  active: number
  size: number
}

export const ItemSelected = styled.div<ItemSelectedProps>`
  ${({ theme, active, size }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${active ? `${active * size}px` : '0px'};
    width: ${size}px;
    z-index: -1;

    transition: left 0.3s cubic-bezier(0.25, 0.4, 0.7, 1.1);

    border-radius: 16px;
    background: ${theme.colors.primary.base} content-box;
    border: 4px solid ${theme.colors.white3};
  `}
`
