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
          <Link className="admin-suggest-link" to="/suggest">
            View Suggestions
          </Link>
          <span className="admin-title">Admin</span>
        </div>
        <FiltersList />
        <AdminTable tools={this.props.tools} />
        <AdminDetail />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tools } = state;
  return { tools: tools };
};

export default connect(mapStateToProps, { setTools })(Admin);
