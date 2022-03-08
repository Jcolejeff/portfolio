import React from "react";
import Img from "./images/KWP_2340.jpg";
import Rotate from "react-reveal/Rotate";
import styled from "styled-components";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <Div>
            <Rotate>
              <img src={Img} alt="Profile" />
            </Rotate>
          </Div>
          <h1>
            Hi, i'm Jeffery <br />
            Frontend-Engineer
          </h1>
          <p>let's connect and work!!!</p>
          <button className="btn">Download CV</button>
        </article>
        <article className="hero-images">
          <Rotate>
            <img src={Img} className="Profile-img" alt="Profile" />
          </Rotate>
        </article>
      </div>
    </section>
  );
};

export default Hero;
const Div = styled.div`
  width: 40%;
  margin-inline-start: 6rem;
  margin-block-start: 8rem;
  img {
    width: 100%;

    box-shadow: var(--dark-shadow);
    border-radius: 2rem;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;
