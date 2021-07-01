import React from "react";
import {} from "../redux/actions";
import { connect } from "react-redux";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tools: [] };
  }

  componentDidMount() {
    fetch("/tools")
      .then((response) => response.json())
      .then((json) => this.setState({ tools: json }));
  }
  render() {
    return (
      <ul>
        {this.state.tools.map((tool) => (
          <li key={tool.id}>{tool.product}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const {} = state;
  return {};
};

export default connect(mapStateToProps, {})(Table);
