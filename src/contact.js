import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";
import styled from "styled-components";
const Contact = () => {
  return (
    <Div>
      <h4 id="contact">Connect With me</h4>
      <List>
        <li>
          <a
            href="https://github.com/Jcolejeff
            
            "
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href="
            https://www.linkedin.com/in/ikwuh-jeffery-813756215/
            "
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="
            https://twitter.com/jeffery_ikwuh
            "
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="
            mailto:ikwuhj@gmail.com
            "
          >
            <FaMailBulk />
          </a>
        </li>
      </List>
    </Div>
  );
};
const Div = styled.div`
  text-align: center;
  margin: 4rem 2rem 5rem 2rem;
  padding: 1rem;
  background-color: #e2c67e;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  position: absolute;
  top: 2100px;
  left: 10%;
  border-radius: 10px;
  box-shadow: 2px 2px 10px white;
  width: 70%;
  @media (max-width: 600px) {
    padding: 3rem;
    position: absolute;
    top: 2700px;
    left: 4.7%;
    width: 70%;

    border-radius: 10px;
    box-shadow: 2px 2px 10px white;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 2rem;
`;
export default Contact;
