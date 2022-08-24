import React, { useRef } from 'react'
import { MarginTypes } from '../../utils/styles'

import * as S from './styles'

/**
 * Props para o componente Collapse
 */
export type CollapseProps = React.HTMLAttributes<HTMLDivElement> &
  MarginTypes & {
    /**
     * Titulo/Cabeçalho do Collapse
     */
    title: string
    /**
     * Determina se o collapse exibe ou não o conteúdo (aberto ou fechado)
     */
    open: boolean
    /**
     * Função chamada ao clicar no cabeçalho do Collapse, e recebe como argumento o valor da props `open`
     */
    toggleOpen?: (open: boolean) => void
  }

/**
 * Collapse para exibir/ocultar conteúdo
 */
export const Collapse = ({
  children,
  title,
  open,
  toggleOpen,
  ...props
}: CollapseProps) => {
  const content = useRef<HTMLParagraphElement>(null)

  return (
    <S.Wrapper
      open={open}
      contentHeight={content.current?.scrollHeight}
      {...props}
    >
      <S.BoxTitle onClick={() => toggleOpen && toggleOpen(open)}>
        <S.Title>{title}</S.Title>

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
      </S.BoxTitle>

      <S.Content ref={content}>{children}</S.Content>
    </S.Wrapper>
  )
}
