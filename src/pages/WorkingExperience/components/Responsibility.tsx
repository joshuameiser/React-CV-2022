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
	width: 200px;
	font-size: 1rem;
	@media (min-width: 660px) {
		width: 250px;
	}

	@media (min-width: 640px) {
		flex-direction: row-reverse;
	}

	@media (min-width: 720px) {
		width: 300px;
		font-size: 1.125rem;
	}
	padding: 0.5rem 0;

	svg {
		font-size: inherit;
		color: var(--primaryColor);
	}

	p {
		width: calc(100% - 32px);
		overflow-wrap: break-word;

		text-align: right;
		font-size: 1.125rem;
		line-height: 1.125;

		@media (min-width: 640px) {
			text-align: left;
			font-size: 1.25rem;
			line-height: 1.25;
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
