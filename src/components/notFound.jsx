import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div id="Notfound">
        <Link to="/cv">
          <h5>
            <u>Go Back to Ishara's CV - Click Here.</u>
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
