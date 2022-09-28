import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';

/******************************************************************************
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

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var calcSpacing = function (value) {
    return value * 8;
};
/**
 * Inserir CSS de espaçamento margin
 */
var setSpacingMargin = function (props) {
    return css(templateObject_6$g || (templateObject_6$g = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  "], ["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  "])), props.m && css(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n      margin: ", "px;\n    "], ["\n      margin: ", "px;\n    "])), calcSpacing(props.m)), props.mt && css(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n      margin-top: ", "px;\n    "], ["\n      margin-top: ", "px;\n    "])), calcSpacing(props.mt)), props.mr && css(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["\n      margin-right: ", "px;\n    "], ["\n      margin-right: ", "px;\n    "])), calcSpacing(props.mr)), props.mb && css(templateObject_4$j || (templateObject_4$j = __makeTemplateObject(["\n      margin-bottom: ", "px;\n    "], ["\n      margin-bottom: ", "px;\n    "])), calcSpacing(props.mb)), props.ml && css(templateObject_5$h || (templateObject_5$h = __makeTemplateObject(["\n      margin-left: ", "px;\n    "], ["\n      margin-left: ", "px;\n    "])), calcSpacing(props.ml)));
};
/**
 * Inserir CSS de espaçamento padding
 */
var setSpacingPadding = function (props) {
    return css(templateObject_12$a || (templateObject_12$a = __makeTemplateObject(["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  "], ["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  "])), props.p && css(templateObject_7$f || (templateObject_7$f = __makeTemplateObject(["\n      padding: ", "px;\n    "], ["\n      padding: ", "px;\n    "])), calcSpacing(props.p)), props.pt && css(templateObject_8$e || (templateObject_8$e = __makeTemplateObject(["\n      padding-top: ", "px;\n    "], ["\n      padding-top: ", "px;\n    "])), calcSpacing(props.pt)), props.pr && css(templateObject_9$e || (templateObject_9$e = __makeTemplateObject(["\n      padding-right: ", "px;\n    "], ["\n      padding-right: ", "px;\n    "])), calcSpacing(props.pr)), props.pb && css(templateObject_10$e || (templateObject_10$e = __makeTemplateObject(["\n      padding-bottom: ", "px;\n    "], ["\n      padding-bottom: ", "px;\n    "])), calcSpacing(props.pb)), props.pl && css(templateObject_11$d || (templateObject_11$d = __makeTemplateObject(["\n      padding-left: ", "px;\n    "], ["\n      padding-left: ", "px;\n    "])), calcSpacing(props.pl)));
};
var getPropsMargin = function (props) {
    return Object.fromEntries(Object.entries(props).filter(function (_a) {
        var key = _a[0];
        return ['m', 'mt', 'mr', 'mb', 'ml'].includes(key);
    }));
};
var templateObject_1$k, templateObject_2$j, templateObject_3$j, templateObject_4$j, templateObject_5$h, templateObject_6$g, templateObject_7$f, templateObject_8$e, templateObject_9$e, templateObject_10$e, templateObject_11$d, templateObject_12$a;

var rotate$2 = keyframes(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var variants = {
    primary: function (theme) { return css(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n    background-color: ", ";\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      background-color: ", ";\n      box-shadow: 0px 12px 16px 0px ", "4D;\n    }\n\n    :active:not(:disabled) {\n      background-color: ", ";\n      box-shadow: none;\n    }\n\n    :disabled {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      background-color: ", ";\n      box-shadow: 0px 12px 16px 0px ", "4D;\n    }\n\n    :active:not(:disabled) {\n      background-color: ", ";\n      box-shadow: none;\n    }\n\n    :disabled {\n      background-color: ", ";\n    }\n  "])), theme.colors.primary.base, theme.colors.primary.light, theme.colors.black, theme.colors.primary.dark, theme.colors.disabled); },
    secondary: function (theme) { return css(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n    background-color: ", ";\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      box-shadow: 0px 12px 16px 0px ", "4D;\n    }\n\n    :active:not(:disabled) {\n      background-color: ", ";\n      box-shadow: none;\n    }\n\n    :disabled {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      box-shadow: 0px 12px 16px 0px ", "4D;\n    }\n\n    :active:not(:disabled) {\n      background-color: ", ";\n      box-shadow: none;\n    }\n\n    :disabled {\n      background-color: ", ";\n    }\n  "])), theme.colors.secondary.base, theme.colors.black, theme.colors.secondary.dark, theme.colors.disabled); },
    tertiary: function (theme, loading) { return css(templateObject_4$i || (templateObject_4$i = __makeTemplateObject(["\n    background-color: ", ";\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      box-shadow: 0px 12px 16px 0px ", "4D;\n    }\n\n    :active:not(:disabled) {\n      background-color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      box-shadow: 0px 12px 16px 0px ", "4D;\n    }\n\n    :active:not(:disabled) {\n      background-color: ", ";\n    }\n  "])), loading ? theme.colors.black3 : 'transparent', theme.colors.black, theme.colors.black3); },
    ghost: function (theme) { return css(templateObject_5$g || (templateObject_5$g = __makeTemplateObject(["\n    border: 2px solid;\n    border-color: ", ";\n    background-color: transparent;\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      border-color: ", ";\n    }\n\n    :active:not(:disabled) {\n      border-color: ", ";\n    }\n\n    :disabled {\n      border-color: ", ";\n    }\n  "], ["\n    border: 2px solid;\n    border-color: ", ";\n    background-color: transparent;\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      border-color: ", ";\n    }\n\n    :active:not(:disabled) {\n      border-color: ", ";\n    }\n\n    :disabled {\n      border-color: ", ";\n    }\n  "])), theme.colors.secondary.base, theme.colors.secondary.light, theme.colors.secondary.dark, theme.colors.disabled); }
};
var sizes$2 = {
    small: function (theme) { return css(templateObject_6$f || (templateObject_6$f = __makeTemplateObject(["\n    font-size: ", ";\n    padding: 8px 24px;\n    max-height: 40px;\n  "], ["\n    font-size: ", ";\n    padding: 8px 24px;\n    max-height: 40px;\n  "])), theme.font.size.xs); },
    medium: function (theme) { return css(templateObject_7$e || (templateObject_7$e = __makeTemplateObject(["\n    font-size: ", ";\n    padding: 12px 32px;\n    max-height: 48px;\n  "], ["\n    font-size: ", ";\n    padding: 12px 32px;\n    max-height: 48px;\n  "])), theme.font.size.md); }
};
var IconLoader$1 = styled.i(templateObject_9$d || (templateObject_9$d = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_8$d || (templateObject_8$d = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: ", ";\n    opacity: 0;\n\n    svg {\n      animation: ", " 1s linear infinite;\n    }\n  "], ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: ", ";\n    opacity: 0;\n\n    svg {\n      animation: ", " 1s linear infinite;\n    }\n  "])), theme.transitions.all, rotate$2);
});
var Button$1 = styled.button(templateObject_12$9 || (templateObject_12$9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant, size = _a.size, isLoading = _a.isLoading, fullWidth = _a.fullWidth, props = __rest(_a, ["theme", "variant", "size", "isLoading", "fullWidth"]);
    return css(templateObject_11$c || (templateObject_11$c = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n    letter-spacing: -5%;\n    line-height: 24px;\n\n    ", ";\n\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: ", ";\n    cursor: pointer;\n    border-radius: ", ";\n    border: none;\n    transition: ", ";\n    position: relative;\n\n    :disabled {\n      cursor: not-allowed;\n\n      &,\n      ", " {\n        color: ", ";\n      }\n    }\n\n    ", "\n    ", "\n\n    ", "\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n    letter-spacing: -5%;\n    line-height: 24px;\n\n    ", ";\n\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: ", ";\n    cursor: pointer;\n    border-radius: ", ";\n    border: none;\n    transition: ", ";\n    position: relative;\n\n    :disabled {\n      cursor: not-allowed;\n\n      &,\n      ", " {\n        color: ", ";\n      }\n    }\n\n    ", "\n    ", "\n\n    ", "\n  "])), theme.font.family.base, theme.font.weight.semiBold, theme.colors.white, setSpacingMargin(props), fullWidth ? '100%' : 'auto', theme.radius.md, theme.transitions.all, Icon$7, !isLoading && theme.colors.white2, !!variant && variants[variant](theme, isLoading), size && sizes$2[size](theme), isLoading && css(templateObject_10$d || (templateObject_10$d = __makeTemplateObject(["\n      color: transparent;\n\n      :hover,\n      :focus {\n        box-shadow: none;\n      }\n\n      ", " {\n        display: flex;\n        opacity: 1;\n      }\n\n      ", " {\n        opacity: 0;\n      }\n    "], ["\n      color: transparent;\n\n      :hover,\n      :focus {\n        box-shadow: none;\n      }\n\n      ", " {\n        display: flex;\n        opacity: 1;\n      }\n\n      ", " {\n        opacity: 0;\n      }\n    "])), IconLoader$1, Icon$7));
});
var Icon$7 = styled.i(templateObject_14$5 || (templateObject_14$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var pos = _a.pos, size = _a.size;
    return css(templateObject_13$6 || (templateObject_13$6 = __makeTemplateObject(["\n    display: flex;\n    margin: ", ";\n    width: ", ";\n    height: ", ";\n  "], ["\n    display: flex;\n    margin: ", ";\n    width: ", ";\n    height: ", ";\n  "])), pos === 'right' ? '0 0 0 8px' : '0 8px 0 0', size === 'small' ? '16px' : '24px', size === 'small' ? '16px' : '24px');
});
var templateObject_1$j, templateObject_2$i, templateObject_3$i, templateObject_4$i, templateObject_5$g, templateObject_6$f, templateObject_7$e, templateObject_8$d, templateObject_9$d, templateObject_10$d, templateObject_11$c, templateObject_12$9, templateObject_13$6, templateObject_14$5;

/**
 * Botão de ação
 */
var Button = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, startIcon = _a.startIcon, endIcon = _a.endIcon, _d = _a.isLoading, isLoading = _d === void 0 ? false : _d, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, props = __rest(_a, ["children", "variant", "size", "startIcon", "endIcon", "isLoading", "fullWidth"]);
    return (React.createElement(Button$1, __assign({ variant: variant, size: size, isLoading: isLoading, fullWidth: fullWidth }, props),
        startIcon && (React.createElement(Icon$7, { size: size, pos: "left" }, startIcon)),
        children,
        isLoading && (React.createElement(IconLoader$1, null,
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20" },
                React.createElement("path", { d: "M16.8333 5.58228C17.6974 5.02366 17.9559 3.85486 17.2469 3.10922C16.3412 2.15679 15.2524 1.38769 14.039 0.851951C12.2544 0.0640328 10.2783 -0.184702 8.35409 0.136381C6.4299 0.457465 4.64164 1.33434 3.20957 2.65902C1.77749 3.98369 0.764144 5.69831 0.294331 7.59168C-0.175482 9.48506 -0.0812412 11.4745 0.565446 13.315C1.21213 15.1555 2.38303 16.7666 3.93391 17.95C5.48479 19.1334 7.34793 19.8373 9.29385 19.975C10.617 20.0687 11.9391 19.8978 13.1849 19.4793C14.1602 19.1516 14.4781 17.9975 13.9754 17.0997C13.4727 16.202 12.3348 15.9135 11.3293 16.1315C10.7505 16.257 10.1539 16.3005 9.55697 16.2583C8.33611 16.1718 7.16719 15.7302 6.19417 14.9878C5.22116 14.2453 4.48655 13.2345 4.08083 12.0798C3.6751 10.9251 3.61597 9.67693 3.91073 8.48904C4.20549 7.30115 4.84126 6.22541 5.73973 5.39432C6.6382 4.56323 7.76014 4.01308 8.96737 3.81163C10.1746 3.61019 11.4144 3.76624 12.534 4.26058C13.0815 4.50229 13.5885 4.81971 14.0415 5.20117C14.8285 5.86397 15.9692 6.14091 16.8333 5.58228Z", fill: "white" })))),
        endIcon && (React.createElement(Icon$7, { size: size, pos: "right" }, endIcon))));
};

