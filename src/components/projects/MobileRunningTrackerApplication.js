import React from "react";
import styled from "styled-components";
import RunningApplication from "../../assets/RunningApplication.pdf";
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

export const MobileRunningTrackerApplication = () => (
  <React.Fragment>
    <Styles>
      <NavigationBar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="project-picture">
                <img
                  src="https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=1390&crop=1"
                  className="img-fluid"
                  alt="Responsive"
                ></img>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">
                  Mobile Running Tracker Application
                </h2>
                <p className="main-text">
                  For one of my third year modules I was tasked with creating a
                  real-time activity tracking application utilising new Android
                  OS features such as :
                </p>
                <ul>
                  <li>Database content provider/contract</li>
                  <li>Binders</li>
                  <li>Broadcast receivers</li>
                  <li>Listeners</li>
                  <li>Notification manager</li>
                  <li>Intents</li>
                </ul>
                <p className="main-text">
                  The application continuously logs and stores the user's
                  current location during their activity through the use of a
                  SQLite database which allows the user to see a visual
                  representation of their activity. To further improve this I
                  created a saving system which allows the users to save their
                  activities upon completion and then access them again at a
                  later date.
                </p>
                <p className="main-text">
                  This project taught me alot about the Android OS feature set.
                  The application was written in Java using the Android API.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/Mobile-running-tracker-application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The project's GitHub repository is available here
                  </a>
                </p>
                <p>
                  <a
                    href={RunningApplication}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The report showing how this application works is here.
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
