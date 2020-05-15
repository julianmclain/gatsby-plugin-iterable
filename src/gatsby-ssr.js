import React from "react";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { javascriptSdkKey } = pluginOptions;

  if (javascriptSdkKey) {
    // Iterable's analytics.js is currently unversioned :(
    const snippet = `(function(){var account,identify,iterableAnalytics,post,push,track,trackPurchase,updateCart;iterableAnalytics={},post=function(endpoint,data,callback){var xhr;return xhr=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),xhr.onreadystatechange=function(){var status;return 4===xhr.readyState&&(status=xhr.status,callback)?callback(status,200===status?JSON.parse(xhr.responseText):xhr.responseText):void 0},xhr.open("POST",iterableAnalytics.baseUrl+endpoint,!0),xhr.setRequestHeader("Content-Type","application/json"),xhr.setRequestHeader("Api-Key",iterableAnalytics.apiKey),xhr.send(JSON.stringify(data))},account=function(apiKey,baseUrl){return iterableAnalytics.apiKey=apiKey,iterableAnalytics.baseUrl=baseUrl||"https://api.iterable.com"},identify=function(email,data,callback){return iterableAnalytics.user={email:email,data:data||{}},0!==Object.keys(data).length?post("/api/users/update",{email:email,dataFields:data},callback):void 0},track=function(eventName,data,callback){return null!=iterableAnalytics.user?post("/api/events/track",{email:iterableAnalytics.user.email,eventName:eventName,dataFields:data},callback):void 0},updateCart=function(items,callback){return null!=iterableAnalytics.user?post("/api/commerce/updateCart",{user:{email:iterableAnalytics.user.email},items:items||[]},callback):void 0},trackPurchase=function(total,items,campaignId,callback){var data;return null!=iterableAnalytics.user?(data={user:{email:iterableAnalytics.user.email},items:items||[],total:total},null!=campaignId&&(data.campaignId=campaignId),post("/api/commerce/trackPurchase",data,callback)):void 0},push=function(cmd){var args,func,funcName;return funcName=cmd[0],func=iterableAnalytics[funcName],null!=func?(args=cmd.slice(1),func.apply(this,args)):void 0},iterableAnalytics.account=account,iterableAnalytics.identify=identify,iterableAnalytics.track=track,iterableAnalytics.updateCart=updateCart,iterableAnalytics.trackPurchase=trackPurchase,iterableAnalytics.push=push,iterableAnalytics.isIAQ=!0,window.iterableAnalytics=iterableAnalytics,null!=window._iaq?null==window._iaq.isIAQ&&(window._iaq.map(function(cmd){return iterableAnalytics.push(cmd)}),window._iaq=iterableAnalytics):window._iaq=iterableAnalytics}).call(this);
      window._iaq.push(["account", "${javascriptSdkKey}"]);`;

    setHeadComponents([
      <script
        key="gatsby-plugin-iterable"
        dangerouslySetInnerHTML={{ __html: snippet }}
      />,
    ]);
  }
};