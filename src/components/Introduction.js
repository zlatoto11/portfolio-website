import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import zlatImage from "./zlat.png";
import "./fontawesome";

const Styles = styled.div`

@media screen and (min-width: 52em)
.my-container{
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.my-container{
    box-sizing: border-box;
    min-width: 0px;
    max-height: 1000px;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    display: flex;
    margin: 0px;
    background-color: #222;
    min-height: calc((var(--vh,1vh) * 100) - 80px);
    padding-left: 5%;
    padding-right: 5%;
}
  }
.my-row {
    ${"" /* border: 3px solid red; */}
}
.my-col{
    ${"" /* border :3px dotted blue; */}
}
.leftside, .rightside{
    ${"" /* border: 3px dotted blue; */}
    height:50vh;
    width:100%;
}

.leftside{
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
    display: inline-block;
    margin-right: 8px;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
small{
    font-weight: 400;
    display: block;
    position: relative;
    font-size: 100%;
}

h1{
  margin-bottom: 1em;
}

p,h1,h2, small{
  color:white;
}

`;

export const Introduction = () => (
  <Styles>
    <Container className="my-container" fluid>
      <Row className="my-row text-center">
        <Col className="leftside">
          <div className="outer">
            <div className="inner">
              <small>Hello! My name is</small>
              <h1 className="name-header">Zlatomir Kosev.</h1>
            </div>
            <div className="inner">
              <p>
                I'm a recent graduate from the University of Nottingham, having
                achieved a First Class Honours.
              </p>
            </div>
            <div className="inner">
              <p>
                I am currently looking for a graduate job. You can find my CV
                here.
              </p>
            </div>
          </div>
          <div className="social-links">
            <ul className="styles-for-links">
              <li>
                <a
                  href="https://github.com/zlatoto11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zlatomir-kosev-8219a7173/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:zlatomir_hk@hotmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fas", "envelope"]} size="3x" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="rightside d-flex justify-content-center align-items-center">
          <img
            className="rounded-circle z-depth-2"
            alt="me"
            src={zlatImage}
            data-holder-rendered="true"
          ></img>
        </Col>
      </Row>
    </Container>
  </Styles>
);
