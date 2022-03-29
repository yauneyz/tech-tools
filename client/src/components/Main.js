import React from "react";
import { useMediaQuery } from "react-responsive";

import MobileFiltersList from "./MobileFiltersList";
import MobileCardsList from "./MobileCardsList";
import FiltersList from "./FiltersList";
import CardsList from "./CardsList";

const mobileSize = 1224;

const Main = () => {
  const isMobile = useMediaQuery({ maxWidth: mobileSize });

  return (
    <div class="main-container">
      {!isMobile && <FiltersList />}
      {!isMobile && <CardsList />}

      {isMobile && <MobileCardsList />}
    </div>
  );
};

export default Main;
