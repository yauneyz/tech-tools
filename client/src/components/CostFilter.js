import React from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { setFilter } from "../redux/actions";
import { connect } from "react-redux";

class CostFilter extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    // We max out the current max and min so we can get the right defaults on the slider
    // It seems that if we initially draw it with default [0,0] it's hard to get around that
    // Feel free to fix this if you can manage it
    this.state = { currentMin: 0, currentMax: 999, min: 0, max: 999 };
  }

  componentDidUpdate(prevProps) {
    // Try to get the filters to have the right max/min
    // On first render we don't have options fully filled out, so we have to make sure that doesn't hurt us
    const name = this.props.name;
    const options = this.props.options;

    // Make sure we don't have an infinite loop and only run this when we get new options
    if (prevProps.options[name] === this.props.options[name]) {
      return;
    }

    let max = 0;
    let min = 0;

    if (name in options) {
      max = options[name].max;
      min = options[name].min;
    }

    this.setState({ currentMin: min, currentMax: max, min: min, max: max });
  }

  handleChange(values) {
    this.setState({ currentMin: values[0], currentMax: values[1] });
    this.props.setFilter(this.props.name, values);
  }

  render() {
    const max = this.state.max;
    const min = this.state.min;
    return (
      <div>
        <div>
          <b>
            {this.props.displayName}: ${this.state.currentMin} - $
            {this.state.currentMax}
          </b>
        </div>
        <Range
          max={max}
          min={min}
          defaultValue={[min, max]}
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
  const options = state.options;
  return {
    name: name,
    displayName: displayName,
    options: options,
  };
};

export default connect(mapStateToProps, { setFilter })(CostFilter);
