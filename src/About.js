import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Section id="about">
      <h3> ABOUT ME </h3>{" "}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus pariatur
        repellendus maxime suscipit doloremque assumenda quia est accusamus at
        voluptatem libero consequatur nulla blanditiis excepturi nisi
        reprehenderit fuga placeat voluptate eum corrupti, sapiente vel. Tenetur
        voluptate voluptatibus facilis aliquid, laborum optio nobis inventore
        est omnis. Ab id aperiam illo nam.
      </p>
    </Section>
  );
};

const Section = styled.section`
  text-align: center;
  font-size: 1.5rem;
  position: absolute;
  top: 1800px;
  left: 4.5%;
  width: 90%;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px gray;

  @media (max-width: 600px) {
    position: absolute;
    top: 2100px;
    left: 4.5%;
    width: 90%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 10px gray;
    padding: 1rem;
  }
`;
export default About;
