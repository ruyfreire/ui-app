import React, { useEffect, useRef, useState } from 'react'
import { MarginTypes } from '../../utils/styles'

import { Chip } from '../Chip'

import * as S from './styles'

type Option = string | number | object

/**
 * Props para o componente Select
 */
export type SelectProps = MarginTypes & {
  /**
   * Lista de opções para exibir no select
   */
  options: Array<Option>
  /**
   * Valor selecionado
   */
  value: Option | Array<Option>
  /**
   * Função executada ao selecionar uma opção
   */
  onChange?: (option: any) => void
  /**
   * Placeholder para o dropdown sem nenhuma opção selecionada
   */
  placeholder?: string
  /**
   * Texto exibido no lugar da lista caso ela seja vazia
   */
  emptyOptionsText?: string
  /**
   * Função para formatar o label que deve ser exibido
   */
  getOptionLabel?: (option: any) => string | number
  /**
   * Controla se o item selecionado deve ou não exibir na lista de opções aberta
   */
  optionSelected?: boolean
  /**
   * Possibilita selecionar vários itens por vez
   */
  multi?: boolean
}

/**
 * Select para lista de opções
 */
export const Select = ({
  options = [],
  multi = false,
  optionSelected = false,
  value,
  onChange,
  placeholder = 'Selecione...',
  emptyOptionsText = 'Nenhuma opção',
  getOptionLabel,
  ...props
}: SelectProps) => {
  const listRef = useRef<HTMLUListElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const handleClickOutside = (e: MouseEvent) => {
    if (!wrapperRef.current?.contains(e.target as Node)) {
      setOpen(false)
    }
  }

  const setLabel = (value: Option) => {
    return getOptionLabel ? getOptionLabel(value) : value
  }

  const emptyValue = (value: Option | Array<Option>) => {
    if (Array.isArray(value)) {
      return value.length === 0
    }

    if (typeof value === 'object') {
      return Object.keys(value).length === 0
    }

    return !value
  }

  const selectedOption = (option: Option) => {
    if (emptyValue(value)) {
      return false
    }

    if (Array.isArray(value)) {
      return !!value.find(
        (currentValue) =>
          JSON.stringify(currentValue) === JSON.stringify(option)
      )
    }

    return JSON.stringify(value) === JSON.stringify(option)
  }

  const removeOption = (option: Option) => {
    if (Array.isArray(value)) {
      const newValue = value.filter(
        (currentValue) =>
          JSON.stringify(currentValue) !== JSON.stringify(option)
      )

      onChange && onChange(newValue)
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
        {multi && Array.isArray(value) ? (
          value.length > 0 ? (
            <S.ContentSelectedMulti>
              {value.map((option, index) => (
                <Chip
                  key={index}
                  size="small"
                  close={() => removeOption(option)}
                >
                  {setLabel(option)}
                </Chip>
              ))}
            </S.ContentSelectedMulti>
          ) : (
            <S.Selected empty>{placeholder}</S.Selected>
          )
        ) : (
          <S.Selected empty={emptyValue(value)}>
            {value ? setLabel(value) : placeholder}
          </S.Selected>
        )}

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
          options
            .filter((option) => {
              if (optionSelected || emptyValue(value)) {
                return true
              }

              return !selectedOption(option)
            })
            .map((option, index) => (
              <S.Option
                key={index}
                className={selectedOption(option) ? 'selected' : ''}
                onClick={() => {
                  if (onChange) {
                    if (multi && Array.isArray(value)) {
                      onChange([...value, option])
                    } else {
                      onChange(option)
                    }
                  }
                }}
              >
                {setLabel(option)}
              </S.Option>
            ))
        ) : (
          <S.Option disabled>{emptyOptionsText}</S.Option>
        )}
      </S.List>
    </S.Wrapper>
  )
}
