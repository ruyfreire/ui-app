import React from 'react';
/**
 * Props para o componente Button
 */
export declare type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Determina o estilo do botão
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    /**
     * Modifica o tamanho do botão
     */
    size?: 'small' | 'medium';
    /**
     * Exibir um ícone ao lado esquerdo do texto do botão
     */
    startIcon?: React.ReactNode;
    /**
     * Exibir um ícone ao lado direito do texto do botão
     */
    endIcon?: React.ReactNode;
    /**
     * Exibir ícone de loader no lugar do texto do botão
     */
    isLoading?: boolean;
    /**
     * Deixa o botão com largura de 100%
     */
    fullWidth?: boolean;
};
/**
 * Botão de ação
 */
export declare const Button: ({ children, variant, size, startIcon, endIcon, isLoading, fullWidth, ...props }: ButtonProps) => JSX.Element;
