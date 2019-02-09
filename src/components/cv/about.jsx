import React from "react";
// import CVDownloadModel from "../common/CVDownloadModel";

const CVAbout = ({ cvDetails, onDownload }) => {
  const userCV = cvDetails.data[0];

  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <div className="mb-0">
          <h1 className="responsivename">
            {userCV.user.name}
            <span className="text-primary">.</span>
          </h1>
        </div>
        <div className="subheading hideHedding">
          {userCV.user.address} {userCV.user.Mobile}
        </div>
        <div className="user-email">
          <a href={"mailto:" + userCV.user.email}>{userCV.user.email}</a>
        </div>
        <div className="cvdownloadPopupAbout mt-3">
          {/* <CVDownloadModel onDownload={onDownload} /> */}
          <input
            type="button"
            onClick={onDownload}
            className="btn btn-light font-weight-bold"
            value="Download CV"
          />
        </div>
        <p className="lead mb-5 mt-3">{userCV.user.myself}</p>
        <div className="social-icons">
          {userCV.user.blogging.map(blog => (
            <a
              className="mt-1"
              key={blog.site}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={blog.iconPath}
                alt={blog.site}
                className="img-thumbnail"
              />
            </a>
          ))}
          {userCV.svn.map(blog => (
            <a
              className="mt-1"
              key={blog.site}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={blog.iconPath}
                alt={blog.site}
                className="img-thumbnail"
              />
            </a>
          ))}
          {userCV.user.social.map(blog => (
            <a
              className="mt-1"
              key={blog.site}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={blog.iconPath}
                alt={blog.site}
                className="img-thumbnail"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVAbout;
