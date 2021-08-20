import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";

// This is how they appear in the list
class CardDisplay extends React.Component {
  render() {
    const tool = this.props.tool;
    return (
      <div onClick={() => this.props.setOpen(true)}>
        <p>{tool.name}</p>
        <p>{tool.category}</p>
        <p>{tool.sub_category}</p>
      </div>
    );
  }
}

// A simple card detail item to help with formatting
function PopupField(props) {
  return (
    <div>
      <b>{props.label}</b>: {props.data}
    </div>
  );
}

// This is how cards appear as popup, but you MUST edit inside the popup tag
class CardDetail extends React.Component {
  render() {
    const tool = this.props.tool;
    return (
      <div className="card-detail">
        <Popup open={this.props.open} modal>
          <button
            className="btn horizontal-right fa fa-close popup-close"
            onClick={() => this.props.setOpen(false)}
          ></button>
          <div className="row">
            <div className="col-7">
              <b>{tool.name}</b>
              <p></p>
              <p>{tool.description}</p>

              <PopupField label="Category" data={tool.category} />
              <PopupField label="Sub-Category" data={tool.sub_category} />
              <PopupField label="Compatible OS" data={tool.compatible_os} />
              <PopupField label="Language" data={tool.language} />
              <PopupField label="Category" data={tool.company} />
            </div>
            <div className="col=5">Insert Image Here</div>
          </div>
          <div className="row">
            <a className="btn horizontal-center" href={tool.url}>
              VISIT WEBSITE
            </a>
          </div>
        </Popup>
      </div>
    );
  }
}

const Card = (props) => {
  const [open, setOpen] = React.useState(false);
  const tool = props.tool;
  return (
    <div className="card">
      <CardDisplay tool={tool} setOpen={setOpen} />
      <CardDetail setOpen={setOpen} open={open} tool={tool} />
    </div>
  );
};

const mapStateToProps = (_state, ownProps) => {
  const { tool } = ownProps;
  return { tool: tool };
};

export default connect(mapStateToProps, {})(Card);
