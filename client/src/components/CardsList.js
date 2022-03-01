import React from "react";
import Card from "./Card";
import { setTools } from "../redux/actions";
import { connect } from "react-redux";

class CardsList extends React.Component {
  async componentDidMount() {
    const res = await fetch("tools");
    const tools = await res.json();
    this.props.setTools(tools);
  }

  render() {
    const filteredTools = this.props.filteredTools;
    const cardsList = filteredTools.map((tool, index) => (
      <Card tool={tool} key={index} />
    ));

    return (
      <div className="cards-list">
        <div className="app-title">
          <span className="app-title-main">CODING IS ELEMENTARY</span>
          <span className="catalog-text">catalog</span>
        </div>
        <div className="cards-grid-box">
          <div className="cards-grid">{cardsList}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tools, filteredTools } = state;
  return { tools: tools, filteredTools: filteredTools };
};

export default connect(mapStateToProps, { setTools })(CardsList);
