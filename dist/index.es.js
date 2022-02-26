import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React from 'react';

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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n";
styleInject(css_248z$2);

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (jsx("button", __assign({ type: "button", className: ['storybook-button', "storybook-button--".concat(size), mode].join(' '), style: { backgroundColor: backgroundColor } }, props, { children: label }), void 0));
};

var css_248z$1 = ".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n\n.welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n";
styleInject(css_248z$1);

var Header = function (_a) {
    var user = _a.user, onLogin = _a.onLogin, onLogout = _a.onLogout, onCreateAccount = _a.onCreateAccount;
    return (jsx("header", { children: jsxs("div", __assign({ className: "wrapper" }, { children: [jsxs("div", { children: [jsx("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxs("g", __assign({ fill: "none", fillRule: "evenodd" }, { children: [jsx("path", { d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z", fill: "#FFF" }, void 0), jsx("path", { d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z", fill: "#555AB9" }, void 0), jsx("path", { d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z", fill: "#91BAF8" }, void 0)] }), void 0) }), void 0), jsx("h1", { children: "Acme" }, void 0)] }, void 0), jsx("div", { children: user ? (jsxs(Fragment, { children: [jsxs("span", __assign({ className: "welcome" }, { children: ["Welcome, ", jsx("b", { children: user.name }, void 0), "!"] }), void 0), jsx(Button, { size: "small", onClick: onLogout, label: "Log out" }, void 0)] }, void 0)) : (jsxs(Fragment, { children: [jsx(Button, { size: "small", onClick: onLogin, label: "Log in" }, void 0), jsx(Button, { primary: true, size: "small", onClick: onCreateAccount, label: "Sign up" }, void 0)] }, void 0)) }, void 0)] }), void 0) }, void 0));
};

var css_248z = "section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nsection h2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nsection p {\n  margin: 1em 0;\n}\n\nsection a {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nsection ul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nsection li {\n  margin-bottom: 8px;\n}\n\nsection .tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\nsection .tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\nsection .tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\nsection .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n";
styleInject(css_248z);

var Page = function () {
    var _a = React.useState(), user = _a[0], setUser = _a[1];
    return (jsxs("article", { children: [jsx(Header, { user: user, onLogin: function () { return setUser({ name: 'Jane Doe' }); }, onLogout: function () { return setUser(undefined); }, onCreateAccount: function () { return setUser({ name: 'Jane Doe' }); } }, void 0), jsxs("section", { children: [jsx("h2", { children: "Pages in Storybook" }, void 0), jsxs("p", { children: ["We recommend building UIs with a", ' ', jsx("a", __assign({ href: "https://componentdriven.org", target: "_blank", rel: "noopener noreferrer" }, { children: jsx("strong", { children: "component-driven" }, void 0) }), void 0), ' ', "process starting with atomic components and ending with pages."] }, void 0), jsx("p", { children: "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:" }, void 0), jsxs("ul", { children: [jsx("li", { children: "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories" }, void 0), jsx("li", { children: "Assemble data in the page component from your services. You can mock these services out using Storybook." }, void 0)] }, void 0), jsxs("p", { children: ["Get a guided tutorial on component-driven development at", ' ', jsx("a", __assign({ href: "https://storybook.js.org/tutorials/", target: "_blank", rel: "noopener noreferrer" }, { children: "Storybook tutorials" }), void 0), ". Read more in the", ' ', jsx("a", __assign({ href: "https://storybook.js.org/docs", target: "_blank", rel: "noopener noreferrer" }, { children: "docs" }), void 0), "."] }, void 0), jsxs("div", __assign({ className: "tip-wrapper" }, { children: [jsx("span", __assign({ className: "tip" }, { children: "Tip" }), void 0), " Adjust the width of the canvas with the", ' ', jsx("svg", __assign({ width: "10", height: "10", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" }, { children: jsx("g", __assign({ fill: "none", fillRule: "evenodd" }, { children: jsx("path", { d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z", id: "a", fill: "#999" }, void 0) }), void 0) }), void 0), "Viewports addon in the toolbar"] }), void 0)] }, void 0)] }, void 0));
};

export { Button, Header, Page };
//# sourceMappingURL=index.es.js.map
