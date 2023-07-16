import image1 from "./assets/images/burh.png";
import image2 from "./assets/images/carsng.png";
import image3 from "./assets/images/coverly.png";
const Projects = [
	{
		id: "recAGJfiU4CeaV0HL",
		title: "Burtech Products",
		stack: [
			"react",
			"styled-components",
			"chakra ui",
			"django",
			"redux-toolkit",
			"react-router",
			"react-icons",
			"react-markdown",
		],
		shortDesc:
			"an e-commerce web-app for a manufacturing company, built with react, styled-components, chakra ui , redux toolkit, and coupled with a django rest api for the backend.",
		explanation:
			"React was selected as the primary JavaScript library for its component-based architecture and efficient rendering capabilities. styled-components was chosen for its ability to write CSS directly in JavaScript. Chakra UI was utilized to enhance the user interface design. Django, a high-level Python web framework, was employed for back-end development due to its robust features. Redux Toolkit was integrated for efficient state management. React Router was used for routing within the application. React Icons provided a library of icons for easy integration, and React Markdown facilitated rendering Markdown content within the application.",
		image: image1,
		wrappingUp:
			"we collaborated to develop the website using React. We enhanced our React skills, improved Git administration for smooth collaboration, implemented user authentication, and integrated APIs for enhanced functionality. It was a valuable learning experience that helped us grow as developers.",
		requirement:
			"In order for this initiative to be considered successful, there were several criteria that needed to be met. The resultant website had to be quick and responsive, incorporating a few basic animations, while also being user-friendly for non-technical individuals to make edits easily. These requirements ensured that the website would deliver an optimal user experience, with fast loading times, engaging visual elements, and the ability for the client to update content effortlessly. By meeting these criteria, the project would achieve its intended goals and provide a successful solution for the client.",
		challenge:
			"During the team project for Burtech, we encountered various challenges related to organizing the codebase, integrating the chosen technology stack (including React, styled-components, Chakra UI, Django, Redux Toolkit, React Router, React Icons, and React Markdown), and ensuring optimal component reusability. However, through collaborative efforts, determination, and effective problem-solving, our team successfully navigated these challenges and delivered a high-quality solution for Burtech. ",
		purpose:
			"For Burtech, a manufacturing company client, our objective was to address the need for an enhanced online presence and operational efficiency. Our aim was to develop a secure, user-friendly web application that could facilitate seamless online payments while showcasing their products in a structured and streamlined manner. ",
		live: "https://burtechproducts.com",
		coderepo: "https://github.com/Jcolejeff/Clasik-Drip-Wears",
	},
	{
		id: "recIL6mJNfWObonls",
		title: "Cars.ng",
		stack: ["php", "laravel", "fast api", "bootstrap"],
		explanation:
			"i used shortcode Api for the url shortening ,CSS in js is my go-to for styling in React apps. Great things have been said about it already, and my preferred tool for that is Styled-components, mainly because it lets you write actual CSS and it's popular.",
		shortDesc:
			"is a Nigerian online car marketplace and solutions provider that connects car buyers and car sellers. Providing a vast inventory of new and used cars with their descriptions, quality images, affordable prices and car suggestions to make the search and purchase of the perfect vehicle in Nigeria effortless and enjoyable.",
		image: image2,
		wrappingUp:
			"In conclusion, this project presented an opportunity for me to enhance my skills and explore new technologies. I successfully implemented a redesigned frontend, migrated from MySQL to a fast API REST API, and improved SEO. By leveraging PHP with Laravel for backend development, Fast API for the REST API, Bootstrap for frontend design.",
		requirement:
			"As always, apart from the bare minimum that the resultant website must be fast and responsive. I had a few requirements in mind to be able to call this project a success.The resulting website must match the design on the design file.",
		challenge:
			"It was fairly challenging rewriting the project, but with a lot of googling and checking online resources, I was able to tackle the issues",
		purpose:
			"The purpose of this project was to rewrite the frontend, migrate from MySQL to a fast API REST API, and improve SEO. The goals included enhancing code quality, optimizing the user interface, boosting performance, introducing new features, and improving search engine optimization. By achieving these objectives, the project aimed to deliver an improved frontend application with better performance, seamless API integration, and enhanced visibility in search engine results.",
		live: "https://cars.ng/",
		coderepo: "https://github.com/Jcolejeff/url-shortner",
	},
	{
		id: "rec61x18GVY99hQq5",
		title: "Coverly",
		stack: [
			"react",
			"tailwind",
			"Gpt-3 Api",
			"react-reveal",
			"nodejs",
			"express",
			"mongodb",
		],
		explanation:
			"Because of the simplicity of its state management and the variety of accessible packages, React was an obvious choice for this project.I used React-Reveal for the  animation because it's simple and fits in my use case , styled components for styling and Open TBD api to get the questions",
		image: image3,
		wrappingUp:
			"In conclusion, this project successfully developed a cover letter generator app using React, Tailwind CSS, GPT-3 API, React Reveal, Node.js, Express.js, and MongoDB. The app provides a user-friendly interface, personalized cover letter generation, and engaging animations. The project achieved its goal of simplifying and enhancing the cover letter writing process using advanced technologies.",
		shortDesc:
			"is an outstanding and efficient website that helps job seekers to generate cover letters for any position.  create unique Cover letters using AI",
		requirement:
			"The project required developing a cover letter generator app with the capability to automatically generate personalized cover letters using Gtp 3. Integration with user-uploaded CV or resume was essential to extract relevant information. The app aimed to provide a user-friendly interface for easy navigation and access to high-quality cover letter content. Ensuring data security and privacy was also a key requirement.",
		challenge:
			"One of the challenges we encountered was integrating and utilizing GPT-3 for cover letter generation. This involved understanding and optimizing the GPT-3 capabilities to generate high-quality and personalized cover letters. Additionally, fine-tuning the model and managing the API usage efficiently were areas that required careful attention.Extracting and integrating data from user-uploaded CV or resume, ensuring accurate language processing, and designing a user-friendly interface.",
		purpose:
			"The purpose of the project was to develop Coverly, a cover letter generator app that utilizes AI technology. The goal was to create unique and personalized cover letters for users based on their CV or resume, along with additional information. Coverly aimed to simplify the cover letter creation process and generate tailored cover letters that showcased the user's qualifications and individuality.",
		live: "https://coverly.hng.tech/",
		coderepo: "https://github.com/Jcolejeff/quizApp",
	},
];
export default Projects;
