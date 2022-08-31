/// <reference types="react" />
import { BorderProps, RadiusProps } from '.';
export declare const Wrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("react").HtmlHTMLAttributes<HTMLDivElement> & import("../../utils/styles").PaddingTypes & import("../../utils/styles").MarginTypes & {
    radius?: number | RadiusProps | undefined;
    border?: number | BorderProps | undefined;
    elevation?: number | undefined;
    bgColor?: string | undefined;
    display?: import("csstype").Property.Display | undefined;
    flexDirection?: import("csstype").Property.FlexDirection | undefined;
    alignItems?: import("csstype").Property.AlignItems | undefined;
    justifyContent?: import("csstype").Property.JustifyContent | undefined;
    gap?: import("csstype").Property.Gap<string | number> | undefined;
}, never>;
