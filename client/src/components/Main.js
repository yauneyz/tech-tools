import React from "react";
import { useMediaQuery } from "react-responsive";

import MobileFiltersList from "./MobileFiltersList";
import MobileCardsList from "./MobileCardsList";
import FiltersList from "./FiltersList";
import CardsList from "./CardsList";

const mobileSize = 800;

const Main = () => {
  const isMobile = useMediaQuery({ maxWidth: mobileSize });

  return (
    <div className="main-container">
      {!isMobile && <FiltersList />}
      {!isMobile && <CardsList />}

      {isMobile && <MobileCardsList />}
    </div>
  );
};

export default Main;
