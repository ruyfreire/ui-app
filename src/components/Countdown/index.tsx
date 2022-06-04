import React from 'react'

import * as S from './styles'

/**
 * Props para o componente Countdown
 */
export type CountdownProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Hora
   */
  hour?: number
  /**
   * Minuto
   */
  minute?: number
  /**
   * Segundo
   */
  second?: number
  /**
   * Titulo exibido no cabeçalho
   */
  title?: string
  /**
   * Subtitulo exido no rodapé
   */
  subtitle?: string
  /**
   * Tamanho de fontes
   */
  size?: 'small' | 'medium'
}

/**
 * Contador com titulo, tempo e subtitulo
 */
export const Countdown = ({
  hour = 0,
  minute = 0,
  second = 0,
  title,
  subtitle,
  size = 'medium',
  ...props
}: CountdownProps) => (
  <S.Wrapper size={size} {...props}>
    {title && <S.TextTitle>{title}</S.TextTitle>}

    <S.ContainerTime>
      <S.BoxTime>
        <S.TextTime>{`0${hour}`.slice(-2)}</S.TextTime>
        <S.TextTimeInfo>{hour > 1 ? 'Horas' : 'Hora'}</S.TextTimeInfo>
      </S.BoxTime>

      <S.SeparatorTime>
        <span />
        <span />
      </S.SeparatorTime>

      <S.BoxTime>
        <S.TextTime>{`0${minute}`.slice(-2)}</S.TextTime>
        <S.TextTimeInfo>{minute > 1 ? 'Minutos' : 'Minuto'}</S.TextTimeInfo>
      </S.BoxTime>

      <S.SeparatorTime>
        <span />
        <span />
      </S.SeparatorTime>

      <S.BoxTime>
        <S.TextTime>{`0${second}`.slice(-2)}</S.TextTime>
        <S.TextTimeInfo>{second > 1 ? 'Segundos' : 'Segundo'}</S.TextTimeInfo>
      </S.BoxTime>
    </S.ContainerTime>

    {subtitle && <S.TextSub>{subtitle}</S.TextSub>}
  </S.Wrapper>
)
