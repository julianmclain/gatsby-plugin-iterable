import React from "react";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { javascriptSdkKey } = pluginOptions;

  if (javascriptSdkKey) {
    // Iterable's analytics.js is currently unversioned :(
    const snippet = `(function () {
      var b = document.createElement('script'); b.type = 'text/javascript'; b.async = true;
      b.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'js.iterable.com/analytics.js';
      var a = document.getElementsByTagName('script')[0]; a.parentNode.insertBefore(b, a);
      })();
      var _iaq = window._iaq || [];
      _iaq.push(["account", "${javascriptSdkKey}"]);`;

    setHeadComponents([
      <script
        key="gatsby-plugin-iterable"
        dangerouslySetInnerHTML={{ __html: snippet }}
      />,
    ]);
  }
};
