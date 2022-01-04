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
  const { tools, filteredTools } = state;
  return { tools: tools, filteredTools: filteredTools };
};

export default connect(mapStateToProps, { setTools })(CardsList);
