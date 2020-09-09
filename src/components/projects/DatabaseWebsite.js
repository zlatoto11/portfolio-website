import React from "react";
import styled from "styled-components";
import MusicWebsite from "../../assets/images/MusicWebsite.jpg";
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

export const DatabaseWebsite = () => (
  <React.Fragment>
    <Styles>
      <NavigationBar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="project-picture">
                <img
                  src={MusicWebsite}
                  className="img-fluid"
                  alt="Responsive"
                ></img>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">Music Database Website</h2>
                <p className="main-text">
                  A coursework extending on a previous "Catalogue of CDs"
                  database. Where the front end is built using HTML, CSS and
                  Javascript which connects to a database and execute's queries
                  using PHP and SQL.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/Databases-and-Interfaces"
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
