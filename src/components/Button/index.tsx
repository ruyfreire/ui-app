import React from 'react'

import * as S from './styles'

/**
 * Interface de Props para o componente Button
 */
export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Modifica a cor do botão
   */
  color?: 'primary' | 'secondary' | 'danger'
  /**
   * Determina o estilo do botão
   */
  variant?: 'contained' | 'outline' | 'text'
  /**
   * Modifica o tamanho do botão
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Exibir um ícone ao lado esquerdo do texto do botão
   */
  startIcon?: React.ReactNode
  /**
   * Exibir um ícone ao lado direito do texto do botão
   */
  endIcon?: React.ReactNode
}

/**
 * Botão de ação
 */
export const Button = ({
  children,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  startIcon,
  endIcon,
  onClick,
  ...props
}: IButtonProps) => (
  <S.Button
    color={color}
    variant={variant}
    size={size}
    onClick={onClick}
    {...props}
  >
    {startIcon && <S.Icon pos="left">{startIcon}</S.Icon>}

    {children}

    {endIcon && <S.Icon pos="right">{endIcon}</S.Icon>}
  </S.Button>
)
