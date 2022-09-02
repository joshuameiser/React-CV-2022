import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export interface ResponsibilityProps {
	children: React.ReactNode;
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	font-size: 1.125rem;
	width: 300px;
	@media (max-width: 720px) {
		width: 250px;
	}
	@media (max-width: 660px) {
		width: 200px;
		font-size: 1rem;
	}
	padding: 0.5rem 0;

	svg {
		font-size: inherit;
		color: var(--primaryColor);
	}

	p {
		width: calc(100% - 32px);
		overflow-wrap: break-word;
		font-size: 1.25rem;
		text-align: right;
		line-height: 1.25;

		@media (max-width: 660px) {
			font-size: 1.125rem;
			line-height: 1.125;
		}
	}
`;

export const Responsibility = (props: ResponsibilityProps) => {
	return (
		<Wrapper>
			<p>{props.children}</p>
			<FontAwesomeIcon icon={faCircleCheck} />
		</Wrapper>
	);
};
