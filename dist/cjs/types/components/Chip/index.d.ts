import React from 'react';
/**
 * Props para o componente Chip
 */
export declare type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
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
};
/**
 * Chip
 */
export declare const Chip: ({ children, size, icon, ...props }: ChipProps) => JSX.Element;
