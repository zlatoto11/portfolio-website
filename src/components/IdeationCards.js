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
    color: white;
    background-color: gray;
    width: 100%;
    height: 100%;
  }

  .main-post {
    background-color: #1c1b1b;
    padding-top: 5vh;
    padding-bottom: 5vh;
    min-height: 94vh;
  }
  .project-title {
    text-align: center;
    margin: 0px;
  }
  .main-text {
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1em;
  }
`;

export const IdeationCards = (props) => (
  <React.Fragment>
    <Styles>
      <div className="main-post">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg"
                class="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
            <div className="col-6">
              <div className="my-container">
                <h1 className="project-title">Project Title</h1>
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
