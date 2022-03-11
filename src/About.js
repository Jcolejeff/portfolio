import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Section id="about">
      <h3> ABOUT ME </h3> Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Natus pariatur repellendus maxime suscipit doloremque assumenda quia
      est accusamus at voluptatem libero consequatur nulla blanditiis excepturi
      nisi reprehenderit fuga placeat voluptate eum corrupti, sapiente vel.
      Tenetur voluptate voluptatibus facilis aliquid, laborum optio nobis
      inventore est omnis. Ab id aperiam illo nam.
    </Section>
  );
};

const Section = styled.section`
  text-align: center;
  font-size: 1.5rem;
  width: 80%;
  font-family: "Hubballi", cursive;
  font-weight: 600;
  max-width: 800px;
  margin-inline-start: 2rem;
  @media (min-width: 60em) {
    margin-inline-start: 23rem;
  }
`;
export default About;
