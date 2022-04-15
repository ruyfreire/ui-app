import styled, { css } from 'styled-components'
import { TooltipProps } from '.'

const positions = {
  left: css`
    right: 100%;
    top: 50%;
    transform: translate(-10px, -50%);

    &:after {
      top: 50%;
      left: 100%;
      transform: rotate(45deg) translate(-9px, 1px);
    }
  `,
  right: css`
    left: 100%;
    top: 50%;
    transform: translate(10px, -50%);

    &:after {
      top: 50%;
      right: 100%;
      transform: rotate(45deg) translate(1px, -9px);
    }
  `,
  top: css`
    bottom: 100%;
    left: 30%;
    transform: translateY(-10px);

    &:after {
      top: 100%;
      left: 15px;
      transform: rotate(45deg) translate(-5px, -5px);
    }
  `,
  bottom: css`
    top: 100%;
    left: 30%;
    transform: translateY(10px);

    &:after {
      bottom: 100%;
      left: 15px;
      transform: rotate(45deg) translate(5px, 5px);
    }
  `
}

type TooltipTextProps = Pick<TooltipProps, 'position'>

export const TooltipText = styled.span<TooltipTextProps>`
  ${({ theme, position }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease-in-out 0.3s;
    width: max-content;
    max-width: 300px;
    z-index: -2;

    padding: 4px 24px;
    border-radius: 8px;
    background-color: ${theme.colors.background.cardSection};

    font-size: ${theme.font.size.md};
    font-weight: ${theme.font.weight.normal};
    color: ${theme.colors.white};
    line-height: 1.5;

    ${position && positions[position]};

    &:after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 2px;
      background-color: ${theme.colors.background.cardSection};
    }
  `}
`

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover,
  &:focus {
    ${TooltipText} {
      opacity: 1;
      z-index: 2;
    }
  }
`
