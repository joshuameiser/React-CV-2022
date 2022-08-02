import { useEffect, useState } from "react";
import "../../data/ColorSchemes/darkMode.module.scss";
import "../../data/ColorSchemes/lightMode.module.scss";
import "../../data/ColorSchemes/greenInferno.module.scss";
import Menu from "../../components/complex/Menu/Menu";
import DarkModeToggle from "../../components/basic/DarkModeToggle/DarkModeToggle";
import styled from "styled-components";
import { FrontPage } from "../FrontPage/FrontPage";
import AboutMe from "../AboutMe/AboutMe";

export const themes = ["dark-mode", "green-inferno", "light-mode"];

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100vw - 10vw);
	overflow-x: hidden;
`;

const LayoutWrapper = styled.div`
	background-color: var(--secondaryBackgroundColor);
	min-height: 100vh;
	width: 100vw;
	display: flex;
`;

export const Layout = () => {
	const [theme, setTheme] = useState<string | undefined>(undefined);

	useEffect(() => {
		const savedTheme = window.localStorage.getItem("color-mode");
		setTheme(
			savedTheme ?? window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark-mode"
				: "light-mode"
		);
	}, []);
	// Currently just a very simple theme toggle (only two themes possible right now, make more available?)
	// TODO: Add an actual theme toggle
	// TODO: Save the current theme in localStorage
	// TODO: Create a context, which includes the currently selected theme? Or just pass it down to the necessary component, if it's just one
	return (
		<LayoutWrapper data-theme={theme}>
			<DarkModeToggle theme={theme} setTheme={setTheme} />
			<Menu />
			<Content>
				<FrontPage />
				<AboutMe />
			</Content>
		</LayoutWrapper>
	);
};
