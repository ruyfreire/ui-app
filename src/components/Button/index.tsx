import React from 'react'

import * as S from './styles'

/**
 * Props para o componente Button
 */
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Determina o estilo do botão
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
  /**
   * Modifica o tamanho do botão
   */
  size?: 'small' | 'medium'
  /**
   * Exibir um ícone ao lado esquerdo do texto do botão
   */
  startIcon?: React.ReactNode
  /**
   * Exibir um ícone ao lado direito do texto do botão
   */
  endIcon?: React.ReactNode
  /**
   * Exibir ícone de loader no lugar do texto do botão
   */
  loading?: boolean
}

/**
 * Botão de ação
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  loading = false,
  ...props
}: ButtonProps) => (
  <S.Button variant={variant} size={size} $loading={loading} {...props}>
    {startIcon && (
      <S.Icon size={size} pos="left">
        {startIcon}
      </S.Icon>
    )}

    {children}

    {loading && (
      <S.IconLoader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.8333 5.58228C17.6974 5.02366 17.9559 3.85486 17.2469 3.10922C16.3412 2.15679 15.2524 1.38769 14.039 0.851951C12.2544 0.0640328 10.2783 -0.184702 8.35409 0.136381C6.4299 0.457465 4.64164 1.33434 3.20957 2.65902C1.77749 3.98369 0.764144 5.69831 0.294331 7.59168C-0.175482 9.48506 -0.0812412 11.4745 0.565446 13.315C1.21213 15.1555 2.38303 16.7666 3.93391 17.95C5.48479 19.1334 7.34793 19.8373 9.29385 19.975C10.617 20.0687 11.9391 19.8978 13.1849 19.4793C14.1602 19.1516 14.4781 17.9975 13.9754 17.0997C13.4727 16.202 12.3348 15.9135 11.3293 16.1315C10.7505 16.257 10.1539 16.3005 9.55697 16.2583C8.33611 16.1718 7.16719 15.7302 6.19417 14.9878C5.22116 14.2453 4.48655 13.2345 4.08083 12.0798C3.6751 10.9251 3.61597 9.67693 3.91073 8.48904C4.20549 7.30115 4.84126 6.22541 5.73973 5.39432C6.6382 4.56323 7.76014 4.01308 8.96737 3.81163C10.1746 3.61019 11.4144 3.76624 12.534 4.26058C13.0815 4.50229 13.5885 4.81971 14.0415 5.20117C14.8285 5.86397 15.9692 6.14091 16.8333 5.58228Z"
            fill="white"
          />
        </svg>
      </S.IconLoader>
    )}

    {endIcon && (
      <S.Icon size={size} pos="right">
        {endIcon}
      </S.Icon>
    )}
  </S.Button>
)
