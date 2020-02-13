import React, { Component } from "react";

import LandingPage from "../../components/LandingPage/LandingPage";

export class Layout extends Component {
  state = {
    signedIn: false,
    key: null,
    appointments: {}
  };

  render() {
    return <LandingPage />;
  }
}

export default Layout;