var Input$3 = styled.input(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, error = _a.error;
    return css(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n    display: none;\n\n    &:checked {\n      & + ", " {\n        border-color: ", ";\n        background: ", " content-box;\n        color: ", ";\n\n        svg {\n          opacity: 1;\n        }\n      }\n\n      &:disabled {\n        & + ", " {\n          border-color: ", ";\n          background: ", " content-box;\n          color: ", ";\n        }\n      }\n    }\n\n    &:disabled {\n      & + ", " {\n        cursor: not-allowed;\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &\n        + ", "\n        + ", ",\n        &\n        + ", "\n        + ", ",\n        &\n        + ", "\n        + ", "\n        + ", " {\n        color: ", ";\n      }\n    }\n\n    ", "\n  "], ["\n    display: none;\n\n    &:checked {\n      & + ", " {\n        border-color: ", ";\n        background: ", " content-box;\n        color: ", ";\n\n        svg {\n          opacity: 1;\n        }\n      }\n\n      &:disabled {\n        & + ", " {\n          border-color: ", ";\n          background: ", " content-box;\n          color: ", ";\n        }\n      }\n    }\n\n    &:disabled {\n      & + ", " {\n        cursor: not-allowed;\n        border-color: ", ";\n        color: ", ";\n      }\n\n      &\n        + ", "\n        + ", ",\n        &\n        + ", "\n        + ", ",\n        &\n        + ", "\n        + ", "\n        + ", " {\n        color: ", ";\n      }\n    }\n\n    ", "\n  "])), IconCheckbox, theme.colors.primary.base, theme.colors.primary.base, theme.colors.white, IconCheckbox, theme.colors.white3, theme.colors.white3, theme.colors.white2, IconCheckbox, theme.colors.white3, theme.colors.white2, IconCheckbox, IconLabel$1, IconCheckbox, Label$2, IconCheckbox, IconLabel$1, Label$2, theme.colors.white2, error && css(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n      & + ", " {\n        border-color: ", ";\n      }\n    "], ["\n      & + ", " {\n        border-color: ", ";\n      }\n    "])), IconCheckbox, theme.colors.peach.base));
});
var IconCheckbox = styled.div(templateObject_5$f || (templateObject_5$f = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_4$h || (templateObject_4$h = __makeTemplateObject(["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: 16px;\n    height: 16px;\n    background-color: transparent;\n    cursor: pointer;\n\n    color: ", ";\n    border-radius: ", ";\n    border: 1px solid ", ";\n    transition: ", ";\n\n    svg {\n      opacity: 0;\n    }\n  "], ["\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: 16px;\n    height: 16px;\n    background-color: transparent;\n    cursor: pointer;\n\n    color: ", ";\n    border-radius: ", ";\n    border: 1px solid ", ";\n    transition: ", ";\n\n    svg {\n      opacity: 0;\n    }\n  "])), theme.colors.white, theme.radius.xs, theme.colors.white, theme.transitions.all);
});
var IconLabel$1 = styled.i(templateObject_7$d || (templateObject_7$d = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_6$e || (templateObject_6$e = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    color: ", ";\n    transition: ", ";\n    margin-left: ", ";\n\n    svg {\n      width: 24px;\n      height: 24px;\n    }\n  "], ["\n    display: flex;\n    align-items: center;\n    color: ", ";\n    transition: ", ";\n    margin-left: ", ";\n\n    svg {\n      width: 24px;\n      height: 24px;\n    }\n  "])), theme.colors.white, theme.transitions.all, theme.spacing('xs'));
});
var Label$2 = styled.label(templateObject_9$c || (templateObject_9$c = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_8$c || (templateObject_8$c = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n    margin-left: ", ";\n    transition: ", ";\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n    margin-left: ", ";\n    transition: ", ";\n  "])), theme.font.family.base, theme.font.weight.medium, theme.font.size.md, theme.colors.white, theme.spacing('xs'), theme.transitions.all);
});
var Wrapper$e = styled.label(templateObject_11$b || (templateObject_11$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var props = __rest(_a, []);
    return css(templateObject_10$c || (templateObject_10$c = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n\n    ", ";\n  "], ["\n    display: flex;\n    align-items: center;\n\n    ", ";\n  "])), setSpacingMargin(props));
});
var templateObject_1$i, templateObject_2$h, templateObject_3$h, templateObject_4$h, templateObject_5$f, templateObject_6$e, templateObject_7$d, templateObject_8$c, templateObject_9$c, templateObject_10$c, templateObject_11$b;

/**
 * Checkbox para seleção de múltiplas opções
 */
var Checkbox = function (_a) {
    var label = _a.label, icon = _a.icon, id = _a.id, props = __rest(_a, ["label", "icon", "id"]);
    return (React.createElement(Wrapper$e, __assign({ htmlFor: id }, getPropsMargin(props)),
        React.createElement(Input$3, __assign({ id: id }, props, { type: "checkbox", hidden: true })),
        React.createElement(IconCheckbox, null,
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "10", height: "8", viewBox: "0 0 10 8", fill: "none" },
                React.createElement("path", { d: "M9.75386 1.50554C10.082 1.16113 10.082 0.602723 9.75386 0.25831C9.42568 -0.0861033 8.89358 -0.0861032 8.5654 0.25831L3.2173 5.87084L1.4346 4C1.10642 3.65559 0.574325 3.65559 0.246139 4C-0.0820464 4.34441 -0.0820464 4.90282 0.246139 5.24723L2.62307 7.74169C2.95126 8.0861 3.48335 8.0861 3.81153 7.74169L9.75386 1.50554Z", fill: "currentColor" }))),
        icon && React.createElement(IconLabel$1, null, icon),
        label && React.createElement(Label$2, { htmlFor: id }, label)));
};

var sizes$1 = {
    small: function (theme) { return css(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n    font-size: ", ";\n    line-height: 18px;\n    padding: 8px 10px;\n  "], ["\n    font-size: ", ";\n    line-height: 18px;\n    padding: 8px 10px;\n  "])), theme.font.size.xs); },
    medium: function (theme) { return css(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n    font-size: ", ";\n    line-height: 24px;\n    padding: 4px 10px;\n  "], ["\n    font-size: ", ";\n    line-height: 24px;\n    padding: 4px 10px;\n  "])), theme.font.size.md); }
};
var Chip$1 = styled.div(templateObject_8$b || (templateObject_8$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, size = _a.size, disabled = _a.disabled, selected = _a.selected, props = __rest(_a, ["theme", "size", "disabled", "selected"]);
    return css(templateObject_7$c || (templateObject_7$c = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n    max-height: 32px;\n\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ", ";\n    border: 2px solid ", ";\n    transition: ", ";\n    user-select: none;\n    cursor: pointer;\n\n    ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    color: ", ";\n    max-height: 32px;\n\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: ", ";\n    border: 2px solid ", ";\n    transition: ", ";\n    user-select: none;\n    cursor: pointer;\n\n    ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "])), theme.font.family.base, theme.font.weight.medium, theme.colors.white2, theme.radius.lg, theme.colors.white2, theme.transitions.all, setSpacingMargin(props), selected && css(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n      background-color: ", ";\n      border-color: ", ";\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n    "])), theme.colors.blueberry.light, theme.colors.blueberry.base), selected &&
        !disabled && css(templateObject_4$g || (templateObject_4$g = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), theme.colors.black2), disabled && css(templateObject_5$e || (templateObject_5$e = __makeTemplateObject(["\n      cursor: not-allowed;\n      background-color: ", ";\n      border-color: ", ";\n    "], ["\n      cursor: not-allowed;\n      background-color: ", ";\n      border-color: ", ";\n    "])), theme.colors.disabled, theme.colors.disabled), !selected &&
        !disabled && css(templateObject_6$d || (templateObject_6$d = __makeTemplateObject(["\n      :hover,\n      :focus {\n        background-color: ", ";\n      }\n    "], ["\n      :hover,\n      :focus {\n        background-color: ", ";\n      }\n    "])), theme.colors.white3), size && sizes$1[size](theme));
});
var Icon$6 = styled.i(templateObject_9$b || (templateObject_9$b = __makeTemplateObject(["\n  display: flex;\n  height: 16px;\n  width: 16px;\n  margin: 0 8px 0 0;\n"], ["\n  display: flex;\n  height: 16px;\n  width: 16px;\n  margin: 0 8px 0 0;\n"])));
var IconClose$1 = styled.i(templateObject_12$8 || (templateObject_12$8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return css(templateObject_11$a || (templateObject_11$a = __makeTemplateObject(["\n    display: flex;\n    margin: 0 0 0 8px;\n    transition: ", ";\n    border-radius: 50%;\n    padding: 4px;\n    height: 18px;\n    width: 18px;\n\n    svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    ", "\n  "], ["\n    display: flex;\n    margin: 0 0 0 8px;\n    transition: ", ";\n    border-radius: 50%;\n    padding: 4px;\n    height: 18px;\n    width: 18px;\n\n    svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    ", "\n  "])), theme.transitions.all, !disabled && css(templateObject_10$b || (templateObject_10$b = __makeTemplateObject(["\n      :hover,\n      :focus {\n        background-color: ", ";\n      }\n    "], ["\n      :hover,\n      :focus {\n        background-color: ", ";\n      }\n    "])), theme.colors.peach.light));
});
var templateObject_1$h, templateObject_2$g, templateObject_3$g, templateObject_4$g, templateObject_5$e, templateObject_6$d, templateObject_7$c, templateObject_8$b, templateObject_9$b, templateObject_10$b, templateObject_11$a, templateObject_12$8;

/**
 * Chip
 */
var Chip = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'medium' : _b, icon = _a.icon, _c = _a.disabled, disabled = _c === void 0 ? false : _c, close = _a.close, props = __rest(_a, ["children", "size", "icon", "disabled", "close"]);
    return (React.createElement(Chip$1, __assign({ size: size, disabled: disabled }, props),
        icon && React.createElement(Icon$6, null, icon),
        children,
        close && (React.createElement(IconClose$1, { disabled: disabled, onClick: function (event) {
                event.stopPropagation();
                close();
            } },
            React.createElement("svg", { height: "16px", width: "16px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor" },
                React.createElement("path", { d: "M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" }))))));
};

var ContainerTime = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var BoxTime = styled.div(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    background-color: ", ";\n    border-radius: ", ";\n    padding: 24px 12px;\n    width: 110px;\n  "], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    background-color: ", ";\n    border-radius: ", ";\n    padding: 24px 12px;\n    width: 110px;\n  "])), theme.colors.background.cardSection, theme.radius.md);
});
var TextTime = styled.h2(templateObject_5$d || (templateObject_5$d = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_4$f || (templateObject_4$f = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: 4.8rem;\n    color: ", ";\n    line-height: 1.2;\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: 4.8rem;\n    color: ", ";\n    line-height: 1.2;\n  "])), theme.font.family.heading, theme.font.weight.bold, theme.colors.white);
});
var TextTimeInfo = styled.h2(templateObject_7$b || (templateObject_7$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_6$c || (templateObject_6$c = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "])), theme.font.family.base, theme.font.weight.bold, theme.font.size.md, theme.colors.white);
});
var SeparatorTime = styled.div(templateObject_9$a || (templateObject_9$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_8$a || (templateObject_8$a = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 0 8px;\n\n    span {\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background-color: ", ";\n\n      &:first-child {\n        margin-bottom: ", ";\n      }\n    }\n  "], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 0 8px;\n\n    span {\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background-color: ", ";\n\n      &:first-child {\n        margin-bottom: ", ";\n      }\n    }\n  "])), theme.colors.background.cardSection, theme.spacing('md'));
});
var TextTitle = styled.h6(templateObject_11$9 || (templateObject_11$9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_10$a || (templateObject_10$a = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    text-transform: uppercase;\n    line-height: 1.5;\n    letter-spacing: 0.2em;\n    margin-bottom: ", ";\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    text-transform: uppercase;\n    line-height: 1.5;\n    letter-spacing: 0.2em;\n    margin-bottom: ", ";\n  "])), theme.font.family.heading, theme.font.weight.bold, theme.font.size.md, theme.colors.white, theme.spacing('xs'));
});
var TextSub = styled.h6(templateObject_13$5 || (templateObject_13$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_12$7 || (templateObject_12$7 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n    margin-top: ", ";\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n    margin-top: ", ";\n  "])), theme.font.family.base, theme.font.weight.bold, theme.font.size.md, theme.colors.white, theme.spacing('xs'));
});
var Wrapper$d = styled.div(templateObject_16$2 || (templateObject_16$2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, size = _a.size, props = __rest(_a, ["theme", "size"]);
    return css(templateObject_15$2 || (templateObject_15$2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    ", ";\n\n    ", "\n  "], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    ", ";\n\n    ", "\n  "])), setSpacingMargin(props), size === 'small' && css(templateObject_14$4 || (templateObject_14$4 = __makeTemplateObject(["\n      ", " {\n        width: 80px;\n        padding: 24px 8px;\n      }\n\n      ", " {\n        font-size: 3.2rem;\n      }\n\n      ", " {\n        font-size: 1.2rem;\n      }\n\n      ", " {\n        font-size: 1.2rem;\n      }\n\n      ", " {\n        margin: 0 4px;\n\n        span {\n          width: 4px;\n          height: 4px;\n\n          &:first-child {\n            margin-bottom: ", ";\n          }\n        }\n      }\n    "], ["\n      ", " {\n        width: 80px;\n        padding: 24px 8px;\n      }\n\n      ", " {\n        font-size: 3.2rem;\n      }\n\n      ", " {\n        font-size: 1.2rem;\n      }\n\n      ", " {\n        font-size: 1.2rem;\n      }\n\n      ", " {\n        margin: 0 4px;\n\n        span {\n          width: 4px;\n          height: 4px;\n\n          &:first-child {\n            margin-bottom: ", ";\n          }\n        }\n      }\n    "])), BoxTime, TextTime, TextTimeInfo, TextSub, SeparatorTime, theme.spacing('md')));
});
var templateObject_1$g, templateObject_2$f, templateObject_3$f, templateObject_4$f, templateObject_5$d, templateObject_6$c, templateObject_7$b, templateObject_8$a, templateObject_9$a, templateObject_10$a, templateObject_11$9, templateObject_12$7, templateObject_13$5, templateObject_14$4, templateObject_15$2, templateObject_16$2;

/**
 * Contador com titulo, tempo e subtitulo
 */
var Countdown = function (_a) {
    var _b = _a.hour, hour = _b === void 0 ? 0 : _b, _c = _a.minute, minute = _c === void 0 ? 0 : _c, _d = _a.second, second = _d === void 0 ? 0 : _d, title = _a.title, subtitle = _a.subtitle, _e = _a.size, size = _e === void 0 ? 'medium' : _e, props = __rest(_a, ["hour", "minute", "second", "title", "subtitle", "size"]);
    return (React.createElement(Wrapper$d, __assign({ size: size }, props),
        title && React.createElement(TextTitle, null, title),
        React.createElement(ContainerTime, null,
            React.createElement(BoxTime, null,
                React.createElement(TextTime, null, "0".concat(hour).slice(-2)),
                React.createElement(TextTimeInfo, null, hour > 1 ? 'Horas' : 'Hora')),
            React.createElement(SeparatorTime, null,
                React.createElement("span", null),
                React.createElement("span", null)),
            React.createElement(BoxTime, null,
                React.createElement(TextTime, null, "0".concat(minute).slice(-2)),
                React.createElement(TextTimeInfo, null, minute > 1 ? 'Minutos' : 'Minuto')),
            React.createElement(SeparatorTime, null,
                React.createElement("span", null),
                React.createElement("span", null)),
            React.createElement(BoxTime, null,
                React.createElement(TextTime, null, "0".concat(second).slice(-2)),
                React.createElement(TextTimeInfo, null, second > 1 ? 'Segundos' : 'Segundo'))),
        subtitle && React.createElement(TextSub, null, subtitle)));
};

