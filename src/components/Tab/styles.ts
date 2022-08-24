import styled, { css } from 'styled-components'

export const TabItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid transparent;
    border-radius: 16px;
    flex: 1;
    cursor: pointer;
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.size.md};
    line-height: 1.5;
    color: ${theme.colors.white};

    :hover {
      background: ${theme.colors.white3} content-box;
    }
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
