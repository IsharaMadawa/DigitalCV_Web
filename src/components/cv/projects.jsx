import React from "react";

const CVProjects = ({ cvDetails }) => {
  const userCV = cvDetails.data[0];
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education"
    >
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>

        {userCV.projects.map(proj => (
          <div
            key={proj._id}
            className="resume-item d-flex flex-column flex-md-row mb-5"
          >
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                {proj.name}{" "}
                {proj.title !== "" ? " - (" + proj.title + ")" : null}
              </h3>
              <h4>
                {proj.company === "Hobby" ? (
                  <span className="badge badge-success mr-2">For Hobby</span>
                ) : (
                  <span className="badge badge-secondary mr-2">
                    Company : {proj.company}
                  </span>
                )}

                {proj.MostReasonHighlights === true ? (
                  <span className="badge badge-danger mr-2">
                    Most Reason Highlights
                  </span>
                ) : null}
              </h4>
              <p>{proj.details}</p>
              {proj.github.map(git => (
                <div key={git} className="mr-auto">
                  <a href={git}>{git}</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVProjects;
