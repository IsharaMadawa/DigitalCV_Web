import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: { name: "", username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string().email({ minDomainAtoms: 2 }).label("Username"),
    password: Joi.string()
      .min(3)
      .max(15)
      .required().label("Password"),
    name: Joi.string().required().label("Name")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    }
    catch (ex) {
      if (ex.response && ex.response.state === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("name", "Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register", "btn btn-success", null, this.doSubmit)}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
