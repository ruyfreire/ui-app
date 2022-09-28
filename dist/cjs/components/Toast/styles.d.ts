/// <reference types="react" />
import { DefaultTheme } from 'styled-components';
import { ToastProps } from '.';
export declare const Wrapper: import("styled-components").StyledComponent<"div", DefaultTheme, import("react").HTMLAttributes<HTMLDivElement> & {
    variant?: "success" | "error" | "loading" | undefined;
    show?: boolean | undefined;
}, never>;
export declare const Overlay: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
declare type BoxIconProps = Pick<ToastProps, 'variant'>;
export declare const BoxIcon: import("styled-components").StyledComponent<"i", DefaultTheme, BoxIconProps, never>;
export declare const IconLoading: import("styled-components").StyledComponent<"svg", DefaultTheme, {}, never>;
export declare const Text: import("styled-components").StyledComponent<"p", DefaultTheme, {}, never>;
export {};
