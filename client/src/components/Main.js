import React from "react";
import { connect } from "react-redux";

import FiltersList from "./FiltersList";
import CardsList from "./CardsList";

//import {} from "./redux/actions";

class Main extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div class="main-container">
        <FiltersList />
        <CardsList />
      </div>
    );
  }
}

const mapStateToProps = (_state) => {
  return {};
};

export default connect(mapStateToProps, {})(Main);
