import styled from "styled-components";
import { motion } from "framer-motion";
import Project from "./components/Project/Project";
import Headline from "../../components/basic/Headline/Headline";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";
import { useContent } from "../../data/Content";

const ProjectsWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 32px;
	flex-wrap: wrap;
`;

export const MyProjects = () => {
	const content = useContent();

	return (
		<PageWrapper>
			<Headline>{content.myProjectsTitle}</Headline>
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
		</PageWrapper>
	);
};

export default MyProjects;
