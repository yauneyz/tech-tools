import React from "react";
import { connect } from "react-redux";

class Tool extends React.Component {
  render() {
    const tool = this.props.tool;
    return <div>{tool.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const {} = state;
  const { tool } = ownProps;
  return { tool: tool };
};

export default connect(mapStateToProps, {})(Tool);
