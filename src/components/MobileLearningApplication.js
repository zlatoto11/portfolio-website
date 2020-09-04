import React from "react";
import styled from "styled-components";
import ThirdYearDissertation from "./ThirdYearDissertation.pdf";

const Styles = styled.div`
  .test {
    background-color: white;
  }
  .container-fluid {
    border: 3px solid red;
    padding: 0px;
  }
  .my-container {
    color: black;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 1px;
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.3);
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
  section {
    background-color: #1c1b1b;
    padding-top: 5vh;
    padding-bottom: 5vh;
    min-height: 94vh;
  }
  a {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export const MobileLearningApplication = () => (
  <React.Fragment>
    <Styles>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="project-picture">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="img-fluid"
                    src="https://www.youtube.com/embed/lp4yDZqYeak"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">Mobile Learning Application</h2>
                <p className="main-text">
                  For my third year dissertation I created and tested the
                  effects of a multiple-choice mobile learning application on
                  human memory retention. In order to do this I organised and
                  lead a group of 12 individuals through a multiple week
                  learning experience in which I gathered and analysed the
                  results of the application.
                </p>
                <p className="main-text">
                  Results were taken at 3 separate stages of the revision
                  process. An initial test was conducted to determine a base
                  foundation of knowledge for each of the participants. At which
                  point they were split into two working groups. Group A and
                  Group B. One of the groups used the application to revise
                  whilst the other group revised through the use of provided
                  paper notes. At this point a further 2 tests were taken at a
                  weekly interval.
                </p>
                <p className="main-text">
                  At the end of the revision process both groups results were
                  compared to gain an understanding of the effect the
                  application had on their retention.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/Third-year-dissertation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The project's GitHub repository is available here
                  </a>
                </p>
                <p>
                  <a
                    href={ThirdYearDissertation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The accompanying paper is available to read in full here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Styles>
  </React.Fragment>
);
