import React, { Component } from "react";
import Dashboard from "./layouts";

class Main extends Component {
  render() {
    return (
      <>
        <Dashboard>
          <this.props.component />
        </Dashboard>
      </>
    );
  }
}

export default Main;
