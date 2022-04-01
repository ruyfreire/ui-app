export declare const theme: {
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
export declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
