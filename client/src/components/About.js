import React from "react";
import { connect } from "react-redux";

class About extends React.Component {
  render() {
    return <div>This is the about page</div>;
  }
}

const mapStateToProps = (_state, _ownProps) => {
  return {};
};

export default connect(mapStateToProps, {})(About);
