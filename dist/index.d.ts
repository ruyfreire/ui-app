/// <reference types="react" />
import React from 'react';
import * as styled_components from 'styled-components';

/**
 * Props para o componente Button
 */
declare type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
declare type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
declare type ChipProps = React.HTMLAttributes<HTMLDivElement> & {
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
};
/**
 * Chip
 */
declare const Chip: ({ children, size, icon, ...props }: ChipProps) => JSX.Element;

/**
 * Props para o componente Countdown
 */
declare type CountdownProps = React.HTMLAttributes<HTMLDivElement> & {
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
declare type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
};
/**
 * Input para texto
 */
declare const Input: ({ label, error, align, icon, id, ...props }: InputProps) => JSX.Element;

/**
 * Props para o componente Radio
 */
declare type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
declare type TipCardProps = React.HTMLAttributes<HTMLDivElement> & {
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
declare const Tooltip: ({ children, position, text, ...props }: TooltipProps) => JSX.Element;

/**
 * Props para o componente Card
 */
declare type CardProps = React.HTMLAttributes<HTMLDivElement> & {
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
};
/**
 * Card para informações e ações
 */
declare const Card: ({ children, title, image, button, imageDirection, imageBg, ...props }: CardProps) => JSX.Element;

/**
 * Props para o componente Collapse
 */
declare type CollapseProps = React.HTMLAttributes<HTMLDivElement> & {
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

declare type Option = {
    label: string;
    value: string | number;
};
/**
 * Props para o componente Dropdown
 */
declare type DropdownProps = {
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
declare const Dropdown: ({ options, value, onChange, placeholder, emptyOptionsText, ...props }: DropdownProps) => JSX.Element;

/**
 * Props para o componente FileInput
 */
declare type FileInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
 * Props do Item da lista de items da Tab
 */
declare type TabItemProps = {
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
declare type TabProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
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
declare const Tab: ({ items, active, onChange, ...props }: TabProps) => JSX.Element;

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
            /** #28393D */
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
    spacing: {
        /** 8px */
        xs: string;
        /** 16px */
        md: string;
        /** 24px */
        lg: string;
        /** 32px */
        xl: string;
    };
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
};
/**
 * Estilo global usado na base do tema
 */
declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

export { Button, Card, Checkbox, Chip, Collapse, Countdown, Dropdown, FileInput, GlobalStyle, Input, Modal, Radio, Tab, TipCard, Toast, Tooltip, theme };
