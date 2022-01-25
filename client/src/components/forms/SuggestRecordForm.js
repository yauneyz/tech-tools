import React from "react";

class SuggestRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", url: "", showSuggestionForm: "d-none", email: "" };

    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
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

  handleEmailChange(event) {
    this.setState({ email: event.target.email });
  }

  toggleShowSuggestion(_event) {
    let newClass = "d-none";
    if (this.state.showSuggestionForm === "d-none") {
      newClass = "";
    }
    this.setState({ showSuggestionForm: newClass });
  }

  async handleSubmit(event) {
    event.preventDefault();
    // Add a record to the table to inform us that a suggestion has been recieved.

    try {
      const name = event.target.name.value;
      const url = event.target.url.value;
      const email = event.target.email.value;

      // Save the record
      const _res = await fetch("suggest/save", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ name: name, url: url, referrer_email: email }),
        headers: { "Content-Type": "application/json" },
      });
      alert("Suggestion Submitted");
    } catch (error) {
      alert("Submission Error. Try again later.");
    }
  }

  render() {
    return (
      <div>
        <button
          className="suggest-record btn-suggest btn"
          onClick={this.toggleShowSuggestion}
        >
          Suggest a Tool
        </button>
        <div className={this.state.showSuggestionForm}>
          <form className="suggestion-form" onSubmit={this.handleSubmit}>
            <label>
              Name of Tool:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange}
                className="form-control"
              />
            </label>
            <label>
              Website URL:
              <input
                type="text"
                name="url"
                value={this.state.url}
                onChange={this.handleURLChange}
                className="form-control"
              />
            </label>
            <label>
              Your Email:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
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
