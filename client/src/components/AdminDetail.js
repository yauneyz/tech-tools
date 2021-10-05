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
  }
  componentDidMount() {}

  setNewTool() {
    this.props.setAdminDetail(this.newTool);
  }

  render() {
    const tool = this.props.tool ? this.props.tool : this.newTool;
    let fields = Object.getOwnPropertyNames(tool);

    // Remove the _id field
    const idIndex = fields.indexOf("_id");
    fields.splice(idIndex, 1);

    const vIndex = fields.indexOf("_v");
    fields.splice(vIndex, 1);

    const formInputs = fields.map((field, index) => (
      <label key={index}>
        {field}:
        <input type="text" name={field} value={tool[field]} />
      </label>
    ));

    return (
      <div>
        <button onClick={this.setNewTool}>New Tool</button>
        <form>
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
