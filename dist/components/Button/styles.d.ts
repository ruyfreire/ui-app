import { DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';
interface ButtonStyleProps extends ButtonProps {
    theme: DefaultTheme;
}
export declare const Button: import("styled-components").StyledComponent<"button", DefaultTheme, ButtonStyleProps, never>;
interface IconButtonStyleProps {
    theme?: DefaultTheme;
    pos?: 'left' | 'right';
}
export declare const Icon: import("styled-components").StyledComponent<"i", DefaultTheme, IconButtonStyleProps, never>;
export {};
