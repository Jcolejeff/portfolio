import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";
import styled from "styled-components";
const Contact = () => {
  return (
    <Div>
      <h4>Connect With me</h4>
      <List>
        <li>
          <a
            href="
            
            "
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href="
            
            "
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="
            
            "
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="
            
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
  margin: 4rem 2rem 2rem 2rem;
  padding: 1rem;
  background-color: #e2c67e;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 2rem;
`;
export default Contact;
