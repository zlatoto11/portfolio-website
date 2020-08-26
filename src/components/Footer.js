import React from "react";
import styled from "styled-components";
const Styles = styled.div`
  .inlist {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .inlist li {
    display: inline;
    font-size: 20px;
    padding-right: 15px;
  }

  #footer {
    text-align: center;
    background-color: #283044;
  }
`;
export const Footer = () => (
  <Styles>
    <div className="section group">
      <div id="footer" className="col full">
        <ul className="inlist">
          <li>
            <a href="resume.pdf" target="_blank">
              Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/zlatoto11" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/zlatomir-kosev-8219a7173/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:zlatomir_hk@hotmail.com" target="_blank">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Styles>
);
