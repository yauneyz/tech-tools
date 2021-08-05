import React from "react";
import Card from "./Card";
import { setTools } from "../redux/actions";
import { connect } from "react-redux";

function filterIncludes(key, value) {
  if (!key) {
    key = "";
  }

  key = key.toLowerCase();
  value = value.toLowerCase();
  return key.includes(value);
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
