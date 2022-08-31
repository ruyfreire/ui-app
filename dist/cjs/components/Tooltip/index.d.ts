import React from 'react';
/**
 * Props para o componente Tooltip
 */
export declare type TooltipProps = React.HTMLAttributes<HTMLSpanElement> & {
    /**
     * Posição do tooltip em relação ao elemento
     */
    position?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Texto para exibir no tooltip
     */
    text: string;
};
/**
 * Tooltip para exibir textos no evento de hover ou focus de um elemento
 */
export declare const Tooltip: ({ children, position, text, ...props }: TooltipProps) => null;
