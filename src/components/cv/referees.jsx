import React from "react";

const CVReferees = ({ cvDetails }) => {
  const userCV = cvDetails.data[0];
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="education"
    >
      <div className="my-auto">
        <h2 className="mb-5">Referees</h2>
        {userCV.referees.map(ref => (
          <div
            key={ref.email}
            className="resume-item d-flex flex-column flex-md-row mb-5"
          >
            <div className="resume-content mr-auto">
              <h3 className="mb-0">
                {ref.title} {ref.name}
              </h3>
              <div className="subheading">{ref.position}</div>
              <div>
                <b>Company</b> : {ref.organization}
              </div>
              <div>
                <b>E-Mail</b> :<a href={"mailto:" + ref.email}>{ref.email}</a>
              </div>
              {ref.mobileNo.map(mob => (
                <div key={mob}>
                  <b>Mobiel</b> : {mob}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVReferees;
