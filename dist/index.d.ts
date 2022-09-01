import React from 'react';
import * as styled_components from 'styled-components';
import { CSSProperties } from 'styled-components';

/**
 * Types de espaçamento padding
 */
declare type PaddingTypes = {
    /**
     * padding
     */
    p?: number;
    /**
     * padding-top
     */
    pt?: number;
    /**
     * padding-right
     */
    pr?: number;
    /**
     * padding-bottom
     */
    pb?: number;
    /**
     * padding-left
     */
    pl?: number;
};
/**
 * Types de espaçamento margin
 */
declare type MarginTypes = {
    /**
     * margin
     */
    m?: number;
    /**
     * margin-top
     */
    mt?: number;
    /**
     * margin-right
     */
    mr?: number;
    /**
     * margin-bottom
     */
    mb?: number;
    /**
     * margin-left
     */
    ml?: number;
};
/**
 * Types de espaçamento
 */
declare type SpacingTypes = PaddingTypes & MarginTypes;

/**
 * Props para o componente Button
 */
declare type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MarginTypes & {
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
declare const Button: ({ children, variant, size, startIcon, endIcon, isLoading, fullWidth, ...props }: ButtonProps) => JSX.Element;

/**
 * Props para o componente Checkbox
 */
declare type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & MarginTypes & {
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
declare const Checkbox: ({ label, icon, id, ...props }: CheckboxProps) => JSX.Element;

/**
 * Props para o componente Chip
 */
declare type ChipProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes & {
    /**
     * Modifica o tamanho do chip
     */
    size?: 'small' | 'medium';
    /**
     * Exibir um ícone ao lado esquerdo do texto do chip
     */
    icon?: React.ReactNode;
    /**
     * Muda estilo do chip para desabilitado
     * Obs: Isso não bloqueia eventos como exemplo o de clique
     */
    disabled?: boolean;
    /**
     * Muda estilo do chip para selecionado
     */
    selected?: boolean;
    /**
     * Função que exibe um ícone de fechar e é executada ao clique desse ícone
     */
    close?: () => void;
};
/**
 * Chip
 */
declare const Chip: ({ children, size, icon, disabled, close, ...props }: ChipProps) => JSX.Element;

/**
 * Props para o componente Countdown
 */
declare type CountdownProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes & {
    /**
     * Hora
     */
    hour?: number;
    /**
     * Minuto
     */
    minute?: number;
    /**
     * Segundo
     */
    second?: number;
    /**
     * Titulo exibido no cabeçalho
     */
    title?: string;
    /**
     * Subtitulo exido no rodapé
     */
    subtitle?: string;
    /**
     * Tamanho de fontes
     */
    size?: 'small' | 'medium';
};
/**
 * Contador com titulo, tempo e subtitulo
 */
declare const Countdown: ({ hour, minute, second, title, subtitle, size, ...props }: CountdownProps) => JSX.Element;

/**
 * Props para o componente Input
 */
declare type InputProps = React.InputHTMLAttributes<HTMLInputElement> & MarginTypes & {
    /**
     * Exibe texto de label na parte superior do input
     */
    label?: string;
    /**
     * Exibe texto de erro e muda cor do input para erro
     */
    error?: string;
    /**
     * ID para ser usado no input e no html-for do label
     */
    id?: string;
    /**
     * Alinhamento do texto dentro do input
     */
    align?: 'left' | 'center' | 'right';
    /**
     * Exibir um ícone ao lado esquerdo do texto do input
     */
    icon?: React.ReactNode;
    /**
     * Deixar o input com largura total
     */
    fullWidth?: boolean;
};
/**
 * Input para texto
 */
declare const Input: ({ label, error, align, icon, id, ...props }: InputProps) => JSX.Element;

/**
 * Props para o componente Radio
 */
declare type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & MarginTypes & {
    /**
     * Exibe texto ao lado direito do radio
     */
    label?: string;
    /**
     * Muda cor do radio para erro
     */
    error?: boolean;
    /**
     * Exibir um ícone ao lado direito do radio
     */
    icon?: React.ReactNode;
    /**
     * Atributo id para o input e usado para o html-for no label
     */
    id?: string;
};
/**
 * Radio para seleção de opções
 */
declare const Radio: ({ label, icon, id, ...props }: RadioProps) => JSX.Element;

/**
 * Props para o componente TipCard
 */
declare type TipCardProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes & {
    /**
     * Tamanho do card
     */
    size?: 'small' | 'medium';
    /**
     * Cores do ícone do card
     */
    variant?: 'warning' | 'error' | 'success' | 'info';
};
/**
 * TipCard exibir textos de aviso/observação
 */
declare const TipCard: ({ children, size, variant, ...props }: TipCardProps) => JSX.Element;

/**
 * Props para o componente Toast
 */
declare type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
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
declare const Toast: ({ children, variant, show, ...props }: ToastProps) => JSX.Element;

/**
 * Props para o componente Tooltip
 */
declare type TooltipProps = React.HTMLAttributes<HTMLSpanElement> & {
    /**
     * Posição do tooltip em relação ao elemento
     */
    position?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Texto para exibir no tooltip
     */
    text: string;
};
/**
 * Tooltip para exibir textos no evento de hover ou focus de um elemento
 */
declare const Tooltip: ({ children, position, text, ...props }: TooltipProps) => null;

/**
 * Props para o componente Card
 */
declare type CardProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes & {
    /**
     * Título do card
     */
    title?: string;
    /**
     * Imagem do card
     */
    image?: React.ReactNode;
    /**
     * Mudar cor de fundo do card, caso precise mudar o fundo da image.
     * OBS: Não modifica o fundo do texto e título
     */
    imageBg?: string;
    /**
     * Botão de ação do card
     */
    button?: React.ReactNode;
    /**
     * Alinhamento da imagem com o conteúdo do card
     * OBS: O card precisa ter ao menos texto de conteúdo e imagem
     */
    imageDirection?: 'row' | 'column';
    /**
     * Determina se a largura do Card deve ser 100%
     */
    fullWidth?: boolean;
};
/**
 * Card para informações e ações
 */
declare const Card: ({ children, title, image, button, imageDirection, imageBg, fullWidth, ...props }: CardProps) => JSX.Element;

/**
 * Props para o componente Collapse
 */
declare type CollapseProps = React.HTMLAttributes<HTMLDivElement> & MarginTypes & {
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
declare const Collapse: ({ children, title, open, toggleOpen, ...props }: CollapseProps) => JSX.Element;

declare type Option = string | number | object;
/**
 * Props para o componente Select
 */
declare type SelectProps = MarginTypes & {
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
declare const Select: ({ options, multi, optionSelected, value, onChange, placeholder, emptyOptionsText, getOptionLabel, ...props }: SelectProps) => JSX.Element;

/**
 * Props para o componente FileInput
 */
declare type FileInputProps = React.InputHTMLAttributes<HTMLInputElement> & MarginTypes & {
    /**
     * Texto descritivo
     */
    description?: string;
    /**
     * Texto de apoio extra
     */
    sub?: string;
    /**
     * Função executada quando um arquivo é anexado
     */
    onAdd: (files: FileList | null) => void;
};
/**
 * Espaço para fazer upload de arquivos
 */
declare const FileInput: ({ description, sub, onAdd, ...props }: FileInputProps) => JSX.Element;

declare type ButtonModalProps = Omit<ButtonProps, 'variant' | 'fullWidth'>;
/**
 * Props para o componente Modal
 */
declare type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Determina se o modal esta aberto ou fechado
     */
    open?: boolean;
    /**
     * Título do card
     */
    title: string;
    /**
     * Imagem exibida acima do título do card
     * OBS: Não exibe se o card estiver com o `variant: wide`
     */
    image?: React.ReactNode;
    /**
     * Ícone exibido acima do título do card, ou ao lado em caso de `variant: wide`
     */
    icon?: React.ReactNode;
    /**
     * Modifica a largura máxima do modal e o alinhamento do conteúdo
     * OBS: Exige largura mínima da tela de `662px`
     */
    variant?: 'default' | 'wide';
    /**
     * Exibe o botão primário do modal
     * OBS: Podem ser passadas todas propriedades do `Button`, exceto `variant` e `fullWidth`
     */
    buttonPrimary?: ButtonModalProps;
    /**
     * Exibe o botão secundário do modal
     * OBS: Podem ser passadas todas propriedades do `Button`, exceto `variant` e `fullWidth`
     */
    buttonSecondary?: ButtonModalProps;
    /**
     * Função executada ao clicar no botão de fechar o modal
     */
    onClose?: () => void;
    /**
     * Determina se o overlay do modal deve executar a função `onClose` quando clicado
     */
    overlayClose?: boolean;
    /**
     * Determina se o botão de fechar o modal deve ser exibido
     */
    buttonClose?: boolean;
};
/**
 * Modal para informações e ações
 */
declare const Modal: ({ children, title, image, icon, buttonPrimary, buttonSecondary, onClose, open, overlayClose, buttonClose, variant, ...props }: ModalProps) => JSX.Element;

/**
 * Props para o componente Tabs
 */
declare type TabsProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & MarginTypes & {
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
declare const Tabs: ({ active, onChange, children, ...props }: TabsProps) => JSX.Element;

/**
 * Props para o componente Tab
 */
declare type TabProps = React.HTMLAttributes<HTMLDivElement> & {
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
declare const Tab: ({ icon, onClick, index, children, ...props }: TabProps) => JSX.Element;

declare type RadiusProps = {
    topLeft?: number;
    topRight?: number;
    bottomLeft?: number;
    bottomRight?: number;
};
declare type BorderProps = {
    width?: number;
    color?: string;
    style?: CSSProperties['borderStyle'];
};
/**
 * Props para o componente Box
 */
declare type BoxProps = React.HtmlHTMLAttributes<HTMLDivElement> & SpacingTypes & {
    /**
     * Número ou objeto para determinar o border-radius
     */
    radius?: number | RadiusProps;
    /**
     * Número ou objeto com largura, cor e estilo da borda
     */
    border?: number | BorderProps;
    /**
     * Elevação do box-shadow do elemento
     */
    elevation?: number;
    /**
     * Cor de fundo do box
     */
    bgColor?: string;
    /**
     * Display do box
     */
    display?: CSSProperties['display'];
    /**
     * Direção dos itens em caso de display flex
     */
    flexDirection?: CSSProperties['flexDirection'];
    /**
     * Alinhamento dos itens em caso de display flex
     */
    alignItems?: CSSProperties['alignItems'];
    /**
     * Divisão dos itens em caso de display flex
     */
    justifyContent?: CSSProperties['justifyContent'];
    /**
     * Espaço entre os itens no caso de display flex
     */
    gap?: CSSProperties['gap'];
};
/**
 * Box para auxiliar em agrupamento e espaçamentos
 *
 * @example
 * <Box mb={1}>
 *  Texto
 * </Box>
 */
declare const Box: ({ display, flexDirection, alignItems, justifyContent, gap, ...props }: BoxProps) => JSX.Element;

/**
 * Props para o componente Grid
 */
declare type GridProps = React.HtmlHTMLAttributes<HTMLDivElement> & SpacingTypes & {
    /**
     * flex-direction
     */
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'inherit' | 'initial';
    /**
     * align-items
     */
    alignItems?: 'initial' | 'inherit' | 'flex-start' | 'center' | 'flex-end' | 'stretch';
    /**
     * justify-content
     */
    justifyContent?: 'initial' | 'inherit' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'stretch';
    /**
     * Define o display como flex para controlar Grid items abaixo dele
     */
    container?: boolean;
    /**
     * Controla largura do item dentro de um Grid container
     */
    item?: boolean;
    /**
     * gap
     */
    gap?: number;
    /**
     * flex-wrap
     */
    flexWrap?: 'wrap' | 'nowrap' | 'initial' | 'inherit';
    /**
     * Determina a largura x-small do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    xs?: number | boolean;
    /**
     * Determina a largura small do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    sm?: number | boolean;
    /**
     * Determina a largura medium do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    md?: number | boolean;
    /**
     * Determina a largura large do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    lg?: number | boolean;
    /**
     * Determina a largura extra-large do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    xl?: number | boolean;
    /**
     * Determina a largura extra-extra-large do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    xxl?: number | boolean;
};
/**
 * Grid de 12 para alinhar/organizar elementos.
 * Use `container` no Grid Pai, e `item` nos Grid filhos
 *
 * @example
 * <Grid container>
 *  <Grid item xs={12}>
 *    Texto
 *   </Grid>
 *  <Grid item>
 *    Texto
 *   </Grid>
 * </Grid>
 */
declare const Grid: ({ gap, flexDirection, alignItems, justifyContent, flexWrap, ...props }: GridProps) => JSX.Element;

/**
 * Props para o componente IconButton
 */
declare type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & MarginTypes & {
    /**
     * Modifica o tamanho do botão
     */
    size?: 'small' | 'medium';
    /**
     * Exibir ícone de loader no lugar do texto do botão
     */
    isLoading?: boolean;
};
/**
 * Botão com apenas ícone
 */
declare const IconButton: ({ children, size, isLoading, ...props }: IconButtonProps) => JSX.Element;

declare const theme: {
    colors: {
        primary: {
            /** #3643fc */
            base: string;
            /** #535FFF */
            light: string;
            /** #44488B */
            dark: string;
        };
        secondary: {
            /** #60648B */
            base: string;
            /** #989BC1 */
            light: string;
            /** #45475A */
            dark: string;
        };
        blueberry: {
            /** #0AA4E7 */
            base: string;
            /** #4EC1F3 */
            light: string;
            /** #1766F9 */
            dark: string;
        };
        mint: {
            /** #3EEBBE */
            base: string;
            /** #68FCD6 */
            light: string;
            /** #32D4AA */
            dark: string;
        };
        banana: {
            /** #FEC166 */
            base: string;
            /** #FFD9A0 */
            light: string;
            /** #EEA02B */
            dark: string;
        };
        peach: {
            /** #FF7387 */
            base: string;
            /** #FF96A5 */
            light: string;
            /** #EF586E */
            dark: string;
        };
        background: {
            /** #28293D */
            primary: string;
            /** #2D2F45 */
            section: string;
            /** #373951 */
            card: string;
            /** #3E405B */
            cardSection: string;
        };
        /** #FFFFFF */
        white: string;
        /** #ffffffcc */
        white2: string;
        /** #ffffff19 */
        white3: string;
        /** #000000 */
        black: string;
        /** #0000007f */
        black2: string;
        /** #00000019 */
        black3: string;
        /** #6E719833 */
        disabled: string;
    };
    /**
     * Função que recebe uma string de tamanho pre definida ou um número para calcular o valor (valor * 8)
     *
     * xs: 8px | md: 16px | lg: 24px | xl: 32px
     */
    spacing: (value: number | 'xs' | 'md' | 'lg' | 'xl') => string;
    radius: {
        /** 4px */
        xs: string;
        /** 8px */
        sm: string;
        /** 12px */
        md: string;
        /** 24px */
        lg: string;
    };
    font: {
        family: {
            /** "Sora", Roboto, sans-serif */
            heading: string;
            /** "Inter", Roboto, sans-serif */
            base: string;
        };
        weight: {
            /** 400 */
            normal: number;
            /** 500 */
            medium: number;
            /** 600 */
            semiBold: number;
            /** 700 */
            bold: number;
        };
        size: {
            /** 1.2rem (12px) */
            xs: string;
            /** 1.4rem (14px) */
            sm: string;
            /** 1.6rem (16px) */
            md: string;
            /** 2rem (20px) */
            lg: string;
            /** 2.4rem (24px) */
            xl: string;
        };
    };
    transitions: {
        /** all 0.2s ease-in-out */
        all: string;
    };
    breakpoints: {
        /** 0 */
        xs: number;
        /** 576 */
        sm: number;
        /** 768 */
        md: number;
        /** 992 */
        lg: number;
        /** 1200 */
        xl: number;
        /** 1400 */
        xxl: number;
    };
};
/**
 * Estilo global usado na base do tema
 */
declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

export { Box, BoxProps, Button, ButtonProps, Card, CardProps, Checkbox, CheckboxProps, Chip, ChipProps, Collapse, CollapseProps, Countdown, CountdownProps, FileInput, FileInputProps, GlobalStyle, Grid, GridProps, IconButton, IconButtonProps, Input, InputProps, Modal, ModalProps, Radio, RadioProps, Select, SelectProps, Tab, TabProps, Tabs, TabsProps, TipCard, TipCardProps, Toast, ToastProps, Tooltip, TooltipProps, theme };
