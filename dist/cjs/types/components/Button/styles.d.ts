/// <reference types="react" />
import { DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';
export declare const IconLoader: import("styled-components").StyledComponent<"i", DefaultTheme, {}, never>;
export declare const Button: import("styled-components").StyledComponent<"button", DefaultTheme, import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | undefined;
    size?: "small" | "medium" | undefined;
    startIcon?: import("react").ReactNode;
    endIcon?: import("react").ReactNode;
    isLoading?: boolean | undefined;
    fullWidth?: boolean | undefined;
}, never>;
export declare const Icon: import("styled-components").StyledComponent<"i", DefaultTheme, Pick<ButtonProps, "size"> & {
    pos?: "left" | "right" | undefined;
}, never>;
