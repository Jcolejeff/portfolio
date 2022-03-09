import React from "react";
import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaReact, FaGithub } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
const Stacks = () => {
  return (
    <Wrapper>
      <Header>Current Technologies</Header>

      <>
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
      </>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  font-size: 1.1rem;
  text-align: center;

  padding: 3rem;
  display: flex;
  position: absolute;
  top: 700px;
  left: 1%;
  width: 98%;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px gray;
  @media (max-width: 600px) {
    padding: 1rem;
    display: flex;
    position: absolute;
    top: 700px;
    left: 4.5%;
    width: 90%;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 10px gray;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
    margin-block-start: 2rem;
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
  font-weight: 400;
`;

export default Stacks;
