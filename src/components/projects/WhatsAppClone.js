import React from "react";
import styled from "styled-components";
import WhatsAppCloneImage from "../../assets/images/WhatsAppClone.png";
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
  .youtube-link {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const WhatsAppClone = () => (
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
                    src={WhatsAppCloneImage}
                    className="img-fluid"
                    alt="Responsive"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">WhatsApp Clone </h2>
                <p className="main-text">
                  To create this WhatsApp clone I followed the{" "}
                  <a
                    className="youtube-link"
                    href="https://www.youtube.com/watch?v=pUxrDcITyjg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Clever Programmer's tutorial
                  </a>
                  . This was done to further improve my skills with the
                  languages and technologies used. These were :
                  <ul>
                    <li>HTML, CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Amazon Firebase Database</li>
                    <li>React Context API</li>
                    <li>Google Authentication</li>
                  </ul>
                </p>
                <p className="main-text">
                  {" "}
                  The final product has a fully functioning user login system
                  using Google authentication. Upon logging in the user has
                  access to all chats that are within the database and he can
                  easily access and type into any of them. The user can also
                  create new chats using the button at the top of the page
                  similar to how WhatsApp handles it. The chats are updated for
                  all users automatically when a new message is sent or when a
                  new chat is created.
                </p>
                <p className="main-text">
                  The application also pulls data from the user's login profile
                  and sets their picture to what their Google accounts picture
                  is. Other data can also easily be pulled from this such as
                  email, name and etc... to further flesh out the application.
                  The application also correctly calculates and displays last
                  seen date for each user.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/Whatsapp-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The project's GitHub repository is available here
                  </a>
                </p>
                <p>
                  <a
                    href="https://whatsapp-clone-4508b.web.app/"
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
