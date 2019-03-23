import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HotKeys } from "react-hotkeys";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import Admin from "./components/Admin";
import cvHome from "./components/cvHome";
import LoginForm from "./components/loginForm";
import MovieForm from "./components/movieForm";
import RegisterFrom from "./components/registerForm";
import NotFound from "./components/notFound";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();

    //Update admin navbar state from localstorage
    let serializedAdminState = localStorage.getItem(
      "https://isharamadawa.herokuap.com:adminstate"
    );
    if (serializedAdminState === null || serializedAdminState === "false") {
      this.setState({ user, showAdminNav: false });
    } else {
      this.setState({ user, showAdminNav: true });
    }
  }

  render() {
    const keyMap = {
      SHOW_ADMIN: ["m+a+d+x"]
    };

    const handlers = {
      SHOW_ADMIN: event => {
        let serializedAdminState = false;
        if (!this.state.showAdminNav) {
          this.setState({ showAdminNav: true });
          serializedAdminState = JSON.stringify(true);
        } else {
          this.setState({ showAdminNav: false });
          serializedAdminState = JSON.stringify(false);
        }

        //Save admin navbar state in localstorage
        localStorage.setItem(
          "https://isharamadawa.herokuap.com:adminstate",
          serializedAdminState
        );
      }
    };

    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        {this.state.showAdminNav ? <NavBar user={user} /> : null}
        <HotKeys keyMap={keyMap}>
          <div>
            <HotKeys handlers={handlers}>
              <main className="container">
                <Switch>
                  <Route path="/register" component={RegisterFrom} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/cv" component={cvHome} />
                  <ProtectedRoute path="/Admin" component={Admin} />
                  <ProtectedRoute path="/movies/:id" component={MovieForm} />
                  <Route
                    path="/movies"
                    render={props => (
                      <Movies {...props} user={this.state.user} />
                    )}
                  />
                  <Route path="/not-found" component={NotFound} />
                  <Redirect from="/" exact to="/cv" />
                  <Redirect exact to="/not-found" />
                </Switch>
              </main>
            </HotKeys>
          </div>
        </HotKeys>
      </React.Fragment>
    );
  }
}

export default App;
