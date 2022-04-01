import React from 'react';
import * as styled_components from 'styled-components';

/**
 * Interface de Props para o componente Button
 */
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}
/**
 * Botão de ação
 */
declare const Button: ({ children, color, variant, size, startIcon, endIcon, onClick, ...props }: IButtonProps) => JSX.Element;

declare const theme: {
    colors: {
        primary: {
            base: string;
            light: string;
            dark: string;
        };
        secondary: {
            base: string;
            light: string;
            dark: string;
        };
        danger: {
            base: string;
            light: string;
            dark: string;
        };
        warning: {
            base: string;
            light: string;
            dark: string;
        };
        success: {
            base: string;
            light: string;
            dark: string;
        };
        gray: {
            base: string;
            light: string;
            dark: string;
        };
        text: string;
        black: string;
        offWhite: string;
        white: string;
    };
    spacing: {
        xs: string;
        md: string;
        lg: string;
        xl: string;
    };
    radius: {
        xs: string;
        md: string;
        lg: string;
    };
    font: {
        family: {
            heading: string;
            base: string;
        };
        weight: {
            medium: number;
            bold: number;
        };
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
};
/**
 * Estilo global usado na base do tema
 */
declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

export { Button, GlobalStyle, IButtonProps, theme };
