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
import { ThemeContext, useTheme } from "../../context/themeContext";
import { ThemeVariables } from "../../data/ColorSchemes/ThemeVariables";

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
	const { theme, setTheme } = useTheme();

	// Currently just a very simple theme toggle (only two themes possible right now, make more available?)
	// TODO: Create a context, which includes the currently selected theme? Or just pass it down to the necessary component, if it's just one
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<ThemeVariables theme={theme} setTheme={setTheme}>
				<LayoutWrapper>
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
			</ThemeVariables>
		</ThemeContext.Provider>
	);
};
