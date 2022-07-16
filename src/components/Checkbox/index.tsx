import React from 'react'
import { getPropsMargin, MarginTypes } from '../../utils/styles/spacings'

import * as S from './styles'

/**
 * Props para o componente Checkbox
 */
export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> &
  MarginTypes & {
    /**
     * Exibe texto ao lado direito do checkbox
     */
    label?: string
    /**
     * Muda cor do checkbox para erro
     */
    error?: boolean
    /**
     * Exibir um ícone ao lado direito do checkbox
     */
    icon?: React.ReactNode
    /**
     * Atributo id para o input e usado para o html-for no label
     */
    id?: string
  }

/**
 * Checkbox para seleção de múltiplas opções
 */
export const Checkbox = ({ label, icon, id, ...props }: CheckboxProps) => (
  <S.Wrapper htmlFor={id} {...getPropsMargin(props)}>
    <S.Input id={id} {...props} type="checkbox" hidden />

    <S.IconCheckbox>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
      >
        <path
          d="M9.75386 1.50554C10.082 1.16113 10.082 0.602723 9.75386 0.25831C9.42568 -0.0861033 8.89358 -0.0861032 8.5654 0.25831L3.2173 5.87084L1.4346 4C1.10642 3.65559 0.574325 3.65559 0.246139 4C-0.0820464 4.34441 -0.0820464 4.90282 0.246139 5.24723L2.62307 7.74169C2.95126 8.0861 3.48335 8.0861 3.81153 7.74169L9.75386 1.50554Z"
          fill="currentColor"
        />
      </svg>
    </S.IconCheckbox>

    {icon && <S.IconLabel>{icon}</S.IconLabel>}

    {label && <S.Label htmlFor={id}>{label}</S.Label>}
  </S.Wrapper>
)
