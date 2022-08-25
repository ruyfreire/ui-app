import React from 'react';
import { MarginTypes } from '../../utils/styles';
/**
 * Props para o componente Countdown
 */
export declare type CountdownProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes & {
    /**
     * Hora
     */
    hour?: number;
    /**
     * Minuto
     */
    minute?: number;
    /**
     * Segundo
     */
    second?: number;
    /**
     * Titulo exibido no cabeçalho
     */
    title?: string;
    /**
     * Subtitulo exido no rodapé
     */
    subtitle?: string;
    /**
     * Tamanho de fontes
     */
    size?: 'small' | 'medium';
};
/**
 * Contador com titulo, tempo e subtitulo
 */
export declare const Countdown: ({ hour, minute, second, title, subtitle, size, ...props }: CountdownProps) => JSX.Element;
