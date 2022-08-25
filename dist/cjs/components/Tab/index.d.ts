import React from 'react';
/**
 * Props para o componente Tab
 */
export declare type TabProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Ícone para exibir junto ao texto do item (24x24)
     */
    icon?: React.ReactNode;
    /**
     * Índice do item
     */
    index?: number;
    /**
     * Função executada ao clicar em um item, recebe o índice do item clicado
     */
    onClick?: (index?: number) => void;
};
/**
 * Tab para exibir itens de menu
 */
export declare const Tab: ({ icon, onClick, index, children, ...props }: TabProps) => JSX.Element;
