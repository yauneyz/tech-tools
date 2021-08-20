import React from "react";
import Card from "./Card";
import { setTools } from "../redux/actions";
import { connect } from "react-redux";

function filterIncludes(key, values) {
  /*
   * Here the {key} is the card's value for a particular field.
   * {values} is the list of all allowed values, usually taken from a multi-select
   */
  if (!key) {
    key = "";
  }

  key = key.toLowerCase();
  values = values.map((value) => value.toLowerCase());

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

  console.log("Problem");
  // Don't match the filter
  return match;
}

class CardsList extends React.Component {
  async componentDidMount() {
    const res = await fetch("tools");
    const tools = await res.json();
    this.props.setTools(tools);
  }

  render() {
    const tools = this.props.tools;
    const filters = this.props.filters;

    // Filter the tools
    let filteredTools = tools.filter((tool) => {
      for (const [key, value] of Object.entries(filters)) {
        if (!filterIncludes(tool[key], value)) {
          return false;
        }
      }
      return true;
    });

    const cardsList = filteredTools.map((tool, index) => (
      <Card tool={tool} key={index} />
    ));

    return <div className="cards-list">{cardsList}</div>;
  }
}

const mapStateToProps = (state) => {
  const { tools, filters } = state;
  return { tools: tools, filters: filters };
};

export default connect(mapStateToProps, { setTools })(CardsList);
