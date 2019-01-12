import React from "react";

const CVInterests = ({ cvDetails }) => {
  const userCV = cvDetails.data[0];
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex flex-column"
      id="interests"
    >
      <div className="my-auto">
        <h2 className="mb-5">Interests</h2>
        {userCV.interest.map(intr => (
          <div key={intr}>
            <i>
              <i className="fa fa-map-pin" />
              {" " + intr}
            </i>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CVInterests;
