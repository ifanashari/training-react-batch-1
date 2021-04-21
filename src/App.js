import { BrowserRouter as Router } from "react-router-dom";

import RouteApp from "./Routes/RouteApp";

import React, { Component } from "react";
import TopNavigation from "./Components/TopNavigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default class APP extends Component {
  render() {
    return (
      <Router>
        <TopNavigation />
        <Container>
          <div className={`py-3`}>
            <RouteApp />
          </div>
        </Container>
      </Router>
    );
  }
}