var Input$2 = styled.input(templateObject_4$e || (templateObject_4$e = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, error = _a.error, align = _a.align, icon = _a.icon, fullWidth = _a.fullWidth;
    return css(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n    font-family: ", ";\n    color: ", ";\n    background-color: transparent;\n    font-size: ", ";\n    height: 100%;\n\n    text-align: ", ";\n    padding: ", ";\n    border-radius: ", ";\n    border: 2px solid ", ";\n    transition: ", ";\n\n    &::placeholder {\n      transition: ", ";\n      color: ", ";\n    }\n\n    &:hover {\n      &::placeholder,\n      & + ", " {\n        color: ", ";\n      }\n    }\n\n    &:active,\n    &:focus {\n      &::placeholder {\n        color: transparent;\n      }\n\n      & + ", " {\n        color: ", ";\n      }\n    }\n\n    &:not([value='']) {\n      & + ", " {\n        color: ", ";\n      }\n    }\n\n    ", "\n\n    ", "\n  "], ["\n    font-family: ", ";\n    color: ", ";\n    background-color: transparent;\n    font-size: ", ";\n    height: 100%;\n\n    text-align: ", ";\n    padding: ", ";\n    border-radius: ", ";\n    border: 2px solid ", ";\n    transition: ", ";\n\n    &::placeholder {\n      transition: ", ";\n      color: ", ";\n    }\n\n    &:hover {\n      &::placeholder,\n      & + ", " {\n        color: ", ";\n      }\n    }\n\n    &:active,\n    &:focus {\n      &::placeholder {\n        color: transparent;\n      }\n\n      & + ", " {\n        color: ", ";\n      }\n    }\n\n    &:not([value='']) {\n      & + ", " {\n        color: ", ";\n      }\n    }\n\n    ", "\n\n    ", "\n  "])), theme.font.family.base, theme.colors.white, theme.font.size.md, align, icon ? '12px 32px 12px 60px' : '12px 24px', theme.radius.md, theme.colors.secondary.base, theme.transitions.all, theme.transitions.all, theme.colors.white3, Icon$5, theme.colors.white, Icon$5, theme.colors.white, Icon$5, theme.colors.white, error && css(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n      border-color: ", ";\n\n      &:hover\n        + ", ",\n        &:focus\n        + ", ",\n        &\n        + ", ",\n        &:not([value=''])\n        + ", " {\n        color: ", ";\n      }\n    "], ["\n      border-color: ", ";\n\n      &:hover\n        + ", ",\n        &:focus\n        + ", ",\n        &\n        + ", ",\n        &:not([value=''])\n        + ", " {\n        color: ", ";\n      }\n    "])), theme.colors.peach.base, Icon$5, Icon$5, Icon$5, Icon$5, theme.colors.peach.base), fullWidth && css(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "]))));
});
var Wrapper$c = styled.div(templateObject_6$b || (templateObject_6$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var props = __rest(_a, []);
    return css(templateObject_5$c || (templateObject_5$c = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n\n    ", ";\n  "], ["\n    display: flex;\n    flex-direction: column;\n\n    ", ";\n  "])), setSpacingMargin(props));
});
var InputContainer = styled.div(templateObject_7$a || (templateObject_7$a = __makeTemplateObject(["\n  position: relative;\n  height: 48px;\n"], ["\n  position: relative;\n  height: 48px;\n"])));
var Icon$5 = styled.i(templateObject_9$9 || (templateObject_9$9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_8$9 || (templateObject_8$9 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    color: ", ";\n    transition: ", ";\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    margin-left: ", ";\n    padding: 2px;\n\n    svg {\n      width: 28px;\n      height: 28px;\n    }\n  "], ["\n    display: flex;\n    align-items: center;\n    color: ", ";\n    transition: ", ";\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    margin-left: ", ";\n    padding: 2px;\n\n    svg {\n      width: 28px;\n      height: 28px;\n    }\n  "])), theme.colors.white3, theme.transitions.all, theme.spacing('md'));
});
var ErrorMessage = styled.p(templateObject_11$8 || (templateObject_11$8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_10$9 || (templateObject_10$9 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "])), theme.font.family.base, theme.font.weight.medium, theme.font.size.md, theme.colors.peach.base);
});
var Label$1 = styled.label(templateObject_13$4 || (templateObject_13$4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_12$6 || (templateObject_12$6 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "])), theme.font.family.base, theme.font.weight.medium, theme.font.size.md, theme.colors.white);
});
var templateObject_1$f, templateObject_2$e, templateObject_3$e, templateObject_4$e, templateObject_5$c, templateObject_6$b, templateObject_7$a, templateObject_8$9, templateObject_9$9, templateObject_10$9, templateObject_11$8, templateObject_12$6, templateObject_13$4;

/**
 * Input para texto
 */
var Input$1 = function (_a) {
    var label = _a.label, error = _a.error, _b = _a.align, align = _b === void 0 ? 'left' : _b, icon = _a.icon, id = _a.id, props = __rest(_a, ["label", "error", "align", "icon", "id"]);
    return (React.createElement(Wrapper$c, __assign({}, getPropsMargin(props)),
        label && React.createElement(Label$1, { htmlFor: id }, label),
        React.createElement(InputContainer, null,
            React.createElement(Input$2, __assign({ error: !!error, align: align, icon: !!icon, id: id }, props)),
            icon && React.createElement(Icon$5, null, icon)),
        error && typeof error === 'string' && (React.createElement(ErrorMessage, null, error))));
};

var Input = styled.input(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, error = _a.error;
    return css(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n    display: none;\n\n    &:checked {\n      & + ", " {\n        border-width: 4px;\n        border-color: ", ";\n        background: ", " content-box;\n      }\n\n      &:disabled {\n        & + ", " {\n          border-color: ", ";\n          background: ", " content-box;\n        }\n      }\n    }\n\n    &:disabled {\n      & + ", " {\n        cursor: not-allowed;\n        border-color: ", ";\n      }\n\n      &\n        + ", "\n        + ", ",\n        &\n        + ", "\n        + ", ",\n        &\n        + ", "\n        + ", "\n        + ", " {\n        color: ", ";\n      }\n    }\n\n    ", "\n  "], ["\n    display: none;\n\n    &:checked {\n      & + ", " {\n        border-width: 4px;\n        border-color: ", ";\n        background: ", " content-box;\n      }\n\n      &:disabled {\n        & + ", " {\n          border-color: ", ";\n          background: ", " content-box;\n        }\n      }\n    }\n\n    &:disabled {\n      & + ", " {\n        cursor: not-allowed;\n        border-color: ", ";\n      }\n\n      &\n        + ", "\n        + ", ",\n        &\n        + ", "\n        + ", ",\n        &\n        + ", "\n        + ", "\n        + ", " {\n        color: ", ";\n      }\n    }\n\n    ", "\n  "])), IconRadio, theme.colors.primary.base, theme.colors.white, IconRadio, theme.colors.white3, theme.colors.white2, IconRadio, theme.colors.white3, IconRadio, IconLabel, IconRadio, Label, IconRadio, IconLabel, Label, theme.colors.white2, error && css(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n      & + ", " {\n        border-color: ", ";\n      }\n    "], ["\n      & + ", " {\n        border-color: ", ";\n      }\n    "])), IconRadio, theme.colors.peach.base));
});
var IconRadio = styled.div(templateObject_5$b || (templateObject_5$b = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_4$d || (templateObject_4$d = __makeTemplateObject(["\n    width: 16px;\n    height: 16px;\n    background-color: transparent;\n    cursor: pointer;\n\n    border-radius: ", ";\n    border: 1px solid ", ";\n    transition: ", ";\n  "], ["\n    width: 16px;\n    height: 16px;\n    background-color: transparent;\n    cursor: pointer;\n\n    border-radius: ", ";\n    border: 1px solid ", ";\n    transition: ", ";\n  "])), theme.radius.md, theme.colors.white, theme.transitions.all);
});
var IconLabel = styled.i(templateObject_7$9 || (templateObject_7$9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_6$a || (templateObject_6$a = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    color: ", ";\n    transition: ", ";\n    margin-left: ", ";\n\n    svg {\n      width: 24px;\n      height: 24px;\n    }\n  "], ["\n    display: flex;\n    align-items: center;\n    color: ", ";\n    transition: ", ";\n    margin-left: ", ";\n\n    svg {\n      width: 24px;\n      height: 24px;\n    }\n  "])), theme.colors.white, theme.transitions.all, theme.spacing('xs'));
});
var Label = styled.label(templateObject_9$8 || (templateObject_9$8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_8$8 || (templateObject_8$8 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n    margin-left: ", ";\n    transition: ", ";\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n    margin-left: ", ";\n    transition: ", ";\n  "])), theme.font.family.base, theme.font.weight.medium, theme.font.size.md, theme.colors.white, theme.spacing('xs'), theme.transitions.all);
});
var Wrapper$b = styled.label(templateObject_11$7 || (templateObject_11$7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var props = __rest(_a, []);
    return css(templateObject_10$8 || (templateObject_10$8 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n\n    ", ";\n  "], ["\n    display: flex;\n    align-items: center;\n\n    ", ";\n  "])), setSpacingMargin(props));
});
var templateObject_1$e, templateObject_2$d, templateObject_3$d, templateObject_4$d, templateObject_5$b, templateObject_6$a, templateObject_7$9, templateObject_8$8, templateObject_9$8, templateObject_10$8, templateObject_11$7;

/**
 * Radio para seleção de opções
 */
var Radio = function (_a) {
    var label = _a.label, icon = _a.icon, id = _a.id, props = __rest(_a, ["label", "icon", "id"]);
    return (React.createElement(Wrapper$b, __assign({ htmlFor: id }, getPropsMargin(props)),
        React.createElement(Input, __assign({ id: id }, props, { type: "radio", hidden: true })),
        React.createElement(IconRadio, null),
        icon && React.createElement(IconLabel, null, icon),
        label && React.createElement(Label, { htmlFor: id }, label)));
};

var colors$1 = {
    warning: function (theme) { return css(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.colors.banana.base); },
    error: function (theme) { return css(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.colors.peach.base); },
    success: function (theme) { return css(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.colors.mint.base); },
    info: function (theme) { return css(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), theme.colors.blueberry.base); }
};
var Wrapper$a = styled.div(templateObject_7$8 || (templateObject_7$8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, size = _a.size, props = __rest(_a, ["theme", "size"]);
    return css(templateObject_6$9 || (templateObject_6$9 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    background-color: ", ";\n    border-radius: 8px;\n\n    ", ";\n\n    ", "\n  "], ["\n    display: flex;\n    align-items: center;\n    background-color: ", ";\n    border-radius: 8px;\n\n    ", ";\n\n    ", "\n  "])), theme.colors.background.card, setSpacingMargin(props), size === 'small' && css(templateObject_5$a || (templateObject_5$a = __makeTemplateObject(["\n      ", " {\n        margin-right: ", ";\n\n        svg {\n          width: 32px;\n          height: 32px;\n        }\n      }\n\n      ", " {\n        font-size: ", ";\n      }\n    "], ["\n      ", " {\n        margin-right: ", ";\n\n        svg {\n          width: 32px;\n          height: 32px;\n        }\n      }\n\n      ", " {\n        font-size: ", ";\n      }\n    "])), BoxIcon$1, theme.spacing('xs'), Text$1, theme.font.size.xs));
});
var BoxIcon$1 = styled.i(templateObject_9$7 || (templateObject_9$7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return css(templateObject_8$7 || (templateObject_8$7 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    padding: ", ";\n    margin-right: ", ";\n    border-radius: 8px;\n    background-color: ", ";\n\n    svg {\n      width: 48px;\n      height: 48px;\n    }\n\n    ", "\n  "], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    padding: ", ";\n    margin-right: ", ";\n    border-radius: 8px;\n    background-color: ", ";\n\n    svg {\n      width: 48px;\n      height: 48px;\n    }\n\n    ", "\n  "])), theme.spacing('md'), theme.spacing('md'), theme.colors.background.cardSection, variant && colors$1[variant](theme));
});
var Text$1 = styled.p(templateObject_11$6 || (templateObject_11$6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_10$7 || (templateObject_10$7 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "])), theme.font.family.base, theme.font.weight.medium, theme.font.size.md, theme.colors.white);
});
var templateObject_1$d, templateObject_2$c, templateObject_3$c, templateObject_4$c, templateObject_5$a, templateObject_6$9, templateObject_7$8, templateObject_8$7, templateObject_9$7, templateObject_10$7, templateObject_11$6;

/**
 * TipCard exibir textos de aviso/observação
 */
var TipCard = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.variant, variant = _c === void 0 ? 'warning' : _c, props = __rest(_a, ["children", "size", "variant"]);
    return (React.createElement(Wrapper$a, __assign({ size: size }, props),
        React.createElement(BoxIcon$1, { variant: variant },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 48 48" },
                React.createElement("path", { opacity: "0.988987", d: "M23.9978 4.02823C12.9518 4.02823 3.9978 12.9823 3.9978 24.0283C3.9978 35.0743 12.9518 44.0283 23.9978 44.0283C35.0438 44.0283 43.9978 35.0743 43.9978 24.0283C43.9978 12.9823 35.0438 4.02823 23.9978 4.02823ZM23.9978 8.02824C32.8338 8.02824 39.9978 15.1923 39.9978 24.0283C39.9978 32.8643 32.8338 40.0283 23.9978 40.0283C15.1618 40.0283 7.9978 32.8643 7.9978 24.0283C7.9978 15.1923 15.1618 8.02824 23.9978 8.02824ZM23.9978 14.0283C22.8938 14.0283 21.9978 14.9243 21.9978 16.0283C21.9978 17.1323 22.8938 18.0283 23.9978 18.0283C25.1018 18.0283 25.9978 17.1323 25.9978 16.0283C25.9978 14.9243 25.1018 14.0283 23.9978 14.0283ZM21.9978 20.0283C20.8938 20.0283 19.9978 20.9243 19.9978 22.0283C19.9978 22.9923 20.7158 23.7123 21.6218 23.9043L20.4358 29.6523C19.9718 31.9743 21.6318 34.0283 23.9978 34.0283H25.9978C27.1018 34.0283 27.9978 33.1323 27.9978 32.0283C27.9978 30.9243 27.1018 30.0283 25.9978 30.0283H24.4358L25.9358 22.4043C26.1838 21.1662 25.2598 20.0283 23.9978 20.0283C23.7458 20.0283 22.3218 20.0283 21.9978 20.0283Z", fill: "currentColor" }))),
        React.createElement(Text$1, null, children)));
};

var rotate$1 = keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var colors = {
    success: function (theme) { return css(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n  "], ["\n    background-color: ", ";\n    border-color: ", ";\n  "])), theme.colors.mint.base, theme.colors.mint.light); },
    error: function (theme) { return css(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n  "], ["\n    background-color: ", ";\n    border-color: ", ";\n  "])), theme.colors.peach.base, theme.colors.peach.light); },
    loading: function (theme) { return css(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: ", ";\n\n    ", ",\n    ", " {\n      color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    border-color: ", ";\n\n    ", ",\n    ", " {\n      color: ", ";\n    }\n  "])), theme.colors.background.card, theme.colors.background.cardSection, Text, BoxIcon, theme.colors.white); }
};
var Wrapper$9 = styled.div(templateObject_8$6 || (templateObject_8$6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant, show = _a.show;
    return css(templateObject_7$7 || (templateObject_7$7 = __makeTemplateObject(["\n    display: inline-flex;\n    align-items: center;\n    border-radius: 12px;\n    padding: 12px 16px;\n    border: 2px solid transparent;\n    box-shadow: ", ";\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n\n    ", "\n    ", ";\n  "], ["\n    display: inline-flex;\n    align-items: center;\n    border-radius: 12px;\n    padding: 12px 16px;\n    border: 2px solid transparent;\n    box-shadow: ", ";\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n\n    ", "\n    ", ";\n  "])), "0px 12px 16px ".concat(theme.colors.black2), show
        ? css(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n          transform: translateY(-20px);\n        "], ["\n          transform: translateY(-20px);\n        "]))) : css(templateObject_6$8 || (templateObject_6$8 = __makeTemplateObject(["\n          transform: translateY(100%);\n        "], ["\n          transform: translateY(100%);\n        "]))), variant && colors[variant](theme));
});
var Overlay$1 = styled.div(templateObject_9$6 || (templateObject_9$6 = __makeTemplateObject(["\n  position: fixed;\n  right: 10px;\n  bottom: 0;\n  z-index: 50;\n"], ["\n  position: fixed;\n  right: 10px;\n  bottom: 0;\n  z-index: 50;\n"])));
var BoxIcon = styled.i(templateObject_11$5 || (templateObject_11$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_10$6 || (templateObject_10$6 = __makeTemplateObject(["\n    display: flex;\n    margin-right: ", ";\n    color: ", ";\n\n    svg {\n      width: 24px;\n      height: 24px;\n    }\n  "], ["\n    display: flex;\n    margin-right: ", ";\n    color: ", ";\n\n    svg {\n      width: 24px;\n      height: 24px;\n    }\n  "])), theme.spacing('xs'), theme.colors.black2);
});
var IconLoading = styled.svg(templateObject_12$5 || (templateObject_12$5 = __makeTemplateObject(["\n  animation: ", " 1s linear infinite;\n"], ["\n  animation: ", " 1s linear infinite;\n"])), rotate$1);
var Text = styled.p(templateObject_14$3 || (templateObject_14$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_13$3 || (templateObject_13$3 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n  "])), theme.font.family.base, theme.font.weight.bold, theme.font.size.md, theme.colors.black2);
});
var templateObject_1$c, templateObject_2$b, templateObject_3$b, templateObject_4$b, templateObject_5$9, templateObject_6$8, templateObject_7$7, templateObject_8$6, templateObject_9$6, templateObject_10$6, templateObject_11$5, templateObject_12$5, templateObject_13$3, templateObject_14$3;

/**
 * Toast exibir notificações
 */
var Toast = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'success' : _b, _c = _a.show, show = _c === void 0 ? false : _c, props = __rest(_a, ["children", "variant", "show"]);
    return (React.createElement(Overlay$1, null,
        React.createElement(Wrapper$9, __assign({ variant: variant, show: show }, props),
            React.createElement(BoxIcon, null,
                variant === 'success' && (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" },
                    React.createElement("path", { d: "M12.0141 1.9989C6.49133 1.9989 2.01413 6.47589 2.01413 11.9989C2.01413 17.5219 6.49133 21.9989 12.0141 21.9989C17.5369 21.9989 22.0141 17.5219 22.0141 11.9989C22.0141 6.47589 17.5369 1.9989 12.0141 1.9989ZM12.0141 3.9989C16.4324 3.9989 20.0141 7.58089 20.0141 11.9989C20.0141 16.4169 16.4324 19.9989 12.0141 19.9989C7.59583 19.9989 4.01413 16.4169 4.01413 11.9989C4.01413 7.58089 7.59583 3.9989 12.0141 3.9989ZM16.0141 8.99889C15.7582 8.99889 15.4906 9.0849 15.2953 9.2799L11.5766 13.0299C11.3188 13.2879 11.0601 13.2399 10.8579 12.9369L9.85793 11.4369C9.55153 10.9769 8.91123 10.8489 8.45163 11.1549C7.99213 11.4619 7.86403 12.1019 8.17033 12.5609L9.17033 14.0609C10.0727 15.4149 11.8326 15.5869 12.9829 14.4369L16.7329 10.7179C17.1234 10.3269 17.1234 9.6709 16.7329 9.2799C16.5376 9.0849 16.27 8.99889 16.0141 8.99889Z", fill: "currentColor", fillOpacity: "0.5" }))),
                variant === 'error' && (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" },
                    React.createElement("path", { d: "M12.0141 1.9989C6.49133 1.9989 2.01413 6.4759 2.01413 11.9989C2.01413 17.5219 6.49133 21.9989 12.0141 21.9989C17.5371 21.9989 22.0141 17.5219 22.0141 11.9989C22.0141 6.4759 17.5371 1.9989 12.0141 1.9989ZM12.0141 3.9989C16.4321 3.9989 20.0141 7.5809 20.0141 11.9989C20.0141 16.4169 16.4321 19.9989 12.0141 19.9989C7.59583 19.9989 4.01413 16.4169 4.01413 11.9989C4.01413 7.5809 7.59583 3.9989 12.0141 3.9989ZM12.0141 6.9989C11.4621 6.9989 11.0141 7.4469 11.0141 7.9989V12.9989C11.0141 13.5509 11.4621 13.9989 12.0141 13.9989C12.5661 13.9989 13.0141 13.5509 13.0141 12.9989V7.9989C13.0141 7.4469 12.5661 6.9989 12.0141 6.9989ZM12.0141 14.9989C11.4621 14.9989 11.0141 15.4469 11.0141 15.9989C11.0141 16.5509 11.4621 16.9989 12.0141 16.9989C12.5661 16.9989 13.0141 16.5509 13.0141 15.9989C13.0141 15.4469 12.5661 14.9989 12.0141 14.9989Z", fill: "currentColor", fillOpacity: "0.5" }))),
                variant === 'loading' && (React.createElement(IconLoading, { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20" },
                    React.createElement("path", { d: "M16.8333 5.58228C17.6974 5.02366 17.9559 3.85486 17.2469 3.10922C16.3412 2.15679 15.2524 1.38769 14.039 0.851951C12.2544 0.0640328 10.2783 -0.184702 8.35409 0.136381C6.4299 0.457465 4.64164 1.33434 3.20957 2.65902C1.77749 3.98369 0.764144 5.69831 0.294331 7.59168C-0.175482 9.48506 -0.0812412 11.4745 0.565446 13.315C1.21213 15.1555 2.38303 16.7666 3.93391 17.95C5.48479 19.1334 7.34793 19.8373 9.29385 19.975C10.617 20.0687 11.9391 19.8978 13.1849 19.4793C14.1602 19.1516 14.4781 17.9975 13.9754 17.0997C13.4727 16.202 12.3348 15.9135 11.3293 16.1315C10.7505 16.257 10.1539 16.3005 9.55697 16.2583C8.33611 16.1718 7.16719 15.7302 6.19417 14.9878C5.22116 14.2453 4.48655 13.2345 4.08083 12.0798C3.6751 10.9251 3.61597 9.67693 3.91073 8.48904C4.20549 7.30115 4.84126 6.22541 5.73973 5.39432C6.6382 4.56323 7.76014 4.01308 8.96737 3.81163C10.1746 3.61019 11.4144 3.76624 12.534 4.26058C13.0815 4.50229 13.5885 4.81971 14.0415 5.20117C14.8285 5.86397 15.9692 6.14091 16.8333 5.58228Z", fill: "currentColor" })))),
            React.createElement(Text, null, children))));
};

var positions = {
    left: css(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n    right: 100%;\n    top: 50%;\n    transform: translate(-10px, -50%);\n\n    &:after {\n      top: 50%;\n      left: 100%;\n      transform: rotate(45deg) translate(-9px, 1px);\n    }\n  "], ["\n    right: 100%;\n    top: 50%;\n    transform: translate(-10px, -50%);\n\n    &:after {\n      top: 50%;\n      left: 100%;\n      transform: rotate(45deg) translate(-9px, 1px);\n    }\n  "]))),
    right: css(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n    left: 100%;\n    top: 50%;\n    transform: translate(10px, -50%);\n\n    &:after {\n      top: 50%;\n      right: 100%;\n      transform: rotate(45deg) translate(1px, -9px);\n    }\n  "], ["\n    left: 100%;\n    top: 50%;\n    transform: translate(10px, -50%);\n\n    &:after {\n      top: 50%;\n      right: 100%;\n      transform: rotate(45deg) translate(1px, -9px);\n    }\n  "]))),
    top: css(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n    bottom: 100%;\n    left: 30%;\n    transform: translateY(-10px);\n\n    &:after {\n      top: 100%;\n      left: 15px;\n      transform: rotate(45deg) translate(-5px, -5px);\n    }\n  "], ["\n    bottom: 100%;\n    left: 30%;\n    transform: translateY(-10px);\n\n    &:after {\n      top: 100%;\n      left: 15px;\n      transform: rotate(45deg) translate(-5px, -5px);\n    }\n  "]))),
    bottom: css(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n    top: 100%;\n    left: 30%;\n    transform: translateY(10px);\n\n    &:after {\n      bottom: 100%;\n      left: 15px;\n      transform: rotate(45deg) translate(5px, 5px);\n    }\n  "], ["\n    top: 100%;\n    left: 30%;\n    transform: translateY(10px);\n\n    &:after {\n      bottom: 100%;\n      left: 15px;\n      transform: rotate(45deg) translate(5px, 5px);\n    }\n  "])))
};
var TooltipText = styled.span(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, position = _a.position;
    return css(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n    position: absolute;\n    display: flex;\n    align-items: center;\n    opacity: 0;\n    transition: all 0.3s ease-in-out 0.3s;\n    width: max-content;\n    max-width: 300px;\n    z-index: -2;\n\n    padding: 4px 24px;\n    border-radius: 8px;\n    background-color: ", ";\n\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    line-height: 1.5;\n\n    ", ";\n\n    &:after {\n      content: '';\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      border-radius: 2px;\n      background-color: ", ";\n    }\n  "], ["\n    position: absolute;\n    display: flex;\n    align-items: center;\n    opacity: 0;\n    transition: all 0.3s ease-in-out 0.3s;\n    width: max-content;\n    max-width: 300px;\n    z-index: -2;\n\n    padding: 4px 24px;\n    border-radius: 8px;\n    background-color: ", ";\n\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    line-height: 1.5;\n\n    ", ";\n\n    &:after {\n      content: '';\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      border-radius: 2px;\n      background-color: ", ";\n    }\n  "])), theme.colors.background.cardSection, theme.font.size.md, theme.font.weight.normal, theme.colors.white, position && positions[position], theme.colors.background.cardSection);
});
var templateObject_1$b, templateObject_2$a, templateObject_3$a, templateObject_4$a, templateObject_5$8, templateObject_6$7;

/**
 * Tooltip para exibir textos no evento de hover ou focus de um elemento
 */
var Tooltip = function (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? 'bottom' : _b, text = _a.text, props = __rest(_a, ["children", "position", "text"]);
    var content = null;
    React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            content = React.cloneElement(child, { className: 'Tooltip_Wrapper' }, child.props.children, React.createElement(TooltipText, __assign({ position: position }, props, { className: "Tooltip_Text" }), text));
        }
    });
    return content;
};

var theme = {
    colors: {
        primary: {
            /** #3643fc */
            base: '#3643fc',
            /** #535FFF */
            light: '#535FFF',
            /** #44488B */
            dark: '#44488B'
        },
        secondary: {
            /** #60648B */
            base: '#60648B',
            /** #989BC1 */
            light: '#989BC1',
            /** #45475A */
            dark: '#45475A'
        },
        blueberry: {
            /** #0AA4E7 */
            base: '#0AA4E7',
            /** #4EC1F3 */
            light: '#4EC1F3',
            /** #1766F9 */
            dark: '#1766F9'
        },
        mint: {
            /** #3EEBBE */
            base: '#3EEBBE',
            /** #68FCD6 */
            light: '#68FCD6',
            /** #32D4AA */
            dark: '#32D4AA'
        },
        banana: {
            /** #FEC166 */
            base: '#FEC166',
            /** #FFD9A0 */
            light: '#FFD9A0',
            /** #EEA02B */
            dark: '#EEA02B'
        },
        peach: {
            /** #FF7387 */
            base: '#FF7387',
            /** #FF96A5 */
            light: '#FF96A5',
            /** #EF586E */
            dark: '#EF586E'
        },
        background: {
            /** #28293D */
            primary: '#28293D',
            /** #2D2F45 */
            section: '#2D2F45',
            /** #373951 */
            card: '#373951',
            /** #3E405B */
            cardSection: '#3E405B'
        },
        /** #FFFFFF */
        white: '#FFFFFF',
        /** #ffffffcc */
        white2: '#ffffffcc',
        /** #ffffff19 */
        white3: '#ffffff19',
        /** #000000 */
        black: '#000000',
        /** #0000007f */
        black2: '#0000007f',
        /** #00000019 */
        black3: '#00000019',
        /** #6E719833 */
        disabled: '#6E719833'
    },
    /**
     * Função que recebe uma string de tamanho pre definida ou um número para calcular o valor (valor * 8)
     *
     * xs: 8px | md: 16px | lg: 24px | xl: 32px
     */
    spacing: function (value) {
        switch (value) {
            case 'xs':
                return "".concat(calcSpacing(1), "px");
            case 'md':
                return "".concat(calcSpacing(2), "px");
            case 'lg':
                return "".concat(calcSpacing(3), "px");
            case 'xl':
                return "".concat(calcSpacing(4), "px");
            default:
                return "".concat(calcSpacing(value), "px");
        }
    },
    radius: {
        /** 4px */
        xs: '4px',
        /** 8px */
        sm: '8px',
        /** 12px */
        md: '12px',
        /** 24px */
        lg: '24px'
    },
    font: {
        family: {
            /** "Sora", Roboto, sans-serif */
            heading: '"Sora", Roboto, sans-serif',
            /** "Inter", Roboto, sans-serif */
            base: '"Inter", Roboto, sans-serif'
        },
        weight: {
            /** 400 */
            normal: 400,
            /** 500 */
            medium: 500,
            /** 600 */
            semiBold: 600,
            /** 700 */
            bold: 700
        },
        size: {
            /** 1.2rem (12px) */
            xs: '1.2rem',
            /** 1.4rem (14px) */
            sm: '1.4rem',
            /** 1.6rem (16px) */
            md: '1.6rem',
            /** 2rem (20px) */
            lg: '2rem',
            /** 2.4rem (24px) */
            xl: '2.4rem'
        }
    },
    transitions: {
        /** all 0.2s ease-in-out */
        all: 'all 0.2s ease-in-out'
    },
    breakpoints: {
        /** 0 */
        xs: 0,
        /** 576 */
        sm: 576,
        /** 768 */
        md: 768,
        /** 992 */
        lg: 992,
        /** 1200 */
        xl: 1200,
        /** 1400 */
        xxl: 1400
    }
};
/**
 * Estilo global usado na base do tema
 */
var GlobalStyle = createGlobalStyle(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    outline: 0;\n    padding: 0;\n  }\n\n  html {\n    font-size: 10px;\n  }\n\n  body {\n    font-family: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n\n  .Tooltip_Wrapper {\n    position: relative;\n\n    &:hover,\n    &:focus {\n      .Tooltip_Text {\n        opacity: 1;\n        z-index: 2;\n      }\n    }\n  }\n\n"], ["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    outline: 0;\n    padding: 0;\n  }\n\n  html {\n    font-size: 10px;\n  }\n\n  body {\n    font-family: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n\n  .Tooltip_Wrapper {\n    position: relative;\n\n    &:hover,\n    &:focus {\n      .Tooltip_Text {\n        opacity: 1;\n        z-index: 2;\n      }\n    }\n  }\n\n"])), theme.font.family.base, theme.font.size.md, theme.colors.white2);
var templateObject_1$a;

var Wrapper$8 = styled.div(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, imageBg = _a.imageBg, direction = _a.imageDirection, fullWidth = _a.fullWidth, props = __rest(_a, ["theme", "imageBg", "imageDirection", "fullWidth"]);
    return css(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    border-radius: 24px;\n    width: 100%;\n\n    ", ";\n\n    ", "\n\n    background-color: ", ";\n  "], ["\n    display: flex;\n    justify-content: space-between;\n    border-radius: 24px;\n    width: 100%;\n\n    ", ";\n\n    ", "\n\n    background-color: ", ";\n  "])), setSpacingMargin(props), direction === 'row'
        ? css(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n          flex-direction: row;\n          max-width: ", ";\n\n          ", ",\n          ", " {\n            flex: 1;\n          }\n\n          ", " {\n            max-width: ", ";\n          }\n        "], ["\n          flex-direction: row;\n          max-width: ", ";\n\n          ", ",\n          ", " {\n            flex: 1;\n          }\n\n          ", " {\n            max-width: ", ";\n          }\n        "])), fullWidth ? 'auto' : '800px', BoxImage$1, BoxContent$1, BoxContent$1, fullWidth ? 'auto' : '300px') : css(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n          flex-direction: column;\n          max-width: ", ";\n        "], ["\n          flex-direction: column;\n          max-width: ", ";\n        "])), fullWidth ? 'auto' : '400px'), imageBg || theme.colors.background.card);
});
var Title$2 = styled.h4(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    line-height: 1.2;\n    margin-bottom: ", ";\n  "], ["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    line-height: 1.2;\n    margin-bottom: ", ";\n  "])), theme.font.family.heading, theme.font.size.xl, theme.font.weight.bold, theme.colors.white, theme.spacing('md'));
});
var Content$2 = styled.p(templateObject_9$5 || (templateObject_9$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, mb = _a.mb;
    return css(templateObject_8$5 || (templateObject_8$5 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    line-height: 1.5;\n    width: 100%;\n\n    ", "\n  "], ["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    line-height: 1.5;\n    width: 100%;\n\n    ", "\n  "])), theme.font.family.base, theme.font.size.md, theme.font.weight.medium, theme.colors.white2, mb && css(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["\n      margin-bottom: ", ";\n    "], ["\n      margin-bottom: ", ";\n    "])), theme.spacing('xl')));
});
var BoxContent$1 = styled.div(templateObject_13$2 || (templateObject_13$2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, column = _a.column;
    return css(templateObject_12$4 || (templateObject_12$4 = __makeTemplateObject(["\n    width: 100%;\n    padding: ", ";\n    border-radius: 24px;\n    background-color: ", ";\n\n    display: flex;\n    flex: 1;\n\n    ", ";\n  "], ["\n    width: 100%;\n    padding: ", ";\n    border-radius: 24px;\n    background-color: ", ";\n\n    display: flex;\n    flex: 1;\n\n    ", ";\n  "])), theme.spacing('lg'), theme.colors.background.cardSection, column
        ? css(templateObject_10$5 || (templateObject_10$5 = __makeTemplateObject(["\n          flex-direction: column;\n          align-items: flex-start;\n        "], ["\n          flex-direction: column;\n          align-items: flex-start;\n        "]))) : css(templateObject_11$4 || (templateObject_11$4 = __makeTemplateObject(["\n          justify-content: space-between;\n          align-items: center;\n\n          ", " {\n            margin-bottom: 0;\n          }\n        "], ["\n          justify-content: space-between;\n          align-items: center;\n\n          ", " {\n            margin-bottom: 0;\n          }\n        "])), Title$2));
});
var BoxImage$1 = styled.div(templateObject_14$2 || (templateObject_14$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 24px;\n  overflow: hidden;\n  flex: 1;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 24px;\n  overflow: hidden;\n  flex: 1;\n"])));
var templateObject_1$9, templateObject_2$9, templateObject_3$9, templateObject_4$9, templateObject_5$7, templateObject_6$6, templateObject_7$6, templateObject_8$5, templateObject_9$5, templateObject_10$5, templateObject_11$4, templateObject_12$4, templateObject_13$2, templateObject_14$2;

/**
 * Card para informações e ações
 */
var Card = function (_a) {
    var children = _a.children, _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.image, image = _c === void 0 ? null : _c, _d = _a.button, button = _d === void 0 ? null : _d, _e = _a.imageDirection, imageDirection = _e === void 0 ? 'column' : _e, _f = _a.imageBg, imageBg = _f === void 0 ? theme.colors.background.card : _f, _g = _a.fullWidth, fullWidth = _g === void 0 ? false : _g, props = __rest(_a, ["children", "title", "image", "button", "imageDirection", "imageBg", "fullWidth"]);
    return (React.createElement(Wrapper$8, __assign({ imageBg: imageBg, imageDirection: children && image ? imageDirection : 'column', fullWidth: fullWidth }, props),
        image && React.createElement(BoxImage$1, null, image),
        React.createElement(BoxContent$1, { column: !!children },
            title && React.createElement(Title$2, null, title),
            children && React.createElement(Content$2, { mb: !!button }, children),
            button)));
};

var Wrapper$7 = styled.div(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, open = _a.open, contentHeight = _a.contentHeight, props = __rest(_a, ["theme", "open", "contentHeight"]);
    return css(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n    background-color: ", ";\n    border-radius: 16px;\n    padding: ", ";\n    transition: ", ";\n\n    ", ";\n\n    ", "\n  "], ["\n    background-color: ", ";\n    border-radius: 16px;\n    padding: ", ";\n    transition: ", ";\n\n    ", ";\n\n    ", "\n  "])), theme.colors.black3, theme.spacing('md'), theme.transitions.all, setSpacingMargin(props), open
        ? css(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n          box-shadow: inset 0 0 0 4px ", ";\n\n          ", " {\n            max-height: ", ";\n            padding: ", ";\n            opacity: 1;\n          }\n\n          ", " {\n            transform: rotate(180deg);\n          }\n        "], ["\n          box-shadow: inset 0 0 0 4px ", ";\n\n          ", " {\n            max-height: ", ";\n            padding: ", ";\n            opacity: 1;\n          }\n\n          ", " {\n            transform: rotate(180deg);\n          }\n        "])), theme.colors.white3, Content$1, contentHeight ? "".concat(contentHeight + 32, "px") : 'none', theme.spacing('md'), Icon$4) : css(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n          ", ":hover {\n            background-color: ", ";\n          }\n        "], ["\n          ", ":hover {\n            background-color: ", ";\n          }\n        "])), BoxTitle, theme.colors.white3));
});
var BoxTitle = styled.div(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n    border-radius: 8px;\n    padding: ", ";\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    cursor: pointer;\n  "], ["\n    border-radius: 8px;\n    padding: ", ";\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    cursor: pointer;\n  "])), theme.spacing('md'));
});
var Title$1 = styled.p(templateObject_8$4 || (templateObject_8$4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n  "], ["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n  "])), theme.font.family.base, theme.font.size.md, theme.font.weight.semiBold, theme.colors.white);
});
var Icon$4 = styled.i(templateObject_10$4 || (templateObject_10$4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_9$4 || (templateObject_9$4 = __makeTemplateObject(["\n    width: 24px;\n    height: 24px;\n    color: ", ";\n    transition: ", ";\n  "], ["\n    width: 24px;\n    height: 24px;\n    color: ", ";\n    transition: ", ";\n  "])), theme.colors.white, theme.transitions.all);
});
var Content$1 = styled.div(templateObject_12$3 || (templateObject_12$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_11$3 || (templateObject_11$3 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n\n    max-height: 0;\n    padding: 0 16px;\n    opacity: 0;\n    overflow: hidden;\n    transition: ", ";\n  "], ["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n\n    max-height: 0;\n    padding: 0 16px;\n    opacity: 0;\n    overflow: hidden;\n    transition: ", ";\n  "])), theme.font.family.base, theme.font.size.md, theme.font.weight.medium, theme.colors.white, theme.transitions.all);
});
var templateObject_1$8, templateObject_2$8, templateObject_3$8, templateObject_4$8, templateObject_5$6, templateObject_6$5, templateObject_7$5, templateObject_8$4, templateObject_9$4, templateObject_10$4, templateObject_11$3, templateObject_12$3;

/**
 * Collapse para exibir/ocultar conteúdo
 */
var Collapse = function (_a) {
    var _b;
    var children = _a.children, title = _a.title, open = _a.open, toggleOpen = _a.toggleOpen, props = __rest(_a, ["children", "title", "open", "toggleOpen"]);
    var content = useRef(null);
    return (React.createElement(Wrapper$7, __assign({ open: open, contentHeight: (_b = content.current) === null || _b === void 0 ? void 0 : _b.scrollHeight }, props),
        React.createElement(BoxTitle, { onClick: function () { return toggleOpen && toggleOpen(open); } },
            React.createElement(Title$1, null, title),
            React.createElement(Icon$4, null,
                React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M15.875 8.99999L11.995 12.88L8.11498 8.99999C7.72498 8.60999 7.09498 8.60999 6.70498 8.99999C6.31498 9.38999 6.31498 10.02 6.70498 10.41L11.295 15C11.685 15.39 12.315 15.39 12.705 15L17.295 10.41C17.685 10.02 17.685 9.38999 17.295 8.99999C16.905 8.61999 16.265 8.60999 15.875 8.99999Z", fill: "currentColor" })))),
        React.createElement(Content$1, { ref: content }, children)));
};

var Wrapper$6 = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, listHeight = _a.listHeight, open = _a.open, props = __rest(_a, ["theme", "listHeight", "open"]);
    return css(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n    border-radius: 8px;\n    position: relative;\n    z-index: 1;\n\n    ", ";\n\n    ", "\n  "], ["\n    border-radius: 8px;\n    position: relative;\n    z-index: 1;\n\n    ", ";\n\n    ", "\n  "])), setSpacingMargin(props), open && css(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n      z-index: 2;\n\n      ", " {\n        background-color: ", ";\n      }\n\n      ", " {\n        max-height: ", ";\n        padding-top: 10px;\n      }\n\n      ", " {\n        transform: rotate(180deg);\n      }\n    "], ["\n      z-index: 2;\n\n      ", " {\n        background-color: ", ";\n      }\n\n      ", " {\n        max-height: ", ";\n        padding-top: 10px;\n      }\n\n      ", " {\n        transform: rotate(180deg);\n      }\n    "])), BoxSelected, theme.colors.background.cardSection, List, listHeight ? "".concat(listHeight + 10, "px") : 'none', Icon$3));
});
var List = styled.ul(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n    border-radius: 0 0 8px 8px;\n    list-style: none;\n    max-height: 0;\n    overflow: hidden;\n    transition: ", ";\n    width: 100%;\n    margin-top: -10px;\n    background-color: ", ";\n    z-index: -1;\n\n    position: absolute;\n    top: 100%;\n    left: 0;\n  "], ["\n    border-radius: 0 0 8px 8px;\n    list-style: none;\n    max-height: 0;\n    overflow: hidden;\n    transition: ", ";\n    width: 100%;\n    margin-top: -10px;\n    background-color: ", ";\n    z-index: -1;\n\n    position: absolute;\n    top: 100%;\n    left: 0;\n  "])), theme.transitions.all, theme.colors.background.card);
});
var Option = styled.li(templateObject_9$3 || (templateObject_9$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return css(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n    padding: 16px 20px;\n    border-radius: 8px;\n    cursor: pointer;\n\n    ", "\n\n    &.selected {\n      background-color: ", ";\n    }\n  "], ["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n    padding: 16px 20px;\n    border-radius: 8px;\n    cursor: pointer;\n\n    ", "\n\n    &.selected {\n      background-color: ", ";\n    }\n  "])), theme.font.family.base, theme.font.size.md, theme.font.weight.semiBold, theme.colors.white, disabled
        ? css(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n          color: ", ";\n          cursor: initial;\n        "], ["\n          color: ", ";\n          cursor: initial;\n        "])), theme.colors.white3) : css(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n          &:hover {\n            background-color: ", ";\n          }\n        "], ["\n          &:hover {\n            background-color: ", ";\n          }\n        "])), theme.colors.background.cardSection), theme.colors.background.cardSection);
});
var BoxSelected = styled.div(templateObject_11$2 || (templateObject_11$2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_10$3 || (templateObject_10$3 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 20px;\n    min-height: 56px;\n    cursor: pointer;\n    border-radius: 8px;\n    z-index: 1;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "], ["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 20px;\n    min-height: 56px;\n    cursor: pointer;\n    border-radius: 8px;\n    z-index: 1;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "])), theme.colors.background.cardSection);
});
var Selected = styled.p(templateObject_13$1 || (templateObject_13$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, empty = _a.empty;
    return css(templateObject_12$2 || (templateObject_12$2 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n  "], ["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n  "])), theme.font.family.base, theme.font.size.md, theme.font.weight.semiBold, empty ? theme.colors.white3 : theme.colors.white);
});
var ContentSelectedMulti = styled.div(templateObject_15$1 || (templateObject_15$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_14$1 || (templateObject_14$1 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: ", ";\n    cursor: pointer;\n    border-radius: 8px;\n    z-index: 1;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "], ["\n    display: flex;\n    align-items: center;\n    gap: ", ";\n    cursor: pointer;\n    border-radius: 8px;\n    z-index: 1;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "])), theme.spacing('xs'), theme.colors.background.cardSection);
});
styled.p(templateObject_17$1 || (templateObject_17$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_16$1 || (templateObject_16$1 = __makeTemplateObject(["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n\n    background-color: ", ";\n  "], ["\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: 1.5;\n    color: ", ";\n\n    background-color: ", ";\n  "])), theme.font.family.base, theme.font.size.md, theme.font.weight.semiBold, theme.colors.white, theme.colors.white2);
});
var Icon$3 = styled.i(templateObject_19$1 || (templateObject_19$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_18$1 || (templateObject_18$1 = __makeTemplateObject(["\n    width: 24px;\n    height: 24px;\n    color: ", ";\n    transition: ", ";\n  "], ["\n    width: 24px;\n    height: 24px;\n    color: ", ";\n    transition: ", ";\n  "])), theme.colors.white, theme.transitions.all);
});
var templateObject_1$7, templateObject_2$7, templateObject_3$7, templateObject_4$7, templateObject_5$5, templateObject_6$4, templateObject_7$4, templateObject_8$3, templateObject_9$3, templateObject_10$3, templateObject_11$2, templateObject_12$2, templateObject_13$1, templateObject_14$1, templateObject_15$1, templateObject_16$1, templateObject_17$1, templateObject_18$1, templateObject_19$1;

/**
 * Select para lista de opções
 */
var Select = function (_a) {
    var _b;
    var _c = _a.options, options = _c === void 0 ? [] : _c, _d = _a.multi, multi = _d === void 0 ? false : _d, _e = _a.optionSelected, optionSelected = _e === void 0 ? false : _e, value = _a.value, onChange = _a.onChange, _f = _a.placeholder, placeholder = _f === void 0 ? 'Selecione...' : _f, _g = _a.emptyOptionsText, emptyOptionsText = _g === void 0 ? 'Nenhuma opção' : _g, getOptionLabel = _a.getOptionLabel, props = __rest(_a, ["options", "multi", "optionSelected", "value", "onChange", "placeholder", "emptyOptionsText", "getOptionLabel"]);
    var listRef = useRef(null);
    var wrapperRef = useRef(null);
    var _h = useState(false), open = _h[0], setOpen = _h[1];
    var handleClickOutside = function (e) {
        var _a;
        if (!((_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
            setOpen(false);
        }
    };
    var setLabel = function (value) {
        return getOptionLabel ? getOptionLabel(value) : value;
    };
    var emptyValue = function (value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        }
        if (typeof value === 'object') {
            return Object.keys(value).length === 0;
        }
        return !value;
    };
    var selectedOption = function (option) {
        if (emptyValue(value)) {
            return false;
        }
        if (Array.isArray(value)) {
            return !!value.find(function (currentValue) {
                return JSON.stringify(currentValue) === JSON.stringify(option);
            });
        }
        return JSON.stringify(value) === JSON.stringify(option);
    };
    var removeOption = function (option) {
        if (Array.isArray(value)) {
            var newValue = value.filter(function (currentValue) {
                return JSON.stringify(currentValue) !== JSON.stringify(option);
            });
            onChange && onChange(newValue);
        }
    };
    useEffect(function () {
        if (open) {
            window.addEventListener('click', handleClickOutside, { once: true });
        }
        else {
            window.removeEventListener('click', handleClickOutside);
        }
    }, [open]);
    return (React.createElement(Wrapper$6, __assign({ open: open, ref: wrapperRef, listHeight: (_b = listRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight, onClick: function () { return setOpen(!open); } }, props),
        React.createElement(BoxSelected, null,
            multi && Array.isArray(value) ? (value.length > 0 ? (React.createElement(ContentSelectedMulti, null, value.map(function (option, index) { return (React.createElement(Chip, { key: index, size: "small", close: function () { return removeOption(option); } }, setLabel(option))); }))) : (React.createElement(Selected, { empty: true }, placeholder))) : (React.createElement(Selected, { empty: emptyValue(value) }, value ? setLabel(value) : placeholder)),
            React.createElement(Icon$3, null,
                React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M15.875 8.99999L11.995 12.88L8.11498 8.99999C7.72498 8.60999 7.09498 8.60999 6.70498 8.99999C6.31498 9.38999 6.31498 10.02 6.70498 10.41L11.295 15C11.685 15.39 12.315 15.39 12.705 15L17.295 10.41C17.685 10.02 17.685 9.38999 17.295 8.99999C16.905 8.61999 16.265 8.60999 15.875 8.99999Z", fill: "currentColor" })))),
        React.createElement(List, { ref: listRef }, options.length > 0 ? (options
            .filter(function (option) {
            if (optionSelected || emptyValue(value)) {
                return true;
            }
            return !selectedOption(option);
        })
            .map(function (option, index) { return (React.createElement(Option, { key: index, className: selectedOption(option) ? 'selected' : '', onClick: function () {
                if (onChange) {
                    if (multi && Array.isArray(value)) {
                        onChange(__spreadArray(__spreadArray([], value, true), [option], false));
                    }
                    else {
                        onChange(option);
                    }
                }
            } }, setLabel(option))); })) : (React.createElement(Option, { disabled: true }, emptyOptionsText)))));
};

var Wrapper$5 = styled.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, over = _a.over, added = _a.added, props = __rest(_a, ["theme", "over", "added"]);
    return css(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    border-radius: 24px;\n    padding: ", ";\n    border: 4px dashed ", ";\n    min-width: 260px;\n    min-height: 260px;\n    cursor: pointer;\n    position: relative;\n    transition: ", ";\n\n    ", ";\n\n    ", "\n\n    ", "\n  "], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    border-radius: 24px;\n    padding: ", ";\n    border: 4px dashed ", ";\n    min-width: 260px;\n    min-height: 260px;\n    cursor: pointer;\n    position: relative;\n    transition: ", ";\n\n    ", ";\n\n    ", "\n\n    ", "\n  "])), theme.spacing('xs'), theme.colors.white3, theme.transitions.all, setSpacingMargin(props), (over || added) && css(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), theme.colors.mint.base), added && css(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n      cursor: initial;\n\n      ", " {\n        color: ", ";\n      }\n\n      ", ":hover {\n        box-shadow: inset 0 0 0 4px ", ";\n      }\n    "], ["\n      cursor: initial;\n\n      ", " {\n        color: ", ";\n      }\n\n      ", ":hover {\n        box-shadow: inset 0 0 0 4px ", ";\n      }\n    "])), Description, theme.colors.mint.base, IconDelete, theme.colors.white3));
});
var Description = styled.p(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    color: ", ";\n    text-align: center;\n    margin-bottom: ", ";\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    color: ", ";\n    text-align: center;\n    margin-bottom: ", ";\n  "])), theme.font.family.base, theme.font.weight.bold, theme.font.size.md, theme.colors.white, theme.spacing('xs'));
});
var Sub = styled.p(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    color: ", ";\n\n    .ellipsis {\n      display: block;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      max-width: 50%;\n    }\n  "], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    color: ", ";\n\n    .ellipsis {\n      display: block;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      max-width: 50%;\n    }\n  "])), theme.font.family.base, theme.font.weight.medium, theme.font.size.md, theme.colors.white2);
});
var IconDelete = styled.i(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    cursor: pointer;\n\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n\n    color: ", ";\n    transition: ", ";\n  "], ["\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    cursor: pointer;\n\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n\n    color: ", ";\n    transition: ", ";\n  "])), theme.colors.white, theme.transitions.all);
});
var Icon$2 = styled.i(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n    width: 24px;\n    height: 24px;\n    color: ", ";\n    margin-right: 4px;\n  "], ["\n    width: 24px;\n    height: 24px;\n    color: ", ";\n    margin-right: 4px;\n  "])), theme.colors.white2);
});
var templateObject_1$6, templateObject_2$6, templateObject_3$6, templateObject_4$6, templateObject_5$4, templateObject_6$3, templateObject_7$3, templateObject_8$2, templateObject_9$2, templateObject_10$2, templateObject_11$1, templateObject_12$1;

