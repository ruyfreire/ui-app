/// <reference types="react" />
import { MarginTypes } from '../../utils/styles';
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, import("react").InputHTMLAttributes<HTMLInputElement> & MarginTypes & {
    label?: string | undefined;
    error?: string | undefined;
    id?: string | undefined;
    align?: "left" | "right" | "center" | undefined;
    icon?: import("react").ReactNode;
    fullWidth?: boolean | undefined;
} & {
    icon?: boolean | undefined;
}, never>;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, MarginTypes, never>;
export declare const InputContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Icon: import("styled-components").StyledComponent<"i", import("styled-components").DefaultTheme, {}, never>;
export declare const ErrorMessage: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, {}, never>;
