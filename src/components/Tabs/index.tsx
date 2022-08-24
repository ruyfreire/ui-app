import React, { useCallback, useEffect, useRef, useState } from 'react'
import { MarginTypes } from '../../utils/styles'

import * as S from './styles'

/**
 * Props para o componente Tabs
 */
export type TabsProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
  MarginTypes & {
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
 * Tabs para exibir itens de menu
 */
export const Tabs = ({ active, onChange, children, ...props }: TabsProps) => {
  const container = useRef({} as HTMLDivElement)
  const [widthItem, setWidthItem] = useState<number>(0)

  const setWidth = useCallback(() => {
    setWidthItem(container.current.offsetWidth / React.Children.count(children))
  }, [])

  useEffect(() => {
    setWidth()

    window.addEventListener('resize', setWidth)

    return () => window.removeEventListener('resize', setWidth)
  }, [])

  const childrenElements = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onClick: onChange, index })
    }

    return child
  })

  return (
    <S.Wrapper {...props} ref={container}>
      {widthItem && <S.ItemSelected active={active} size={widthItem} />}

      {childrenElements}
    </S.Wrapper>
  )
}
