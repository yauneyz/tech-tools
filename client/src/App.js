import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Admin from "./components/Admin";
import Suggest from "./components/Suggest";

class App extends React.Component {
  componentDidMount() {}

  render() {
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
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/suggest">
            <Suggest />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (_state) => {
  return {};
};

export default connect(mapStateToProps, {})(App);
