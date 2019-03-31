import React from "react";
import { Link } from "react-router-dom";

const AppError = () => {
  return (
    <div id="app-error">
      <h3>
        Oops! Something Wronge...! Be patient and try again. It will be back
        online soon...! Thnaks!{" "}
      </h3>
      <Link to="/cv">
        <h5>
          <u>Try again to refresh - Click Here.</u>
        </h5>
      </Link>
    </div>
  );
};

export default AppError;
