import React from "react";
import styled from "styled-components";
import PokeDexApplicationImage from "../../assets/images/PokeDexApplicationImage.png";
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
`;

export const PokeDexApplication = () => (
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
                    src={PokeDexApplicationImage}
                    className="img-fluid"
                    alt="Responsive"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">Pokédex Replica Application </h2>
                <p className="main-text">
                  I undertook this project to develop a general understanding of
                  how RESTful API's work and how data can succesfully be pulled
                  from the application. Then I used that information to create a
                  working Pokédex which allows the user to view information on
                  every single pokemon. The following technologies were used in
                  order to create this:
                  <ul>
                    <li>HTML, CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>RESTful API</li>
                  </ul>
                </p>
                <p className="main-text">
                  The final product displays pokemon to the user and allows them
                  to click on the cards which leads them to a separate and more
                  in-depth page. All the information is automatically gathered
                  from the API and cards are automatically generated for the
                  amount of data present. In this case only the first 20 Pokemon
                  are shown as the pokeAPI has an automatic soft limit to reduce
                  the number of calls made to the API. This can easily be
                  increased to show more than 20 pokemon if needed.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/pokedex-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The project's GitHub repository is available here
                  </a>
                </p>
                <p>
                  <a
                    href="https://zlatoto11.github.io/pokedex-app/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The accompanying website is hosted here.
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
