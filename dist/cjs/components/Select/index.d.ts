import { MarginTypes } from '../../utils/styles';
declare type Option = string | number | object;
/**
 * Props para o componente Select
 */
export declare type SelectProps = MarginTypes & {
    /**
     * Lista de opções para exibir no select
     */
    options: Array<Option>;
    /**
     * Valor selecionado
     */
    value: Option | Array<Option>;
    /**
     * Função executada ao selecionar uma opção
     */
    onChange?: (option: any) => void;
    /**
     * Placeholder para o dropdown sem nenhuma opção selecionada
     */
    placeholder?: string;
    /**
     * Texto exibido no lugar da lista caso ela seja vazia
     */
    emptyOptionsText?: string;
    /**
     * Função para formatar o label que deve ser exibido
     */
    getOptionLabel?: (option: any) => string | number;
    /**
     * Controla se o item selecionado deve ou não exibir na lista de opções aberta
     */
    optionSelected?: boolean;
    /**
     * Possibilita selecionar vários itens por vez
     */
    multi?: boolean;
};
/**
 * Select para lista de opções
 */
export declare const Select: ({ options, multi, optionSelected, value, onChange, placeholder, emptyOptionsText, getOptionLabel, ...props }: SelectProps) => JSX.Element;
export {};
