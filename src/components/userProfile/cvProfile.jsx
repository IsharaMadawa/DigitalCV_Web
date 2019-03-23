import React, { Component } from "react";
import Tabs from "../common/Tabs";

class CVProfile extends Component {
  render() {
    return (
      <div className="row">
        <h1>Profile Page</h1>
        <Tabs>
          <div label="Gator">
            See ya later, <em>Alligator</em>!
          </div>
          <div label="Croc">
            After 'while, <em>Crocodile</em>!
          </div>
          <div label="Sarcosuchus">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
      </div>
    );
  }
}

export default CVProfile;
