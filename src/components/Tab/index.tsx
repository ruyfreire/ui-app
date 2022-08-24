import React from 'react'

import * as S from './styles'

/**
 * Props para o componente Tab
 */
export type TabProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Ícone para exibir junto ao texto do item (24x24)
   */
  icon?: React.ReactNode
  /**
   * Índice do item
   */
  index?: number
  /**
   * Função executada ao clicar em um item, recebe o índice do item clicado
   */
  onClick?: (index?: number) => void
}

/**
 * Tab para exibir itens de menu
 */
export const Tab = ({ icon, onClick, index, children, ...props }: TabProps) => {
  return (
    <S.TabItem {...props} onClick={() => onClick && onClick(index)}>
      {icon && <S.Icon>{icon}</S.Icon>}

      {children}
    </S.TabItem>
  )
}
