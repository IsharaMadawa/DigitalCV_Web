import React from "react";

const CVAbout = ({ cvDetails }) => {
  const userCV = cvDetails.data[0];
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0 responsivename">
          {userCV.user.name}
          <span className="text-primary">.</span>
        </h1>
        <div className="subheading mb-5">
          {userCV.user.address} {userCV.user.Mobile}
          <a href={"mailto:" + userCV.user.email}>{userCV.user.email}</a>
        </div>
        <p className="lead mb-5">{userCV.user.myself}</p>
        <div className="social-icons">
          {userCV.user.blogging.map(blog => (
            <a key={blog.site} href={blog.url} target="_blank"rel="noopener noreferrer">
              <img
                src={blog.iconPath}
                alt={blog.site}
                className="img-thumbnail"
              />
            </a>
          ))}
          {userCV.svn.map(blog => (
            <a key={blog.site} href={blog.url} target="_blank" rel="noopener noreferrer">
              <img
                src={blog.iconPath}
                alt={blog.site}
                className="img-thumbnail"
              />
            </a>
          ))}
          {userCV.user.social.map(blog => (
            <a key={blog.site} href={blog.url} target="_blank" rel="noopener noreferrer">
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
