import Headline from "../../components/basic/Headline/Headline";
import styled from "styled-components";
import { ContentBox } from "./components/ContentBox";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";

export const WorkingExperience = () => {
	const Wrapper = styled(PageWrapper)`
		padding-bottom: 200px;
	`;

	return (
		<Wrapper>
			<Headline position="right">Working Experience</Headline>
			<ContentBox />
		</Wrapper>
	);
};
