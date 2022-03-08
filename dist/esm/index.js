import { jsxs, jsx } from 'react/jsx-runtime';
import styled, { css, createGlobalStyle, ThemeProvider } from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var variantContained = {
    primary: function (theme) { return css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    background-color: ", ";\n\n    :hover,\n    :focus {\n      background-color: ", ";\n    }\n\n    :active {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n\n    :hover,\n    :focus {\n      background-color: ", ";\n    }\n\n    :active {\n      background-color: ", ";\n    }\n  "])), theme.colors.primary.base, theme.colors.primary.light, theme.colors.primary.dark); },
    secondary: function (theme) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background-color: ", ";\n\n    :hover,\n    :focus {\n      background-color: ", ";\n    }\n\n    :active {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n\n    :hover,\n    :focus {\n      background-color: ", ";\n    }\n\n    :active {\n      background-color: ", ";\n    }\n  "])), theme.colors.secondary.base, theme.colors.secondary.light, theme.colors.secondary.dark); },
    danger: function (theme) { return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    background-color: ", ";\n\n    :hover,\n    :focus {\n      background-color: ", ";\n    }\n\n    :active {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n\n    :hover,\n    :focus {\n      background-color: ", ";\n    }\n\n    :active {\n      background-color: ", ";\n    }\n  "])), theme.colors.danger.base, theme.colors.danger.light, theme.colors.danger.dark); }
};
var variantOutline = {
    primary: function (theme) { return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    border-color: ", ";\n    color: ", ";\n\n    :hover,\n    :focus {\n      border-color: ", ";\n      color: ", ";\n    }\n\n    :active {\n      border-color: ", ";\n      color: ", ";\n    }\n  "], ["\n    border-color: ", ";\n    color: ", ";\n\n    :hover,\n    :focus {\n      border-color: ", ";\n      color: ", ";\n    }\n\n    :active {\n      border-color: ", ";\n      color: ", ";\n    }\n  "])), theme.colors.primary.base, theme.colors.primary.base, theme.colors.primary.light, theme.colors.primary.light, theme.colors.primary.dark, theme.colors.primary.dark); },
    secondary: function (theme) { return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    border-color: ", ";\n    color: ", ";\n\n    :hover,\n    :focus {\n      border-color: ", ";\n      color: ", ";\n    }\n\n    :active {\n      border-color: ", ";\n      color: ", ";\n    }\n  "], ["\n    border-color: ", ";\n    color: ", ";\n\n    :hover,\n    :focus {\n      border-color: ", ";\n      color: ", ";\n    }\n\n    :active {\n      border-color: ", ";\n      color: ", ";\n    }\n  "])), theme.colors.secondary.base, theme.colors.secondary.base, theme.colors.secondary.light, theme.colors.secondary.light, theme.colors.secondary.dark, theme.colors.secondary.dark); },
    danger: function (theme) { return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    border-color: ", ";\n    color: ", ";\n\n    :hover,\n    :focus {\n      border-color: ", ";\n      color: ", ";\n    }\n\n    :active {\n      border-color: ", ";\n      color: ", ";\n    }\n  "], ["\n    border-color: ", ";\n    color: ", ";\n\n    :hover,\n    :focus {\n      border-color: ", ";\n      color: ", ";\n    }\n\n    :active {\n      border-color: ", ";\n      color: ", ";\n    }\n  "])), theme.colors.danger.base, theme.colors.danger.base, theme.colors.danger.light, theme.colors.danger.light, theme.colors.danger.dark, theme.colors.danger.dark); }
};
var variantText = {
    primary: function (theme) { return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    color: ", ";\n\n    :hover,\n    :focus {\n      color: ", ";\n    }\n\n    :active {\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n\n    :hover,\n    :focus {\n      color: ", ";\n    }\n\n    :active {\n      color: ", ";\n    }\n  "])), theme.colors.primary.base, theme.colors.primary.light, theme.colors.primary.dark); },
    secondary: function (theme) { return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    color: ", ";\n\n    :hover,\n    :focus {\n      color: ", ";\n    }\n\n    :active {\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n\n    :hover,\n    :focus {\n      color: ", ";\n    }\n\n    :active {\n      color: ", ";\n    }\n  "])), theme.colors.secondary.base, theme.colors.secondary.light, theme.colors.secondary.dark); },
    danger: function (theme) { return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    color: ", ";\n\n    :hover,\n    :focus {\n      color: ", ";\n    }\n\n    :active {\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n\n    :hover,\n    :focus {\n      color: ", ";\n    }\n\n    :active {\n      color: ", ";\n    }\n  "])), theme.colors.danger.base, theme.colors.danger.light, theme.colors.danger.dark); }
};
var sizes = {
    small: function (theme) { return css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    font-size: ", ";\n    padding: 4px 14px;\n    min-height: 28px;\n  "], ["\n    font-size: ", ";\n    padding: 4px 14px;\n    min-height: 28px;\n  "])), theme.sizes.xs); },
    medium: function (theme) { return css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    font-size: ", ";\n    padding: 6px 20px;\n    min-height: 32px;\n  "], ["\n    font-size: ", ";\n    padding: 6px 20px;\n    min-height: 32px;\n  "])), theme.sizes.md); },
    large: function (theme) { return css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    font-size: ", ";\n    padding: 8px 26px;\n    min-height: 38px;\n  "], ["\n    font-size: ", ";\n    padding: 8px 26px;\n    min-height: 38px;\n  "])), theme.sizes.lg); }
};
var Button$1 = styled.button(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color, variant = _a.variant, size = _a.size;
    return css(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    font-family: ", ";\n    color: ", ";\n    letter-spacing: 2px;\n    line-height: 1px;\n\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: ", ";\n    border: 1px solid transparent;\n    background-color: transparent;\n\n    ", "\n    ", "\n  "], ["\n    font-family: ", ";\n    color: ", ";\n    letter-spacing: 2px;\n    line-height: 1px;\n\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: ", ";\n    border: 1px solid transparent;\n    background-color: transparent;\n\n    ", "\n    ", "\n  "])), theme.fontFamily.base, theme.colors.offWhite, theme.radius.md, color &&
        (variant === 'text'
            ? variantText[color](theme)
            : variant === 'outline'
                ? variantOutline[color](theme)
                : variantContained[color](theme)), size && sizes[size](theme));
});
var Icon = styled.i(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var pos = _a.pos;
    return css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    padding: 2px;\n    margin: ", ";\n  "], ["\n    padding: 2px;\n    margin: ", ";\n  "])), pos === 'right' ? '0 0 0 8px' : '0 8px 0 0');
});
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;

/**
 * Botão de ação
 */
var Button = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.variant, variant = _c === void 0 ? 'contained' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, startIcon = _a.startIcon, endIcon = _a.endIcon, onClick = _a.onClick, props = __rest(_a, ["children", "color", "variant", "size", "startIcon", "endIcon", "onClick"]);
    return (jsxs(Button$1, __assign({ color: color, variant: variant, size: size, onClick: onClick }, props, { children: [startIcon && jsx(Icon, __assign({ pos: "left" }, { children: startIcon })), children, endIcon && jsx(Icon, __assign({ pos: "right" }, { children: endIcon }))] })));
};

var theme = {
    colors: {
        primary: {
            /** base: '#2059A4' */
            base: '#2059A4',
            /** light: '#2567be' */
            light: '#2567be',
            /** dark: '#1c5093' */
            dark: '#1c5093'
        },
        secondary: {
            /** base: '#47A4A9' */
            base: '#47A4A9',
            /** light: '#53b2b7' */
            light: '#53b2b7',
            /** dark: '#3f9398' */
            dark: '#3f9398'
        },
        danger: {
            /** base: '#D8655F' */
            base: '#D8655F',
            /** light: '#db746f' */
            light: '#db746f',
            /** dark: '#d14c45' */
            dark: '#d14c45'
        },
        warning: {
            /** base: '#F1DC73' */
            base: '#F1DC73',
            /** light: '#f2df80' */
            light: '#f2df80',
            /** dark: '#edd352' */
            dark: '#edd352'
        },
        success: {
            /** base: '#64D870' */
            base: '#64D870',
            /** light: '#73db7e' */
            light: '#73db7e',
            /** dark: '#4ad158' */
            dark: '#4ad158'
        },
        gray: {
            /** base: '#838383' */
            base: '#838383',
            /** light: '#c7c7c7' */
            light: '#c7c7c7',
            /** dark: '#565656' */
            dark: '#565656'
        },
        /** text: '#2d2d2d' */
        text: '#2d2d2d',
        /** black: '#000000' */
        black: '#000000',
        /** offWhite: '#fafafa' */
        offWhite: '#fafafa',
        /** white: '#FFFFFF' */
        white: '#FFFFFF'
    },
    sizes: {
        /** xxs: '1px' */
        xxs: '1rem',
        /** xs: '12px' */
        xs: '1.2rem',
        /** md: '16px' */
        md: '1.6rem',
        /** lg: '2px' */
        lg: '2rem',
        /** xl: '24px' */
        xl: '2.4rem',
        /** xxl: '28px' */
        xxl: '2.8rem'
    },
    fontWeights: {
        /** light: 100 */
        light: 100,
        /** normal: 300 */
        normal: 300,
        /** medium: 400 */
        medium: 400,
        /** bold: 700 */
        bold: 700
    },
    spacing: {
        /** xs: '8px' */
        xs: '8px',
        /** md: '16px' */
        md: '16px',
        /** lg: '24px' */
        lg: '24px',
        /** xl: '32px' */
        xl: '32px'
    },
    radius: {
        /** xs: '2px' */
        xs: '2px',
        /** md: '4px' */
        md: '4px',
        /** lg: '8px' */
        lg: '8px'
    },
    fontFamily: {
        base: '"Lato", Roboto, sans-serif'
    }
};
/**
 * Estilo global usado na base do tema
 */
var GlobalStyle = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    outline: 0;\n    padding: 0;\n  }\n\n  html {\n    font-size: 10px;\n  }\n\n  body {\n    font-family: ", ";\n    font-size: ", ";\n  }\n"], ["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    outline: 0;\n    padding: 0;\n  }\n\n  html {\n    font-size: 10px;\n  }\n\n  body {\n    font-family: ", ";\n    font-size: ", ";\n  }\n"
    /**
     * Interface de props do provedor de tema
     */
])), theme.fontFamily.base, theme.sizes.md);
/**
 * Tema padrão com GlobalStyle aplicado
 */
var ThemeProviderUiApp = function (_a) {
    var children = _a.children, overrideTheme = _a.overrideTheme;
    var applyTheme = theme;
    if (overrideTheme) {
        applyTheme = __assign(__assign({}, theme), overrideTheme);
    }
    return (jsxs(ThemeProvider, __assign({ theme: applyTheme }, { children: [jsx(GlobalStyle, {}), children] })));
};
var templateObject_1;

export { Button, GlobalStyle, ThemeProviderUiApp, theme };
//# sourceMappingURL=index.js.map
