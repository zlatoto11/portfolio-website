import React from "react";
import styled from "styled-components";
import G53GRAImage from "../../assets/images/G53GRAImage.jpg";
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

export const G53Graphics = () => (
  <React.Fragment>
    <Styles>
      <NavigationBar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="project-picture">
                <img
                  src={G53GRAImage}
                  className="img-fluid"
                  alt="Responsive"
                ></img>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">Personal Website</h2>
                <p className="main-text">
                  For one of my graphics modules we learned to use a C++
                  framework alongside with OpenGL, GLUT and GLU to create a
                  scenery and animations within our application. In this case
                  the scenery created was the image to the left, which comprises
                  of a castle on a mountain, with a skybox, 2 soldiers cheering
                  at each other and two catapults with unfinished animations
                  which were supposed to fire.
                </p>

                <p className="main-text">
                  Initially to learn basic modelling we had to draw a cube and a
                  regular tetrahedron using only GL_TRIANGLES and explicitly
                  defined vertices. After this we learned surface subdivision by
                  turning and octahedron to a sphere. To further improve we then
                  focused on learning transformations of line segments
                </p>
                <p className="main-text">
                  After completing the previous steps we focused on Hierarchical
                  Modelling to draw a skeletal structure of a robot. We then
                  learned to transform World coordinates to View coordinates. As
                  a final task before we moved onto the main coursework we
                  learned about light and texture and we build a "wall" light.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/OpenGL-graphics"
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
