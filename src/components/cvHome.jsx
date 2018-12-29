import React, { Component } from "react";
import CVAbout from "./cv/about";
import CVExeprience from "./cv/experience";

class cvHome extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleScrollToElement(event) {
    if (1 === 1) {
      //window.scrollTo(0, this.myRef.current.offsetTop);
      window.scrollTo({
        top: this.myRef.current.offsetTop - 20,
        behavior: "smooth"
      });
    }
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
            ref={this.myRef}
            href="#"
          >
            <span className="d-block d-lg-none">Clarence Taylor</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="/utils/img/profile.jpg"
                alt=""
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
                  ref={this.myRef}
                  href="#"
                  onClick={() => this.handleScrollToElement(this)}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link js-scroll-trigger"
                  ref={this.myRef}
                  onClick={() => this.handleScrollToElement(this)}
                >
                  Experience
                </button>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  ref={this.myRef}
                  href="#"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  ref={this.myRef}
                  href="#"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  ref={this.myRef}
                  href="#"
                >
                  Interests
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  ref={this.myRef}
                  href="#"
                >
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid p-0">
          <CVAbout refProp={this.myRef} />
          <hr className="m-0" />
          <CVExeprience refProp={this.myRef} />
        </div>
      </React.Fragment>
    );
  }
}

export default cvHome;