/**
 * Espaço para fazer upload de arquivos
 */
var FileInput = function (_a) {
    var description = _a.description, sub = _a.sub, onAdd = _a.onAdd, props = __rest(_a, ["description", "sub", "onAdd"]);
    var _b = useState(false), isOver = _b[0], setIsOver = _b[1];
    var _c = useState(null), added = _c[0], setAdded = _c[1];
    var inputFile = useRef(null);
    var handleDragOver = function (event) {
        event.preventDefault();
        setIsOver(true);
    };
    var handleDragLeave = function () { return setIsOver(false); };
    var handleDrop = function (event) {
        event.preventDefault();
        setIsOver(false);
        setAdded(event.dataTransfer.files);
        onAdd(event.dataTransfer.files);
        if (inputFile.current) {
            inputFile.current.files = event.dataTransfer.files;
        }
    };
    var handleChange = function (event) {
        setIsOver(false);
        setAdded(event.target.files);
        onAdd(event.target.files);
    };
    var handleDelete = function () {
        setIsOver(false);
        setAdded(null);
        onAdd(null);
        if (inputFile.current) {
            inputFile.current.value = '';
            inputFile.current.files = null;
        }
    };
    var fileName = added ? added[0].name.split('.') : [''];
    return (React.createElement(Wrapper$5, __assign({ added: !!added, over: isOver, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, onClick: function () { var _a; return !added && ((_a = inputFile.current) === null || _a === void 0 ? void 0 : _a.click()); } }, getPropsMargin(props)),
        React.createElement("input", __assign({}, props, { type: "file", hidden: true, ref: inputFile, onChange: handleChange })),
        added ? (React.createElement(React.Fragment, null,
            React.createElement(IconDelete, { onClick: handleDelete },
                React.createElement("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z", fill: "currentColor", fillOpacity: "0.1" }),
                    React.createElement("path", { d: "M23.9978 13.9533C22.8928 13.9533 21.9978 14.8483 21.9978 15.9533H16.9978C16.4458 15.9533 15.9978 16.4013 15.9978 16.9533C15.9978 17.5053 16.4458 17.9533 16.9978 17.9533H30.9978C31.5498 17.9533 31.9978 17.5053 31.9978 16.9533C31.9978 16.4013 31.5498 15.9533 30.9978 15.9533H25.9978C25.9978 14.8483 25.1028 13.9533 23.9978 13.9533ZM16.9978 19.9532V29.9532C16.9978 32.1432 18.8028 33.9222 20.9978 33.9222L27.0288 33.9532C29.2238 33.9532 30.9978 32.1482 30.9978 29.9532V19.9532H16.9978ZM21.9978 22.9532C22.5498 22.9532 22.9978 23.4012 22.9978 23.9532V29.9532C22.9978 30.5052 22.5498 30.9532 21.9978 30.9532C21.4458 30.9532 20.9978 30.5052 20.9978 29.9532V23.9532C20.9978 23.4012 21.4458 22.9532 21.9978 22.9532ZM25.9978 22.9532C26.5498 22.9532 26.9978 23.4012 26.9978 23.9532V29.9532C26.9978 30.5052 26.5498 30.9532 25.9978 30.9532C25.4458 30.9532 24.9978 30.5052 24.9978 29.9532V23.9532C24.9978 23.4012 25.4458 22.9532 25.9978 22.9532Z", fill: "currentColor" }))),
            React.createElement("svg", { fill: "none", width: "200", height: "160", viewBox: "0 0 200 135", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M100.119 123.983c32.322 0 58.525-26.204 58.525-58.641s-26.319-58.64-58.525-58.64c-32.322 0-58.525 26.203-58.525 58.64s26.203 58.641 58.525 58.641ZM166.074 46.762a4.733 4.733 0 1 0 0-9.466 4.733 4.733 0 0 0 0 9.466ZM173 28.293a3.232 3.232 0 1 0 0-6.464 3.232 3.232 0 0 0 0 6.464ZM44.249 26.902a3.232 3.232 0 1 0 0-6.464 3.232 3.232 0 0 0 0 6.464ZM24.51 89.237a6.003 6.003 0 1 0 0-12.005 6.003 6.003 0 0 0 0 12.005Z", fill: "#373951" }),
                React.createElement("g", { filter: "url(#a)" },
                    React.createElement("path", { d: "m84.066 96.64-46.39 9.516c-.678.106-1.3-.247-1.406-.925L22.124 35.982c-.105-.678.247-1.3.925-1.405l46.39-9.517c.678-.105 1.3.247 1.405.925l14.223 69.246c.101.603-.323 1.304-1.001 1.409Z", fill: "#5C6479" })),
                React.createElement("path", { d: "m34.89 69.368 18.15-3.73M58.451 64.542l3.986-.819M67.278 62.724l3.986-.819M35.892 74.28l18.151-3.73M59.45 69.382l3.99-.747M68.209 67.639l3.986-.819M36.891 79.12l18.151-3.73M60.453 74.294l3.986-.819M69.208 72.479l3.986-.819M37.89 83.96l18.155-3.658M40.708 97.626l5.124-1.083M39.98 94.067l9.113-1.83M67.98 90.558l9.04-1.828M61.453 79.134l3.986-.819M70.21 77.391l3.987-.819", stroke: "#474E61", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement("path", { d: "M41.023 43.026c-1.563.33-2.653 1.663-2.833 3.29-.056.357.201.648.542.715.34.066.61-.198.666-.555.104-1.058.889-1.982 1.89-2.193 1-.21 2.076.254 2.611 1.247.195.304.55.437.834.239.285-.198.403-.568.208-.873-.834-1.482-2.355-2.198-3.918-1.87ZM55.365 40.01c-1.563.329-2.653 1.663-2.833 3.29-.056.357.202.648.542.715.34.066.611-.198.666-.555.104-1.058.89-1.983 1.89-2.193 1-.21 2.076.254 2.611 1.247.195.304.55.437.834.239.285-.198.403-.569.208-.873-.834-1.482-2.355-2.198-3.918-1.87ZM45.838 48.45l.904-.196c1.128 1.5 3.28 1.687 4.696.504.565-.414 1-1.092 1.141-1.778l.903-.197c-.294 2.321-2.553 3.979-4.82 3.6a4.277 4.277 0 0 1-2.824-1.932Z", fill: "#989FB0" }),
                React.createElement("circle", { opacity: ".4", cx: "60.377", cy: "48.584", r: "2.443", transform: "rotate(-11.876 60.377 48.584)", fill: "#474E61" }),
                React.createElement("circle", { opacity: ".4", cx: "39.888", cy: "52.893", r: "2.443", transform: "rotate(-11.876 39.888 52.893)", fill: "#474E61" }),
                React.createElement("g", { filter: "url(#b)" },
                    React.createElement("path", { d: "m128.239 116.297-51.18 2.997c-.738.077-1.308-.501-1.384-1.239l-4.458-76.278c-.077-.738.501-1.308 1.24-1.385l51.179-2.997c.739-.076 1.309.502 1.385 1.24l4.458 76.278c-.005.737-.501 1.308-1.24 1.384Z", fill: "#5C6479" })),
                React.createElement("path", { d: "m93.653 81.409 24.579-1.435M93.405 76.927l24.509-1.435M93.901 85.89l24.579-1.434M82.665 90.99l36.064-2.123M82.913 95.472l20.618-1.253M83.8 110.447l5.113-.313M83.616 106.946l9.033-.565M110.716 105.319l8.963-.496", stroke: "#474E61", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement("path", { d: "M90.181 86.844c-.07 0-.14 0-.14-.07l-1.17-2.53-4.409.251-.86 2.655a.15.15 0 0 1-.14.14l-.91.063c-.07 0-.14 0-.14-.07-.07-.071-.07-.071.001-.14l3.151-9.573c0-.07.071-.14.141-.14l1.26-.06c.07 0 .14 0 .14.07l4.267 9.132v.14c-.001.07-.071.07-.141.07l-1.05.062Zm-5.43-3.537 3.57-.187-2.065-4.565-1.505 4.752Z", fill: "#474E61" }),
                React.createElement("path", { d: "M107.416 54.39c1.074-.069 1.936-1.048 1.867-2.122-.068-1.074-1.048-1.936-2.122-1.867-1.074.068-1.935 1.047-1.867 2.121.074 1.151.971 1.941 2.122 1.867ZM91.903 55.404c1.074-.069 1.936-1.048 1.867-2.122-.068-1.074-1.047-1.936-2.121-1.867-1.074.069-1.936 1.048-1.868 2.122.15 1.146 1.048 1.936 2.122 1.867ZM96.479 58.988c.188 1.774 1.663 3.109 3.373 3.013 1.709-.097 3.025-1.59 3.012-3.373l-6.385.36Z", fill: "#989FB0" }),
                React.createElement("circle", { opacity: ".4", cx: "111.544", cy: "61.097", r: "2.642", transform: "rotate(-3.225 111.544 61.097)", fill: "#474E61" }),
                React.createElement("circle", { opacity: ".4", cx: "88.93", cy: "62.371", r: "2.642", transform: "rotate(-3.225 88.93 62.371)", fill: "#474E61" }),
                React.createElement("g", { filter: "url(#c)" },
                    React.createElement("path", { d: "M179.543 82.758 133.63 94.249c-.662.182-1.309-.213-1.49-.875l-17.146-68.539c-.182-.661.213-1.308.875-1.49l45.913-11.49c.662-.183 1.308.213 1.49.874l17.146 68.54c.182.66-.213 1.307-.875 1.489Z", fill: "#5C6479" })),
                React.createElement("path", { d: "m127.233 52.617 5.691 22.708 37.153-9.31-5.691-22.71-37.153 9.312ZM135.54 85.566l5.23-1.283M134.584 81.96l9.277-2.335M163.332 77.064l9.277-2.335M136.311 50.418l5.678 22.697M145.794 48.002l5.747 22.669M155.374 45.627l5.678 22.696M128.715 58.382l37.107-9.336M130.094 64.053l37.134-9.268M131.568 69.765l37.107-9.337", stroke: "#474E61", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" }),
                React.createElement("path", { d: "M134.142 28.48c-1.862.451-3.122 2.091-3.28 4.048-.053.43.266.77.676.838.411.068.726-.259.78-.689.087-1.273.994-2.41 2.187-2.698 1.192-.288 2.5.23 3.177 1.401.245.358.675.505 1.009.257.334-.248.463-.696.218-1.054-1.053-1.748-2.904-2.552-4.767-2.102ZM146.692 25.447c-1.707.413-2.837 2.02-2.945 3.966a.787.787 0 0 0 .639.847c.379.075.664-.244.705-.671.056-1.265.87-2.38 1.963-2.644 1.093-.265 2.308.276 2.955 1.455.231.361.63.515.934.275a.787.787 0 0 0 .181-1.045c-1.004-1.76-2.724-2.596-4.432-2.183ZM144.042 39.73a2.093 2.093 0 1 0-.983-4.07 2.093 2.093 0 0 0 .983 4.07Z", fill: "#989FB0" }),
                React.createElement("defs", null,
                    React.createElement("filter", { id: "a", x: ".105", y: "14.042", width: "106.976", height: "125.133", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                        React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                        React.createElement("feOffset", { dy: "11" }),
                        React.createElement("feGaussianBlur", { stdDeviation: "11" }),
                        React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" }),
                        React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_1964_6648" }),
                        React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_1964_6648", result: "shape" })),
                    React.createElement("filter", { id: "b", x: "49.21", y: "26.389", width: "102.269", height: "125.912", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                        React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                        React.createElement("feOffset", { dy: "11" }),
                        React.createElement("feGaussianBlur", { stdDeviation: "11" }),
                        React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" }),
                        React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_1964_6648" }),
                        React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_1964_6648", result: "shape" })),
                    React.createElement("filter", { id: "c", x: "92.949", y: ".81", width: "109.513", height: "126.484", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                        React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                        React.createElement("feOffset", { dy: "11" }),
                        React.createElement("feGaussianBlur", { stdDeviation: "11" }),
                        React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" }),
                        React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_1964_6648" }),
                        React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_1964_6648", result: "shape" })))))) : (React.createElement("svg", { fill: "none", width: "200", height: "160", viewBox: "0 0 220 170", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("g", { filter: "url(#a)" },
                React.createElement("path", { d: "m124.279 47.762-18.036 23.324c-.566.85-1.7.944-2.549.283L81.22 53.711c-.85-.567-.945-1.7-.284-2.55l23.419-29.745c.566-.85 1.699-.944 2.549-.283l16.336 12.842 1.039 13.787Z", fill: "#5C6479" })),
            React.createElement("path", { d: "m116.63 36.525-10.859-8.498c-.189-.19-.283-.473-.094-.85.188-.19.472-.284.849-.095l10.86 8.499c.189.189.283.472.094.85-.283.283-.566.283-.85.094ZM107.943 33.881l-4.061-3.305c-.188-.189-.283-.472-.094-.85.189-.283.472-.283.85-.094l4.06 3.305c.189.189.284.472.095.85-.284.283-.661.283-.85.094ZM123.24 33.976l-5.005 6.326c-.755.945-.472 2.267.378 2.928l5.76 4.532M117.291 49.179l-5.665-4.344-5.855-4.627-5.382-4.25c-.567-.471-1.511-.377-1.983.284l-7.744 9.82c-.472.567-.377 1.511.19 1.983l16.996 13.41c.567.471 1.511.377 1.983-.284l7.744-9.82c.472-.85.377-1.606-.284-2.172Zm-17.941-.095 1.7-2.266 5.193 4.06-1.7 2.267-5.193-4.06Zm4.721 4.722-1.605 2.077-5.194-4.06 1.606-2.078 5.193 4.06Zm4.438-5.76-1.699 2.266-5.194-4.06 1.7-2.267 5.193 4.06Zm-4.721-4.722 1.889-2.266 5.193 4.06-1.7 2.267-5.382-4.06Zm9.443 11.992-5.76-4.532 1.699-2.266 5.761 4.532-1.7 2.267Zm-12.276-9.631-5.571-4.344 1.7-2.266 5.571 4.343-1.7 2.267Zm-6.138-3.683 5.572 4.344-1.7 2.266-5.571-4.344 1.7-2.266ZM107 51.445l5.76 4.532-1.7 2.267-5.76-4.533 1.7-2.266Zm9.915-.755-1.417 1.794-5.76-4.533 1.7-2.266 5.288 4.155c.377.188.377.566.189.85ZM99.822 36.43l5.099 4.061-1.7 2.267-5.57-4.344 1.416-1.794c.188-.284.566-.284.755-.19Zm-8.499 10.01 1.228-1.51 5.571 4.343-1.605 2.077-5.194-4.06c-.188-.189-.188-.66 0-.85Zm17.092 14.07-5.288-4.155 1.605-2.077 5.76 4.532-1.322 1.606c-.188.377-.566.377-.755.094Z", fill: "#2E3746" }),
            React.createElement("path", { d: "M168.232 62.663H66.527c-2.092 0-3.922 1.83-3.922 3.923v65.646c0 2.092 1.83 1.308 3.922 1.308H167.97c2.091 0 3.922.784 3.922-1.308V66.586c.261-2.093-1.569-3.923-3.661-3.923Z", fill: "#262A31" }),
            React.createElement("path", { d: "M164.814 66.478h-94.65c-1.946 0-3.65 1.639-3.65 3.512v58.769c0 1.873 1.704 1.17 3.65 1.17h94.407c1.947 0 3.65.703 3.65-1.17v-58.77c.243-1.873-1.46-3.511-3.407-3.511Z", fill: "#474E61" }),
            React.createElement("path", { d: "M187.318 129.878v2.092c0 2.354-2.091 4.446-4.444 4.446H51.885c-2.353 0-4.445-2.092-4.445-4.446v-2.092h139.878Z", fill: "#353B4A" }),
            React.createElement("path", { d: "M129.537 129.878v.785c0 1.307-1.046 2.615-2.615 2.615h-19.347c-1.307 0-2.615-1.046-2.615-2.615v-.785h24.577Z", fill: "#262A31" }),
            React.createElement("path", { d: "M127.707 96.924h-8.628v-8.63c0-1.046-.784-1.831-1.83-1.831s-1.83.785-1.83 1.83v8.631h-8.628c-1.046 0-1.831.785-1.831 1.831 0 1.046.785 1.831 1.831 1.831h8.628v8.631c0 1.046.784 1.831 1.83 1.831s1.83-.785 1.83-1.831v-8.631h8.628c1.046 0 1.83-.785 1.83-1.83 0-1.047-.784-1.832-1.83-1.832Z", fill: "#8E96AB" }),
            React.createElement("g", { filter: "url(#b)" },
                React.createElement("path", { d: "m187.064 96.016-28.924 15.657a3.441 3.441 0 0 1-4.66-1.385l-14.948-27.696a3.45 3.45 0 0 1 1.386-4.665l28.923-15.657a3.442 3.442 0 0 1 4.66 1.385l14.967 27.698a3.45 3.45 0 0 1-1.404 4.663Z", fill: "url(#c)" })),
            React.createElement("path", { d: "M183.225 92.735 157.794 106.5c-.712.393-1.605.116-1.997-.596l-12.359-22.901c-.392-.713-.115-1.607.597-2l25.431-13.765c.712-.392 1.605-.116 1.997.597l12.358 22.901c.392.713.116 1.606-.596 2Z", fill: "#5B6379" }),
            React.createElement("path", { d: "m166.339 90.673-9.285 5.023 1.791-7.767 7.494 2.744Z", fill: "#474E61" }),
            React.createElement("path", { d: "m174.015 86.513-13.365 7.243 2.585-11.18 10.78 3.937Z", fill: "#2E3746" }),
            React.createElement("path", { d: "M155.507 86.848a1.993 1.993 0 1 0 .44-3.963 1.993 1.993 0 0 0-.44 3.963Z", fill: "#474E61" }),
            React.createElement("g", { filter: "url(#d)" },
                React.createElement("path", { d: "m190.234 101.979-32.884.65a3.44 3.44 0 0 1-3.505-3.368l-.583-31.466a3.45 3.45 0 0 1 3.37-3.51l32.884-.651a3.441 3.441 0 0 1 3.505 3.368l.599 31.477a3.451 3.451 0 0 1-3.386 3.5Z", fill: "url(#e)" })),
            React.createElement("path", { d: "m188.327 97.302-28.912.57c-.813.023-1.479-.632-1.501-1.445l-.48-26.019c-.022-.813.634-1.48 1.446-1.503l28.912-.57c.813-.023 1.479.633 1.501 1.446l.481 26.018c.021.813-.634 1.48-1.447 1.503Z", fill: "#5B6379" }),
            React.createElement("path", { d: "m174.267 87.727-10.555.206 5.153-6.082 5.402 5.876Z", fill: "#354156" }),
            React.createElement("path", { d: "m182.996 87.55-15.199.308 7.424-8.75 7.775 8.443Z", fill: "#2E3746" }),
            React.createElement("path", { d: "M166.395 79.36c.915.61 2.153.361 2.763-.556a1.993 1.993 0 1 0-2.763.556Z", fill: "#354156" }),
            React.createElement("path", { d: "m190.569 103.147-6.975 2.151 5.555 8.216-4.527 3.061-5.555-8.216-4.594 5.672-3.97-23.215 20.066 12.331Z", fill: "#8E96AB" }),
            React.createElement("g", { filter: "url(#f)" },
                React.createElement("path", { d: "m52.39 67.95 17.7 19.785c.595.685.412 1.789-.373 2.491l-22.418 20.049c-.785.703-1.914.717-2.482.064l-22.39-25.767c-.595-.684-.412-1.788.373-2.49l16.242-14.526 13.348.394Z", fill: "#5C6479" })),
            React.createElement("path", { d: "m38.247 66.695 5.085 6.006c.714.844 2.028.89 2.872.176l5.33-4.514", fill: "#2E3746" }),
            React.createElement("g", { clipPath: "url(#g)", fill: "#2E3746" },
                React.createElement("path", { d: "m33.407 71.317-1.297 1.097.755.891 1.296-1.097-.755-.891ZM35.47 71.1l-1.296 1.097.754.891 1.297-1.097-.755-.891ZM34.905 73.086l-1.297 1.098.755.891 1.296-1.097-.754-.892ZM36.968 72.87l-1.296 1.097.754.891 1.297-1.098-.755-.89ZM36.414 74.869l-1.297 1.097.755.892 1.296-1.098-.754-.891ZM38.477 74.652l-1.296 1.097.754.891 1.297-1.097-.755-.891ZM37.912 76.638l-1.296 1.098.754.891 1.297-1.097-.755-.892ZM39.976 76.421l-1.297 1.098.755.891 1.296-1.097-.754-.892ZM39.421 78.42l-1.296 1.098.754.892 1.297-1.098-.755-.891ZM41.485 78.204 40.188 79.3l.755.891 1.296-1.097-.754-.891ZM40.92 80.19l-1.297 1.098.755.891 1.296-1.097-.754-.891ZM42.983 79.974l-1.296 1.097.754.891 1.297-1.097-.755-.891ZM42.429 81.973l-1.297 1.097.755.892 1.296-1.098-.754-.891ZM44.481 81.743l-1.296 1.098.755.891 1.296-1.098-.755-.89ZM43.927 83.743 42.63 84.84l.755.891 1.296-1.097-.754-.891ZM45.99 83.526l-1.296 1.097.755.891 1.296-1.097-.755-.891ZM44.14 86.623l3.527 4.167 2.606-2.206-3.528-4.167-2.605 2.206Zm5.413 1.902-1.825 1.545-1.02-1.205 1.825-1.545 1.02 1.205ZM50.026 99.778l-.064-2.144c.008-.373.008-.653.027-1.014l-.01-.013-1.423 1.205-.67-.791 2.656-2.249.51.603.062 2.038c.004.362.01.702-.03 1.037l.011.013 1.561-1.322.68.804-2.832 2.398-.478-.565ZM51.665 92.27c.234.276.211.683-.116.96-.315.267-.72.222-.954-.054-.257-.278-.234-.685.093-.962.338-.265.733-.233.977.056Zm2.464 5.004-2.73-3.226 1.006-.853 2.731 3.226-1.007.852ZM54.125 93.593c-.362-.427-.682-.78-.94-1.059l.869-.735.433.41.012-.011c-.047-.542.158-1.039.637-1.444.704-.597 1.867-.525 2.739.504.998 1.18.723 2.361-.007 2.979-.39.33-.83.423-1.151.35l-.013.01 1.36 1.607-1.006.853-2.933-3.464Zm1.655-.087c.063.075.14.14.206.192a.794.794 0 0 0 .995-.024c.44-.373.384-.95-.084-1.503-.435-.514-.991-.711-1.444-.328-.29.245-.36.672-.169 1.026.03.061.07.135.124.197l.372.44Z" })),
            React.createElement("defs", null,
                React.createElement("filter", { id: "a", x: "58.503", y: "9.699", width: "87.776", height: "95.103", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                    React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                    React.createElement("feOffset", { dy: "11" }),
                    React.createElement("feGaussianBlur", { stdDeviation: "11" }),
                    React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" }),
                    React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_2326_10201" }),
                    React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_2326_10201", result: "shape" })),
                React.createElement("filter", { id: "b", x: "116.12", y: "50.857", width: "94.755", height: "94.229", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                    React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                    React.createElement("feOffset", { dy: "11" }),
                    React.createElement("feGaussianBlur", { stdDeviation: "11" }),
                    React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" }),
                    React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_2326_10201" }),
                    React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_2326_10201", result: "shape" })),
                React.createElement("filter", { id: "d", x: "131.261", y: "52.633", width: "84.359", height: "82.996", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                    React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                    React.createElement("feOffset", { dy: "11" }),
                    React.createElement("feGaussianBlur", { stdDeviation: "11" }),
                    React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" }),
                    React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_2326_10201" }),
                    React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_2326_10201", result: "shape" })),
                React.createElement("filter", { id: "f", x: ".075", y: "56.556", width: "92.367", height: "87.26", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                    React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                    React.createElement("feColorMatrix", { in: "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                    React.createElement("feOffset", { dy: "11" }),
                    React.createElement("feGaussianBlur", { stdDeviation: "11" }),
                    React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.27 0" }),
                    React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_2326_10201" }),
                    React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_2326_10201", result: "shape" })),
                React.createElement("linearGradient", { id: "c", x1: "166.469", y1: "60.189", x2: "160.562", y2: "113.119", gradientUnits: "userSpaceOnUse" },
                    React.createElement("stop", { stopColor: "#68728B" }),
                    React.createElement("stop", { offset: ".996", stopColor: "#646E87" })),
                React.createElement("linearGradient", { id: "e", x1: "188.362", y1: "60.697", x2: "158.84", y2: "105.025", gradientUnits: "userSpaceOnUse" },
                    React.createElement("stop", { stopColor: "#68728B" }),
                    React.createElement("stop", { offset: ".996", stopColor: "#646E87" })),
                React.createElement("clipPath", { id: "g" },
                    React.createElement("path", { fill: "#fff", transform: "rotate(-40.252 116.86 -2.135)", d: "M0 0h11.495v34.043H0z" }))))),
        description && React.createElement(Description, null, description),
        !!added && (React.createElement(Sub, null,
            React.createElement(Icon$2, null,
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24" },
                    React.createElement("path", { fill: "currentColor", d: "M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h9l5 5v13q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12V8h-4V4H6v16Zm6-1q1.675 0 2.838-1.175Q16 16.65 16 15v-4h-2v4q0 .825-.575 1.413Q12.85 17 12 17q-.825 0-1.412-.587Q10 15.825 10 15V9.5q0-.225.15-.363Q10.3 9 10.5 9q.225 0 .363.137.137.138.137.363V15h2V9.5q0-1.05-.725-1.775Q11.55 7 10.5 7q-1.05 0-1.775.725Q8 8.45 8 9.5V15q0 1.65 1.175 2.825Q10.35 19 12 19Zm0-7Z" }))),
            React.createElement("span", { className: "ellipsis" }, fileName[0]),
            fileName[1] && ".".concat(fileName[1]))),
        !added && sub && React.createElement(Sub, null, sub)));
};

var Wrapper$4 = styled.div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, open = _a.open, variant = _a.variant;
    return css(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n    display: ", ";\n    flex-direction: column;\n    border-radius: 24px;\n    padding: 40px 28px;\n    align-items: center;\n    background-color: ", ";\n\n    width: 100%;\n    max-width: calc(100% - 32px);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10;\n\n    @media (min-width: 662px) {\n      padding: 40px;\n\n      ", "\n    }\n  "], ["\n    display: ", ";\n    flex-direction: column;\n    border-radius: 24px;\n    padding: 40px 28px;\n    align-items: center;\n    background-color: ", ";\n\n    width: 100%;\n    max-width: calc(100% - 32px);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 10;\n\n    @media (min-width: 662px) {\n      padding: 40px;\n\n      ", "\n    }\n  "])), open ? 'flex' : 'none', theme.colors.background.card, variant === 'wide'
        ? css(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n            max-width: 600px;\n\n            ", " {\n              margin: 0;\n            }\n\n            ", " {\n              flex-direction: row;\n              align-items: flex-start;\n              gap: 24px;\n            }\n\n            ", " {\n              align-items: flex-start;\n            }\n\n            ", ", ", " {\n              text-align: left;\n            }\n\n            ", " {\n              justify-content: flex-end;\n            }\n          "], ["\n            max-width: 600px;\n\n            ", " {\n              margin: 0;\n            }\n\n            ", " {\n              flex-direction: row;\n              align-items: flex-start;\n              gap: 24px;\n            }\n\n            ", " {\n              align-items: flex-start;\n            }\n\n            ", ", ", " {\n              text-align: left;\n            }\n\n            ", " {\n              justify-content: flex-end;\n            }\n          "])), Icon$1, Box$1, BoxContent, Title, Content, BoxActions) : css(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n            max-width: 450px;\n          "], ["\n            max-width: 450px;\n          "]))));
});
var Box$1 = styled.div(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"])));
var BoxContent = styled.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex: 1;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex: 1;\n"])));
var Overlay = styled.div(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, open = _a.open;
    return css(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 5;\n    display: ", ";\n    background-color: ", ";\n  "], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 5;\n    display: ", ";\n    background-color: ", ";\n  "])), open ? 'flex' : 'none', theme.colors.black3);
});
var Title = styled.h3(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: 32px;\n    line-height: 1.2;\n    color: ", ";\n\n    margin-bottom: 12px;\n    text-align: center;\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: 32px;\n    line-height: 1.2;\n    color: ", ";\n\n    margin-bottom: 12px;\n    text-align: center;\n  "])), theme.font.family.heading, theme.font.weight.bold, theme.colors.white);
});
var Content = styled.p(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, mb = _a.mb;
    return css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n    text-align: center;\n\n    ", "\n  "], ["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: 1.5;\n    text-align: center;\n\n    ", "\n  "])), theme.font.family.base, theme.font.weight.medium, theme.font.size.md, theme.colors.white2, mb && css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      margin-bottom: ", ";\n\n      @media (min-width: 600px) {\n        margin-bottom: ", ";\n      }\n    "], ["\n      margin-bottom: ", ";\n\n      @media (min-width: 600px) {\n        margin-bottom: ", ";\n      }\n    "])), theme.spacing('md'), theme.spacing('xl')));
});
var BoxActions = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n\n  @media (min-width: 600px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n\n  @media (min-width: 600px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"])));
var BoxImage = styled.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: ", ";\n    width: 100%;\n  "], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: ", ";\n    width: 100%;\n  "])), theme.spacing('xl'));
});
var Icon$1 = styled.i(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    margin-bottom: ", ";\n\n    @media (min-width: 600px) {\n      margin-bottom: ", ";\n    }\n  "], ["\n    margin-bottom: ", ";\n\n    @media (min-width: 600px) {\n      margin-bottom: ", ";\n    }\n  "])), theme.spacing('md'), theme.spacing('xl'));
});
var IconClose = styled.i(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, mb = _a.mb;
    return css(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n    width: 24px;\n    height: 24px;\n    align-self: flex-end;\n    color: ", ";\n    cursor: pointer;\n    margin-bottom: ", ";\n  "], ["\n    width: 24px;\n    height: 24px;\n    align-self: flex-end;\n    color: ", ";\n    cursor: pointer;\n    margin-bottom: ", ";\n  "])), theme.colors.white, mb ? '32px' : 0);
});
var templateObject_1$5, templateObject_2$5, templateObject_3$5, templateObject_4$5, templateObject_5$3, templateObject_6$2, templateObject_7$2, templateObject_8$1, templateObject_9$1, templateObject_10$1, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;

/**
 * Modal para informações e ações
 */
var Modal = function (_a) {
    var children = _a.children, title = _a.title, image = _a.image, icon = _a.icon, buttonPrimary = _a.buttonPrimary, buttonSecondary = _a.buttonSecondary, onClose = _a.onClose, _b = _a.open, open = _b === void 0 ? false : _b, _c = _a.overlayClose, overlayClose = _c === void 0 ? true : _c, _d = _a.buttonClose, buttonClose = _d === void 0 ? false : _d, _e = _a.variant, variant = _e === void 0 ? 'default' : _e, props = __rest(_a, ["children", "title", "image", "icon", "buttonPrimary", "buttonSecondary", "onClose", "open", "overlayClose", "buttonClose", "variant"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Wrapper$4, __assign({}, props, { open: open, variant: variant }),
            buttonClose && (React.createElement(IconClose, { mb: !!image && variant !== 'wide', onClick: onClose },
                React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("path", { d: "M4.99422 3.90637C4.73832 3.90637 4.47072 3.99238 4.27542 4.18738C3.88492 4.57838 3.88492 5.23437 4.27542 5.62537L10.5567 11.9064L4.27542 18.1874C3.88492 18.5784 3.88492 19.2344 4.27542 19.6254C4.66602 20.0154 5.32242 20.0154 5.71302 19.6254L11.9942 13.3444L18.2754 19.6254C18.666 20.0154 19.3224 20.0154 19.713 19.6254C20.1035 19.2344 20.1035 18.5784 19.713 18.1874L13.4317 11.9064L19.713 5.62537C20.1035 5.23437 20.1035 4.57838 19.713 4.18738C19.5177 3.99238 19.25 3.90637 18.9942 3.90637C18.7383 3.90637 18.4708 3.99238 18.2754 4.18738L11.9942 10.4684L5.71302 4.18738C5.51772 3.99238 5.25012 3.90637 4.99422 3.90637Z", fill: "currentColor" })))),
            React.createElement(Box$1, null,
                icon && React.createElement(Icon$1, null, icon),
                !icon && image && variant !== 'wide' && (React.createElement(BoxImage, null, image)),
                React.createElement(BoxContent, null,
                    React.createElement(Title, null, title),
                    React.createElement(Content, { mb: !!buttonPrimary || !!buttonSecondary }, children))),
            (!!buttonPrimary || !!buttonSecondary) && (React.createElement(BoxActions, null,
                buttonSecondary && (React.createElement(Button, __assign({}, buttonSecondary, { fullWidth: variant !== 'wide', variant: "secondary" }))),
                buttonPrimary && (React.createElement(Button, __assign({}, buttonPrimary, { fullWidth: variant !== 'wide', variant: "primary" })))))),
        React.createElement(Overlay, { open: open, onClick: function () { return overlayClose && onClose && onClose(); } })));
};

