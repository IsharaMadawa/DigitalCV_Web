import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../../common/Form";
import { createProfile } from "../../../services/cvService";

class CreateProfileForm extends Form {
  state = {
    data: { fullName: "", mobile: "", email: "", address: "", mySelf: "" },
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleClick = () => {
    this.props.onCancel(false);
  };

  schema = {
    fullName: Joi.string()
      .max(255)
      .required()
      .label("Name"),
    mobile: Joi.string()
      .min(10)
      .max(13)
      .required()
      .label("Mobile No."),
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    address: Joi.string()
      .min(0)
      .max(255)
      .required()
      .label("Address"),
    mySelf: Joi.string()
      .required()
      .label("My Self")
  };

  async doSubmit() {
    try {
      const res = await createProfile(this.state.data);
      if (res && res.status === 200) {
        this.props.afterSubmit(true);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 404) toast.error(ex.message);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="mb-3">Create New Profile</h3>
        <form
          id="CreateProfileForm"
          onSubmit={this.handleSubmit}
          className="mb-3"
        >
          {this.renderInput("fullName", "Full Name")}
          {this.renderInput("mobile", "Mobile")}
          {this.renderInput("email", "Email")}
          {this.renderInput("address", "Address")}
          {this.renderTextarea("mySelf", "My Self")}
          {this.renderSubmitButton(
            "Register",
            "btn btn-primary mr-2",
            "fas fa-plus"
          )}
          {this.renderButton(
            "Cancel",
            "btn btn-danger",
            "fas fa-ban",
            this.handleClick
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default CreateProfileForm;
