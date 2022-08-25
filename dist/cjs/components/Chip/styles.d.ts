/// <reference types="react" />
import { DefaultTheme } from 'styled-components';
import { ChipProps } from '.';
export declare const Chip: import("styled-components").StyledComponent<"div", DefaultTheme, import("react").HTMLAttributes<HTMLDivElement> & import("../../utils/styles").MarginTypes & {
    size?: "small" | "medium" | undefined;
    icon?: import("react").ReactNode;
    disabled?: boolean | undefined;
    selected?: boolean | undefined;
    close?: (() => void) | undefined;
}, never>;
export declare const Icon: import("styled-components").StyledComponent<"i", DefaultTheme, {}, never>;
declare type IconCloseProps = Pick<ChipProps, 'disabled'>;
export declare const IconClose: import("styled-components").StyledComponent<"i", DefaultTheme, IconCloseProps, never>;
export {};
