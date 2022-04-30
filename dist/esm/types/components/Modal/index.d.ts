import React from 'react';
import { ButtonProps } from '../Button';
declare type ButtonModalProps = Omit<ButtonProps, 'variant' | 'fullWidth'>;
/**
 * Props para o componente Modal
 */
export declare type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Determina se o modal esta aberto ou fechado
     */
    open?: boolean;
    /**
     * Título do card
     */
    title: string;
    /**
     * Imagem exibida acima do título do card
     * OBS: Não exibe se o card estiver com o `variant: wide`
     */
    image?: React.ReactNode;
    /**
     * Ícone exibido acima do título do card, ou ao lado em caso de `variant: wide`
     */
    icon?: React.ReactNode;
    /**
     * Modifica a largura máxima do modal e o alinhamento do conteúdo
     * OBS: Exige largura mínima da tela de `662px`
     */
    variant?: 'default' | 'wide';
    /**
     * Exibe o botão primário do modal
     * OBS: Podem ser passadas todas propriedades do `Button`, exceto `variant` e `fullWidth`
     */
    buttonPrimary?: ButtonModalProps;
    /**
     * Exibe o botão secundário do modal
     * OBS: Podem ser passadas todas propriedades do `Button`, exceto `variant` e `fullWidth`
     */
    buttonSecondary?: ButtonModalProps;
    /**
     * Função executada ao clicar no botão de fechar o modal
     */
    onClose?: () => void;
    /**
     * Determina se o overlay do modal deve executar a função `onClose` quando clicado
     */
    overlayClose?: boolean;
    /**
     * Determina se o botão de fechar o modal deve ser exibido
     */
    buttonClose?: boolean;
};
/**
 * Modal para informações e ações
 */
export declare const Modal: ({ children, title, image, icon, buttonPrimary, buttonSecondary, onClose, open, overlayClose, buttonClose, variant, ...props }: ModalProps) => JSX.Element;
export {};
