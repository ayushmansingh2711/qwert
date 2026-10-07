import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        pagePath: location.pathname,
      },
    });
  }, [location]);

  return null;
};

export default TrackPageViews;
