import React from 'react'
import { Button, ButtonProps } from '../Button'

import * as S from './styles'

type ButtonModalProps = Omit<ButtonProps, 'variant' | 'fullWidth'>

/**
 * Props para o componente Modal
 */
export type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Determina se o modal esta aberto ou fechado
   */
  open?: boolean
  /**
   * Título do card
   */
  title: string
  /**
   * Imagem exibida acima do título do card
   * OBS: Não exibe se o card estiver com o `variant: wide`
   */
  image?: React.ReactNode
  /**
   * Ícone exibido acima do título do card, ou ao lado em caso de `variant: wide`
   */
  icon?: React.ReactNode
  /**
   * Modifica a largura máxima do modal e o alinhamento do conteúdo
   * OBS: Exige largura mínima da tela de `662px`
   */
  variant?: 'default' | 'wide'
  /**
   * Exibe o botão primário do modal
   * OBS: Podem ser passadas todas propriedades do `Button`, exceto `variant` e `fullWidth`
   */
  buttonPrimary?: ButtonModalProps
  /**
   * Exibe o botão secundário do modal
   * OBS: Podem ser passadas todas propriedades do `Button`, exceto `variant` e `fullWidth`
   */
  buttonSecondary?: ButtonModalProps
  /**
   * Função executada ao clicar no botão de fechar o modal
   */
  onClose?: () => void
  /**
   * Determina se o overlay do modal deve executar a função `onClose` quando clicado
   */
  overlayClose?: boolean
  /**
   * Determina se o botão de fechar o modal deve ser exibido
   */
  buttonClose?: boolean
}

/**
 * Modal para informações e ações
 */
export const Modal = ({
  children,
  title,
  image,
  icon,
  buttonPrimary,
  buttonSecondary,
  onClose,
  open = false,
  overlayClose = true,
  buttonClose = false,
  variant = 'default',
  ...props
}: ModalProps) => (
  <>
    <S.Wrapper {...props} open={open} variant={variant}>
      {buttonClose && (
        <S.IconClose mb={!!image && variant !== 'wide'} onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99422 3.90637C4.73832 3.90637 4.47072 3.99238 4.27542 4.18738C3.88492 4.57838 3.88492 5.23437 4.27542 5.62537L10.5567 11.9064L4.27542 18.1874C3.88492 18.5784 3.88492 19.2344 4.27542 19.6254C4.66602 20.0154 5.32242 20.0154 5.71302 19.6254L11.9942 13.3444L18.2754 19.6254C18.666 20.0154 19.3224 20.0154 19.713 19.6254C20.1035 19.2344 20.1035 18.5784 19.713 18.1874L13.4317 11.9064L19.713 5.62537C20.1035 5.23437 20.1035 4.57838 19.713 4.18738C19.5177 3.99238 19.25 3.90637 18.9942 3.90637C18.7383 3.90637 18.4708 3.99238 18.2754 4.18738L11.9942 10.4684L5.71302 4.18738C5.51772 3.99238 5.25012 3.90637 4.99422 3.90637Z"
              fill="currentColor"
            />
          </svg>
        </S.IconClose>
      )}

      <S.Box>
        {icon && <S.Icon>{icon}</S.Icon>}

        {!icon && image && variant !== 'wide' && (
          <S.BoxImage>{image}</S.BoxImage>
        )}

        <S.BoxContent>
          <S.Title>{title}</S.Title>

          <S.Content mb={!!buttonPrimary || !!buttonSecondary}>
            {children}
          </S.Content>
        </S.BoxContent>
      </S.Box>

      {(!!buttonPrimary || !!buttonSecondary) && (
        <S.BoxActions>
          {buttonSecondary && (
            <Button
              {...buttonSecondary}
              fullWidth={variant !== 'wide'}
              variant="secondary"
            />
          )}

          {buttonPrimary && (
            <Button
              {...buttonPrimary}
              fullWidth={variant !== 'wide'}
              variant="primary"
            />
          )}
        </S.BoxActions>
      )}
    </S.Wrapper>

    <S.Overlay
      open={open}
      onClick={() => overlayClose && onClose && onClose()}
    />
  </>
)
