import React from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { setFilter } from "../redux/actions";
import Filter from "./Filter";
import { connect } from "react-redux";

class CostFilter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(values) {
    this.props.setFilter(this.props.name, values);
  }

  render() {
    return (
      <div>
        <div>
          <b>{this.props.displayName}:</b>
        </div>
        <Range
          max={this.props.max}
          min={this.props.min}
          onChange={(event) => this.handleChange(event)}
          tipFormatter={(value) => <span className="tooltip">{value}</span>}
          tipProps={{ visible: true }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { name, displayName } = ownProps;
  const { min, max } = state.options;
  return {
    name: name,
    displayName: displayName,
    min: min,
    max: max,
  };
};

export default connect(mapStateToProps, { setFilter })(CostFilter);
