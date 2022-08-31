import Headline from "../../components/basic/Headline/Headline";
import styled from "styled-components";
import { ContentBox } from "./components/ContentBox";

const Wrapper = styled.div`
	z-index: 1;
	overflow: hidden;
	background: var(--backgroundColor);
	padding-bottom: 300px;
`;

export const WorkingExperience = () => {
	return (
		<Wrapper>
			<Headline position="right">Working Experience</Headline>
			<ContentBox />
		</Wrapper>
	);
};
