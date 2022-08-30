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
	width: auto;

	svg {
		font-size: inherit;
		color: var(--primaryColor);
	}

	p {
		font-size: 1.25rem;
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
