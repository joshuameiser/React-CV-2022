import styled from "styled-components";
import Headline from "../../components/basic/Headline/Headline";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";
import { useContent } from "../../data/Content";
import { EducationStep } from "../Education/components/EducationStep";

const Experience = styled(EducationStep)``;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	text-align: left;
`;

export const ExperienceAbroad = () => {
	const content = useContent();

	return (
		<PageWrapper>
			<Headline>{content.experienceAbroadTitle}</Headline>
			<ContentWrapper>
				{content.ExperienceAbroad.map((entry, index) => {
					return (
						<Experience
							key={entry.name + index}
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
