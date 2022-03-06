import React from "react";
import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaGithub } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
const Stacks = () => {
  return (
    <>
      <Header>CURRENT TECHNOLOGIES</Header>

      <Wrapper>
        <ul>
          <li>
            HTML<AiFillHtml5></AiFillHtml5>{" "}
          </li>
          <li>
            CSS<FaCss3></FaCss3>
          </li>
          <li>
            Javascript<DiJavascript1></DiJavascript1>
          </li>
          <li>
            React<FaReact></FaReact>
          </li>
          <li>
            Git<FaGithub></FaGithub>
          </li>
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
