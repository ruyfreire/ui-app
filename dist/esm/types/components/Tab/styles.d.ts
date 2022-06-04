import { TabProps } from '.';
declare type TabStyleProps = Omit<TabProps, 'items' | 'active' | 'onChange'>;
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TabStyleProps, never>;
declare type TabItemProps = {
    active?: boolean;
};
export declare const TabItem: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, TabItemProps, never>;
export declare const Item: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, {}, never>;
export declare const Icon: import("styled-components").StyledComponent<"i", import("styled-components").DefaultTheme, {}, never>;
declare type ItemSelectedProps = {
    pos?: number;
};
export declare const ItemSelected: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, ItemSelectedProps, never>;
export {};
