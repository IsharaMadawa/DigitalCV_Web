import React, { Component } from "react";
import CVAbout from "./cv/about";
import CVExeprience from "./cv/experience";
import scrollToComponent from "react-scroll-to-component";
import { getUserFacebookProfilePicture } from "../services/cvService";

class cvHome extends Component {
  state = {
    profilePicture: null
  };

  async componentDidMount() {
    const profilePicture = await getUserFacebookProfilePicture();
    scrollToComponent(this.cv_about, {
      offset: 0,
      align: "top",
      duration: 500
    });
    this.setState({ profilePicture });
  }

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a
            className="navbar-brand js-scroll-trigger"
            href="#cv_image"
            onClick={() =>
              scrollToComponent(this.cv_about, {
                offset: 0,
                align: "top",
                duration: 1000
              })
            }
          >
            <span className="d-block d-lg-none">Clarence Taylor</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={this.state.profilePicture}
                alt="madXish"
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="#cv_about"
                  onClick={() =>
                    scrollToComponent(this.cv_about, {
                      offset: 0,
                      align: "top",
                      duration: 1000
                    })
                  }
                >
                  About
                </a>
                <a
                  className="nav-link js-scroll-trigger"
                  href="#cv_exprience"
                  onClick={() =>
                    scrollToComponent(this.cv_exprience, {
                      offset: 0,
                      align: "top",
                      duration: 1000
                    })
                  }
                >
                  Exprience
                </a>
                <a
                  className="nav-link js-scroll-trigger"
                  href="#cv_education"
                  onClick={() =>
                    scrollToComponent(this.cv_education, {
                      offset: 0,
                      align: "top",
                      duration: 1000
                    })
                  }
                >
                  Education
                </a>
                <a
                  className="nav-link js-scroll-trigger"
                  href="#cv_skills"
                  onClick={() =>
                    scrollToComponent(this.cv_skills, {
                      offset: 0,
                      align: "top",
                      duration: 1000
                    })
                  }
                >
                  Skills
                </a>
                <a
                  className="nav-link js-scroll-trigger"
                  href="#cv_interests"
                  onClick={() =>
                    scrollToComponent(this.cv_interests, {
                      offset: 0,
                      align: "top",
                      duration: 1000
                    })
                  }
                >
                  Interests
                </a>
                <a
                  className="nav-link js-scroll-trigger"
                  href="#cv_awards"
                  onClick={() =>
                    scrollToComponent(this.cv_awards, {
                      offset: 0,
                      align: "top",
                      duration: 1000
                    })
                  }
                >
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid p-0">
          <section
            className=""
            ref={section => {
              this.cv_about = section;
            }}
          >
            <CVAbout />
          </section>
          <hr className="m-0" />
          <section
            className=""
            ref={section => {
              this.cv_exprience = section;
            }}
          >
            <CVExeprience />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default cvHome;
