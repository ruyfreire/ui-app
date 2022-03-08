import React from 'react';
/**
 * Interface de Props para o componente Button
 */
export interface ButtonProps {
    /**
     * Conteúdo do botão
     */
    children: React.ReactNode;
    /**
     * Modifica a cor do botão
     */
    color?: 'primary' | 'secondary' | 'danger';
    /**
     * Determina o estilo do botão
     */
    variant?: 'contained' | 'outline' | 'text';
    /**
     * Modifica o tamanho do botão
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Exibir um ícone ao lado esquerdo do texto do botão
     */
    startIcon?: React.ReactNode;
    /**
     * Exibir um ícone ao lado direito do texto do botão
     */
    endIcon?: React.ReactNode;
    /**
     * Evento de clique do botão
     */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
/**
 * Botão de ação
 */
export declare const Button: ({ children, color, variant, size, startIcon, endIcon, onClick, ...props }: ButtonProps) => JSX.Element;
