import { TabsProps } from '.';
import { MarginTypes } from '../../utils/styles';
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Omit<TabsProps, "onChange" | "active"> & MarginTypes, never>;
declare type ItemSelectedProps = {
    active: number;
    size: number;
};
export declare const ItemSelected: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ItemSelectedProps, never>;
export {};
