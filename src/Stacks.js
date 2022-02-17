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
        </ul>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  font-size: 1.7rem;
  text-align: center;
`;
const Header = styled.h3`
  text-align: center;
  margin-block-start: 3rem;
`;

export default Stacks;
