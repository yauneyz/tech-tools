import React from "react";
import { connect } from "react-redux";

import SuggestTableRow from "./SuggestTableRow";

class SuggestionTable extends React.Component {
  constructor() {
    super();

    this.state = { suggestions: [] };

    // These are the headers for the fields
    this.fields = ["Name", "URL", "Referrer Email"];

    this.updateParent = this.updateParent.bind(this);
  }

  async updateParent() {
    const res = await fetch("suggest");
    const suggestions = await res.json();
    this.setState({ suggestions: suggestions });
  }

  async componentDidMount() {
    const res = await fetch("suggest");
    const suggestions = await res.json();
    this.setState({ suggestions: suggestions });
  }

  render() {
    const header = this.fields.map((field, index) => (
      <th key={index}>{field}</th>
    ));

    // Get the rows
    const rows = this.state.suggestions.map((suggestion, index) => (
      <SuggestTableRow
        suggestion={suggestion}
        updateParent={this.updateParent}
        key={index}
      />
    ));

    return (
      <div>
        <table className="suggest-table table-responsive table">
          <thead>
            <tr>{header}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (_state) => {};

export default connect(mapStateToProps, {})(SuggestionTable);
