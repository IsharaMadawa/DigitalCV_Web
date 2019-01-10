import React from "react";

import linkedinIcon from "./../../utils/icon/linkedin-icon.png";
import githubIcon from "./../../utils/icon/github-icon.png";
import bitbucketIcon from "./../../utils/icon/bitbucket-icon.png";
import facebookIcon from "./../../utils/icon/Blogger.png";
import bloggerIcon from "./../../utils/icon/facebook-icon.png";
import twitterIcon from "./../../utils/icon/twitter-icon.png";

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
        <p className="lead mb-5">{userCV.user.myself}</p>
        <div className="social-icons">
          <a href="#icon">
            <img src={linkedinIcon} alt="Linked-In" class="img-thumbnail" />
          </a>
          <a href="#icon">
            <img src={githubIcon} alt="Github" class="img-thumbnail" />
          </a>
          <a href="#icon">
          <img src={bitbucketIcon} alt="Bit-Bucket" class="img-thumbnail" />
          </a>
          <a href="#icon">
          <img src={facebookIcon} alt="facebook" class="img-thumbnail" />
          </a>
          <a href="#icon">
          <img src={bloggerIcon} alt="blogger" class="img-thumbnail" />
          </a>
          <a href="#icon">
          <img src={twitterIcon} alt="twitter" class="img-thumbnail" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVAbout;
