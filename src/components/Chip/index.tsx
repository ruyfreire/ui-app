import React from 'react'
import { MarginTypes } from '../../utils/styles'

import * as S from './styles'

/**
 * Props para o componente Chip
 */
export type ChipProps = React.HTMLAttributes<HTMLDivElement> &
  MarginTypes & {
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
    /**
     * Função que exibe um ícone de fechar e é executada ao clique desse ícone
     */
    close?: () => void
  }

/**
 * Chip
 */
export const Chip = ({
  children,
  size = 'medium',
  icon,
  disabled = false,
  close,
  ...props
}: ChipProps) => (
  <S.Chip size={size} disabled={disabled} {...props}>
    {icon && <S.Icon>{icon}</S.Icon>}

    {children}

    {close && (
      <S.IconClose
        disabled={disabled}
        onClick={(event) => {
          event.stopPropagation()
          close()
        }}
      >
        <svg
          height="16px"
          width="16px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
        </svg>
      </S.IconClose>
    )}
  </S.Chip>
)
