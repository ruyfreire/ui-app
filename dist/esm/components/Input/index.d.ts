import React from 'react';
import { MarginTypes } from '../../utils/styles';
/**
 * Props para o componente Input
 */
export declare type InputProps = React.InputHTMLAttributes<HTMLInputElement> & MarginTypes & {
    /**
     * Exibe texto de label na parte superior do input
     */
    label?: string;
    /**
     * Exibe texto de erro e muda cor do input para erro
     */
    error?: string;
    /**
     * ID para ser usado no input e no html-for do label
     */
    id?: string;
    /**
     * Alinhamento do texto dentro do input
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Exibir um ícone ao lado esquerdo do texto do input
     */
    icon?: React.ReactNode;
    /**
     * Deixar o input com largura total
     */
    fullWidth?: boolean;
};
/**
 * Input para texto
 */
export declare const Input: ({ label, error, align, icon, id, ...props }: InputProps) => JSX.Element;
