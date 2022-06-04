import React, { useRef } from 'react'

import * as S from './styles'

/**
 * Props do Item da lista de items da Tab
 */
export type TabItemProps = {
  /**
   * Índice único da lista de itens
   */
  index: number
  /**
   * Texto para exibir no item
   */
  label: string
  /**
   * Ícone para exibir junto ao texto do item (24x24)
   */
  icon?: React.ReactNode
}

/**
 * Props para o componente Tab
 */
export type TabProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange'
> & {
  /**
   * Array de itens da Tab
   */
  items: TabItemProps[]
  /**
   * Índice do item ativo
   */
  active: number
  /**
   * Função executada ao clicar em um item, recebe o índice do item clicado
   */
  onChange: (index: number) => void
}

/**
 * Tab para exibir itens de menu
 */
export const Tab = ({ items = [], active, onChange, ...props }: TabProps) => {
  const activeItem = useRef({} as HTMLDivElement)

  return (
    <S.Wrapper {...props}>
      {items.map((item, index) => (
        <S.TabItem
          key={item.index}
          active={active === item.index}
          ref={active === item.index ? activeItem : null}
          onClick={(e) => {
            activeItem.current = e.currentTarget
            onChange(item.index)
          }}
        >
          {item.icon && <S.Icon>{item.icon}</S.Icon>}

          <S.Item>{item.label}</S.Item>

          {index === 0 && (
            <S.ItemSelected pos={activeItem.current.offsetLeft} />
          )}
        </S.TabItem>
      ))}
    </S.Wrapper>
  )
}
