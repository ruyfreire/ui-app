import { ModalProps } from '.';
declare type WrapperProps = Omit<ModalProps, 'title'>;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, WrapperProps, never>;
export declare const Box: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const BoxContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
declare type OverlayProps = Pick<ModalProps, 'open'>;
export declare const Overlay: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, OverlayProps, never>;
export declare const Title: import("styled-components").StyledComponent<"h3", import("styled-components").DefaultTheme, {}, never>;
declare type ContentProps = {
    mb?: boolean;
};
export declare const Content: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, ContentProps, never>;
declare type BoxActionsProps = {
    column?: boolean;
};
export declare const BoxActions: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BoxActionsProps, never>;
export declare const BoxImage: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const Icon: import("styled-components").StyledComponent<"i", import("styled-components").DefaultTheme, {}, never>;
declare type IconCloseProps = {
    mb?: boolean;
};
export declare const IconClose: import("styled-components").StyledComponent<"i", import("styled-components").DefaultTheme, IconCloseProps, never>;
export {};
