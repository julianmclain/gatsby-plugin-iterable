export const onRouteUpdate = ({ prevLocation }, { trackPageViews }) => {
  const trackPage = () => {
    window._iaq &&
      window._iaq.push([
        "track",
        "Page Viewed",
        {
          path: window.location.path,
          referrer: prevLocation ? prevLocation.href : "",
          search: window.location.search,
          title: document.title,
          url: window.location.href,
        },
      ])
  }

  if (trackPageViews) {
    trackPage()
  }
}
