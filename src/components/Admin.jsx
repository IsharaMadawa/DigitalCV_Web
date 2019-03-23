import React, { Component } from "react";
import { Route, Redirect, Link, Switch } from "react-router-dom";
import CVProfile from "./userProfile/cvProfile";
import Settings from "./userProfile/settings";

class Admin extends Component {
  render() {
    return (
      <div id="admin-container">
        <nav className="navbar navbar-expand-md navbar-dark bg-primary admin-fixed-left">
          <a className="navbar-brand" href="/Admin">
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
                <Link className="nav-link" to={"/Admin/CVProfile"}>
                  Edit Profile
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
          <Route path={"/Admin/CVProfile"} component={CVProfile} />
          <Route path={"/Admin/Settings"} component={Settings} />
          <Redirect from="/Admin" exact to="/Admin/CVProfile" />
        </Switch>
      </div>
    );
  }
}

export default Admin;
