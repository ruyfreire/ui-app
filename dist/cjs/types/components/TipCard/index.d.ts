import React from 'react';
/**
 * Props para o componente TipCard
 */
export declare type TipCardProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Tamanho do card
     */
    size?: 'small' | 'medium';
    /**
     * Cores do ícone do card
     */
    variant?: 'warning' | 'error' | 'success' | 'info';
};
/**
 * TipCard exibir textos de aviso/observação
 */
export declare const TipCard: ({ children, size, variant, ...props }: TipCardProps) => JSX.Element;
