import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import zlatImage from "../assets/zlat.png";

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
`;

export const Introduction = () => (
  <Styles>
    <Container className="my-container" fluid>
      <Row className="my-row text-center">
        <Col className="leftside md-6 mb-4 no-gutters d-flex justify-content-center align-items-center">
          <h2 className="my-5 h2">Basic example</h2>
        </Col>
        <Col className="rightside md-6 mb-4">
          <img
            className="rounded-circle z-depth-2"
            alt="Picture of me"
            src="https://i.imgur.com/p6ct2Nc.png"
            data-holder-rendered="true"
          ></img>
        </Col>
      </Row>
    </Container>
  </Styles>
);
