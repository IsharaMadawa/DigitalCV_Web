import React from "react";

const Textarea = ({ name, lable, error, ...rest }) => {
  return (
    <div className="form-group row">
      <label htmlFor="username" className="col-sm-2 col-form-label">
        {lable}
      </label>
      <div className="col-sm-10">
        <textarea {...rest} id={name} name={name} className="form-control mb-1" />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default Textarea;