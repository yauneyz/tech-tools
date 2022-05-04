import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import MobileCardsList from "./MobileCardsList";
import FiltersList from "./FiltersList";
import CardsList from "./CardsList";
import ReactGA from "react-ga4";

const mobileSize = 800;

const Main = () => {
  const isMobile = useMediaQuery({ maxWidth: mobileSize });

  // Record Google Analytics pageview
  useEffect(() => {
    // Only run if production
    if (process.env.NODE_ENV === "production") {
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
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
