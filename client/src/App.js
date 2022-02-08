import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated", "true");

  const routing = useRoutes(routes(isAuthenticated));
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
