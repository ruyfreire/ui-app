import React, { useEffect, useRef, useState } from 'react'

import * as S from './styles'

type Option = {
  label: string
  value: string | number
}

/**
 * Props para o componente Dropdown
 */
export type DropdownProps = {
  /**
   * Lista de opções para exibir no dropdown
   */
  options: Option[]
  /**
   * Valor selecionado
   */
  value: Option['value']
  /**
   * Função executada ao selecionar uma opção
   */
  onChange?: (option: Option) => void
  /**
   * Placeholder para o dropdown sem nenhuma opção selecionada
   */
  placeholder?: string
  /**
   * Texto exibido no lugar da lista caso ela seja vazia
   */
  emptyOptionsText?: string
}

/**
 * Dropdown para lista de opções
 */
export const Dropdown = ({
  options = [],
  value,
  onChange,
  placeholder = 'Selecione...',
  emptyOptionsText = 'Nenhuma opção',
  ...props
}: DropdownProps) => {
  const listRef = useRef<HTMLUListElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const handleClickOutside = (e: MouseEvent) => {
    if (!wrapperRef.current?.contains(e.target as Node)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      window.addEventListener('click', handleClickOutside, { once: true })
    } else {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [open])

  return (
    <S.Wrapper
      open={open}
      ref={wrapperRef}
      listHeight={listRef.current?.scrollHeight}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <S.BoxSelected>
        <S.Selected empty={!value}>{value || placeholder}</S.Selected>

        <S.Icon>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.875 8.99999L11.995 12.88L8.11498 8.99999C7.72498 8.60999 7.09498 8.60999 6.70498 8.99999C6.31498 9.38999 6.31498 10.02 6.70498 10.41L11.295 15C11.685 15.39 12.315 15.39 12.705 15L17.295 10.41C17.685 10.02 17.685 9.38999 17.295 8.99999C16.905 8.61999 16.265 8.60999 15.875 8.99999Z"
              fill="currentColor"
            />
          </svg>
        </S.Icon>
      </S.BoxSelected>

      <S.List ref={listRef}>
        {options.length > 0 ? (
          options.map((option) => (
            <S.Option
              key={option.value}
              onClick={() => {
                onChange && onChange(option)
              }}
            >
              {option.label}
            </S.Option>
          ))
        ) : (
          <S.Option disabled>{emptyOptionsText}</S.Option>
        )}
      </S.List>
    </S.Wrapper>
  )
}
