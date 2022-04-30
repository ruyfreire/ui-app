import React from 'react';
/**
 * Props do Item da lista de items da Tab
 */
export declare type TabItemProps = {
    /**
     * Índice único da lista de itens
     */
    index: number;
    /**
     * Texto para exibir no item
     */
    label: string;
    /**
     * Ícone para exibir junto ao texto do item (24x24)
     */
    icon?: React.ReactNode;
};
/**
 * Props para o componente Tab
 */
export declare type TabProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
    /**
     * Array de itens da Tab
     */
    items: TabItemProps[];
    /**
     * Índice do item ativo
     */
    active: number;
    /**
     * Função executada ao clicar em um item, recebe o índice do item clicado
     */
    onChange: (index: number) => void;
};
/**
 * Tab para exibir itens de menu
 */
export declare const Tab: ({ items, active, onChange, ...props }: TabProps) => JSX.Element;
