import { onRouteUpdate } from "../gatsby-browser";

describe(`gatsby-browser`, () => {
  describe(`onRouteUpdate`, () => {
    beforeEach(() => {
      window._iaq = { push: jest.fn() };
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it(`tracks page views when enabled`, () => {
      const pluginOptions = { trackPageViews: true };
      onRouteUpdate({ prevLocation: "/home" }, pluginOptions);
      expect(window._iaq.push).toHaveBeenCalled();
    });

    it(`doesn't track page views when disabled`, () => {
      const pluginOptions = { trackPageViews: false };
      onRouteUpdate({ prevLocation: "/home" }, pluginOptions);
      expect(window._iaq.push).not.toHaveBeenCalled();
    });
  });
});
