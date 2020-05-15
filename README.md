# gatsby-plugin-iterable

Easily add Iterable tracking to your Gatsby site. Lightweight wrapper for the
[Iterable JavaScript
SDK](https://support.iterable.com/hc/en-us/articles/205730709-Using-the-Iterable-JavaScript-SDK).

## Install

```
npm install --save gatsby-plugin-iterable
```

## Setup

Create a `Javascript SDK key` in Iterable. **Double check that it's a
`Javascript SDK key` and not a Standard API key.**

In your gatsby-config.js file:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-iterable`,
      options: {
        // Required or the script won't be loaded
        javascriptSdkKey: "YOUR_ITERABLE_JAVASCRIPT_SDK_KEY",
        // If set to true, page views will be automatically tracked
        trackPageViews: true,
      },
    },
  ],
};
```

## Usage

### General

Once installed and setup, you can access the `_iaq` object as a global variable.
For full usage details, see Iterable's [JavaScript
SDK](https://support.iterable.com/hc/en-us/articles/205730709-Using-the-Iterable-JavaScript-SDK)
documentation.

```javascript
import React from "react";

export default class IterableButton extends React.Component {
  handleClick(e) {
    e.preventDefault();
    window._iaq.push([
      "track",
      "Button Clicked",
      {
        eventField: "some value",
      },
    ]);
  }
  render() {
    return <button onClick={this.handleClick}>Track me!</button>;
  }
}
```

### Automatic Page View Tracking

When the `trackPageViews: true` flag is set in your `gatsby-config.js` file, the
plugin will automatically send a track request on route change. However, for it
to work you need to have previously called `identify` for the user during the
session. Here is the "Page Viewed" event schema:

```json
// Event Name: "Page Viewed"
{
  "url": "http://localhost:8000/about/",
  "referrer": "http://localhost:8000/",
  "title": "Pandas Eating Lots",
  "search": "?yummy=true"
}
```

Currently, the plugin doesn't support customizing this payload. If you'd like to
change it, your best bet is probably to set `trackPageViews: false` and
implement Gatsby's `onRouteUpdate` API in your `gatsby-browser.js` file:

```javascript
// gatsby-browser.js
exports.onRouteUpdate = () => {
  window._iaq && window._iaq.push([
    "track",
    "Page Viewed",
    {
      myTrack: "My rules"
    },
}
```
