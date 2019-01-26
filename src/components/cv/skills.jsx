import React from "react";

const CVSkills = ({ cvDetails }) => {
  const userCV = cvDetails.data[0];
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="skills"
    >
      <div className="my-auto">
        <h2 className="mb-5">Skills & Tools</h2>
        <div className="row">
          {/* {userCV.skillSet.map(skill => (
            <div key={skill._id} className="col-sm-4 mb-3">
              <div className="card border-dark">
                <div className="card-header skillHeaders">
                  <b>{skill.title}</b>
                </div>
                <div className="card-body text-dark">
                  {skill.skills.map(ski => (
                    <b key={ski} className="card-text">
                      <i className="fa fa-wrench" />
                      {"  " + ski}
                      <br />
                    </b>
                  ))}
                </div>
              </div>
            </div>
          ))} */}
          {userCV.skillSet.map(skill => (
            <div key={skill._id} className="col-sm-12 mb-3">
              <b>{skill.title} : </b>
              {skill.skills.map((ski, i) => (
                <i key={ski} className="text-secondary">
                  {skill.skills.length === i + 1 ? ski : ski + "/ "}
                </i>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CVSkills;
