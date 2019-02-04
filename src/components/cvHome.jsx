import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import { saveAs } from "file-saver";
import CVAbout from "./cv/about";
import CVExeprience from "./cv/experience";
import CVEducation from "./cv/education";
import CVSkills from "./cv/skills";
import CVInterests from "./cv/interest";
import CVProjects from "./cv/projects";
import CVReferees from "./cv/referees";
import CVDownloadModel from "./common/CVDownloadModel";
import { getUserCVDetails, downloadCV } from "../services/cvService";
import loadingMask from "./../utils/img/loading_mask.gif";
import localPhoto from "./../utils/img/profile.png";

class cvHome extends Component {
  state = {
    profilePicture: null,
    cvDetails: []
  };

  async componentDidMount() {
    const cvDetails = await getUserCVDetails();
    let profilePicture = cvDetails.data[0].user.profileImage.filter(
      x => x.isActive === true
    )[0];
    profilePicture =
      profilePicture.isLocal === true ? localPhoto : profilePicture.path;
    scrollToComponent(this.cv_about, {
      offset: 0,
      align: "top",
      duration: 500
    });
    this.setState({ profilePicture, cvDetails });
  }

  downloadFile = async () => {
    const fileData = await downloadCV();
    saveAs(fileData.data, "CV - Ishara Madawa");
  };

  render() {
    if (this.state.cvDetails !== null) {
      if (this.state.cvDetails.data) {
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
                <span className="d-block d-lg-none">
                  {this.state.cvDetails.data[0].user.name}
                </span>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
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
                      href="#cv_skills"
                      onClick={() =>
                        scrollToComponent(this.cv_projects, {
                          offset: 0,
                          align: "top",
                          duration: 1000
                        })
                      }
                    >
                      Projects
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
                      href="#cv_referees"
                      onClick={() =>
                        scrollToComponent(this.cv_referees, {
                          offset: 0,
                          align: "top",
                          duration: 1000
                        })
                      }
                    >
                      Referees
                    </a>
                    <CVDownloadModel onDownload={this.downloadFile} />
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
                <CVAbout cvDetails={this.state.cvDetails} />
              </section>
              <hr className="m-0" />
              <section
                className=""
                ref={section => {
                  this.cv_exprience = section;
                }}
              >
                <CVExeprience cvDetails={this.state.cvDetails} />
              </section>
              <hr className="m-0" />
              <section
                className=""
                ref={section => {
                  this.cv_education = section;
                }}
              >
                <CVEducation cvDetails={this.state.cvDetails} />
              </section>
              <hr className="m-0" />
              <section
                className=""
                ref={section => {
                  this.cv_skills = section;
                }}
              >
                <CVSkills cvDetails={this.state.cvDetails} />
              </section>
              <hr className="m-0" />
              <section
                className=""
                ref={section => {
                  this.cv_projects = section;
                }}
              >
                <CVProjects cvDetails={this.state.cvDetails} />
              </section>
              <hr className="m-0" />
              <section
                className=""
                ref={section => {
                  this.cv_interests = section;
                }}
              >
                <CVInterests cvDetails={this.state.cvDetails} />
              </section>
              <hr className="m-0" />
              <section
                className=""
                ref={section => {
                  this.cv_referees = section;
                }}
              >
                <CVReferees cvDetails={this.state.cvDetails} />
              </section>
            </div>
          </React.Fragment>
        );
      } else {
        return (
          <div>
            <div id="loading-mask">
              {/* <img id="loading-mask-image" src={loadingMask} alt="Loading..." /> */}
            </div>
          </div>
        );
      }
    }
  }
}

export default cvHome;