var Wrapper$3 = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return css(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n    display: flex;\n    border-radius: 16px;\n    height: 56px;\n    position: relative;\n    z-index: 2;\n    overflow: hidden;\n\n    background-color: ", ";\n\n    ", ";\n  "], ["\n    display: flex;\n    border-radius: 16px;\n    height: 56px;\n    position: relative;\n    z-index: 2;\n    overflow: hidden;\n\n    background-color: ", ";\n\n    ", ";\n  "])), theme.colors.black3, setSpacingMargin(props));
});
var ItemSelected = styled.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, active = _a.active, size = _a.size;
    return css(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: ", ";\n    width: ", "px;\n    z-index: -1;\n\n    transition: left 0.3s cubic-bezier(0.25, 0.4, 0.7, 1.1);\n\n    border-radius: 16px;\n    background: ", " content-box;\n    border: 4px solid ", ";\n  "], ["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: ", ";\n    width: ", "px;\n    z-index: -1;\n\n    transition: left 0.3s cubic-bezier(0.25, 0.4, 0.7, 1.1);\n\n    border-radius: 16px;\n    background: ", " content-box;\n    border: 4px solid ", ";\n  "])), active ? "".concat(active * size, "px") : '0px', size, theme.colors.primary.base, theme.colors.white3);
});
var templateObject_1$4, templateObject_2$4, templateObject_3$4, templateObject_4$4;

