import React, { Component } from "react";
import Tabs from "../common/Tabs";
import General from "./eidtProfile/general";
import Social from "./eidtProfile/social";
import Experience from "./eidtProfile/Experience";
import { getUserProfiles } from "../../services/cvService";

class UserProfiles extends Component {
  state = {
    cvDetails: []
  };

  
  async componentDidMount() {
    const cvDetails = await getUserProfiles();
    this.setState({ cvDetails });
  }

  render() {
    return (
      <React.Fragment>
        <Tabs>
          <div label="General">
            <General />
          </div>
          <div label="Social">
            <Social cvDetails={this.state.cvDetails}/>
          </div>
          <div label="Experience">
            <Experience />
          </div>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default UserProfiles;
