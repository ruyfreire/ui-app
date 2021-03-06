import styled, { css } from 'styled-components'
import { InputProps } from '.'
import { MarginTypes, setSpacingMargin } from '../../utils/styles/spacings'

export const Input = styled.input<InputProps & { icon?: boolean }>`
  ${({ theme, error, align, icon, fullWidth }) => css`
    font-family: ${theme.font.family.base};
    color: ${theme.colors.white};
    background-color: transparent;
    font-size: ${theme.font.size.md};
    height: 100%;

    text-align: ${align};
    padding: ${icon ? '12px 32px 12px 60px' : '12px 24px'};
    border-radius: ${theme.radius.md};
    border: 2px solid ${theme.colors.secondary.base};
    transition: ${theme.transitions.all};

    &::placeholder {
      transition: ${theme.transitions.all};
      color: ${theme.colors.white3};
    }

    &:hover {
      &::placeholder,
      & + ${Icon} {
        color: ${theme.colors.white};
      }
    }

    &:active,
    &:focus {
      &::placeholder {
        color: transparent;
      }

      & + ${Icon} {
        color: ${theme.colors.white};
      }
    }

    &:not([value='']) {
      & + ${Icon} {
        color: ${theme.colors.white};
      }
    }

    ${error &&
    css`
      border-color: ${theme.colors.peach.base};

      &:hover
        + ${Icon},
        &:focus
        + ${Icon},
        &
        + ${Icon},
        &:not([value=''])
        + ${Icon} {
        color: ${theme.colors.peach.base};
      }
    `}

    ${fullWidth &&
    css`
      width: 100%;
    `}
  `}
`

type WrapperProps = MarginTypes

export const Wrapper = styled.div<WrapperProps>`
  ${({ ...props }) => css`
    display: flex;
    flex-direction: column;

    ${setSpacingMargin(props)};
  `}
`

export const InputContainer = styled.div`
  position: relative;
  height: 48px;
`

export const Icon = styled.i`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white3};
    transition: ${theme.transitions.all};

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    margin-left: ${theme.spacing('md')};
    padding: 2px;

    svg {
      width: 28px;
      height: 28px;
    }
  `}
`

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.peach.base};
    line-height: 1.5;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.white};
    line-height: 1.5;
  `}
`
