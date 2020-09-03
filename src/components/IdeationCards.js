import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .test {
    background-color: white;
  }
  .container-fluid {
    ${"" /* border: 3px solid red; */}
    border: 3px solid red;
    padding: 0px;
  }
  .my-row {
    border: 3px dotted blue;
  }
  .my-col {
    border: 3px solid green;
  }
  .rounded {
    max-height: 200px;
    mah-width: 200px;
  }
  .my-container {
    color: black;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 1px;
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.3);
  }

  .main-post {
    background-color: #1c1b1b;
    padding-top: 5vh;
    padding-bottom: 5vh;
    min-height: 94vh;
  }
  .project-title {
    text-align: center;
    margin: 0 5 5 5px;
    border-radius: 1px;
  }
  .main-text {
    padding-left: 1em;
    padding-right: 1em;
  }
  .project-picture {
  }
  .img-fluid {
    border-radius: 1px;
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const IdeationCards = () => (
  <React.Fragment>
    <Styles>
      <div className="main-post">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="project-picture">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg"
                  className="img-fluid"
                  alt="Responsive image"
                ></img>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">Ideation Cards Digisessions</h2>
                <p className="main-text">
                  text overflow. text overflow. text overflow. text overflow.
                  text overflow. text overflow. text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.text overflow.text overflow.text overflow.text
                  overflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  </React.Fragment>
);
