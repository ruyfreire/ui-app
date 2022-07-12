import styled, { css } from 'styled-components'
import { DropdownProps } from '.'

type WrapperProps = Omit<
  DropdownProps,
  'value' | 'options' | 'defaultValue' | 'onChange' | 'emptyOptionsText'
> & {
  listHeight?: number
  open: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, listHeight, open }) => css`
    border-radius: 8px;
    position: relative;
    z-index: 1;

    ${open &&
    css`
      z-index: 2;

      ${BoxSelected} {
        background-color: ${theme.colors.background.cardSection};
      }

      ${List} {
        max-height: ${listHeight ? `${listHeight + 10}px` : 'none'};
        padding-top: 10px;
      }

      ${Icon} {
        transform: rotate(180deg);
      }
    `}
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    border-radius: 0 0 8px 8px;
    list-style: none;
    max-height: 0;
    overflow: hidden;
    transition: ${theme.transitions.all};
    width: 100%;
    margin-top: -10px;
    background-color: ${theme.colors.background.card};
    z-index: -1;

    position: absolute;
    top: 100%;
    left: 0;
  `}
`

type OptionProps = {
  disabled?: boolean
}

export const Option = styled.li<OptionProps>`
  ${({ theme, disabled }) => css`
    font-family: ${theme.font.family.base};
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.semiBold};
    line-height: 1.5;
    color: ${theme.colors.white};
    padding: 16px 20px;
    border-radius: 8px;
    cursor: pointer;

    ${disabled
      ? css`
          color: ${theme.colors.white3};
          cursor: initial;
        `
      : css`
          &:hover {
            background-color: ${theme.colors.background.cardSection};
          }
        `}
  `}
`

export const BoxSelected = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    cursor: pointer;
    border-radius: 8px;
    z-index: 1;

    &:hover {
      background-color: ${theme.colors.background.cardSection};
    }
  `}
`

type SelectedProps = {
  empty?: boolean
}

export const Selected = styled.p<SelectedProps>`
  ${({ theme, empty }) => css`
    font-family: ${theme.font.family.base};
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.semiBold};
    line-height: 1.5;
    color: ${empty ? theme.colors.white3 : theme.colors.white};
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
