/// <reference types="react" />
declare type Option = {
    label: string;
    value: string | number;
};
/**
 * Props para o componente Dropdown
 */
export declare type DropdownProps = {
    /**
     * Lista de opções para exibir no dropdown
     */
    options: Option[];
    /**
     * Valor selecionado
     */
    value: Option['value'];
    /**
     * Função executada ao selecionar uma opção
     */
    onChange?: (option: Option) => void;
    /**
     * Placeholder para o dropdown sem nenhuma opção selecionada
     */
    placeholder?: string;
    /**
     * Texto exibido no lugar da lista caso ela seja vazia
     */
    emptyOptionsText?: string;
};
/**
 * Dropdown para lista de opções
 */
export declare const Dropdown: ({ options, value, onChange, placeholder, emptyOptionsText, ...props }: DropdownProps) => JSX.Element;
export {};
