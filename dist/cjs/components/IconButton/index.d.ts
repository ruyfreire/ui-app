import React from 'react';
import { MarginTypes } from '../../utils/styles';
/**
 * Props para o componente IconButton
 */
export declare type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MarginTypes & {
    /**
     * Modifica o tamanho do botão
     */
    size?: 'small' | 'medium';
    /**
     * Exibir ícone de loader no lugar do texto do botão
     */
    isLoading?: boolean;
};
/**
 * Botão com apenas ícone
 */
export declare const IconButton: ({ children, size, isLoading, ...props }: IconButtonProps) => JSX.Element;
