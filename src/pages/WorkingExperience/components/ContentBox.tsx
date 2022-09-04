import { createRef, ReactNode, useRef, useState } from "react";
import styled from "styled-components";
import content from "../../../data/Content.json";
import { Responsibility } from "./Responsibility";

const Wrapper = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column-reverse;
	gap: 32px;
	position: relative;
	height: auto;

	@media (min-width: 640px) {
		padding: 0 32px;
		gap: 0;
		flex-direction: row;
		justify-content: flex-end;
	}
`;

const LoadingBar = styled.div<{ projectCount: number; activeNumber: number }>`
	width: ${(p) => 140 * p.projectCount}px;
	height: 6px;
	position: relative;
	border-radius: 8px;
	background-color: var(--primaryHover);

	@media (min-width: 640px) {
		width: 6px;
		height: inherit;
		min-height: inherit;
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
		width: 100%;
		height: ${(p) => 100 / p.projectCount}%;
		top: ${(p) => 100 / (p.projectCount / p.activeNumber)}%;
		left: 0;
	}
`;

const Workplaces = styled.div`
	height: 100%;
	position: relative;
	display: flex;
	gap: 0;
	width: auto;

	@media (min-width: 640px) {
		flex-direction: column;
		justify-content: center;
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

	@media (min-width: 640px) {
		overflow: hidden;
		font-size: 1.5rem;
		line-height: 1;
		height: ${(p) => 100 / p.projectCount}%;
		text-align: right;
		width: auto;
		justify-content: flex-end;
	}

	@media (min-width: 1000px) {
		font-size: 2rem;
		max-width: 300px;
	}
`;

const DescriptionWrapper = styled.div`
	height: 100%;
	margin-right: 16px;
	@media (min-width: 400px) {
		margin-right: 32px;
	}
	@media (min-width: 640px) {
		align-items: flex-start;
	}
	@media (min-width: 760px) {
		margin-right: 64px;
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
	font-size: 1.25rem;
	@media (min-width: 640px) {
		font-size: 1.5rem;
	}
	@media (min-width: 1000px) {
		font-size: 1.75rem;
	}
`;

const TimeFrame = styled.p`
	font-size: 1.125rem;
	padding-bottom: 16px;
	@media (min-width: 1000px) {
		font-size: 1.25rem;
	}
`;

const SelectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow-x: scroll;
	max-width: 100vw;
	@media (min-width: 640px) {
		// 2.5rem because of 1.5rem font-size with line-height 1 and 1rem gap
		height: calc(2.5rem * ${content.WorkingExperience.length});
		flex-direction: row;
		margin-right: 64px;
		gap: 16px;
	}

	@media (min-height: 1000px) {
		height: calc(3rem * ${content.WorkingExperience.length});
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

	const responsibilityRefs = useRef<HTMLParagraphElement[]>([]);

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
								ref={(ref: HTMLParagraphElement) =>
									responsibilityRefs.current.length < projectCount &&
									ref !== null &&
									responsibilityRefs.current.push(ref)
								}
								onClick={() => {
									setActiveNumber(index);
									responsibilityRefs.current[index].scrollIntoView({
										behavior: "smooth",
										block: "nearest",
										inline: "center",
									});
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
