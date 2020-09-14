import React from "react";
import styled from "styled-components";
import AmazonCloneImage from "../../assets/images/AmazonClone.jpg";
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

export const AmazonClone = () => (
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
                    src={AmazonCloneImage}
                    className="img-fluid"
                    alt="Responsive"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="my-container">
                <h2 className="project-title">Amazon Clone </h2>
                <p className="main-text">
                  To further my knowledge on JavaScript, React as well as learn
                  new technologies such as Express/Stripe and Amazon Firebase I
                  decided to take part in the 5 day Clever Programmers
                  programming challenge. Each day you would code along with them
                  and at the end of each day homework would be set for the next
                  day to expand further on what you had created during that
                  session.
                </p>
                <p className="main-text">
                  The final product has a fully functioning order system which
                  allows the user to go from the main page where they can add
                  products, to the order page where they can see all the
                  products in their basket. After this, the user can proceed to
                  the checkout page where he can fill out their payment details
                  and pay for the product. In this case the payment
                  functionality only works with the Stripe testing keys and does
                  not therefore accept real credit/debit cards.(Card Number
                  ="4242 4242 4242 4242" MM/YY = "04/24" CVC = "424" ZIP =
                  "42424"). To accept real payment details the key's would
                  simply have to be swapped out. All the back-end logic for
                  accepting payments however works as needed.
                </p>
                <p className="main-text">
                  There is also a fully functioning registration system which
                  allows users to sign up and log into their account. If the
                  users are logged in when buying products this is stored in the
                  database and allows for them to see any personal past orders
                  upon entering the "Orders" page.
                </p>
                <p>
                  <a
                    href="https://github.com/zlatoto11/Amazon-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The project's GitHub repository is available here
                  </a>
                </p>
                <p>
                  <a
                    href="https://clone-a1bca.web.app/"
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
