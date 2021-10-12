import React from "react";
import { connect } from "react-redux";
import { setAdminDetail, setTools } from "../redux/actions";

class AdminDetail extends React.Component {
  constructor(props) {
    super();
    const newTool = {
      name: "",
      description: "",
      url: "",
      category: "",
      sub_category: "",
      compatible_os: "",
      demographic: "",
      language: "",
      company: "",
      cost_low: "",
      cost_high: "",
      cost_classroom: "",
      msrp: "",
    };
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

  handleChange(tool, field, event) {
    const editedTool = {
      ...this.props.tool,
      [field]: event.target.value,
    };
    this.props.setAdminDetail(editedTool);
  }

  // Method to save a tool
  async handleSubmit() {
    console.log("Save", this.props.tool);

    // Save the tool
    const _res = await fetch("tools/save", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(this.props.tool),
      headers: { "Content-Type": "application/json" },
    });

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

    const vIndex = fields.indexOf("_v");
    fields.splice(vIndex, 1);

    const formInputs = fields.map((field, index) => (
      <label key={index}>
        {field}:
        <input
          type="text"
          name={field}
          value={this.props.tool[field]}
          onChange={(event) => this.handleChange(this.props.tool, field, event)}
        />
      </label>
    ));

    return (
      <div>
        <button onClick={this.setNewTool}>New Tool</button>
        <form onSubmit={this.handleSubmit}>
          {formInputs}
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { adminDetailTool, tools } = state;
  return { tool: adminDetailTool, tools: tools };
};

export default connect(mapStateToProps, { setAdminDetail, setTools })(
  AdminDetail
);
