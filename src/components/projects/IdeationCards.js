import React from "react";
import styled from "styled-components";
import Dissertation from "../../assets/Dissertation.pdf";
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

  html {
    height: 100%;
  }
`;

export const IdeationCards = () => (
  <React.Fragment>
    <Styles>
      <NavigationBar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="project-picture">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="Ideation Card Video"
                    className="ideation-video"
                    src="https://www.youtube.com/embed/9aVxLPe2u5I"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">Ideation Cards Digisessions</h2>
                <p className="main-text">
                  For my fourth year group dissertation, we were tasked with
                  initialising the development of a digital ideation cards
                  application. This was achieved through the use of Unity and it
                  allows for ideation cards to be transferred to a digital
                  medium whilst maintaining all the same functionality as they
                  would with physical cards. This implementation also laid a
                  base foundation for future expansion into virtual reality.
                </p>
                <p className="main-text">
                  In order to achieve the above we initially developed a modular
                  service which allows for any ideation card deck to be imported
                  into the system through the use of a .csv file. This allows
                  for easier testing of cards by creators by saving money and
                  delays they would otherwise encounter in printing the cards.
                </p>
                <p className="main-text">
                  Furthermore I designed and implemented a saving and loading
                  system allowing the state of the board to be saved and
                  continued on at a later date. This was one of the requirements
                  set out by our project supervisor. To further enhance on the
                  physical features I also implemented a system for allowing
                  notes to be saved on cards or decks of cards.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/Ideation-Cards-Digital-Not-VR-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The project's GitHub repository is available here
                  </a>
                </p>
                <p>
                  <a
                    href={Dissertation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The accompanying paper is available to read in full here
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
