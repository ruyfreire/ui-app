import React from 'react';
import { MarginTypes } from '../../utils/styles';
/**
 * Props para o componente Radio
 */
export declare type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & MarginTypes & {
    /**
     * Exibe texto ao lado direito do radio
     */
    label?: string;
    /**
     * Muda cor do radio para erro
     */
    error?: boolean;
    /**
     * Exibir um ícone ao lado direito do radio
     */
    icon?: React.ReactNode;
    /**
     * Atributo id para o input e usado para o html-for no label
     */
    id?: string;
};
/**
 * Radio para seleção de opções
 */
export declare const Radio: ({ label, icon, id, ...props }: RadioProps) => JSX.Element;