/**
 * Tabs para exibir itens de menu
 */
var Tabs = function (_a) {
    var active = _a.active, onChange = _a.onChange, children = _a.children, props = __rest(_a, ["active", "onChange", "children"]);
    var container = useRef({});
    var _b = useState(0), widthItem = _b[0], setWidthItem = _b[1];
    var setWidth = useCallback(function () {
        setWidthItem(container.current.offsetWidth / React.Children.count(children));
    }, []);
    useEffect(function () {
        setWidth();
        window.addEventListener('resize', setWidth);
        return function () { return window.removeEventListener('resize', setWidth); };
    }, []);
    var childrenElements = React.Children.map(children, function (child, index) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { onClick: onChange, index: index });
        }
        return child;
    });
    return (React.createElement(Wrapper$3, __assign({}, props, { ref: container }),
        widthItem && React.createElement(ItemSelected, { active: active, size: widthItem }),
        childrenElements));
};

var TabItem = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 4px solid transparent;\n    border-radius: 16px;\n    flex: 1;\n    cursor: pointer;\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    color: ", ";\n\n    :hover {\n      background: ", " content-box;\n    }\n  "], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 4px solid transparent;\n    border-radius: 16px;\n    flex: 1;\n    cursor: pointer;\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    color: ", ";\n\n    :hover {\n      background: ", " content-box;\n    }\n  "])), theme.font.family.base, theme.font.weight.semiBold, theme.font.size.md, theme.colors.white, theme.colors.white3);
});
var Icon = styled.i(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n    width: 24px;\n    height: 24px;\n    color: ", ";\n    margin-right: ", ";\n  "], ["\n    width: 24px;\n    height: 24px;\n    color: ", ";\n    margin-right: ", ";\n  "])), theme.colors.white, theme.spacing('xs'));
});
var templateObject_1$3, templateObject_2$3, templateObject_3$3, templateObject_4$3;

