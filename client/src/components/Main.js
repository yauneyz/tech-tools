import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import MobileFiltersList from "./MobileFiltersList";
import MobileCardsList from "./MobileCardsList";
import FiltersList from "./FiltersList";
import CardsList from "./CardsList";
import ReactGA from "react-ga";

const mobileSize = 800;

const Main = () => {
  const google_tracking_id = process.env.REACT_APP_TRACKING_ID;
  const isMobile = useMediaQuery({ maxWidth: mobileSize });

  // Record Google Analytics pageview
  useEffect(() => {
    // Only run if production
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize(google_tracking_id);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div className="main-container">
      {!isMobile && <FiltersList />}
      {!isMobile && <CardsList />}

      {isMobile && <MobileCardsList />}
    </div>
  );
};

export default Main;
