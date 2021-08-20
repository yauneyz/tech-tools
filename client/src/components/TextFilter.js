import React from "react";
import { setFilter } from "../redux/actions";
import Filter from "./Filter";
import { connect } from "react-redux";

class TextFilter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setFilter(this.props.name, [event.target.value]);
  }
 render() {
    const inputElement = (
      <input
        type="text"
        value={this.props.value}
        className="form-control"
        onChange={this.handleChange}
      />
    );
    return (
      <Filter
        name={this.props.name}
        displayName={this.props.displayName}
        inputElement={inputElement}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { filters } = state;
  const { name, displayName } = ownProps;
  const filterValue = filters[name];
  return {
    name: name,
    displayName: displayName,
    value: filterValue,
  };
};

export default connect(mapStateToProps, { setFilter })(TextFilter);
