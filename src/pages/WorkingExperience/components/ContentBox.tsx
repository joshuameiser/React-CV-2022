import { useState } from "react";
import styled from "styled-components";
import content from "../../../data/Content.json";
import { Responsibility } from "./Responsibility";

const Wrapper = styled.div`
	// 2.5rem because of 1.5rem font-size with line-height 1 and 1rem gap
	width: 100vw;
	display: flex;
	flex-direction: column-reverse;
	gap: 32px;
	position: relative;
	// justify-content: flex-end;
	padding: 0 16px;

	@media (min-width: 640px) {
		padding: 0 32px;
		gap: 0;
		// flex-direction:row;
		// justify-content:flex-end;
		// height: calc(2.5rem * ${content.WorkingExperience.length});
	}

	@media (min-width: 700px) {
		padding: 0 64px;
	}
`;

const LoadingBar = styled.div<{ projectCount: number; activeNumber: number }>`
	width: ${(p) => 140 * p.projectCount}px;
	height: 6px;
	position: relative;
	border-radius: 8px;
	background-color: var(--primaryHover);

	@media (min-width: 640px) {
		// width:6px;
		// height:inherit;
		// min-height:inherit;
	}
`;

const ActiveBar = styled.div<{ projectCount: number; activeNumber: number }>`
	transition: 0.5s ease-in-out;
	width: 140px;
	height: 100%;
	border-radius: 8px;
	position: absolute;
	left: ${(p) => 140 * p.activeNumber}px;
	background-color: var(--primaryColor);
	@media (min-width: 640px) {
		// width:100%;
		// height: ${(p) => 100 / p.projectCount}%;
		// top: ${(p) => 100 / (p.projectCount / p.activeNumber)}%;
		// left: 0;
	}
`;

const Workplaces = styled.div`
	height: 100%;
	position: relative;
	display: flex;
	gap: 0;
	width: auto;
	@media (min-width: 640px) {
		gap: 16px;
	}

	@media (min-width: 640px) {
		// flex-direction:column;
		// justify-content: center;
	}
`;

const Workplace = styled.p<{ projectCount: number; isActive: boolean }>`
	// display: flex;
	align-items: center;
	// justify-content: flex-end;
	// padding-right: 16px;
	transition: color 0.3s ease-in-out;
	color: ${(p) =>
		p.isActive ? "var(--primaryColor)" : "var(--contrastColor)"};
	margin: 0;
	cursor: pointer;
	font-size: 1.25rem;
	line-height: 1.5rem;
	text-align: center;
	min-width: 140px;
	max-width: 140px;

	@media (min-width: 620px) {
	}

	@media (min-width: 640px) {
		font-size: 1.5rem;
		line-height: 1;
		// height: ${(p) => 100 / p.projectCount}%;
		// text-align: right;
		// width: auto;
		// justify-content: flex-end;
	}
`;

const DescriptionWrapper = styled.div`
	height: 100%;
	padding-right: 16px;
	@media (min-width: 400px) {
		padding-right: 32px;
	}
	@media (min-width: 640px) {
		align-items: flex-start;
	}
	@media (min-width: 760px) {
		padding-right: 64px;
	}

	color: var(--contrastColor);
	display: flex;
	flex-direction: column;
	align-items: flex-end;

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

const SelectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: scroll;
	max-width: 100vw;
	@media (min-width: 640px) {
		// flex-direction:row;
	}

	::-webkit-scrollbar {
		-webkit-appearance: none;
		height: 0px;
	}

	::-webkit-scrollbar-thumb {
		-webkit-appearance: none;
		height: 0px;
	}
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
			<SelectionWrapper>
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
				<LoadingBar projectCount={projectCount} activeNumber={activeNumber}>
					{/* Active number starts at 0 */}
					<ActiveBar projectCount={projectCount} activeNumber={activeNumber} />
				</LoadingBar>
			</SelectionWrapper>
		</Wrapper>
	);
};
