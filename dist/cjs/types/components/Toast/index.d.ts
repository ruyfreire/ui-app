import React from 'react';
/**
 * Props para o componente Toast
 */
export declare type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Tipo do toast
     */
    variant?: 'success' | 'error' | 'loading';
    /**
     * Exibir ou não o toast
     */
    show?: boolean;
};
/**
 * Toast exibir notificações
 */
export declare const Toast: ({ children, variant, show, ...props }: ToastProps) => JSX.Element;
