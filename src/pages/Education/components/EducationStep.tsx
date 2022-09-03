import styled from "styled-components";

const Wrapper = styled.div`
	padding: 16px;
	text-align: inherit;

	@media (min-width: 640px) {
		padding: 0 64px;
	}
`;

const Name = styled.h2`
	color: var(--secondaryColor);
	font-size: 1.75rem;
	margin: 0;

	@media (min-width: 640px) {
		font-size: 2.25rem;
	}
`;

const Location = styled.h3`
	color: var(--contrastColor);
	margin: 0;

	@media (min-width: 640px) {
		font-size: 1.5rem;
	}
`;

const Timeframe = styled.h3`
	color: var(--contrastColor);
	margin: 0;

	@media (min-width: 640px) {
		font-size: 1.5rem;
	}
`;

export interface EducationStepProps {
	name: string;
	location: string;
	timeframe: string;
}

export const EducationStep = (props: EducationStepProps) => {
	return (
		<Wrapper>
			<Name>{props.name.toUpperCase()}</Name>
			<Location>{props.location.toUpperCase()}</Location>
			<Timeframe>{props.timeframe}</Timeframe>
		</Wrapper>
	);
};
