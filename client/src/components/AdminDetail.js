import React from "react";
import { connect } from "react-redux";
import { setAdminDetail, setTools } from "../redux/actions";
import newTool from "../utils/newTool";

class AdminDetail extends React.Component {
  constructor(props) {
    super();
    this.newTool = newTool;
    this.setNewTool = this.setNewTool.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    if (this.props.tool === null) {
      await this.setNewTool();
    }
  }

  async setNewTool() {
    await this.props.setAdminDetail(this.newTool);
  }

  handleChange(field, event) {
    const editedTool = {
      ...this.props.tool,
      [field]: event.target.value,
    };
    this.props.setAdminDetail(editedTool);
  }

  // Method to save a tool
  async handleSubmit(event) {
    console.log(event);
    event.preventDefault();

    let duplicate = false;
    // Try to find the tool, if it already exists then stop it
    this.props.tools.forEach((tool) => {
      if (tool.name === this.props.tool.name) {
        duplicate = true;
      }
    });
    // Quit if we've found a duplicate
    if (duplicate) {
      alert("There is already a tool with that name in the database.");
      return;
    }

    // Save the tool
    try {
      const data = new FormData(event.target);

      // Add the id
      data.set("_id", this.props.tool._id);

      // Save the record
      const _res = await fetch("tools/save", {
        method: "POST",
        mode: "cors",
        body: data,
      });
      alert("Tool Saved");
    } catch (error) {
      alert("Save Error");
    }

    // Update tools list with server tools
    const res2 = await fetch("tools");
    const tools = await res2.json();
    this.props.setTools(tools);
  }

  render() {
    // To make sure that we have the tool set
    if (this.props.tool === null) {
      return <div></div>;
    }

    let fields = Object.getOwnPropertyNames(this.props.tool);

    // Remove the _id field
    const idIndex = fields.indexOf("_id");
    fields.splice(idIndex, 1);

    const vIndex = fields.indexOf("__v");
    // Have to make sure it actually exists
    if (vIndex >= 0) {
      fields.splice(vIndex, 1);
    }

    // The description needs a longer box.
    const getInput = (field) => {
      if (field === "description") {
        return (
          <textarea
            type="text"
            className="form-control"
            name={field}
            value={this.props.tool[field]}
            onChange={(event) => this.handleChange(field, event)}
          />
        );
      } else {
        return (
          <input
            type="text"
            className="form-control"
            name={field}
            value={this.props.tool[field]}
            onChange={(event) => this.handleChange(field, event)}
          />
        );
      }
    };
    const formInputs = fields.map((field, index) => (
      <label key={index} className="col-form-label">
        {field}:{getInput(field)}
      </label>
    ));

    return (
      <div className="admin-detail-container">
        <button className="btn" onClick={this.setNewTool}>
          New Tool
        </button>
        <form onSubmit={this.handleSubmit}>
          {formInputs}
          <button className="btn" type="submit" value="Save">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { adminDetailTool, tools } = state;
  return { tool: adminDetailTool, tools: tools };
};

export default connect(mapStateToProps, {
  setAdminDetail,
  setTools,
})(AdminDetail);
