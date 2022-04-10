import React from 'react'

import * as S from './styles'

/**
 * Props para o componente Input
 */
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Exibe texto de label na parte superior do input
   */
  label?: string
  /**
   * Exibe texto de erro e muda cor do input para erro
   */
  error?: string
  /**
   * Alinhamento do texto dentro do input
   */
  align?: 'left' | 'center' | 'right'
  /**
   * Exibir um ícone ao lado esquerdo do texto do input
   */
  icon?: React.ReactNode
  /**
   * Atributo id para o input e usado para o html-for no label
   */
  id?: string
}

/**
 * Input para texto
 */
export const Input = ({
  label,
  error,
  align = 'left',
  icon,
  id,
  ...props
}: InputProps) => (
  <S.Wrapper>
    {label && <S.Label htmlFor={id}>{label}</S.Label>}

    <S.InputContainer>
      <S.Input error={error} align={align} icon={!!icon} id={id} {...props} />

      {icon && <S.Icon>{icon}</S.Icon>}
    </S.InputContainer>

    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
  </S.Wrapper>
)
