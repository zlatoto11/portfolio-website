import React from "react";
import styled from "styled-components";
import Dissertation from "../../assets/Dissertation.pdf";
import { NavigationBar } from "../NavigationBar";
import GraphQLandApolloClientImage from "../../assets/images/GraphQLandApolloClientImage.png";

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
`;

export const GraphQLAppoloProject = () => (
  <React.Fragment>
    <Styles>
      <NavigationBar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="project-picture">
                <img
                  src={GraphQLandApolloClientImage}
                  className="img-fluid"
                  alt="Responsive"
                ></img>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">
                  GraphQL and Apollo Client User Management
                </h2>
                <p className="main-text">
                  For this project I developed and tested a Web application
                  which pulls data in from a local set of users and populates a
                  dynamic table through the use of React and Javascript.
                </p>
                <p className="main-text">
                  The application allows the user to filter through the database
                  through the use of a drop down menu which allows for
                  filtration based on user roles as well as provides the user
                  with another button to allow only filtration of users who have
                  admin privileges(The abillity to create users).
                </p>
                <p className="main-text">
                  The query language used is GraphQL and the Apollo platform is
                  used for transfer of data between the UI and the database of
                  the application.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/GraphQL-and-Apollo"
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
