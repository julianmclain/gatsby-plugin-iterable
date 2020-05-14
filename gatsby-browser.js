"use strict";

exports.__esModule = true;
exports.onRouteUpdate = void 0;

var onRouteUpdate = function onRouteUpdate(_ref, _ref2) {
  var prevLocation = _ref.prevLocation;
  var trackPageViews = _ref2.trackPageViews;

  var trackPage = function trackPage() {
    window._iaq && window._iaq.push(["track", "Page Viewed", {
      path: window.location.path,
      referrer: prevLocation ? prevLocation.href : "",
      search: window.location.search,
      title: document.title,
      url: window.location.href
    }]);
  };

  if (trackPageViews) {
    trackPage();
  }
};

exports.onRouteUpdate = onRouteUpdate;