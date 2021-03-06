import React from "react";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { setAdminDetail } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import newTool from "../utils/newTool";

//Add button functional class so we can use the navigate hook
function AddButton(props) {
  let navigate = useNavigate();
  return (
    <div>
      <td className="admin-data">
        <button
          className="btn"
          onClick={async (_event) => {
            // Create the tool outline to pre-fill

            const suggestedTool = newTool;
            suggestedTool.name = props.suggestion.name;
            suggestedTool.url = props.suggestion.url;
            await props.setAdminDetail(suggestedTool);
            navigate("/admin");
          }}
        >
          Add
        </button>
      </td>
    </div>
  );
}

class SuggestTableRow extends React.Component {
  constructor(_props) {
    super();
    this.deleteSuggestion = this.deleteSuggestion.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);

    // These are the headers for the fields
    this.fields = ["name", "url", "referrer_email"];
  }

  confirmDelete() {
    confirmAlert({
      message: "Are you sure you want to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteSuggestion(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  }

  async deleteSuggestion() {
    const _res = await fetch("suggest/delete", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ id: this.props.suggestion._id }),
      headers: { "Content-Type": "application/json" },
    });
    this.props.updateParent();
  }

  render() {
    const dataList = this.fields.map((field, index) => (
      <td className="suggest-data" key={index}>
        {this.props.suggestion[field]}
      </td>
    ));
    return (
      <tr className="admin-row">
        {dataList}
        <td>
          <AddButton
            setAdminDetail={this.props.setAdminDetail}
            suggestion={this.props.suggestion}
          />
        </td>
        <td className="admin-data">
          <button className="btn" onClick={this.deleteSuggestion}>
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

export default connect(mapStateToProps, { setAdminDetail })(SuggestTableRow);
