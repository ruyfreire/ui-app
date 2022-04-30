/// <reference types="react" />
import { DefaultTheme } from 'styled-components';
import { TipCardProps } from '.';
export declare const Wrapper: import("styled-components").StyledComponent<"div", DefaultTheme, import("react").HTMLAttributes<HTMLDivElement> & {
    size?: "small" | "medium" | undefined;
    variant?: "error" | "warning" | "success" | "info" | undefined;
}, never>;
declare type BoxIconProps = Pick<TipCardProps, 'variant'>;
export declare const BoxIcon: import("styled-components").StyledComponent<"i", DefaultTheme, BoxIconProps, never>;
export declare const Text: import("styled-components").StyledComponent<"p", DefaultTheme, {}, never>;
export {};
