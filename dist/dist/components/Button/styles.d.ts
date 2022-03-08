import { DefaultTheme } from 'styled-components';
import { IButtonProps } from '.';
interface IButtonStyleProps extends IButtonProps {
    theme: DefaultTheme;
}
export declare const Button: import("styled-components").StyledComponent<"button", DefaultTheme, IButtonStyleProps, never>;
interface IIconButtonStyleProps {
    theme?: DefaultTheme;
    pos?: 'left' | 'right';
}
export declare const Icon: import("styled-components").StyledComponent<"i", DefaultTheme, IIconButtonStyleProps, never>;
export {};
