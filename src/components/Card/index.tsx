import React from 'react'
import { theme } from '../../theme'
import { MarginTypes } from '../../utils/styles'

import * as S from './styles'

/**
 * Props para o componente Card
 */
export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  MarginTypes & {
    /**
     * Título do card
     */
    title?: string
    /**
     * Imagem do card
     */
    image?: React.ReactNode
    /**
     * Mudar cor de fundo do card, caso precise mudar o fundo da image.
     * OBS: Não modifica o fundo do texto e título
     */
    imageBg?: string
    /**
     * Botão de ação do card
     */
    button?: React.ReactNode
    /**
     * Alinhamento da imagem com o conteúdo do card
     * OBS: O card precisa ter ao menos texto de conteúdo e imagem
     */
    imageDirection?: 'row' | 'column'
    /**
     * Determina se a largura do Card deve ser 100%
     */
    fullWidth?: boolean
  }

/**
 * Card para informações e ações
 */
export const Card = ({
  children,
  title = '',
  image = null,
  button = null,
  imageDirection = 'column',
  imageBg = theme.colors.background.card,
  fullWidth = false,
  ...props
}: CardProps) => (
  <S.Wrapper
    imageBg={imageBg}
    imageDirection={children && image ? imageDirection : 'column'}
    fullWidth={fullWidth}
    {...props}
  >
    {image && <S.BoxImage>{image}</S.BoxImage>}

    <S.BoxContent column={!!children}>
      {title && <S.Title>{title}</S.Title>}

      {children && <S.Content mb={!!button}>{children}</S.Content>}

      {button}
    </S.BoxContent>
  </S.Wrapper>
)
