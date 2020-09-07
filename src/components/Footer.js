import React from "react";
import styled from "styled-components";
const Styles = styled.div`
  .inlist {
    display: block;
    list-style-type: disc;
    margin-bottom: 0px;
  }

  .inlist li {
    display: inline;
    font-size: 20px;
    padding-right: 15px;
  }

  #footer {
    text-align: center;
    background-color: #101119;
    padding-top: 1em;
    padding-bottom: 1em;
  }
`;
export const Footer = () => (
  <Styles>
    <div className="section group">
      <div id="footer" className="col full">
        <ul className="inlist">
          <li>
            <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zlatoto11"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/zlatomir-kosev-8219a7173/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:zlatomir_hk@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Styles>
);
