import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HotKeys } from "react-hotkeys";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
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

    this.setState({ user, showAdminNav: false });
  }

  render() {
    const keyMap = {
      SHOW_ADMIN: ["m+a+d+x"]
    };

    const handlers = {
      SHOW_ADMIN: event => {
        if (!this.state.showAdminNav) {
          this.setState({ showAdminNav: true });
        } else {
          this.setState({ showAdminNav: false });
        }
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
