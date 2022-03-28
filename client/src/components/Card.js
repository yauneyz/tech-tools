import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";
import PopupBackground from "./PopupBackground";
import { func } from "joi";

// This is how they appear in the list
class CardDisplay extends React.Component {
  render() {
    const tool = this.props.tool;
    return (
      <div onClick={() => this.props.setOpen(true)}>
        <div>
          <div className="tool-title">{tool.name.toUpperCase()}</div>
          <img
            className="thumbnail-image img"
            src={process.env.PUBLIC_URL + "images/" + tool.title_image}
            onError={(event) => (event.target.style.display = "none")}
            alt={""}
          />
          <div className="tool-text">
            <div className="category-text">
              <div className="tool-header">Category</div>
              <div>{tool.category}</div>
            </div>
            <div className="grades-text">
              <span className="tool-header">Grades</span>
              <div>{tool.demographic}</div>
            </div>
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
      <div className="tool-detail">
        <PopupBackdrop open={this.props.open} />
        <Popup
          open={this.props.open}
          modal
          onClose={() => {
            this.props.setOpen(false);
          }}
        >
          <button
            className="btn fa fa-close popup-close"
            onClick={() => this.props.setOpen(false)}
          ></button>
          <div className="popup-images">
            <img
              className="action-image img"
              src={process.env.PUBLIC_URL + "images/" + tool.action_image}
              alt={""}
              onError={(event) => (event.target.style.display = "none")}
            />
          </div>
          <div>
            <b>{tool.name}</b>
            <p></p>
            <p>{tool.description}</p>
          </div>

          <PopupField label="Category" data={tool.category} />
          <PopupField label="Sub-Category" data={tool.sub_category} />
          <PopupField label="Compatible OS" data={tool.compatible_os} />
          <PopupField label="Language" data={tool.language} />
          <PopupField label="Category" data={tool.company} />
          <PopupField label="Cost (Low)" data={tool.cost_low} />
          <PopupField label="Cost (High)" data={tool.cost_high} />
          <div className="btn-visit-site">
            <a href={tool.url}>
              <button className="btn">VISIT WEBSITE</button>
            </a>
          </div>
          <div className="clear"></div>
        </Popup>
      </div>
    );
  }
}

const Card = (props) => {
  const [open, setOpen] = React.useState(false);
  const tool = props.tool;
  return (
    <div className="tool">
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
