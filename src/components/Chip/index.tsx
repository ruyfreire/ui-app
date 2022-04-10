import React from 'react'

import * as S from './styles'

/**
 * Props para o componente Chip
 */
export type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Modifica o tamanho do chip
   */
  size?: 'small' | 'medium'
  /**
   * Exibir um ícone ao lado esquerdo do texto do chip
   */
  icon?: React.ReactNode
  /**
   * Muda estilo do chip para desabilitado
   * Obs: Isso não bloqueia eventos como exemplo o de clique
   */
  disabled?: boolean
  /**
   * Muda estilo do chip para selecionado
   */
  selected?: boolean
}

/**
 * Chip
 */
export const Chip = ({
  children,
  size = 'medium',
  icon,
  ...props
}: ChipProps) => (
  <S.Chip size={size} {...props}>
    {icon && <S.Icon>{icon}</S.Icon>}

    {children}
  </S.Chip>
)