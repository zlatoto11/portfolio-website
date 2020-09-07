import React from "react";
import styled from "styled-components";
import GamesReport from "../../assets/GamesReport.pdf";

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
    min-height: 94vh;
  }
  a {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export const TowerDefense = () => (
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
                    src="https://www.youtube.com/embed/LsM_smIaURE"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">
                  Unity Tower Defense and other projects
                </h2>
                <p className="main-text">
                  Another one of my fourth year modules required me to create a
                  game of my choosing. I decided to create a tower defense game.
                  Prior to this we had to complete weekly tasks focusing on
                  building up our unity skills and understanding. The video
                  details the work put throughout the weeks towards making this
                  project a reality as well as documents the final game release.
                </p>
                <ul>
                  <li>
                    <b>Lab 1</b>: creating a simple top-down scrolling space
                    shooter.
                  </li>
                  <li>
                    <b>Lab 2</b>: creating a traditional scrolling
                    two-dimensional platform game (similar to Mario or Braid),
                    focus on more sophisticated player control as well as other
                    2D elements such as animated sprites and tile sets.
                  </li>
                  <li>
                    <b>Lab 3</b>: creating a first-person shooting-gallery game.
                    Iterating on previously learned concepts and implementing
                    them into a different genre.
                  </li>
                  <li>
                    <b>Lab 4</b>: creating a physics based puzzle game. Focusing
                    on the abillity to pick-up,carry,drop and throw objects.
                    Implemented four simple puzzles: Stacking boxes to climb
                    over a wall, placing a box on a seesaw that can then be
                    climbed, using a box to stop a spinning blade, placing a box
                    on a button to open a door.
                  </li>
                  <li>
                    <b>Lab 5</b>: creating a third-person game with simple AI
                    (artificial intelligence) based enemy characters that patrol
                    and follow players around the level. This exercise focuses
                    on introducing navigation and pathfinding. And uses Finite
                    State Machines to control the AI behaviour.
                  </li>
                  <li>
                    <b>Lab 6</b>: creating another puzzle solving game with
                    focus on creating a reusable inventory in which the user can
                    pick up and carry objects. The objects(keys) are paired with
                    obstacles around the level and open when the correct one is
                    used.
                  </li>
                  <li>
                    <b>Lab 7</b>: creating a split-screen racing game and
                    designing the track the cars ride on.
                  </li>
                </ul>
                <p className="main-text">
                  The final project comprising of a majority of the marks is the
                  tower defense game. This project has most of the features of a
                  normal TD game and is one of the largest projects i have
                  completed by myself.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/Tower-Defense-and-other-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The project's GitHub repository is available here
                  </a>
                </p>
                <p>
                  <a
                    href={GamesReport}
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
