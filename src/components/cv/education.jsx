import React from "react";

const CVEducation = ({ cvDetails }) => {
  const userCV = cvDetails.data[0];
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education"
    >
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>
        {userCV.education.map(edu => (
          <div key={edu.title} className="resume-item mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{edu.institute}</h3>
              <b className="text-secondary">{"(" + edu.duration + ")"}</b>
              <h5>{edu.title}</h5>
              <h5 className="mb-5">
                <span className="badge badge-secondary">{edu.marks}</span>
              </h5>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVEducation;
