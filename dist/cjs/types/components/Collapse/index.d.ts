import React from 'react';
/**
 * Props para o componente Collapse
 */
export declare type CollapseProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Titulo/Cabeçalho do Collapse
     */
    title: string;
    /**
     * Determina se o collapse exibe ou não o conteúdo (aberto ou fechado)
     */
    open: boolean;
    /**
     * Função chamada ao clicar no cabeçalho do Collapse, e recebe como argumento o valor da props `open`
     */
    toggleOpen?: (open: boolean) => void;
};
/**
 * Collapse para exibir/ocultar conteúdo
 */
export declare const Collapse: ({ children, title, open, toggleOpen, ...props }: CollapseProps) => JSX.Element;
