import React from "react";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  .navbar {
    background-color: #181a25;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    ${"" /* instead of doing the whole .navbar-brand:hover,.navbar-nav .nav-link:hover. using &hover does the same */}
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>
        <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  </Styles>
);
