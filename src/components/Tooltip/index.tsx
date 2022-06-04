import React from 'react'

import * as S from './styles'

/**
 * Props para o componente Tooltip
 */
export type TooltipProps = React.HTMLAttributes<HTMLSpanElement> & {
  /**
   * Posição do tooltip em relação ao elemento
   */
  position?: 'left' | 'right' | 'top' | 'bottom'
  /**
   * Texto para exibir no tooltip
   */
  text: string
}

/**
 * Tooltip para exibir textos no evento de hover ou focus de um elemento
 */
export const Tooltip = ({
  children,
  position = 'bottom',
  text,
  ...props
}: TooltipProps) => (
  <S.Wrapper>
    {children}

    <S.TooltipText position={position} {...props}>
      {text}
    </S.TooltipText>
  </S.Wrapper>
)
