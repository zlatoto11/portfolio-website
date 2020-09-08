import React from "react";
import styled from "styled-components";
import PersonalWebsiteImage from "../../assets/images/PersonalWebsite.jpg";
import { NavigationBar } from "../NavigationBar";

const Styles = styled.div`
  .container-fluid {
    border: 3px solid red;
    padding: 0px;
  }
  .my-container {
    color: black;
    background-color: #181a25;
    width: 100%;
    height: 100%;
    border-radius: 1px;
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.1);
  }

  .project-title {
    color: #0b919d;
    text-align: center;
    margin: 0 5 5 5px;
    border-radius: 1px;
  }
  .main-text {
    color: #bfbfbf;
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
    background-color: #101119;
    padding-top: 5vh;
    padding-bottom: 5vh;
    min-height: 100vh;
  }
  a {
    padding-left: 1em;
    padding-right: 1em;
  }

  li {
    color: #bfbfbf;
  }
`;

export const PersonalWebsite = () => (
  <React.Fragment>
    <Styles>
      <NavigationBar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="project-picture">
                <img
                  src={PersonalWebsiteImage}
                  className="img-fluid"
                  alt="Responsive"
                ></img>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">Personal Website</h2>
                <p className="main-text">
                  This website is another one of my personal projects, developed
                  with the intent of learning React-Bootstrap and trying to
                  catch myself up to date with front-end development. I also
                  used this as a way to improve on my HTML, CSS and Javascript
                  skills and it was made with the intent to be used in the
                  future to display my projects.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/portfolio-website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The project's GitHub repository is available here
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
