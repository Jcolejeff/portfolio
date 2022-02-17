import React from "react";
import phoneImg from "./images/KWP_2340.jpg";
import Rotate from "react-reveal/Rotate";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Hi, i'm Jeffery <br />A frontend-Developer
          </h1>
          <p>let's connect and work!!!</p>
          <button className="btn">Connect</button>
        </article>
        <article className="hero-images">
          <Rotate>
            <img src={phoneImg} className="phone-img" alt="phone" />
          </Rotate>
        </article>
      </div>
    </section>
  );
};

export default Hero;
