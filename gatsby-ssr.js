"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  var javascriptSdkKey = pluginOptions.javascriptSdkKey;

  if (javascriptSdkKey) {
    // Iterable's analytics.js is currently unversioned :(
    var snippet = "(function () {\n      var b = document.createElement('script'); b.type = 'text/javascript'; b.async = true;\n      b.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'js.iterable.com/analytics.js';\n      var a = document.getElementsByTagName('script')[0]; a.parentNode.insertBefore(b, a);\n      })();\n      var _iaq = window._iaq || [];\n      _iaq.push([\"account\", \"" + javascriptSdkKey + "\"]);"; // Injected after body content per Iterable recommendation
    // https://support.iterable.com/hc/en-us/articles/205730709-Using-the-Iterable-JavaScript-SDK#installation

    setPostBodyComponents([/*#__PURE__*/_react.default.createElement("script", {
      key: "gatsby-plugin-iterable",
      dangerouslySetInnerHTML: {
        __html: snippet
      }
    })]);
  }
};

exports.onRenderBody = onRenderBody;