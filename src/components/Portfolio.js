import React from "react";
import styled from "styled-components";

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
`;
export const Portfolio = () => (
  <Styles>
    <section className="portfolio-section">
      <div className="projects-container">
        {/* Header */}
        <header className="project-header">
          <h2 className="headerSection">Projects Section</h2>
          <p className="header-subheader">What other projects do i have?</p>
        </header>
        {/* End of Header */}
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Styles>
);
