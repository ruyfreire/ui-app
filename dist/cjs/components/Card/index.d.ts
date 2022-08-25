import React from 'react';
import { MarginTypes } from '../../utils/styles';
/**
 * Props para o componente Card
 */
export declare type CardProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes & {
    /**
     * Título do card
     */
    title?: string;
    /**
     * Imagem do card
     */
    image?: React.ReactNode;
    /**
     * Mudar cor de fundo do card, caso precise mudar o fundo da image.
     * OBS: Não modifica o fundo do texto e título
     */
    imageBg?: string;
    /**
     * Botão de ação do card
     */
    button?: React.ReactNode;
    /**
     * Alinhamento da imagem com o conteúdo do card
     * OBS: O card precisa ter ao menos texto de conteúdo e imagem
     */
    imageDirection?: 'row' | 'column';
};
/**
 * Card para informações e ações
 */
export declare const Card: ({ children, title, image, button, imageDirection, imageBg, ...props }: CardProps) => JSX.Element;
