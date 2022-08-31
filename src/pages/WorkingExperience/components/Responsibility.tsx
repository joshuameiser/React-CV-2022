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
	// TODO: Add media queries here
	width: 300px;
	padding: 0.5rem 0;

	svg {
		font-size: inherit;
		color: var(--primaryColor);
	}

	p {
		font-size: 1.25rem;
		text-align: left;
		line-height: 1.25;
	}
`;

export const Responsibility = (props: ResponsibilityProps) => {
	return (
		<Wrapper>
			<FontAwesomeIcon icon={faCircleCheck} />
			<p>{props.children}</p>
		</Wrapper>
	);
};
