import React from 'react'

import * as S from './styles'

export interface ButtonProps {
  /**
   * Conteúdo do botão
   */
  children: React.ReactNode
  /**
   * Modifica a cor do botão
   */
  color?: 'primary' | 'secondary' | 'danger'
  /**
   * Modifica o tamanho do botão
   */
  size?: 'small' | 'medium' | 'large'
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, color, size, ...props }: ButtonProps) => (
  <S.Button color={color} size={size} {...props}>
    {children}
  </S.Button>
)
