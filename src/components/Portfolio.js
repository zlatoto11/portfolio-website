import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import IdeationCardsImage from "../assets/images/IdeationCardsImage.png";
import TowerDefenseImage from "../assets/images/TowerDefenseImage.png";
import ThirdYearDissertationImage from "../assets/images/ThirdYearDissertationImage.png";
import RunningTrackerApplicationImage from "../assets/images/RunningTrackerApplicationImage.jpg";
import SDLLogo from "../assets/images/SDLLogo.png";
const Styles = styled.div`
  .projects-container {
    width: 100%;
    max-width: 80%;
    padding-top: 60px;
    padding-bottom: 60px;
    margin: 0px auto;
  }
  .portfolio-section {
    background-color: #101119;
  }
  p,
  h1,
  h2,
  small {
    color: black;
  }

  .header-subheader {
    text-indent: 2.5%;
    color: #bfbfbf;
    font-weight: 500;
  }
  .headerSection {
    color: #0b919d;
  }
  .card-body {
    background-color: #181a25;
  }
  .card-title,
  .card-text {
    color: #bfbfbf;
  }

  img {
    filter: brightness(80%);
  }
  .button-styling {
    background-color: #0b919d;
    border-color: #0b919d;
  }
  .button-styling:hover {
    background-color: #225856;
  }
`;

export const Portfolio = () => (
  <Styles>
    <section className="portfolio-section">
      <div className="projects-container">
        {/* Header */}
        <header className="project-header">
          <h1 className="headerSection">Projects Section</h1>
          <p className="header-subheader">
            &gt;&gt; What other projects do i have?
          </p>
        </header>
        {/* End of Header */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div className="col mb-4">
            <div className="card">
              <img
                src={IdeationCardsImage}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Ideation Cards Digi-sessions</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  UnityEngine, C#, OculusRift
                </h6>
                <p className="card-text">
                  A Unity projecting transporting Ideation Cards into a digital
                  medium.
                </p>
                <Link to={"/ideationcards"}>
                  <Button className="button-styling">
                    Check out this project.
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src={ThirdYearDissertationImage}
                className="card-img-top"
                alt=" Third Year Dissertation"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Mobile Learning Application</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Android Studio IDE, Java
                </h6>
                <p className="card-text">
                  A Android application developed to help with my third year
                  dissertation.
                </p>
                <Link to={"/mobilelearningapplication"}>
                  <Button className="button-styling">
                    Check out this project.
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src={RunningTrackerApplicationImage}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">
                  Android Running Tracker Application
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Android Studio IDE, Java
                </h6>
                <p className="card-text">
                  A real-time running tracker application which logs activities
                  for the user.
                </p>
                <Link to={"/mobilerunningtrackerapplication"}>
                  <Button className="button-styling">
                    Check out this project.
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src={SDLLogo} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">2D Platformer Game</h5>
                <h6 className="card-subtitle mb-2 text-muted">C++, SDL</h6>
                <p className="card-text">
                  A 2D platformer game developed using the SDL library.
                </p>
                <Link to={"/2dplatformergame"}>
                  <Button className="button-styling">
                    Check out this project.
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src={TowerDefenseImage}
                className="card-img-top"
                alt="Tower Defense Game"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Variety of Unity projects</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  UnityEngine, C#
                </h6>
                <p className="card-text">
                  A mixture of Unity game projects, leading up to a final tower
                  defense game.
                </p>
                <Link to={"/towerdefense"}>
                  <Button className="button-styling">
                    Check out this project.
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Styles>
);
