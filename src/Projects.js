import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
function App() {
  const [value, setValue] = useState(0);
  const Projects = [
    {
      id: "recAGJfiU4CeaV0HL",
      order: 3,
      title: "TRIVIA APP",
      dates: "2022",
      duties: [
        "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
        "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
        "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
      ],
      company: "trivia app,",
      live: "https://trivia-plus.netlify.app/",
      coderepo: "https://github.com/Jcolejeff/quizApp",
    },
    {
      id: "recIL6mJNfWObonls",
      order: 2,
      title: "MOVIE LOOK-UP",
      dates: "2022",
      duties: [
        "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
        "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
        "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
        "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      ],
      company: "movie look-up,",
      live: "https://movie-look-up.netlify.app",
      coderepo: "https://github.com/Jcolejeff/moive-look-up",
    },
    {
      id: "rec61x18GVY99hQq5",
      order: 1,
      title: "MARVEL COMICS LOOK-UP",
      dates: "2022",
      duties: [
        "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
        "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
        "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
      ],
      company: "marvel api,",
      live: "https://jeffcole-marvel-db.netlify.app",
      coderepo: "https://github.com/Jcolejeff/COMIC-api",
    },
    {
      id: "rec61x18GVY99hQq5",
      order: 1,
      title: "Bookmark Extension",
      dates: "2022",
      duties: [
        "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
        "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
        "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
      ],
      company: "bookmark",
      live: "https://bookmark-ce.netlify.app",
      coderepo: "https://github.com/Jcolejeff/bookmark",
    },
  ];

  const { duties, title, live, coderepo } = Projects[value];
  return (
    <section className="section">
      <div className="title">
        <h2>PROJECTS</h2>
        <div className="underline"></div>
      </div>
      <div className="Projects-center">
        {/* btn container */}
        <div className="btn-container">
          {Projects.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`Project-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* Project info */}
        <article className="Project-info">
          <h3>{title}</h3>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="Project-desc">
                <FaAngleDoubleRight className="Project-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        <a href={live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </button>
      <button type="button" className="btn">
        <a href={coderepo} target="_blank" rel="noopener noreferrer">
          Code Repo
        </a>
      </button>
    </section>
  );
}

export default App;
