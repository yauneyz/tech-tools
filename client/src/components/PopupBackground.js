import React from "react";
import { connect } from "react-redux";

class PopupBackground extends React.Component {
  render() {
    if (this.props.open) {
      return <div></div>;
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (_state, _ownProps) => {
  return {};
};

export default connect(mapStateToProps, {})(PopupBackground);
