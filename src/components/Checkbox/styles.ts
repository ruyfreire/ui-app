import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Input = styled.input<CheckboxProps>`
  ${({ theme, error }) => css`
    display: none;

    &:checked {
      & + ${IconCheckbox} {
        border-color: ${theme.colors.primary.base};
        background: ${theme.colors.primary.base} content-box;
        color: ${theme.colors.white};

        svg {
          opacity: 1;
        }
      }

      &:disabled {
        & + ${IconCheckbox} {
          border-color: ${theme.colors.white3};
          background: ${theme.colors.white3} content-box;
          color: ${theme.colors.white2};
        }
      }
    }

    &:disabled {
      & + ${IconCheckbox} {
        cursor: not-allowed;
        border-color: ${theme.colors.white3};
        color: ${theme.colors.white2};
      }

      &
        + ${IconCheckbox}
        + ${IconLabel},
        &
        + ${IconCheckbox}
        + ${Label},
        &
        + ${IconCheckbox}
        + ${IconLabel}
        + ${Label} {
        color: ${theme.colors.white2};
      }
    }

    ${error &&
    css`
      & + ${IconCheckbox} {
        border-color: ${theme.colors.peach.base};
      }
    `}
  `}
`

export const IconCheckbox = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 16px;
    height: 16px;
    background-color: transparent;
    cursor: pointer;

    color: ${theme.colors.white};
    border-radius: ${theme.radius.xs};
    border: 1px solid ${theme.colors.white};
    transition: ${theme.transitions.all};

    svg {
      opacity: 0;
    }
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
