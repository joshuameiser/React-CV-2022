import Headline from "../../components/basic/Headline/Headline";
import styled from "styled-components";
import { ContentBox } from "./components/ContentBox";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";

export const WorkingExperience = () => {
	return (
		<PageWrapper>
			<Headline position="right">Working Experience</Headline>
			<ContentBox />
		</PageWrapper>
	);
};
