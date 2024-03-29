import styled from "styled-components";
import Headline from "../../components/basic/Headline/Headline";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";
import { useContent } from "../../data/Content";
import { EducationStep } from "./components/EducationStep";

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	text-align: right;
`;

export const Education = () => {
	const content = useContent();

	return (
		<PageWrapper>
			<Headline position="right">{content.educationTitle}</Headline>
			<ContentWrapper>
				{content.Education.map((entry, index) => {
					return (
						<EducationStep
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
