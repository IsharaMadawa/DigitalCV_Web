import React from "react";

const CVExeprience = ({ cvDetails }) => {
  const userCV = cvDetails.data[0];
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="experience"
    >
      <div className="my-auto">
        <h2 className="mb-5">Experience</h2>
        {userCV.experience.map(exp => (
          <div
            key={exp.organizationShortName}
            className="resume-item d-flex flex-column flex-md-row mb-5"
          >
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{exp.position}</h3>
              <div className="subheading mb-3">
                {exp.organization} - {exp.organizationShortName}
                <h4>
                  <span className="badge badge-secondary">{exp.country}</span>
                </h4>
              </div>
              {exp.responsibilities.map(res => (
                <p key={res}>
                  <i className="fa fa-tasks" aria-hidden="true" />
                  {" " + res}
                </p>
              ))}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary"><b>{exp.duration}</b></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVExeprience;
