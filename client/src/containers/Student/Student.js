import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Student extends Component {
  state = {
    name: "",
    email: "",
    selectedAppointment: null
  };

  render() {
    return (
      <div>
        <input type="text" value="Your Name" />
        <input type="email" value="Your Email Address" />
        <Link className="time_table_btn_link" to="/table"><button>Time Table</button></Link>
      </div>
    );
  }
}

export default Student;
