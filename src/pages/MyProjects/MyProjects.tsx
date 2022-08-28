import styled from "styled-components";
import { motion } from "framer-motion";
import Project from "./components/Project/Project";
import Headline from "../../components/basic/Headline/Headline";
import content from "../../data/Content.json";

const Wrapper = styled.div`
	background-color: var(--backgroundColor);
	padding-bottom: 100px;
	z-index: 1;
`;

const ProjectsWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 16px;
	gap: 32px;
	flex-wrap: wrap;
`;

export const MyProjects = () => {
	return (
		<Wrapper>
			<Headline>My Projects</Headline>
			<ProjectsWrapper>
				{content.Projects.map((project, index) => {
					return (
						<Project
							key={project.websiteLink + index}
							name={project.title}
							websiteLink={project.websiteLink}
							sourceCodeLink={project.sourceCodeLink}
						/>
					);
				})}
			</ProjectsWrapper>
		</Wrapper>
	);
};

export default MyProjects;
