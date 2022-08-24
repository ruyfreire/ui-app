import React from 'react'
import { MarginTypes } from '../../utils/styles'

import * as S from './styles'

/**
 * Props para o componente TipCard
 */
export type TipCardProps = React.HTMLAttributes<HTMLDivElement> &
  MarginTypes & {
    /**
     * Tamanho do card
     */
    size?: 'small' | 'medium'
    /**
     * Cores do ícone do card
     */
    variant?: 'warning' | 'error' | 'success' | 'info'
  }

/**
 * TipCard exibir textos de aviso/observação
 */
export const TipCard = ({
  children,
  size = 'medium',
  variant = 'warning',
  ...props
}: TipCardProps) => (
  <S.Wrapper size={size} {...props}>
    <S.BoxIcon variant={variant}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          opacity="0.988987"
          d="M23.9978 4.02823C12.9518 4.02823 3.9978 12.9823 3.9978 24.0283C3.9978 35.0743 12.9518 44.0283 23.9978 44.0283C35.0438 44.0283 43.9978 35.0743 43.9978 24.0283C43.9978 12.9823 35.0438 4.02823 23.9978 4.02823ZM23.9978 8.02824C32.8338 8.02824 39.9978 15.1923 39.9978 24.0283C39.9978 32.8643 32.8338 40.0283 23.9978 40.0283C15.1618 40.0283 7.9978 32.8643 7.9978 24.0283C7.9978 15.1923 15.1618 8.02824 23.9978 8.02824ZM23.9978 14.0283C22.8938 14.0283 21.9978 14.9243 21.9978 16.0283C21.9978 17.1323 22.8938 18.0283 23.9978 18.0283C25.1018 18.0283 25.9978 17.1323 25.9978 16.0283C25.9978 14.9243 25.1018 14.0283 23.9978 14.0283ZM21.9978 20.0283C20.8938 20.0283 19.9978 20.9243 19.9978 22.0283C19.9978 22.9923 20.7158 23.7123 21.6218 23.9043L20.4358 29.6523C19.9718 31.9743 21.6318 34.0283 23.9978 34.0283H25.9978C27.1018 34.0283 27.9978 33.1323 27.9978 32.0283C27.9978 30.9243 27.1018 30.0283 25.9978 30.0283H24.4358L25.9358 22.4043C26.1838 21.1662 25.2598 20.0283 23.9978 20.0283C23.7458 20.0283 22.3218 20.0283 21.9978 20.0283Z"
          fill="currentColor"
        />
      </svg>
    </S.BoxIcon>

    <S.Text>{children}</S.Text>
  </S.Wrapper>
)
