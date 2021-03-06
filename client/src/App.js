import React from "react";
import { connect } from "react-redux";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import ReactGA from "react-ga4";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated", "true");
  const routing = useRoutes(routes(isAuthenticated));
  const google_tracking_id = process.env.REACT_APP_TRACKING_ID;

  // If production, initialize Google Analytics
  if (process.env.NODE_ENV === "production") {
    // Initialize react-ga4 tracking
    ReactGA.initialize([{ trackingId: google_tracking_id }]);
  }

  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </header>
      {routing}
    </div>
  );
}

const mapStateToProps = (_state) => ({});

export default connect(mapStateToProps, {})(App);
