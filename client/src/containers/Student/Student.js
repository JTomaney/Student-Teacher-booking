import React, { Component } from "react";

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
      </div>
    );
  }
}

export default Student;
