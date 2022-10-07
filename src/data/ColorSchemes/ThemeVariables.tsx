import { ReactNode, useEffect, useState } from "react";
import { light } from "./lightMode";
import { dark } from "./darkMode";
import { greenInferno } from "./greenInferno";

export interface themeFormat {
	backgroundColor: string;
	secondaryBackgroundColor: string;
	primaryColor: string;
	secondaryColor: string;
	contrastColor: string;
}

export const ThemeVariables = (props: {
	children: ReactNode;
	theme: string | undefined;
	setTheme: Function;
}) => {
	const [activeTheme, setActiveTheme] = useState<themeFormat>(dark);

	useEffect(() => {
		const root: HTMLElement | null = document.querySelector(":root");
		root?.style.setProperty("--backgroundColor", activeTheme.backgroundColor);
		root?.style.setProperty(
			"--secondaryBackgroundColor",
			activeTheme.secondaryBackgroundColor
		);
		root?.style.setProperty("--primaryColor", activeTheme.primaryColor);
		root?.style.setProperty("--secondaryColor", activeTheme.secondaryColor);
		root?.style.setProperty("--contrastColor", activeTheme.contrastColor);
	}, [props.theme]);

	useEffect(() => {
		switch (props.theme) {
			case "dark":
				setActiveTheme(dark);
				break;
			case "light":
				setActiveTheme(light);
				break;
			case "greenInferno":
				setActiveTheme(greenInferno);
				break;
		}
	}, [props.theme]);

	useEffect(() => {
		const savedTheme = window.localStorage.getItem("color-mode");
		if (savedTheme) props.setTheme(savedTheme);
		if (!savedTheme)
			props.setTheme(
				window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light"
			);
	}, []);

	return <>{props.children}</>;
};
