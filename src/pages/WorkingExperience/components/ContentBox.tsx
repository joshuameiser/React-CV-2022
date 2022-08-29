import styled from "styled-components";

const Wrapper = styled.div`
	height: 100px;
	display: flex;
	justify-content: center;
	width: 100vw;
`;

const LoadingBar = styled.div`
	height: 100%;
	width: 4px;
	position: relative;
	border-radius: 8px;
	background-color: var(--primaryHover);
`;

const ActiveBar = styled.div<{ projects: number; activeNumber: number }>`
	transition: 0.5s ease-in-out;
	height: ${(p) => 100 / p.projects}%;
	width: 100%;
	position: absolute;
	top: ${(p) => 100 / (p.projects / p.activeNumber)}%;
	background-color: var(--primaryColor);
`;

const Workplaces = styled.div`
	height: 100%;
	width: auto;
`;

const Workplace = styled.p<{ projects: number }>`
	height: ${(p) => 100 / p.projects}%;
	display: flex;
	align-items: center;
	padding-left: 16px;
	color: white;
	margin: 0;
`;

export const ContentBox = () => {
	return (
		<Wrapper>
			<LoadingBar>
				{/* Active number starts at 0 */}
				<ActiveBar projects={4} activeNumber={3} />
			</LoadingBar>
			<Workplaces>
				<Workplace projects={4}>SAP</Workplace>
				<Workplace projects={4}>UVP Stelzer</Workplace>
				<Workplace projects={4}>FarmAct</Workplace>
				<Workplace projects={4}>Aclue</Workplace>
			</Workplaces>
		</Wrapper>
	);
};
