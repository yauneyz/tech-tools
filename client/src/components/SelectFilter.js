import React from "react";
import Select from "react-select";
import { setFilter } from "../redux/actions";
import Filter from "./Filter";
import { connect } from "react-redux";

class SelectFitler extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(values) {
    values = values.map((value) => value.label);
    this.props.setFilter(this.props.name, values);
  }
  render() {
    const inputElement = (
      <Select
        options={this.props.options}
        onChange={(values) => this.handleChange(values)}
        isMulti="true"
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
  const { name, displayName } = ownProps;
  const { options } = state;
  return {
    name: name,
    displayName: displayName,
    options: options[name],
  };
};

export default connect(mapStateToProps, { setFilter })(SelectFitler);
