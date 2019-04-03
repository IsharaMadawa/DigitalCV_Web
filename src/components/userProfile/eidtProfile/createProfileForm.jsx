import React from "react";
import Form from "../../common/Form";

class CreateProfileForm extends Form {
  render() {
    return (
      <React.Fragment>
        <h3>Experience</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Full Name", "Full Name")}
          {this.renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default CreateProfileForm;
