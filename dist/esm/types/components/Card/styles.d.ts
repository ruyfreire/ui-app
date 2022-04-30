import { CardProps } from '.';
declare type WrapperProps = Omit<CardProps, 'title' | 'image'>;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, WrapperProps, never>;
export declare const Title: import("styled-components").StyledComponent<"h4", import("styled-components").DefaultTheme, {}, never>;
declare type ContentProps = {
    mb?: boolean;
};
export declare const Content: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, ContentProps, never>;
declare type BoxContentProps = {
    column?: boolean;
};
export declare const BoxContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BoxContentProps, never>;
export declare const BoxImage: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export {};
