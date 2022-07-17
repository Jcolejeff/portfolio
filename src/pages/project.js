import React from "react";
import Layout from "../components/layout";
import ColorWord from "../components/color-word";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import Projects from "../data";

const ProjectTemplate = () => {
	const { id } = useParams();
	const project = Projects.find((item) => item.id === id);
	const { title, dates } = project;
	return (
		<Layout title="jeff">
			<Fade>
				<ColorWord color="grey">
					<Link to="/">Go Back Home</Link>
				</ColorWord>

				<Title>{title}</Title>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
					doloremque laudantium architecto, tempore velit nisi odit commodi
					consequuntur laborum possimus? Facilis quos inventore hic maxime,
					perferendis quasi perspiciatis placeat laborum!
				</p>

				<table>
					<tbody>
						<tr>
							<th>
								<ColorWord color="grey">stack:</ColorWord>
							</th>
							<td>
								<ColorWord color="orange">
									<Stack>
										<span>kdj</span>
										<span>kdj</span>
										<span>kdj</span>
									</Stack>
								</ColorWord>
							</td>
						</tr>

						<tr>
							<th>
								<ColorWord color="grey">code:</ColorWord>
							</th>
							<td>
								<ColorWord color="green">
									<a href="#">github repo</a>
								</ColorWord>
							</td>
						</tr>

						<tr>
							<th>
								<ColorWord color="grey">live:</ColorWord>
							</th>
							<td>
								<ColorWord color="green">
									<a href="#">live site</a>
								</ColorWord>
							</td>
						</tr>
					</tbody>
				</table>

				{/* <ProjectContent dangerouslySetInnerHTML={{ __html: html }} /> */}

				<OtherProjects>
					<ColorWord color="grey">i also built</ColorWord>
					<ColorWord color="blue" key="5">
						<a href="#">'kedd'</a>
					</ColorWord>
				</OtherProjects>
			</Fade>
		</Layout>
	);
};

export default ProjectTemplate;

const Title = styled.h1`
	font-size: var(--size-700);
`;

const Stack = styled.div`
	span:not(:last-child):after {
		content: ", ";
	}
`;

const OtherProjects = styled.nav`
	padding-top: var(--size-900);
	text-transform: lowercase;

	span:not(:first-child):not(:last-child):after {
		content: ", ";
	}
`;

const ProjectContent = styled.section`
	padding-top: var(--size-800);

	& > * + * {
		margin-top: var(--size-300);
	}

	& > p + p {
		margin-top: var(--size-600);
	}

	* + h1,
	* + h2,
	* + h3 {
		margin-top: var(--size-800);
	}

	h1 {
		font-size: var(--size-700);
	}

	h2 {
		font-size: var(--size-600);
	}

	h3 {
		font-size: var(--size-500);
	}

	img {
		border: 10px solid hsla(7, 100%, 95%, 1);
	}
`;
