import React from "react";
import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
const Stacks = () => {
  return (
    <>
      <Header>CURRENT TECHNOLOGIES</Header>

      <Wrapper>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Git</li>
          <li>Styled-Component</li>
        </ul>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  font-size: 1.1rem;
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin-block-start: 3rem;
  }
  li {
    border: 1px solid black;
    padding: 0.7rem;
    border-radius: 17px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    background-color: hsl(205, 78%, 60%);
    color: white;
  }
`;
const Header = styled.h3`
  text-align: center;
  margin-block-start: 3rem;
`;

export default Stacks;
