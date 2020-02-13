import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "../../components/LandingPage/LandingPage";
import Student from "../Student/Student";

export class Layout extends Component {
  state = {
    signedIn: false,
    key: null,
    appointments: [
      {
        appointment1: {
          name: "Budgie",
          time: 3,
          email: "budgie@jbrules.com"
        },
        appointment2: {
          name: "Budgie",
          time: 3,
          email: "budgie@jbrules.com"
        },
        appointment3: {
          name: "Budgie",
          time: 3,
          email: "budgie@jbrules.com"
        }
      }
    ]
  };

  render() {
    return (
      <Switch>
        <Route path="/student" component={Student} />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}

export default Layout;
