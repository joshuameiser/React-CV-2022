import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useEffect } from "react";
import classes from "./DarkModeToggle.module.scss";

export interface DarkModeToggleProps {
	theme: string | undefined;
	setTheme: Function;
}

export const DarkModeToggle = (props: DarkModeToggleProps) => {
	const ModeToggle = styled.div`
		width: 32px;
		height: 32px;
		position: fixed;
		top: 16px;
		right: 16px;
		font-size: 2rem;
	`;

	useEffect(() => {
		props.theme !== undefined &&
			window.localStorage.setItem("color-mode", props.theme);
	}, [props.theme]);

	return (
		<ModeToggle
			onClick={() => {
				props.theme === "dark-mode"
					? props.setTheme("light-mode")
					: props.setTheme("dark-mode");
			}}>
			<FontAwesomeIcon
				className={classes.icon}
				icon={props.theme === "dark-mode" ? faMoon : faSun}
			/>
		</ModeToggle>
	);
};

export default DarkModeToggle;
