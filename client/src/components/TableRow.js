import React from "react";
import { connect } from "react-redux";
import fields from "../admin-fields";
import { setAdminDetail } from "../redux/actions";

class TableRow extends React.Component {
  render() {
    const dataList = fields.map((field, index) => (
      <td className="admin-data" key={index}>
        {this.props.tool[field]}
      </td>
    ));
    return (
      <tr
        className="admin-row"
        onClick={() => this.props.setAdminDetail(this.props.tool)}
      >
        {dataList}
      </tr>
    );
  }
}

const mapStateToProps = (_state) => {
  return {};
};

export default connect(mapStateToProps, { setAdminDetail })(TableRow);