/**
 * Tab para exibir itens de menu
 */
var Tab = function (_a) {
    var icon = _a.icon, onClick = _a.onClick, index = _a.index, children = _a.children, props = __rest(_a, ["icon", "onClick", "index", "children"]);
    return (React.createElement(TabItem, __assign({}, props, { onClick: function () { return onClick && onClick(index); } }),
        icon && React.createElement(Icon, null, icon),
        children));
};

var setRadius = function (_a) {
    var topLeft = _a.topLeft, topRight = _a.topRight, bottomLeft = _a.bottomLeft, bottomRight = _a.bottomRight;
    var result = [];
    if (topLeft)
        result.push("border-top-left-radius: ".concat(topLeft, "px"));
    if (topRight)
        result.push("border-top-right-radius: ".concat(topRight, "px"));
    if (bottomLeft)
        result.push("border-bottom-right-radius: ".concat(bottomLeft, "px"));
    if (bottomRight)
        result.push("border-bottom-left-radius: ".concat(bottomRight, "px"));
    return result.join(';');
};
var setBorder = function (_a) {
    var color = _a.color, style = _a.style, width = _a.width;
    var result = [];
    if (color)
        result.push("border-color: ".concat(color, "px"));
    if (style)
        result.push("border-style: ".concat(style, "px"));
    if (width)
        result.push("border-width: ".concat(width, "px"));
    return result.join(';');
};
var Wrapper$2 = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, radius = _a.radius, border = _a.border, bgColor = _a.bgColor, elevation = _a.elevation, display = _a.display, flexDirection = _a.flexDirection, alignItems = _a.alignItems, justifyContent = _a.justifyContent, gap = _a.gap, props = __rest(_a, ["theme", "radius", "border", "bgColor", "elevation", "display", "flexDirection", "alignItems", "justifyContent", "gap"]);
    return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    ", ";\n    ", ";\n\n    display: ", ";\n    flex-direction: ", ";\n    align-items: ", ";\n    justify-content: ", ";\n    gap: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "], ["\n    ", ";\n    ", ";\n\n    display: ", ";\n    flex-direction: ", ";\n    align-items: ", ";\n    justify-content: ", ";\n    gap: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "])), setSpacingMargin(props), setSpacingPadding(props), display, flexDirection, alignItems, justifyContent, Number(gap) ? "".concat(gap, "px") : "".concat(gap), elevation && css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n      box-shadow: ", "px ", "px 4px ", ";\n    "], ["\n      box-shadow: ", "px ", "px 4px ", ";\n    "])), elevation, elevation, theme.colors.black2), bgColor && css(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "])), bgColor), radius && css(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), typeof radius === 'object'
        ? css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n            ", ";\n          "], ["\n            ", ";\n          "])), setRadius(radius)) : css(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n            border-radius: ", "px;\n          "], ["\n            border-radius: ", "px;\n          "])), radius)), border && css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      ", "\n    "], ["\n      ", "\n    "])), typeof border === 'object'
        ? css(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n            ", ";\n          "], ["\n            ", ";\n          "])), setBorder(border)) : css(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n            border: ", "px solid ", ";\n          "], ["\n            border: ", "px solid ", ";\n          "])), border, theme.colors.secondary.base)));
});
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$2, templateObject_5$2, templateObject_6$1, templateObject_7$1, templateObject_8, templateObject_9, templateObject_10;

