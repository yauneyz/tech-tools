import React from "react";
import { setFilter } from "../redux/actions";
import { connect } from "react-redux";

class Filter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setFilter(this.props.name, event.target.value);
  }
  render() {
    return (
      <div>
        <label className="filter-label">{this.props.displayName}:</label>
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
          className="form-control"
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { filters } = state;
  const { name, displayName } = ownProps;
  const filterValue = filters[name];
  return { name: name, displayName: displayName, value: filterValue };
};

export default connect(mapStateToProps, { setFilter })(Filter);
