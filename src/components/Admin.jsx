import React, { Component } from "react";
import { Redirect, Link, Switch } from "react-router-dom";
import ProtectedRoute from "../components/common/protectedRoute";
import UserProfiles from "./userProfile/userProfiles";
import Settings from "./userProfile/settings";

class Admin extends Component {

  render() {
    return (
      <div id="admin-container">
        <nav className="navbar navbar-expand-md navbar-dark bg-primary admin-fixed-left">
          <a className="navbar-brand" href="/Admin/UserProfiles">
            Admin Dashboard
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin/UserProfiles"}>
                  All CV Profiles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Admin/Settings"}>
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <ProtectedRoute
            path={"/Admin/UserProfiles"}
            component={UserProfiles}
          />
          <ProtectedRoute path={"/Admin/Settings"} component={Settings} />
          <Redirect from="/Admin" exact to="/Admin/CVProfile" />
        </Switch>
      </div>
    );
  }
}

export default Admin;
