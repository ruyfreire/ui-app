import React from 'react';
import { MarginTypes } from '../../utils/styles';
/**
 * Props para o componente Tabs
 */
export declare type TabsProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & MarginTypes & {
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
 * Tabs para exibir itens de menu
 */
export declare const Tabs: ({ active, onChange, children, ...props }: TabsProps) => JSX.Element;
