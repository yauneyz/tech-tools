import React from "react";
import { connect } from "react-redux";
import { setAdminDetail } from "../redux/actions";

class Admin extends React.Component {
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
    console.log("Did mount", this.props.tool);
    if (this.props.tool === null) {
      console.log("Yes");
      await this.setNewTool();
    }
  }

  async setNewTool() {
    await this.props.setAdminDetail(this.newTool);
  }

  handleChange(tool, field, event) {
    console.log(tool, field);
    console.log(tool[field]);
    this.props.tool[field] = event.target.value;
    console.log(tool[field]);
  }

  handleSubmit() {
    return;
  }

  render() {
    console.log("Tool", this.props.tool);
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
  const { adminDetailTool } = state;
  return { tool: adminDetailTool };
};

export default connect(mapStateToProps, { setAdminDetail })(Admin);
