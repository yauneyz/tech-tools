import React from "react";
import { connect } from "react-redux";
import fields from "../admin-fields";
import { setAdminDetail, setTools } from "../redux/actions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class TableRow extends React.Component {
  constructor(props) {
    super();
    this.deleteTool = this.deleteTool.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  confirmDelete() {
    confirmAlert({
      message: "Are you sure you want to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteTool(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  }

  async deleteTool() {
    const _res = await fetch("tools/delete", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ id: this.props.tool._id }),
      headers: { "Content-Type": "application/json" },
    });

    // Reload the tools
    const res = await fetch("tools");
    const tools = await res.json();
    this.props.setTools(tools);
  }

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
        <td className="admin-data">
          <button className="btn" onClick={this.confirmDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (_state) => {
  return {};
};

export default connect(mapStateToProps, { setAdminDetail, setTools })(TableRow);
