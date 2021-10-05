import React from "react";
import { connect } from "react-redux";

import FiltersList from "./FiltersList";
import CardsList from "./CardsList";

//import {} from "./redux/actions";

class Main extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <FiltersList />
          </div>
          <div className="col-8 cards-list">
            <CardsList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (_state) => {
  return {};
};

export default connect(mapStateToProps, {})(Main);
