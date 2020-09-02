import React from "react";
import styled from "styled-components";
import { Projects } from "./Projects";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Styles = styled.div`
  .projects-container {
    width: 100%;
    max-width: 80%;
    padding-top: 60px;
    padding-bottom: 60px;
    margin: 0px auto;
  }
  .portfolio-section {
    background-color: #1c1b1b;
  }
  p,
  h1,
  h2,
  small {
    color: white;
  }

  .header-subheader {
    text-indent: 2.5%;
  }
`;

const projects = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
  {
    name: `Afrin`,
  },
];

export const Portfolio = () => (
  <Styles>
    <Router>
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
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Ideation Cards Digi-sessions</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    UnityEngine, C#, OculusRift
                  </h6>
                  <p className="card-text">Creating a digital version</p>
                  <Link to={"/projects/1"}>
                    <Button>Home</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Mobile Learning Application</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Android Studio IDE, Java
                  </h6>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">
                    Android Running Tracker Application
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Android Studio IDE, Java
                  </h6>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
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
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">Variety of Unity projects</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    UnityEngine, C#
                  </h6>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Router>
  </Styles>
);
