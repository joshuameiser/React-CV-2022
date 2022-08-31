import { useState } from "react";
import styled from "styled-components";
import content from "../../../data/Content.json";
import { Responsibility } from "./Responsibility";

const Wrapper = styled.div`
	height: 200px;
	display: flex;
	justify-content: flex-end;
	padding: 0 64px;
`;

const LoadingBar = styled.div`
	height: 100%;
	width: 6px;
	position: relative;
	border-radius: 8px;
	background-color: var(--primaryHover);
`;

const ActiveBar = styled.div<{ projectCount: number; activeNumber: number }>`
	transition: 0.5s ease-in-out;
	height: ${(p) => 100 / p.projectCount}%;
	width: 100%;
	border-radius: 8px;
	position: absolute;
	top: ${(p) => 100 / (p.projectCount / p.activeNumber)}%;
	background-color: var(--primaryColor);
`;

const Workplaces = styled.div`
	height: 100%;
	width: auto;
`;

const Workplace = styled.p<{ projectCount: number; isActive: boolean }>`
	height: ${(p) => 100 / p.projectCount}%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 16px;
	transition: color 0.3s ease-in-out;
	color: ${(p) =>
		p.isActive ? "var(--primaryColor)" : "var(--contrastColor)"};
	margin: 0;
	cursor: pointer;
	font-size: 1.5rem;
`;

const DescriptionWrapper = styled.div`
	height: 100%;
	padding-right: 64px;
	font-size: 1.5rem;
	color: var(--contrastColor);
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	p {
		margin: 0;
	}
`;

const TimeFrame = styled.p`
	font-size: 1.125rem;
	padding-bottom: 16px;
`;

export const ContentBox = () => {
	const workingExperience = content.WorkingExperience;
	const projectCount = workingExperience.length;

	const [activeNumber, setActiveNumber] = useState(0);

	return (
		<Wrapper>
			<DescriptionWrapper>
				<p>{workingExperience[activeNumber].position.toUpperCase()}</p>
				<TimeFrame>{workingExperience[activeNumber].timeframe}</TimeFrame>
				{workingExperience[activeNumber].responsibilities?.map(
					(responsibility) => {
						return <Responsibility>{responsibility}</Responsibility>;
					}
				)}
			</DescriptionWrapper>
			<Workplaces>
				{workingExperience.map((experience, index) => {
					return (
						<Workplace
							projectCount={projectCount}
							isActive={activeNumber === index}
							onClick={() => {
								setActiveNumber(index);
							}}>
							{experience.company}
						</Workplace>
					);
				})}
			</Workplaces>
			<LoadingBar>
				{/* Active number starts at 0 */}
				<ActiveBar projectCount={projectCount} activeNumber={activeNumber} />
			</LoadingBar>
		</Wrapper>
	);
};
