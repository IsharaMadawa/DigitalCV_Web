import React from "react";

const CVAbout = ({ cvDetails }) => {
  const userCV = cvDetails.data[0];
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0">
          {userCV.user.name}
          <span className="text-primary">.</span>
        </h1>
        <div className="subheading mb-5">
          {userCV.user.address} {userCV.user.Mobile}
          <a href={userCV.user.email}>{userCV.user.email}</a>
        </div>
        <p className="lead mb-5">
          {userCV.user.myself}
        </p>
        <div className="social-icons">
          <a href="#icon">
            <i className="fa fa-linkedin-in" />
          </a>
          <a href="#icon">
            <i className="fa fa-github" />
          </a>
          <a href="#icon">
            <i className="fa fa-twitter" />
          </a>
          <a href="#icon">
            <i className="fa fa-facebook-f" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVAbout;
