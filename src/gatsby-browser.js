export const onRouteUpdate = ({ prevLocation }, { trackPageViews }) => {
  if (trackPageViews) {
    trackPage();
  }

  const trackPage = () => {
    var _iaq = window._iaq || [];
    _iaq.push([
      "track",
      "Page Viewed",
      {
        path: window.location.path,
        referrer: prevLocation ? prevLocation.href : "",
        search: window.location.search,
        title: document.title,
        url: window.location.href,
      },
    ]);
  };
};
