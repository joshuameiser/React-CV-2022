import styled from "styled-components";
import Headline from "../../components/basic/Headline/Headline";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";
import { EducationStep } from "../Education/components/EducationStep";
import content from "../../data/Content.json";

const Experience = styled(EducationStep)``;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
`;

export const ExperienceAbroad = () => {
	return (
		<PageWrapper>
			<Headline>Experience Abroad</Headline>
			<ContentWrapper>
				{content.ExperienceAbroad.map((entry) => {
					return (
						<Experience
							name={entry.name}
							location={entry.location}
							timeframe={entry.timeframe}
						/>
					);
				})}
			</ContentWrapper>
		</PageWrapper>
	);
};
