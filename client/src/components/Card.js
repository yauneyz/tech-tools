import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import PopupBackground from "./PopupBackground";

// This is how they appear in the list
class CardDisplay extends React.Component {
  render() {
    const tool = this.props.tool;
    return (
      <div onClick={() => this.props.setOpen(true)}>
        <img className="card-img-top" src="..." alt=""></img>
        <div className="card-body">
          <h5 className="card-title text-center">{tool.name.toUpperCase()}</h5>
          <div className="row card-text">
            <div className="col-6">
              <b>Category</b>
            </div>
            <div className="col-6">{tool.category}</div>
          </div>
          <div className="row card-text">
            <div className="col-6">
              <b>Grades</b>
            </div>
            <div className="col-6">{tool.demographic}</div>
          </div>
        </div>
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

function PopupBackdrop(props) {
  if (props.open) {
    return <div className="backdrop" />;
  } else {
    return null;
  }
}

// This is how cards appear as popup, but you MUST edit inside the popup tag
class CardDetail extends React.Component {
  render() {
    const tool = this.props.tool;
    return (
      <div className="card-detail">
        <PopupBackdrop open={this.props.open} />
        <Popup
          open={this.props.open}
          modal
          onClose={() => {
            this.props.setOpen(false);
          }}
        >
          <button
            className="btn horizontal-right fa fa-close popup-close"
            onClick={() => this.props.setOpen(false)}
          ></button>
          <img
            className="title-image img"
            src={process.env.PUBLIC_URL + tool.title_image}
            alt={"logo"}
          />
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
            <div className="col-5">
              <img
                className="action-image"
                src={process.env.PUBLIC_URL + tool.action_image}
                alt={"logo"}
              />
            </div>
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
    <div className="col py-2">
      <div className="card h-100">
        <CardDisplay tool={tool} setOpen={setOpen} />
        <CardDetail setOpen={setOpen} open={open} tool={tool} />
      </div>
    </div>
  );
};

const mapStateToProps = (_state, ownProps) => {
  const { tool } = ownProps;
  return { tool: tool };
};

export default connect(mapStateToProps, {})(Card);
