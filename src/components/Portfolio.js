import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import IdeationCardsImage from "../assets/images/IdeationCardsImage.png";
import TowerDefenseImage from "../assets/images/TowerDefenseImage.png";
import ThirdYearDissertationImage from "../assets/images/ThirdYearDissertationImage.png";
import RunningTrackerApplicationImage from "../assets/images/RunningTrackerApplicationImage.jpg";
import PersonalWebsite from "../assets/images/PersonalWebsite.jpg";
import SDLLogo from "../assets/images/SDLLogo.png";
import G53GRAImage from "../assets/images/G53GRAImage.jpg";
import MusicWebsite from "../assets/images/MusicWebsite.jpg";
import AmazonCloneImage from "../assets/images/AmazonClone.jpg";
import WhatsAppCloneImage from "../assets/images/WhatsAppClone.png";
import PokeDexApplicationImage from "../assets/images/PokeDexApplicationImage.png";
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
    max-height: 270px;
    object-fit: fill;
  }
  .button-styling {
    background-color: #0b919d;
    border-color: #0b919d;
    margin-top: auto;
  }
  .button-styling:hover {
    background-color: #225856;
  }

  .col {
    display: flex;
    align-items: stretch;
  }

  .card {
    width: 100%;
  }

  .card-body {
    display: flex;
    flex-direction: column;
  }
  a {
    color: white;
    display: block;
  }
  a:hover {
    text-decoration: none;
  }

  .differentScaling {
    object-fit: contain;
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
                <Button className="button-styling ">
                  <Link to={"/ideationcards"}>Check out this project.</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img
                src={AmazonCloneImage}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Amazon Clone</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  HTML, CSS, JavaScript, React, Stripe, Google Firebase
                  Database, Express
                </h6>
                <p className="card-text">
                  A Amazon clone created by following the Clever Programmers 5
                  day coding challenge.
                </p>
                <Button className="button-styling ">
                  <Link to={"/amazon-clone"}>Check out this project.</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img
                src={PokeDexApplicationImage}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">
                  RESTful Pokédex Replica Application
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  HTML, CSS, JavaScript, React, Bootstrap, RESTful API
                </h6>
                <p className="card-text">
                  A project creating a pokedex application using the Pokeapi.co
                  RESTful Pokémon API.
                </p>
                <Button className="button-styling ">
                  <Link to={"/pokedex"}>Check out this project.</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img
                src={WhatsAppCloneImage}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">WhatsApp Clone</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  HTML, CSS, JavaScript, React, Google Firebase Database, React
                  Context API, Google Authentication
                </h6>
                <p className="card-text">
                  A basic version of a WhatsApp clone which allows users to log
                  in through their google account and create/post messages to
                  chats.
                </p>
                <Button className="button-styling ">
                  <Link to={"/whatsapp-clone"}>Check out this project.</Link>
                </Button>
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
                <Button className="button-styling ">
                  <Link to={"/towerdefense"}>Check out this project.</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img
                src={PersonalWebsite}
                className="card-img-top"
                alt="Personal website"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Personal Website</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  React-Bootstrap, HTML, CSS, JavaScript
                </h6>
                <p className="card-text">
                  A personal website to display my projects and skills.
                </p>
                <Button className="button-styling ">
                  <Link to={"/personalwebsite"}>Check out this project.</Link>
                </Button>
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
                <Button className="button-styling ">
                  <Link to={"/mobilerunningtrackerapplication"}>
                    Check out this project.
                  </Link>
                </Button>
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
                <Button className="button-styling ">
                  <Link to={"/mobilelearningapplication"}>
                    Check out this project.
                  </Link>
                </Button>
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
                <Button className="button-styling ">
                  <Link to={"/2dplatformergame"}>Check out this project.</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img src={G53GRAImage} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">OpenGL Graphics</h5>
                <h6 className="card-subtitle mb-2 text-muted">C++, OpenGL</h6>
                <p className="card-text">
                  A castle built on a mountain using a C++ framework and OpenGL
                </p>
                <Button className="button-styling ">
                  <Link to={"/openGLgraphics"}>Check out this project.</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="col mb-4">
            <div className="card">
              <img
                src={MusicWebsite}
                className="differentScaling"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title">Music Database Website</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  HTML, CSS, PHP, MySQL
                </h6>
                <p className="card-text">
                  A website built to display a music database.
                </p>
                <Button className="button-styling ">
                  <Link to={"/databasewebsite"}>Check out this project.</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Styles>
);
