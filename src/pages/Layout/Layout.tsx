import { useState } from "react";
import "../../data/ColorSchemes/main.module.scss";
import "../../data/ColorSchemes/greenInferno.module.scss";
import classes from "./Layout.module.scss";

export const themes = ["dark-mode", "green-inferno"];

export const Layout = () => {
	const [theme, setTheme] = useState("dark-mode");
	// Currently just a very simple theme toggle (only two themes possible right now, make more available?)
	// TODO: Add an actual theme toggle
	// TODO: Save the current theme in localStorage
	// TODO: Create a context, which includes the currently selected theme? Or just pass it down to the necessary component, if it's just one
	return (
		<div data-theme={theme} className={classes.layout}>
			<div
				style={{
					width: "60px",
					height: "60px",
					backgroundColor: "purple",
					margin: "60px auto",
					color: "white",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					cursor: "pointer",
					userSelect: "none",
				}}
				onClick={() => {
					setTheme(theme === "dark-mode" ? "green-inferno" : "dark-mode");
				}}>
				Theme
			</div>
		</div>
	);
};
