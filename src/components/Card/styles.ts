import styled, { css } from 'styled-components'
import { CardProps } from '.'

type WrapperProps = Omit<CardProps, 'title' | 'image'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, imageBg, imageDirection: direction }) => css`
    display: flex;
    justify-content: space-between;
    border-radius: 24px;
    width: 100%;

    ${direction === 'row'
      ? css`
          flex-direction: row;
          max-width: 600px;

          ${BoxImage},
          ${BoxContent} {
            flex: 1;
          }

          ${BoxContent} {
            max-width: 280px;
          }
        `
      : css`
          flex-direction: column;
          max-width: 290px;
        `}

    background-color: ${imageBg || theme.colors.background.card};
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.font.family.heading};
    font-size: ${theme.font.size.xl};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.white};
    line-height: 1.2;
    margin-bottom: 16px;
  `}
`

type ContentProps = {
  mb?: boolean
}

export const Content = styled.p<ContentProps>`
  ${({ theme, mb }) => css`
    font-family: ${theme.font.family.base};
    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.white2};
    line-height: 1.5;
    width: 100%;

    ${mb &&
    css`
      margin-bottom: 32px;
    `}
  `}
`

type BoxContentProps = {
  column?: boolean
}

export const BoxContent = styled.div<BoxContentProps>`
  ${({ theme, column }) => css`
    width: 100%;
    padding: 24px;
    border-radius: 24px;
    background-color: ${theme.colors.background.cardSection};

    display: flex;
    flex: 1;

    ${column
      ? css`
          flex-direction: column;
          align-items: flex-start;
        `
      : css`
          justify-content: space-between;
          align-items: center;

          ${Title} {
            margin-bottom: 0;
          }
        `};
  `}
`

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  overflow: hidden;
`
