import React from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";

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

class CardDetail extends React.Component {
  render() {
    const tool = this.props.tool;
    return (
      <div className="card-detail">
        <Popup open={this.props.open} modal>
          <h1>{tool.name}</h1>
          <p>{tool.description}</p>

          <p>
            <b>Category</b>:{tool.sub_category}
          </p>
          <p>
            <b>Sub-Category</b>:{tool.sub_category}
          </p>
          <button className="btn" onClick={() => this.props.setOpen(false)}>
            Close
          </button>
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

const mapStateToProps = (state, ownProps) => {
  const {} = state;
  const { tool } = ownProps;
  return { tool: tool };
};

export default connect(mapStateToProps, {})(Card);
