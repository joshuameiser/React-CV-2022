import { useEffect, useState } from "react";
import "../../data/ColorSchemes/darkMode.module.scss";
import "../../data/ColorSchemes/lightMode.module.scss";
import "../../data/ColorSchemes/greenInferno.module.scss";
import Menu from "../../components/complex/Menu/Menu";
import DarkModeToggle from "../../components/basic/DarkModeToggle/DarkModeToggle";
import styled from "styled-components";
import { FrontPage } from "../FrontPage/FrontPage";
import AboutMe from "../AboutMe/AboutMe";
import MyProjects from "../MyProjects/MyProjects";
import { WorkingExperience } from "../WorkingExperience/WorkingExperience";
import { ExperienceAbroad } from "../ExperienceAbroad/ExperienceAbroad";
import { Education } from "../Education/Education";
import { Contact } from "../Contact/Contact";

export const themes = ["dark-mode", "green-inferno", "light-mode"];

const Content = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const LayoutWrapper = styled.div`
	background-color: var(--secondaryBackgroundColor);
	min-height: 100vh;
	max-width: 100vw;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
`;

export const Layout = () => {
	const [theme, setTheme] = useState<string | undefined>(undefined);

	useEffect(() => {
		const savedTheme = window.localStorage.getItem("color-mode");
		console.log(savedTheme);
		if (savedTheme) setTheme(savedTheme);
		if (!savedTheme)
			setTheme(
				window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark-mode"
					: "light-mode"
			);
	}, []);
	// Currently just a very simple theme toggle (only two themes possible right now, make more available?)
	// TODO: Create a context, which includes the currently selected theme? Or just pass it down to the necessary component, if it's just one
	return (
		<LayoutWrapper data-theme={theme}>
			<DarkModeToggle theme={theme} setTheme={setTheme} />
			{/* <Menu /> */}
			<Content>
				<FrontPage />
				<AboutMe />
				<WorkingExperience />
				<ExperienceAbroad />
				<Education />
				<MyProjects />
				<Contact />
			</Content>
		</LayoutWrapper>
	);
};
