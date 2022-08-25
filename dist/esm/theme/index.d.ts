export declare const theme: {
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
export declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
