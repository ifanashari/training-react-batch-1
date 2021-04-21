import React from "react";
import { Link } from "react-router-dom";
import "./../assets/css/top-navigation.css";
import { Container } from "react-bootstrap";

function TopNavigation() {
  return (
    <div className={`top-navigation text-white py-3`}>
      <Container>
        <div
          className={`w-100 d-flex justify-content-between align-items-center`}
        >
          <Link to={"/"} className="text-white">
            Home
          </Link>

          <Link to={"/topic"} className="text-white">
            Topics
          </Link>
          <Link to={"/about"} className="text-white">
            About
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default TopNavigation;
