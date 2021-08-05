import React from "react";
import { connect } from "react-redux";
import "./App.css";

import FiltersList from "./components/FiltersList";
import CardsList from "./components/CardsList";

//import {} from "./redux/actions";

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
        </header>
        <div className="app-header">Coding Is Elementary Catalog</div>
        <FiltersList />
        <CardsList />
      </div>
    );
  }
}

const mapStateToProps = (_state) => {
  return {};
};

export default connect(mapStateToProps, {})(App);
