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
          <div className="title-favicon-container">
            <img
              className="title-favicon"
              src={process.env.PUBLIC_URL + "title-favicon.png"}
              alt="Site Logo"
            />
          </div>
          <div className="app-title-main">CODING IS ELEMENTARY</div>
          <div className="catalog-text">catalog</div>
          <a className="about-link" href="/about">
            About
          </a>
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
