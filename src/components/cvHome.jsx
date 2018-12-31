import React, { Component } from "react";
import CVAbout from "./cv/about";
import CVExeprience from "./cv/experience";
import scrollToComponent from "react-scroll-to-component";

class cvHome extends Component {
  componentDidMount() {
    scrollToComponent(this.Blue, {
      offset: 0,
      align: "middle",
      duration: 500,
      ease: "inCirc"
    });
  }
  //   render() {
  //     return (
  //       <div className='main'>
  //         <div className='button_group'>
  //           <button onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1000})}>Go To Violet</button>
  //           <button onClick={() => scrollToComponent(this.Indigo, { offset: 0, align: 'bottom', duration: 1000})}>Go To Indigo</button>
  //           <button onClick={() => scrollToComponent(this.Blue, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>Go To Blue</button>
  //           <button onClick={() => scrollToComponent(this.Green, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'})}>Go To Green</button>
  //           <button onClick={() => scrollToComponent(this.Yellow, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Go To Yellow</button>
  //           <button onClick={() => scrollToComponent(this.Orange, { offset: 0, align: 'top', duration: 500, ease:'inCirc'})}>Go To Orange</button>
  //           <button onClick={() => scrollToComponent(this.Red, { offset: 0, align: 'top', duration: 500})}>Go To Red</button>
  //         </div>
  //         <section className='violet' ref={(section) => { this.Violet = section; }}><CVAbout/></section>
  //         <section className='indigo' ref={(section) => { this.Indigo = section; }}><CVExeprience/></section>
  //         <section className='blue' ref={(section) => { this.Blue = section; }}>Blue</section>
  //         <section className='green' ref={(section) => { this.Green = section; }}>Green</section>
  //         <section className='yellow' ref={(section) => { this.Yellow = section; }}>Yellow</section>
  //         <section className='orange' ref={(section) => { this.Orange = section; }}>Orange</section>
  //         <section className='red' ref={(section) => { this.Red = section; }}>Red</section>
  //         <b>Inspired By <a href="https://hopechen1028.github.io/hopechen.me/" target="_blank">Hope</a> with Love and Peace</b>
  //       </div>
  //     )
  //   }
  // }

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
          {/* <a
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
          </a> */}
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
                <button
                  onClick={() =>
                    scrollToComponent(this.Violet, {
                      offset: 0,
                      align: "top",
                      duration: 1000
                    })
                  }
                >
                  About
                </button>
                <button
                  onClick={() =>
                    scrollToComponent(this.Indigo, {
                      offset: 0,
                      align: "bottom",
                      duration: 1000
                    })
                  }
                >
                  Exprience
                </button>
                {/* <a
                  className="nav-link js-scroll-trigger"
                  ref={this.myRef}
                  href="#"
                  onClick={() => this.handleScrollToElement(this)}
                >
                  About
                </a> */}
                {/* <button
                  className="nav-link js-scroll-trigger"
                  onClick={() => this.handleScrollToElement(this)}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link js-scroll-trigger"
                  onClick={() => this.handleScrollToElement(this)}
                >
                  Experience
                </button>
              </li> */}
                {/* <li className="nav-item">
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
               */}
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid p-0">
          <section
            className="violet"
            ref={section => {
              this.Violet = section;
            }}
          >
            <CVAbout />
          </section>
          <hr className="m-0" />
          <section
            className="indigo"
            ref={section => {
              this.Indigo = section;
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
