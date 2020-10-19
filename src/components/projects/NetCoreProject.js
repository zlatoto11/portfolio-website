import React from "react";
import styled from "styled-components";
import BookListImage from "../../assets/images/BookListImage.png";
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
    height: 100vh;
  }
  a {
    padding-left: 1em;
    padding-right: 1em;
  }
  .youtube-link {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const NetCoreProject = () => (
  <React.Fragment>
    <Styles>
      <NavigationBar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="project-picture">
                <div className="project-picture">
                  <img
                    src={BookListImage}
                    className="img-fluid"
                    alt="Responsive"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">
                  Learning ASP.NET Core 3.1 Tutorial{" "}
                </h2>
                <p className="main-text">
                  To create this .NET application i followed the{" "}
                  <a
                    className="youtube-link"
                    href="https://www.youtube.com/watch?v=C5cnZ-gZy2I"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FreeCodeCamp's tutorial
                  </a>
                  . This was done to further improve my skills with the
                  languages and technologies used. These were :
                  <ul>
                    <li>.NET Core</li>
                    <li>SQL Server</li>
                    <li>HTML, CSS</li>
                    <li>JavaScript</li>
                    <li>C#</li>
                    <li>ASP.NET</li>
                  </ul>
                </p>
                <p className="main-text">
                  {" "}
                  The final product has two separate versions, one created with
                  Razor Pages and another one created with MVC. Both versions
                  have the exact same functionality just achieved in the
                  different ways.
                </p>
                <p className="main-text">
                  The user can complete all CRUD operations on the database
                  through the use of a visual table. In order to fill this table
                  the application pulls data from an API and dynamically fills
                  it.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/Learn-ASP.NET"
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
