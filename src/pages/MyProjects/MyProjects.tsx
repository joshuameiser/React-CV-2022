import styled from "styled-components";
import { motion } from "framer-motion";
import Project from "./components/Project/Project";
import Headline from "../../components/basic/Headline/Headline";

const Wrapper = styled.div`
	background-color: var(--backgroundColor);
	padding-bottom: 100px;
	z-index: 1;
`;

export const MyProjects = () => {
	return (
		<Wrapper>
			<Headline>My Projects</Headline>
			<Project />
		</Wrapper>
	);
};

export default MyProjects;
