import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Section id="about">
      <h3> ABOUT ME </h3> 
I'm Jeffery Ikwuh, I've always been fascinated by software development,
 which lead me to the University of Jos where I'm currently
In my 3rd year studying Computer Science.
My love of webapps made me curious 
about how they were made,
 after lots of googling, 
i discovered web development 
which led to my interest in frontend development,
 since then, i've been honing my 
skills and building projects
 to apply what i've learnt.
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
  margin: 0rem auto;
  margin-block-start: 6rem;
`;
export default About;
