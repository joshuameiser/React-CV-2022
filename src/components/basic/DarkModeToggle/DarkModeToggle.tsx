import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useEffect } from "react";

export interface DarkModeToggleProps {
	theme: string | undefined;
	setTheme: Function;
}

const ModeToggle = styled.div`
	width: 32px;
	height: 32px;
	position: fixed;
	top: 16px;
	right: 16px;
	font-size: 2rem;
	z-index: 2;
`;

const StyledIcon = styled(FontAwesomeIcon)`
	color: var(--secondaryColor);
	cursor: pointer;
`;

export const DarkModeToggle = (props: DarkModeToggleProps) => {
	useEffect(() => {
		props.theme !== undefined &&
			window.localStorage.setItem("color-mode", props.theme);
	}, [props.theme]);

	return (
		<ModeToggle
			onClick={() => {
				props.theme === "dark"
					? props.setTheme("light")
					: props.setTheme("dark");
			}}>
			<StyledIcon icon={props.theme === "dark" ? faMoon : faSun} />
		</ModeToggle>
	);
};

export default DarkModeToggle;
