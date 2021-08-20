import React from "react";
import { connect } from "react-redux";

class Filter extends React.Component {
  render() {
    return (
      <div>
        <label className="filter-label">{this.props.displayName}:</label>
        {this.props.inputElement}
      </div>
    );
  }
}

const mapStateToProps = (_state, ownProps) => {
  const { name, displayName, inputElement } = ownProps;
  return {
    name: name,
    displayName: displayName,
    inputElement: inputElement,
  };
};

export default connect(mapStateToProps, {})(Filter);
