import React from "react";
import {} from "../redux/actions";
import filters from "../utils/filters";
import Filter from "./Filter";
import { connect } from "react-redux";

class FiltersList extends React.Component {
  constructor() {
    super();
    const names = Object.keys(filters);
    const displayNames = Object.values(filters);

    const indices = [...Array(names.length).keys()];
    this.filtersList = indices.map((index) => (
      <Filter
        name={names[index]}
        displayName={displayNames[index]}
        key={index}
      />
    ));
  }
  render() {
    return <div className="filters-list">{this.filtersList}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {} = state;
  return {};
};

export default connect(mapStateToProps, {})(FiltersList);
