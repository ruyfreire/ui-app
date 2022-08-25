/// <reference types="react" />
import { MarginTypes } from '../../utils/styles';
export declare const Input: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, import("react").InputHTMLAttributes<HTMLInputElement> & MarginTypes & {
    label?: string | undefined;
    error?: boolean | undefined;
    icon?: import("react").ReactNode;
    id?: string | undefined;
}, never>;
export declare const IconCheckbox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const IconLabel: import("styled-components").StyledComponent<"i", import("styled-components").DefaultTheme, {}, never>;
export declare const Label: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, {}, never>;
export declare const Wrapper: import("styled-components").StyledComponent<"label", import("styled-components").DefaultTheme, MarginTypes, never>;
