import React from "react";
import ToggleButton from "react-toggle-button";
import { setFilter } from "../redux/actions";
import { connect } from "react-redux";

class AvailableFilter extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = { value: false };
  }

  handleChange(value) {
    // We have to negate value to get the new value
    this.setState({ value: !value });
    this.props.setFilter("available", [!value]);
  }

  render() {
    return (
      <div className="availability-toggle">
        <span className="filter-label">Available:</span>
        <ToggleButton
          inactiveLabel="Any"
          activeLabel="Yes"
          value={this.state.value}
          onToggle={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (_state, _ownProps) => {
  return {};
};

export default connect(mapStateToProps, { setFilter })(AvailableFilter);
