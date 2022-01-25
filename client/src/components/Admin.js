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
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Admin</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <Link to="/suggest">View Suggestions</Link>
              <FiltersList />
            </div>
            <div className="col-8">
              <AdminTable tools={this.props.tools} />
            </div>
            <div className="col-2">
              <AdminDetail />
            </div>
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
