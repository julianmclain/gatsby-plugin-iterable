import React from "react";

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const { javascriptSdkKey } = pluginOptions;

  if (javascriptSdkKey) {
    const snippet = `(function () {
      var b = document.createElement('script'); b.type = 'text/javascript'; b.async = true;
      b.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'js.iterable.com/analytics.js';
      var a = document.getElementsByTagName('script')[0]; a.parentNode.insertBefore(b, a);
      })();
      var _iaq = window._iaq || [];
      _iaq.push(["account", "${javascriptSdkKey}"]);`;

    // Injected after body content per Iterable recommendation
    // https://support.iterable.com/hc/en-us/articles/205730709-Using-the-Iterable-JavaScript-SDK#installation
    setPostBodyComponents([
      <script
        key="gatsby-plugin-iterable"
        dangerouslySetInnerHTML={{ __html: snippet }}
      />,
    ]);
  }
};
