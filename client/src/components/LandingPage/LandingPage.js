import React from "react";
import { Link } from "react-router-dom";

const landingPage = props => {
  return (
    <div>
      <Link className="student_btn_link" to="/student"><button>Student</button></Link>
      <button>Teacher</button>
    </div>
  );
};

export default landingPage;
