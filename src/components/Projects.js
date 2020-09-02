import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .test {
    background-color: white;
    width: 90%;
    height: 80%;
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
export const Projects = (props) => (
  <React.Fragment>
    <Styles>
      <section className="test">
        <div>
          <p>In individual component</p>
          <p>
            Your name is {props.name}, your age is{props.age}
          </p>
        </div>
      </section>
    </Styles>
  </React.Fragment>
);
