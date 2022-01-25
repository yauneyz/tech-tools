import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setTools } from "../redux/actions";
import SuggestTable from "./SuggestTable";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <span>
                <Link to="/admin">Admin Home</Link>
                <h1>Suggestions</h1>
              </span>
              <SuggestTable />
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
