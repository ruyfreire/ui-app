import React from 'react';
import { MarginTypes } from '../../utils/styles';
/**
 * Props para o componente Chip
 */
export declare type ChipProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes & {
    /**
     * Modifica o tamanho do chip
     */
    size?: 'small' | 'medium';
    /**
     * Exibir um ícone ao lado esquerdo do texto do chip
     */
    icon?: React.ReactNode;
    /**
     * Muda estilo do chip para desabilitado
     * Obs: Isso não bloqueia eventos como exemplo o de clique
     */
    disabled?: boolean;
    /**
     * Muda estilo do chip para selecionado
     */
    selected?: boolean;
    /**
     * Função que exibe um ícone de fechar e é executada ao clique desse ícone
     */
    close?: () => void;
};
/**
 * Chip
 */
export declare const Chip: ({ children, size, icon, disabled, close, ...props }: ChipProps) => JSX.Element;
