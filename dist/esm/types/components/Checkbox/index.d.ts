import React from 'react';
/**
 * Props para o componente Checkbox
 */
export declare type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    /**
     * Exibe texto ao lado direito do checkbox
     */
    label?: string;
    /**
     * Muda cor do checkbox para erro
     */
    error?: boolean;
    /**
     * Exibir um ícone ao lado direito do checkbox
     */
    icon?: React.ReactNode;
    /**
     * Atributo id para o input e usado para o html-for no label
     */
    id?: string;
};
/**
 * Checkbox para seleção de múltiplas opções
 */
export declare const Checkbox: ({ label, icon, id, ...props }: CheckboxProps) => JSX.Element;
