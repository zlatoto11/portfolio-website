import React from "react";
import styled from "styled-components";
import SDLLogo from "../../assets/images/SDLLogo.png";
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
`;

export const TwoDPlatformer = () => (
  <React.Fragment>
    <Styles>
      <NavigationBar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="project-picture">
                <img src={SDLLogo} class="img-fluid" alt="Responsive"></img>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">2D Platformer Game</h2>
                <p className="main-text">
                  As part of another coursework during my second-year at
                  university, we were provided with an SDL framework by one of
                  our lecturers. We were also given a set of requirements and
                  had to create a game based on these.
                </p>
                <p className="main-text">
                  The game I decided to create was similar to "I Wanna Be The
                  Boshy" where the user controls a character and has to progress
                  to the end of the level whilst facing challenges and
                  instant-death mechanics. Maps are loaded in through the use of
                  a text file. The text file is then parsed by the tile manager
                  which maps characters to their respective texture and renders
                  it out on the screen. Further logic was employed for warping
                  behaviour between levels. To better this, I also developed
                  several automated moving objects and coded in collision logic.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/SDL-and-CPP-Game"
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
