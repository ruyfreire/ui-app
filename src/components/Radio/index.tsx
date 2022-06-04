import React from 'react'

import * as S from './styles'

/**
 * Props para o componente Radio
 */
export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Exibe texto ao lado direito do radio
   */
  label?: string
  /**
   * Muda cor do radio para erro
   */
  error?: boolean
  /**
   * Exibir um ícone ao lado direito do radio
   */
  icon?: React.ReactNode
  /**
   * Atributo id para o input e usado para o html-for no label
   */
  id?: string
}

/**
 * Radio para seleção de opções
 */
export const Radio = ({ label, icon, id, ...props }: RadioProps) => (
  <S.Wrapper htmlFor={id}>
    <S.Input id={id} {...props} type="radio" hidden />

    <S.IconRadio />

    {icon && <S.IconLabel>{icon}</S.IconLabel>}

    {label && <S.Label htmlFor={id}>{label}</S.Label>}
  </S.Wrapper>
)
