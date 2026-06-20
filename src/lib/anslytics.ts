import ReactGA from "react-ga4";

export const initAnalytics = () => {
  ReactGA.initialize("G-FW4CV0H5GF");
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};