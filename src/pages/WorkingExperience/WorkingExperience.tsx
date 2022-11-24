import Headline from "../../components/basic/Headline/Headline";
import styled from "styled-components";
import { ContentBox } from "./components/ContentBox";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";
import { useContent } from "../../data/Content";

const Wrapper = styled(PageWrapper)`
	padding-bottom: 200px;
`;

export const WorkingExperience = () => {
	const content = useContent();

	return (
		<Wrapper>
			<Headline position="right">{content.workingExperienceTitle}</Headline>
			<ContentBox />
		</Wrapper>
	);
};
