import React from 'react'
import { CSSProperties } from 'styled-components'
import { SpacingTypes } from '../../utils/styles'

import * as S from './styles'

export type RadiusProps = {
  topLeft?: number
  topRight?: number
  bottomLeft?: number
  bottomRight?: number
}

export type BorderProps = {
  width?: number
  color?: string
  style?: CSSProperties['borderStyle']
}

/**
 * Props para o componente Box
 */
export type BoxProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  SpacingTypes & {
    /**
     * Número ou objeto para determinar o border-radius
     */
    radius?: number | RadiusProps
    /**
     * Número ou objeto com largura, cor e estilo da borda
     */
    border?: number | BorderProps
    /**
     * Elevação do box-shadow do elemento
     */
    elevation?: number
    /**
     * Cor de fundo do box
     */
    bgColor?: string
  }

/**
 * Box para auxiliar em agrupamento e espaçamentos
 *
 * @example
 * <Box mb={1}>
 *  Texto
 * </Box>
 */
export const Box = ({ ...props }: BoxProps) => <S.Wrapper {...props} />
