import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import IdeationCardsImage from "../assets/images/IdeationCardsImage.png";
import TowerDefenseImage from "../assets/images/TowerDefenseImage.png";
import ThirdYearDissertationImage from "../assets/images/ThirdYearDissertationImage.png";
import RunningTrackerApplicationImage from "../assets/images/RunningTrackerApplicationImage.jpg";
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
    color: white;
  }
  .headerSection {
    color: white;
  }
  .card-body {
    background-color: #181a25;
  }
  .card-title,
  .card-text {
    color: white;
  }

  img {
    filter: brightness(80%);
  }
`;

export const Portfolio = () => (
  <Styles>
    <section className="portfolio-section">
      <div className="projects-container">
        {/* Header */}
        <header className="project-header">
          <h2 className="headerSection">Projects Section</h2>
          <p className="header-subheader">
            &gt;&gt; What other projects do i have?
          </p>
        </header>
        {/* End of Header */}
        <div className="row row-cols-1 row-cols-md-2">
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
                  <Button>Check out this project.</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src={ThirdYearDissertationImage}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Mobile Learning Application</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Android Studio IDE, Java
                </h6>
                <p className="card-text">
                  A android application developed to help with my third year
                  dissertation.
                </p>
                <Link to={"/mobilelearningapplication"}>
                  <Button>Check out this project.</Button>
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
                  <Button>Check out this project.</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">2D Platformer Game</h5>
                <h6 className="card-subtitle mb-2 text-muted">C++, SDL</h6>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <Link to={"/mobilelearningapplication"}>
                  <Button>Check out this project.</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img
                src={TowerDefenseImage}
                className="card-img-top"
                alt="..."
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
                  <Button>Check out this project.</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Styles>
);
