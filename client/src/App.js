import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Table from "./components/Table";

//import {} from "./redux/actions";

import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/tools", () => [
      {
        id: "2",
        product: "Alice",
        description:
          "A drag and drop coding language used to program 3D objects, objects have preset motions and actions that can easily be used by beginner level students. The coding language can be made to look similar to Java script syntax",
        url: "http://www.alice.org/index.php",
        last_edited: "3/13/2020",
      },
      {
        id: 3,
        product: "Photon",
        description:
          "Photon is a robot that develops along with children which means that he can do as much as his owner (features are unlocked with the learners development).  He has touch, distance, displacemet, ground color (B&W) and sound sensors, illuminated eyes and antennae, and a speaker.  There is a narrative that goes along with the robot adding character, and objectives for the learner.",
        url: "http://meetphoton.com/en/home/",
      },
    ]);
  },
});

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
        </header>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {} = state;
  return {};
};

export default connect(mapStateToProps, {})(App);
