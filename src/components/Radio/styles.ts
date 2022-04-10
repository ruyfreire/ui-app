import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Input = styled.input<RadioProps>`
  ${({ theme, error }) => css`
    display: none;

    &:checked {
      & + ${IconRadio} {
        border-width: 4px;
        border-color: ${theme.colors.primary.base};
        background: ${theme.colors.white} content-box;
      }

      &:disabled {
        & + ${IconRadio} {
          border-color: ${theme.colors.white3};
          background: ${theme.colors.white2} content-box;
        }
      }
    }

    &:disabled {
      & + ${IconRadio} {
        cursor: not-allowed;
        border-color: ${theme.colors.white3};
      }

      &
        + ${IconRadio}
        + ${IconLabel},
        &
        + ${IconRadio}
        + ${IconLabel}
        + ${Label} {
        color: ${theme.colors.white2};
      }
    }

    ${error &&
    css`
      & + ${IconRadio} {
        border-color: ${theme.colors.peach.base};
      }
    `}
  `}
`

export const IconRadio = styled.div`
  ${({ theme }) => css`
    width: 16px;
    height: 16px;
    background-color: transparent;
    cursor: pointer;

    border-radius: ${theme.radius.md};
    border: 1px solid ${theme.colors.white};
    transition: ${theme.transitions.all};
  `}
`

export const IconLabel = styled.i`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    transition: ${theme.transitions.all};
    margin-left: ${theme.spacing.xs};

    svg {
      width: 24px;
      height: 24px;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family.base};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.size.md};
    color: ${theme.colors.white};
    line-height: 1.5;
    margin-left: ${theme.spacing.xs};
    transition: ${theme.transitions.all};
  `}
`

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
`
