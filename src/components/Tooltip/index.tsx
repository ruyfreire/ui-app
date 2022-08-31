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
}: TooltipProps) => {
  let content = null

  React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      content = React.cloneElement(
        child,
        { className: 'Tooltip_Wrapper' },
        child.props.children,
        <S.TooltipText position={position} {...props} className="Tooltip_Text">
          {text}
        </S.TooltipText>
      )
    }
  })

  return content
}
