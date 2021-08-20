import React from "react";
import {} from "../redux/actions";
import filters from "../utils/filters";
import { setOptions } from "../redux/actions";
import { connect } from "react-redux";

class FiltersList extends React.Component {
  constructor() {
    super();

    // The filters array gives a list of filters
    this.filtersList = Object.values(filters);
  }

  componentDidMount() {
    fetch("tools/options")
      .then((res) => res.json())
      .then((options) => {
        this.props.setOptions(options);
      });
  }
  render() {
    return <div className="filters-list">{this.filtersList}</div>;
  }
}

const mapStateToProps = (_state, _ownProps) => {
  return {};
};

export default connect(mapStateToProps, { setOptions })(FiltersList);
