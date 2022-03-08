import React from 'react';
import { GlobalStyleComponent, CSSObject, DefaultTheme } from 'styled-components';

/**
 * Interface de Props para o componente Button
 */
interface IButtonProps {
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
declare const Button: ({ children, color, variant, size, startIcon, endIcon, onClick, ...props }: IButtonProps) => JSX.Element;

declare const theme: {
    colors: {
        primary: {
            /** base: '#2059A4' */
            base: string;
            /** light: '#2567be' */
            light: string;
            /** dark: '#1c5093' */
            dark: string;
        };
        secondary: {
            /** base: '#47A4A9' */
            base: string;
            /** light: '#53b2b7' */
            light: string;
            /** dark: '#3f9398' */
            dark: string;
        };
        danger: {
            /** base: '#D8655F' */
            base: string;
            /** light: '#db746f' */
            light: string;
            /** dark: '#d14c45' */
            dark: string;
        };
        warning: {
            /** base: '#F1DC73' */
            base: string;
            /** light: '#f2df80' */
            light: string;
            /** dark: '#edd352' */
            dark: string;
        };
        success: {
            /** base: '#64D870' */
            base: string;
            /** light: '#73db7e' */
            light: string;
            /** dark: '#4ad158' */
            dark: string;
        };
        gray: {
            /** base: '#838383' */
            base: string;
            /** light: '#c7c7c7' */
            light: string;
            /** dark: '#565656' */
            dark: string;
        };
        /** text: '#2d2d2d' */
        text: string;
        /** black: '#000000' */
        black: string;
        /** offWhite: '#fafafa' */
        offWhite: string;
        /** white: '#FFFFFF' */
        white: string;
    };
    sizes: {
        /** xxs: '1px' */
        xxs: string;
        /** xs: '12px' */
        xs: string;
        /** md: '16px' */
        md: string;
        /** lg: '2px' */
        lg: string;
        /** xl: '24px' */
        xl: string;
        /** xxl: '28px' */
        xxl: string;
    };
    fontWeights: {
        /** light: 100 */
        light: number;
        /** normal: 300 */
        normal: number;
        /** medium: 400 */
        medium: number;
        /** bold: 700 */
        bold: number;
    };
    spacing: {
        /** xs: '8px' */
        xs: string;
        /** md: '16px' */
        md: string;
        /** lg: '24px' */
        lg: string;
        /** xl: '32px' */
        xl: string;
    };
    radius: {
        /** xs: '2px' */
        xs: string;
        /** md: '4px' */
        md: string;
        /** lg: '8px' */
        lg: string;
    };
    fontFamily: {
        base: string;
    };
};
/**
 * Estilo global usado na base do tema
 */
declare const GlobalStyle: GlobalStyleComponent<CSSObject, DefaultTheme>;
/**
 * Interface de props do provedor de tema
 */
interface IThemeProviderUiAppProps {
    /**
     * Conteúdo para receber o tema
     */
    children: React.ReactNode;
    /**
     * Possibilita concatenar/sobrepor o tema padrão
     */
    overrideTheme?: DefaultTheme;
}
/**
 * Tema padrão com GlobalStyle aplicado
 */
declare const ThemeProviderUiApp: ({ children, overrideTheme }: IThemeProviderUiAppProps) => JSX.Element;

export { Button, GlobalStyle, IButtonProps, IThemeProviderUiAppProps, ThemeProviderUiApp, theme };
