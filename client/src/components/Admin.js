import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setTools } from "../redux/actions";
import FiltersList from "./FiltersList";
import AdminTable from "./AdminTable";
import AdminDetail from "./AdminDetail";

class Admin extends React.Component {
  async componentDidMount() {
    const res = await fetch("tools");
    const tools = await res.json();
    this.props.setTools(tools);
  }

  render() {
    return (
      <div>
        <div className="admin-title-container">
          <div className="admin-suggest-link">
            <Link to="/suggest">View Suggestions</Link>
          </div>
          <div className="admin-title">Admin</div>
          <div className="right"></div>
        </div>
        <div className="admin-body">
          <FiltersList />
          <div className="admin-controls">
            <AdminTable tools={this.props.tools} />
            <AdminDetail />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tools } = state;
  return { tools: tools };
};

export default connect(mapStateToProps, { setTools })(Admin);
