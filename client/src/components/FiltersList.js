import React from "react";
import {} from "../redux/actions";
import filters from "../utils/filters";
import SuggestRecordForm from "./forms/SuggestRecordForm";
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
    return (
      <div className="filters-list">
        <SuggestRecordForm />
        <div className="filters-title">
          <b>SEARCH THE CATALOG</b>
        </div>
        <div>{this.filtersList}</div>
        <div>
          <b>Results: {this.props.toolsCount}</b>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, _ownProps) => {
  const { filteredTools } = state;
  const toolsCount = filteredTools.length;
  return { toolsCount: toolsCount };
};

export default connect(mapStateToProps, { setOptions })(FiltersList);
