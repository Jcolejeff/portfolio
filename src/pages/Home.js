import React from "react";
import Layout from "../components/layout";
import ColorWord from "../components/color-word";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Projects from "../data";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<Layout>
			<Fade bottom>
				<p>
					<ColorWord color="grey">
						hello, world!{" "}
						<span role="img" aria-label="sparkle emoji">
							🚀
						</span>{" "}
					</ColorWord>
				</p>

				<h1>
					<p>
						my name is <ColorWord color="pink">ikwuh jeffery enokela</ColorWord>
					</p>
					<p>
						i'm a{" "}
						<ColorWord color="orange">
							{" "}
							Software Engineer, primarily a frontend developer{" "}
						</ColorWord>
					</p>
				</h1>

				<p>
					on the internet, i go by <ColorWord color="pink">kela</ColorWord>.{" "}
					i've always been the 'computer guy' even back in high school,i guess
					i've always been fascinated by technology
				</p>

				<p>
					I'm currently in the last lap of getting my degree in computer
					science,I've developed a strong grasp of computer science and web
					development ideas via my education and alot of online resources as
					well, and I've spent a lot of my free time applying these concepts to
					practical applications and scenarios.
				</p>
				<p>
					my technical skills includes
					<ColorWord color="orange">
						{" "}
						html & css, javascript, php, typescript, react, next.js, strapi,
						auth0, git, github, styled-components, tailwindcss, node.js,
						mongodb, mysql,laravel
					</ColorWord>{" "}
					and some other dot js libraries.
				</p>
				<p>some of my works include </p>
				{Projects.map((item) => {
					const { id, title, shortDesc } = item;
					return (
						<p key={id}>
							{/* i built */}
							<ColorWord color="yellow">{title}</ColorWord>- {shortDesc}{" "}
							<ColorWord color="blue">
								<ProjectLink to={`/project/${id}`}>
									{`>>> `}view project
								</ProjectLink>
							</ColorWord>
						</p>
					);
				})}

				<p>
					i've built a few other cool stuffs too, checkout{" "}
					<ColorWord color="green">
						<a
							href="https://github.com/Jcolejeff"
							target="_blank"
							rel="noopener noreferrer"
						>
							my github
						</a>
					</ColorWord>
				</p>
				<p>
					you can{" "}
					<ColorWord color="green">
						<a
							href="https://drive.google.com/file/d/1zxFWY6cgxc8IzoigfNXaZ-ZFl1Re7hvu/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							have a look at my resume here
						</a>
					</ColorWord>
				</p>
				<p>
					you can email me at{" "}
					<ColorWord color="green">
						<a
							href="mailto:ikwuhjefferye@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							ikwuhjefferye@gmail.com
						</a>
					</ColorWord>{" "}
					or dm me on{" "}
					<ColorWord color="green">
						<a
							href="https://twitter.com/jeffery_ikwuh"
							target="_blank"
							rel="noopener noreferrer"
						>
							twitter
						</a>
					</ColorWord>
				</p>
				<p>
					aside building stuffs and solving problems, i like to going to the
					gym, reading, and listening to afrobeats.
				</p>
				<p className="built-by-me">
					<ColorWord color="grey">
						built with - react-reveal slide up animation , styled using
						styled-components and the font family, 'ibm plex mono' from google
						fonts. you're welcome to checkout{" "}
						<ColorWord color="green">
							<a
								href="https://github.com/Jcolejeff/portfolio"
								target="_blank"
								rel="noopener noreferrer"
							>
								the sourcecode
							</a>
						</ColorWord>{" "}
						<span role="img" aria-label="sparkle emoji">
							✨
						</span>
					</ColorWord>
				</p>
			</Fade>
		</Layout>
	);
};

export default Home;
const ProjectLink = styled(Link)`
	text-decoration: none;
	text-transform: uppercase;
	display: inline-block;
	cursor: pointer;
	font-size: 0.9em;
	transition: color 300ms;
	color: #f2690f;

	&:hover {
		color: pink;
	}
`;
