import { DropdownProps } from '.';
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Omit<DropdownProps, "defaultValue" | "onChange" | "value" | "options" | "emptyOptionsText"> & {
    listHeight?: number | undefined;
    open: boolean;
}, never>;
export declare const List: import("styled-components").StyledComponent<"ul", import("styled-components").DefaultTheme, {}, never>;
declare type OptionProps = {
    disabled?: boolean;
};
export declare const Option: import("styled-components").StyledComponent<"li", import("styled-components").DefaultTheme, OptionProps, never>;
export declare const BoxSelected: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
declare type SelectedProps = {
    empty?: boolean;
};
export declare const Selected: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, SelectedProps, never>;
export declare const Icon: import("styled-components").StyledComponent<"i", import("styled-components").DefaultTheme, {}, never>;
export {};
