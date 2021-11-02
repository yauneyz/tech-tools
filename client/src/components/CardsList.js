import React from "react";
import Card from "./Card";
import { setTools } from "../redux/actions";
import { connect } from "react-redux";
import { dollarToFloat } from "../utils/conversions";

function filterIncludes(key, values) {
  /*
   * Here the {key} is the card's value for a particular field.
   * {values} is the list of all allowed values, usually taken from a multi-select
   */
  if (!key) {
    key = "";
  }

  key = key.toLowerCase();
  try {
    values = values.map((value) => value.toLowerCase());
  } catch (error) {
    debugger;
  }

  // No filters applied means we're good
  if (values.length === 0) {
    return true;
  }

  // Search through each allowed value to see if one matches the key
  let match = false;
  values.forEach((value) => {
    if (key.includes(value)) {
      match = true;
    }
  });

  // Don't match the filter
  return match;
}

function getFilteredTools(toolsToFilter, filtersToApply) {
  // Numeric filter

  // Filter the tools
  let filteredTools = toolsToFilter.filter((tool) => {
    for (const [key, value] of Object.entries(filtersToApply)) {
      if (Number.isInteger(value[0])) {
        const toolVal = dollarToFloat(tool[key]);
        if (isNaN(toolVal)) {
          return false;
        }

        const [min, max] = value;
        if (toolVal < min || toolVal > max) {
          return false;
        }
      } else {
        if (!filterIncludes(tool[key], value)) {
          return false;
        }
      }
    }
    return true;
  });

  return filteredTools;
}

class CardsList extends React.Component {
  async componentDidMount() {
    const res = await fetch("tools");
    const tools = await res.json();
    this.props.setTools(tools);
  }

  render() {
    const filteredTools = getFilteredTools(
      this.props.tools,
      this.props.filters
    );

    const cardsList = filteredTools.map((tool, index) => (
      <Card tool={tool} key={index} />
    ));

    return (
      <div>
        <div className="row app-title">
          <div className="col-12 app-title-main inline">
            CODING IS
            <br /> ELEMENTARY
            <div className="app-title-small inline">catalog</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="row row-cols-1 
							row-cols-md-2 
							row-cols-lg-3 
							row-cols-xl-4
							row-cols-xxl-5
							card-deck"
            >
              {cardsList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tools, filters } = state;
  return { tools: tools, filters: filters };
};

export { getFilteredTools };
export default connect(mapStateToProps, { setTools })(CardsList);
