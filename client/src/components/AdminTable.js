import React from "react";
import { connect } from "react-redux";
import fields from "../admin-fields";

import TableRow from "./TableRow";

class AdminTable extends React.Component {
  componentDidMount() {}

  render() {
    const header = fields.map((field, index) => <th key={index}>{field}</th>);

    // Get the filtered tools
    const filteredTools = this.props.filteredTools;
    const rows = filteredTools.map((tool, index) => (
      <TableRow tool={tool} key={index} />
    ));

    return (
      <div>
        <table className="admin-table table-responsive table">
          <thead>
            <tr>{header}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tools, filteredTools } = state;
  return { tools: tools, filteredTools: filteredTools };
};

export default connect(mapStateToProps, {})(AdminTable);
