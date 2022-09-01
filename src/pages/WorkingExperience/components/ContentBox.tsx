import { useState } from "react";
import styled from "styled-components";
import content from "../../../data/Content.json";
import { Responsibility } from "./Responsibility";

const Wrapper = styled.div`
	// 2.5rem because of 1.5rem font-size with line-height 1 and 1rem gap
	height: calc(2.5rem * ${content.WorkingExperience.length});
	display: flex;
	position: relative;
	justify-content: flex-end;
	padding: 0 64px;

	@media (max-width: 700px) {
		padding: 0 32px;
	}

	@media (max-width: 640px) {
		padding: 0 16px;
	}
`;

const LoadingBar = styled.div`
	height: inherit;
	min-height: inherit;
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
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 16px;
	@media (max-width: 620px) {
		gap: 0;
	}
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
	line-height: 1;
	@media (max-width: 620px) {
		font-size: 1.25rem;
		line-height: 1.5rem;
	}
	text-align: right;
`;

const DescriptionWrapper = styled.div`
	height: 100%;
	padding-right: 64px;
	@media (max-width: 760px) {
		padding-right: 32px;
	}
	@media (max-width: 400px) {
		padding-right: 16px;
	}

	color: var(--contrastColor);
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	p {
		margin: 0;
	}
`;

const DescriptionHeader = styled.p`
	font-size: 1.5rem;
	@media (max-width: 640px) {
		font-size: 1.25rem;
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
				<DescriptionHeader>
					{workingExperience[activeNumber].position.toUpperCase()}
				</DescriptionHeader>
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
