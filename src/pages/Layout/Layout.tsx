import { useEffect, useState } from "react";
import "../../data/ColorSchemes/darkMode.module.scss";
import "../../data/ColorSchemes/lightMode.module.scss";
import "../../data/ColorSchemes/greenInferno.module.scss";
import classes from "./Layout.module.scss";
import Menu from "../../components/complex/Menu/Menu";
import DarkModeToggle from "../../components/basic/DarkModeToggle/DarkModeToggle";

export const themes = ["dark-mode", "green-inferno", "light-mode"];

export const Layout = () => {
	const [theme, setTheme] = useState<string | undefined>(undefined);

	useEffect(() => {
		const savedTheme = window.localStorage.getItem("color-mode");
		setTheme(savedTheme ?? "dark-mode");
	}, []);
	// Currently just a very simple theme toggle (only two themes possible right now, make more available?)
	// TODO: Add an actual theme toggle
	// TODO: Save the current theme in localStorage
	// TODO: Create a context, which includes the currently selected theme? Or just pass it down to the necessary component, if it's just one
	return (
		<div data-theme={theme} className={classes.layout}>
			<DarkModeToggle theme={theme} setTheme={setTheme} />
			<Menu />
		</div>
	);
};
