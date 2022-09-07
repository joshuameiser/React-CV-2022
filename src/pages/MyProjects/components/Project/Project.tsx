import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
  padding:16px;
  margin-left:16px;
	color: var(--contrastColor);
	border: 1px solid var(--primaryColor);
	border-radius: 8px;
	transition: background-color 0.3s ease-in-out;
	:hover {
		background-color: var(--primaryHover);
	}

  @media(min-width:640px) {
    margin-left:64px;
  }
`;

const Divider = styled.div`
	width: 80%;
	height: 1px;
	background-color: var(--primaryColor);
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 32px;

	.project-icon {
		font-size: 1.5rem;
		color: inherit;
		transition: color 0.3s ease-in-out;
	}
`;

const Link = styled.a`
	padding: 8px;
	color: var(--contrastColor);
	&:hover {
		color: var(--primaryColor);
	}
`;

const Heading = styled.h1`
	padding: 0;
	margin: 16px 0;
`;

export interface ProjectProps {
	name: string;
	websiteLink?: string;
	sourceCodeLink?: string;
}

export const Project = (props: ProjectProps) => {
	return (
		<Wrapper>
			<Heading>{props.name}</Heading>
			{(props.websiteLink || props.sourceCodeLink) && <Divider />}
			<LinkWrapper>
				{props.websiteLink && (
					<Link href={props.websiteLink} target="__self">
						<FontAwesomeIcon
							className="project-icon"
							icon={faUpRightFromSquare}
						/>
					</Link>
				)}
				{props.sourceCodeLink && (
					<Link href={props.sourceCodeLink} target="__self">
						<FontAwesomeIcon className="project-icon" icon={faGithub} />
					</Link>
				)}
			</LinkWrapper>
		</Wrapper>
	);
};

export default Project;
