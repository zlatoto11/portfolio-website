import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
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
    <Navbar expand="lg">
      <Navbar.Brand href="/">Zlatomir Kosev</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cv">CV</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/ideationcards">ideationcards</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
