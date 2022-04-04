import React from "react";
import Card from "./Card";
import { setTools } from "../redux/actions";
import { connect } from "react-redux";
import MobileFiltersList from "./MobileFiltersList";
import { slide as Menu } from "react-burger-menu";

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
      <div className="cards-list mobile-cards-list">
        <div className="cards-header">
          <Menu width={"100%"}>
            <MobileFiltersList />
          </Menu>
          <div className="app-title">
            <img
              className="title-favicon"
              src={process.env.PUBLIC_URL + "title-favicon.png"}
              alt="Site Logo"
            />
            <span className="app-title-main">CODING IS ELEMENTARY</span>
            <span className="catalog-text">catalog</span>
            <a className="about-link" href="/about">
              About
            </a>
          </div>
        </div>
        <div className="cards-grid-box mobile-grid">
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
