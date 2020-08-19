import { onRenderBody } from "../gatsby-ssr";

describe(`gatsby-ssr`, () => {
  describe(`onRenderBody`, () => {
    it(`injects tracking script before closing body tag when API key set`, () => {
      const setPostBodyComponents = jest.fn();
      const pluginOptions = {
        javascriptSdkKey: "foo key",
        trackPageViews: true,
      };
      onRenderBody({ setPostBodyComponents }, pluginOptions);
      expect(setPostBodyComponents).toHaveBeenCalled();
    });

    it(`doesn't inject tracking script when API key not set`, () => {
      const setPostBodyComponents = jest.fn();
      const pluginOptions = {
        javascriptSdkKey: "",
        trackPageViews: true,
      };
      onRenderBody({ setPostBodyComponents }, pluginOptions);
      expect(setPostBodyComponents).not.toHaveBeenCalled();
    });
  });
});
