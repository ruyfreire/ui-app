import React, { useEffect, useRef, useState } from 'react'
import { MarginTypes } from '../../utils/styles/spacings'

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
export type TabProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
  MarginTypes & {
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
  const container = useRef({} as HTMLDivElement)
  const [widthItem, setWidthItem] = useState<number>()

  useEffect(() => {
    setWidthItem(container.current.offsetWidth / 3)
  }, [])

  return (
    <S.Wrapper {...props} ref={container}>
      {items.map((item, index) => (
        <S.TabItem
          key={item.index}
          active={active === item.index}
          onClick={() => onChange(item.index)}
        >
          {item.icon && <S.Icon>{item.icon}</S.Icon>}

          <S.Item>{item.label}</S.Item>

          {index === 0 && widthItem && (
            <S.ItemSelected active={active} size={widthItem} />
          )}
        </S.TabItem>
      ))}
    </S.Wrapper>
  )
}
