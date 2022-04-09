import styled, { css } from 'styled-components'
import { CountdownProps } from '.'

export const ContainerTime = styled.div`
  display: flex;
  align-items: center;
`

export const BoxTime = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${theme.colors.background.cardSection};
    border-radius: ${theme.radius.md};
    padding: 24px 12px;
    width: 110px;
  `}
`

export const TextTime = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.heading};
    font-size: 4.8rem;
    color: ${theme.colors.white};
    line-height: 1.2;
  `}
`

export const TextTimeInfo = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.white};
    line-height: 1.5;
  `}
`

export const SeparatorTime = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 8px;

    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: ${theme.colors.background.cardSection};

      &:first-child {
        margin-bottom: 20px;
      }
    }
  `}
`

export const TextTitle = styled.h6`
  ${({ theme }) => css`
    font-family: ${theme.font.family.heading};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.white};
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 0.2em;
    margin-bottom: ${theme.spacing.xs};
  `}
`

export const TextSub = styled.h6`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.white};
    line-height: 1.5;
    margin-top: ${theme.spacing.xs};
  `}
`

export const Wrapper = styled.div<CountdownProps>`
  ${({ size }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${size === 'small' &&
    css`
      ${BoxTime} {
        width: 80px;
        padding: 24px 8px;
      }

      ${TextTime} {
        font-size: 3.2rem;
      }

      ${TextTimeInfo} {
        font-size: 1.2rem;
      }

      ${TextSub} {
        font-size: 1.2rem;
      }

      ${SeparatorTime} {
        margin: 0 4px;

        span {
          width: 4px;
          height: 4px;

          &:first-child {
            margin-bottom: 16px;
          }
        }
      }
    `}
  `}
`
