import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import zlatImage from "./zlat.png";
import "./fontawesome";

const Styles = styled.div`
.my-container{
    border: 1px solid green;
}
  }
.my-row {
    border: 3px solid red;
}
.my-col{
    border :3px dotted blue;
}
.leftside, .rightside{
    border: 3px dotted blue;
    height:50vh;
    width:100%;
}

.leftside{
    ${"" /* background:red; */}
}

.rightside{
    ${"" /* background:blue; */}
}
.rounded-circle{
    max-width:100%;
    max-height:100%;
}
.test{
    display: inline-block;
}

.inner {
  position: relative;
}
.name-header{
    font-size: 45px;
}

.styles-for-links{
    display: inline;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
li{
    display: inline;
}

.my-container {
    min-height: calc((var(--vh,1vh) * 100) - 60px);
    padding-left: 5%;
    padding-right: 5%;
}

`;

export const Introduction = () => (
  <Styles>
    <Container className="my-container" fluid>
      <Row className="my-row text-center">
        <Col className="leftside">
          <div className="outer">
            <div className="inner">Hello! My name is</div>
            <div className="inner">
              <h2 className="name-header">Zlatomir Kosev.</h2>
            </div>
            <div className="inner">
              I'm a recent graduate from the University of Nottingham, having
              achieved a First Class Honours.
            </div>
            <div className="inner">
              I am currently looking for a graduate job. You can find my CV
              here.
            </div>
          </div>
          <div className="social-links">
            <ul className="styles-for-links">
              <li>
                <a href="https://github.com/zlatoto11" target="_blank">
                  <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zlatomir-kosev-8219a7173/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
                </a>
              </li>
              <li>
                <a href="mailto:zlatomir_hk@hotmail.com" target="_blank">
                  <FontAwesomeIcon icon={["fas", "envelope"]} size="3x" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="rightside d-flex justify-content-center align-items-center">
          <img
            className="rounded-circle z-depth-2"
            alt="Picture of me"
            src={zlatImage}
            data-holder-rendered="true"
          ></img>
        </Col>
      </Row>
    </Container>
  </Styles>
);
