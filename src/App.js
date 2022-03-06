import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Projects from "./Projects";
import About from "./About";
import Stacks from "./Stacks";
import Contact from "./contact";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
function App() {
  return (
    <>
      <Fade>
        <HeadWrapper>
          <Navbar />
          <Sidebar />
          <Roll>
            <Hero />
          </Roll>
        </HeadWrapper>
        <Stacks />
        <ProjectWrapper>
          <Projects />
        </ProjectWrapper>
        <About />
        <Slide>
          <Contact />
        </Slide>
      </Fade>
    </>
  );
}

export default App;
const ProjectWrapper = styled.section`
  .section {
    width: 90vw;
    margin: 5rem auto;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }

  .loading {
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    margin-bottom: 4rem;
    text-align: center;
  }

  /*
=============== 
Projects
===============
*/

  .Projects-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  .Project-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: var(--clr-primary-10);
  }
  .Project-btn:hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }
  .active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }

  .Project-info h3 {
    font-weight: 400;
  }
  .Project-info h4 {
    text-transform: uppercase;
    color: var(--clr-grey-5);
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
  .Project-date {
    letter-spacing: var(--spacing);
  }
  .Project-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .Project-desc p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
  }
  .Project-icon {
    color: var(--clr-primary-5);
  }
  @media screen and (min-width: 992px) {
    .Projects-center {
      width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
    .Project-btn {
      margin-bottom: 1rem;
    }
    .active-btn {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
    .Project-btn:hover {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
  }
  .btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    display: block;
    width: 12rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
  .btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
  }
  .center-btn {
  }
`;
const HeadWrapper = styled.main`
  letter-spacing: 1;

  /* section */
  .section {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }
  .Profile-img {
    display: none;
  }

  /*
=============== 
Styles
===============
*/
  .nav {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1e3bf;
    position: relative;
    z-index: 1;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius);
    border-color: transparent;
    color: white;
    background: var(--clr-black);
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover {
    background: var(--clr-grey-5);
  }
  .nav-links {
    display: none;
  }
  .signin-btn {
    display: none;
  }
  .hero {
    position: relative;
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    background: rgb(238, 220, 174);
    background: radial-gradient(
      circle,
      rgba(238, 220, 174, 1) 0%,
      rgba(171, 230, 210, 1) 75%,
      rgba(148, 233, 222, 1) 100%
    );
  }
  .hero {
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .hero-center {
    width: 90vw;
    max-width: var(--max-width);
    display: grid;
    align-items: center;
    text-align: center;
  }

  .hero-info h1 {
    text-transform: none;
    max-width: 500px;
    margin-top: 2rem;
    font-size: 2rem;
  }
  .hero-info p {
    max-width: 35em;
    line-height: 1.8;
  }
  .hero-images {
    display: block;
    width: 8rem;
  }
  .Profile-img {
    width: 70%;
    border-radius: 100%;
    margin-inline-start: 15rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }

  /* nav media query */
  @media screen and (min-width: 800px) {
    .nav-center {
      display: flex;
      justify-content: space-between;
    }
    .toggle-btn {
      display: none;
    }
    .signin-btn {
      display: inline-block;
    }
    .nav-links {
      display: block;
      justify-self: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      text-align: center;
      height: 100%;
      display: grid;
    }
    .nav-links li {
      height: 100%;
    }
    .link-btn {
      height: 100%;
      background: transparent;
      border-color: transparent;
      font-size: 1.1rem;
      color: black;
      text-transform: capitalize;
      letter-spacing: 1px;
      width: 10rem;
    }
  }

  /* hero media query */
  @media screen and (min-width: 700px) {
    .hero::before {
      background-size: contain;
      height: 100%;
    }
    .hero-center {
      grid-template-columns: 2fr 1fr;
    }

    .hero-info h1 {
      font-size: 3rem;
    }
    .hero-info p {
      font-size: 1.25rem;
    }
    .hero-images {
      display: block;
      justify-self: center;
    }
    .Profile-img {
      width: 12rem;
      border-radius: 1rem;
      margin-inline-start: 1rem;
      display: block;
    }
  }

  @media screen and (min-width: 1200px) {
    .hero-center {
      grid-template-columns: 2fr 1fr;
      align-items: end;
      padding-bottom: 12vh;
    }
    .hero-info h1 {
      max-width: 100%;
      font-size: 5.5rem;
    }
    .hero-images {
      align-self: end;
    }
    .Profile-img {
      width: 15rem;
    }
  }
  @media screen and (min-width: 1400px) {
    .hero-center {
      padding-bottom: 20vh;
    }
    .Profile-img {
      width: 17rem;
    }
  }

  /* sidebar */
  .sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    visibility: hidden;
    z-index: -1;
    transition: var(--transition);
    transform: scale(0);
    background: rgba(0, 0, 0, 0.5);
  }
  .sidebar-wrapper.show {
    visibility: visible;
    z-index: 2;
    transform: scale(1);
  }
  .sidebar {
    width: 90vw;
    height: 95vh;
    max-width: var(--fixed-width);
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
    position: relative;
    padding: 4rem 2rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-grey-5);
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  .sidebar article {
    margin-bottom: 2rem;
  }
  .sidebar-sublinks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.25rem;
  }
  .sidebar-sublinks a {
    display: block;
    color: var(--clr-grey-1);
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .sidebar-sublinks svg {
    color: var(--clr-grey-5);
    margin-right: 1rem;
  }

  @media screen and (min-width: 800px) {
    .sidebar-wrapper {
      display: none;
    }
  }
`;
