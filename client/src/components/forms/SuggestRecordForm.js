import React from "react";

class SuggestRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", url: "", showSuggestionForm: "d-none" };

    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.toggleShowSuggestion = this.toggleShowSuggestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleURLChange(event) {
    this.setState({ url: event.target.value });
  }

  toggleShowSuggestion(_event) {
    let newClass = "d-none";
    if (this.state.showSuggestionForm === "d-none") {
      newClass = "";
    }
    this.setState({ showSuggestionForm: newClass });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Send an email to someone saying we have a new record

    const target = process.env.SUGGEST_EMAIL;

    alert("Suggestion Submitted");
  }

  render() {
    return (
      <div>
        <button
          className="suggest-record btn-suggest btn"
          onClick={this.toggleShowSuggestion}
        >
          Suggest a Record
        </button>
        <div className={this.state.showSuggestionForm}>
          <form className="suggestion-form" onSubmit={this.handleSubmit}>
            <label>
              Name of Tool:
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
                className="form-control"
              />
            </label>
            <label>
              Website URL:
              <input
                type="text"
                value={this.state.url}
                onChange={this.handleURLChange}
                className="form-control"
              />
            </label>
            <input className="btn-suggest" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SuggestRecordForm;