/**
 * Box para auxiliar em agrupamento e espaçamentos
 *
 * @example
 * <Box mb={1}>
 *  Texto
 * </Box>
 */
var Box = function (_a) {
    var _b = _a.display, display = _b === void 0 ? 'block' : _b, _c = _a.flexDirection, flexDirection = _c === void 0 ? 'initial' : _c, _d = _a.alignItems, alignItems = _d === void 0 ? 'initial' : _d, _e = _a.justifyContent, justifyContent = _e === void 0 ? 'initial' : _e, _f = _a.gap, gap = _f === void 0 ? 'initial' : _f, props = __rest(_a, ["display", "flexDirection", "alignItems", "justifyContent", "gap"]);
    return (React.createElement(Wrapper$2, __assign({}, props, { display: display, flexDirection: flexDirection, alignItems: alignItems, justifyContent: justifyContent, gap: gap })));
};

var getWidth = function (value, paddings) {
    if (value === true)
        return 'flex-grow: 1';
    if (typeof value === 'number') {
        if (value > 0 && value <= 12) {
            var _a = paddings || {}, _b = _a.p, p = _b === void 0 ? 0 : _b, _c = _a.pl, pl = _c === void 0 ? 0 : _c, _d = _a.pr, pr = _d === void 0 ? 0 : _d;
            var left = pl || p;
            var right = pr || p;
            var extra = calcSpacing(left) + calcSpacing(right);
            var width = value / 12;
            var max = width * 100;
            return "\n        width: 100%;\n        max-width: calc(".concat(max, "% - ").concat(width * extra, "px)\n      ");
        }
    }
};
var Wrapper$1 = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, container = _a.container, item = _a.item, justifyContent = _a.justifyContent, flexDirection = _a.flexDirection, alignItems = _a.alignItems, flexWrap = _a.flexWrap, gap = _a.gap, props = __rest(_a, ["theme", "container", "item", "justifyContent", "flexDirection", "alignItems", "flexWrap", "gap"]);
    return css(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n    ", "\n\n    ", "\n  "], ["\n    ", "\n\n    ", "\n  "])), container
        ? css(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n          display: flex;\n          flex-wrap: ", ";\n          justify-content: ", ";\n          flex-direction: ", ";\n          align-items: ", ";\n          gap: ", "px;\n\n          ", ";\n          ", ";\n        "], ["\n          display: flex;\n          flex-wrap: ", ";\n          justify-content: ", ";\n          flex-direction: ", ";\n          align-items: ", ";\n          gap: ", "px;\n\n          ", ";\n          ", ";\n        "])), flexWrap, justifyContent, flexDirection, alignItems, gap, setSpacingMargin(props), setSpacingPadding(props)) : css(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n          display: block;\n        "], ["\n          display: block;\n        "]))), item && css(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n      @media (min-width: 0) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) {\n        ", ";\n      }\n    "], ["\n      @media (min-width: 0) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) and (max-width: ", "px) {\n        ", ";\n      }\n\n      @media (min-width: ", "px) {\n        ", ";\n      }\n    "])), theme.breakpoints.xs - 1, getWidth(props.xs, props), theme.breakpoints.xs, theme
        .breakpoints.sm - 1, getWidth(props.sm || props.xs, props), theme.breakpoints.sm, theme
        .breakpoints.md - 1, getWidth(props.md || props.sm || props.xs, props), theme.breakpoints.md, theme
        .breakpoints.lg - 1, getWidth(props.lg || props.md || props.sm || props.xs, props), theme.breakpoints.lg, theme
        .breakpoints.xl - 1, getWidth(props.xl || props.lg || props.md || props.sm || props.xs, props), theme.breakpoints.xl, getWidth(props.xxl || props.xl || props.lg || props.md || props.sm || props.xs, props)));
});
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1;

/**
 * Grid de 12 para alinhar/organizar elementos.
 * Use `container` no Grid Pai, e `item` nos Grid filhos
 *
 * @example
 * <Grid container>
 *  <Grid item xs={12}>
 *    Texto
 *   </Grid>
 *  <Grid item>
 *    Texto
 *   </Grid>
 * </Grid>
 */
var Grid = function (_a) {
    var _b = _a.gap, gap = _b === void 0 ? 8 : _b, _c = _a.flexDirection, flexDirection = _c === void 0 ? 'initial' : _c, _d = _a.alignItems, alignItems = _d === void 0 ? 'initial' : _d, _e = _a.justifyContent, justifyContent = _e === void 0 ? 'initial' : _e, _f = _a.flexWrap, flexWrap = _f === void 0 ? 'wrap' : _f, props = __rest(_a, ["gap", "flexDirection", "alignItems", "justifyContent", "flexWrap"]);
    return (React.createElement(Wrapper$1, __assign({ gap: gap, flexDirection: flexDirection, alignItems: alignItems, justifyContent: justifyContent, flexWrap: flexWrap }, props)));
};

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var sizes = {
    small: function (theme) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 28px;\n    height: 28px;\n    padding: 6px;\n\n    box-shadow: inset 0 0 0 2px transparent;\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      box-shadow: inset 0 0 0 2px ", ";\n    }\n  "], ["\n    width: 28px;\n    height: 28px;\n    padding: 6px;\n\n    box-shadow: inset 0 0 0 2px transparent;\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      box-shadow: inset 0 0 0 2px ", ";\n    }\n  "])), theme.colors.white3); },
    medium: function (theme) { return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 48px;\n    height: 48px;\n    padding: 12px;\n\n    box-shadow: inset 0 0 0 4px transparent;\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      box-shadow: inset 0 0 0 4px ", ";\n    }\n  "], ["\n    width: 48px;\n    height: 48px;\n    padding: 12px;\n\n    box-shadow: inset 0 0 0 4px transparent;\n\n    :hover:not(:disabled),\n    :focus:not(:disabled) {\n      box-shadow: inset 0 0 0 4px ", ";\n    }\n  "])), theme.colors.white3); }
};
var Wrapper = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme, size = _a.size, props = __rest(_a, ["theme", "size"]);
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: ", ";\n    font-size: 0;\n\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border: 0;\n    border-radius: 50%;\n    transition: ", ";\n    position: relative;\n    background-color: ", ";\n\n    ", ";\n\n    :disabled {\n      cursor: not-allowed;\n      background-color: ", ";\n      color: ", ";\n    }\n\n    svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    ", "\n  "], ["\n    color: ", ";\n    font-size: 0;\n\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border: 0;\n    border-radius: 50%;\n    transition: ", ";\n    position: relative;\n    background-color: ", ";\n\n    ", ";\n\n    :disabled {\n      cursor: not-allowed;\n      background-color: ", ";\n      color: ", ";\n    }\n\n    svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    ", "\n  "])), theme.colors.white, theme.transitions.all, theme.colors.white3, setSpacingMargin(props), theme.colors.disabled, theme.colors.white2, size && sizes[size](theme));
});
var IconLoader = styled.i(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: relative;\n    transition: ", ";\n\n    svg {\n      animation: ", " 1s linear infinite;\n      width: 100%;\n      height: 100%;\n    }\n  "], ["\n    position: relative;\n    transition: ", ";\n\n    svg {\n      animation: ", " 1s linear infinite;\n      width: 100%;\n      height: 100%;\n    }\n  "])), theme.transitions.all, rotate);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

/**
 * Botão com apenas ícone
 */
var IconButton = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.isLoading, isLoading = _c === void 0 ? false : _c, props = __rest(_a, ["children", "size", "isLoading"]);
    return (React.createElement(Wrapper, __assign({ size: size }, props), isLoading ? (React.createElement(IconLoader, null,
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20" },
            React.createElement("path", { d: "M16.8333 5.58228C17.6974 5.02366 17.9559 3.85486 17.2469 3.10922C16.3412 2.15679 15.2524 1.38769 14.039 0.851951C12.2544 0.0640328 10.2783 -0.184702 8.35409 0.136381C6.4299 0.457465 4.64164 1.33434 3.20957 2.65902C1.77749 3.98369 0.764144 5.69831 0.294331 7.59168C-0.175482 9.48506 -0.0812412 11.4745 0.565446 13.315C1.21213 15.1555 2.38303 16.7666 3.93391 17.95C5.48479 19.1334 7.34793 19.8373 9.29385 19.975C10.617 20.0687 11.9391 19.8978 13.1849 19.4793C14.1602 19.1516 14.4781 17.9975 13.9754 17.0997C13.4727 16.202 12.3348 15.9135 11.3293 16.1315C10.7505 16.257 10.1539 16.3005 9.55697 16.2583C8.33611 16.1718 7.16719 15.7302 6.19417 14.9878C5.22116 14.2453 4.48655 13.2345 4.08083 12.0798C3.6751 10.9251 3.61597 9.67693 3.91073 8.48904C4.20549 7.30115 4.84126 6.22541 5.73973 5.39432C6.6382 4.56323 7.76014 4.01308 8.96737 3.81163C10.1746 3.61019 11.4144 3.76624 12.534 4.26058C13.0815 4.50229 13.5885 4.81971 14.0415 5.20117C14.8285 5.86397 15.9692 6.14091 16.8333 5.58228Z", fill: "white" })))) : (children)));
};

export { Box, Button, Card, Checkbox, Chip, Collapse, Countdown, FileInput, GlobalStyle, Grid, IconButton, Input$1 as Input, Modal, Radio, Select, Tab, Tabs, TipCard, Toast, Tooltip, theme };
//# sourceMappingURL=index.js.map
