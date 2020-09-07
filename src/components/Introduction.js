import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import zlatImage from "../assets/images/ZlatImage.jpeg";
import FinalResume from "../assets/FinalResume.pdf";
import "./fontawesome";

const Styles = styled.div`

@media screen and (min-width: 52em)
.my-container{
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.my-container{
    display: flex;
    box-sizing: border-box;
    min-width: 0px;
    max-height: 1000px;
    justify-content: center;
    align-items: center;
    margin: 0px;
    background-color: #181A25;
    min-height: calc((var(--vh,1vh) * 100) - 60px);
    padding-top: 30px;
    padding-left: 15%;
    padding-right: 15%;
    padding-bottom: 5%;
}
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
    display: flex;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start:0px;
    justify-content: center;
    align-items: center;
}
li{
    display: inline-block;
    margin-right: 1em;
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
  color:#bfbfbf;
}

.name-header{
  font-weight: 800;
  color:white;
}

.red-text{
  display:inline;
  color: #ef233c;
}

.inner{
  font-weight: 500;
}

small{
  font-weight: 600;
}

.leftside{
  font-size:110%;
}
.linktoprojects{
  color: #ef233c;
}

.circular--portrait {
  position: flex;
  width: auto;
  height: auto;
  max-height:600px;
  overflow: hidden;
  border-radius: 50%;
}

.circular--portrait img {
  width: 100%;
  height: auto;
}
`;

export const Introduction = () => (
  <Styles>
    <Container fluid className="my-container">
      <Row className="my-row">
        <Col md="6" className="leftside">
          <div className="outer">
            <div className="inner-header">
              <small> Hello! My name is</small>
              <h1 className="name-header">
                Zlatomir Kosev<span className="red-text">.</span>
              </h1>
            </div>
            <div className="inner">
              <p>
                I'm a programmer and computer scientist, who is a recent
                graduate from the
                <span className="red-text"> University of Nottingham</span>{" "}
                where I achieved a{" "}
                <span className="red-text">First Class Honours</span>.
              </p>
            </div>
            <div className="inner">
              <p>
                I'm currently looking to continue improving in a work setting.
                Below is a{" "}
                <span className="red-text">
                  <Link to={"/projects"} className="linktoprojects">
                    list of projects
                  </Link>
                </span>{" "}
                I have undertaken both inside and outside of university.
              </p>
              <p>
                You can find my{" "}
                <span className="red-text">
                  <a
                    className="red-text"
                    href={FinalResume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CV
                  </a>
                </span>{" "}
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
              <li>
                <a href={FinalResume} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={["fas", "id-card"]} size="3x" />
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          md="6"
          className="rightside d-flex justify-content-center align-items-center"
        >
          <div className="circular--portrait">
            <img
              src={zlatImage}
              className="portrait-image"
              alt="me"
              data-holder-rendered="true"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </Styles>
);
