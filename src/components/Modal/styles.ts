import styled, { css } from 'styled-components'
import { ModalProps } from '.'

type WrapperProps = Omit<ModalProps, 'title'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, open, variant }) => css`
    display: ${open ? 'flex' : 'none'};
    flex-direction: column;
    border-radius: 24px;
    padding: 40px 28px;
    align-items: center;
    background-color: ${theme.colors.background.card};

    width: 100%;
    max-width: calc(100% - 32px);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;

    @media (min-width: 662px) {
      padding: 40px;

      ${variant === 'wide'
        ? css`
            max-width: 600px;

            ${Icon} {
              margin: 0;
            }

            ${Box} {
              flex-direction: row;
              align-items: flex-start;
              gap: 24px;
            }

            ${BoxContent} {
              align-items: flex-start;
            }

            ${Title}, ${Content} {
              text-align: left;
            }

            ${BoxActions} {
              justify-content: flex-end;
            }
          `
        : css`
            max-width: 450px;
          `}
    }
  `}
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const BoxContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`

type OverlayProps = Pick<ModalProps, 'open'>

export const Overlay = styled.div<OverlayProps>`
  ${({ theme, open }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: ${open ? 'flex' : 'none'};
    background-color: ${theme.colors.black3};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.family.heading};
    font-weight: ${theme.font.weight.bold};
    font-size: 32px;
    line-height: 1.2;
    color: ${theme.colors.white};

    margin-bottom: 12px;
    text-align: center;
  `}
`

type ContentProps = {
  mb?: boolean
}

export const Content = styled.p<ContentProps>`
  ${({ theme, mb }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.white2};
    line-height: 1.5;
    text-align: center;

    ${mb &&
    css`
      margin-bottom: ${theme.spacing('md')};

      @media (min-width: 600px) {
        margin-bottom: ${theme.spacing('xl')};
      }
    `}
  `}
`

type BoxActionsProps = {
  column?: boolean
}

export const BoxActions = styled.div<BoxActionsProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`

export const BoxImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacing('xl')};
    width: 100%;
  `}
`

export const Icon = styled.i`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing('md')};

    @media (min-width: 600px) {
      margin-bottom: ${theme.spacing('xl')};
    }
  `}
`

type IconCloseProps = {
  mb?: boolean
}

export const IconClose = styled.i<IconCloseProps>`
  ${({ theme, mb }) => css`
    width: 24px;
    height: 24px;
    align-self: flex-end;
    color: ${theme.colors.white};
    cursor: pointer;
    margin-bottom: ${mb ? '32px' : 0};
  `}
`
