import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import { CustomDocContainer } from "../src/utils/CustomDocContainer";
import { useEffect } from "react";
import { useState } from "react";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { addons } from "@storybook/addons";
import "../../src/data/ColorSchemes/darkMode.module.scss";
import "../../src/data/ColorSchemes/lightMode.module.scss";
import "../../src/data/ColorSchemes/greenInferno.module.scss";

const channel = addons.getChannel();

export const globalTypes = {
	dataTheme: {
		name: "data-theme",
		description: "Available data-themes",
		defaultValue: "dark-mode",
		toolbar: {
			icon: "circlehollow",
			items: ["dark-mode", "green-inferno", "light-mode"],
			showName: true,
			dynamicTitle: true,
		},
	},
};

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	layout: "fullscreen",
	docs: {
		theme:
			window.localStorage.getItem("storybook-color-mode") === "light"
				? lightTheme
				: darkTheme,
		container: CustomDocContainer,
		backgrounds: [
			{ name: "white background", value: "#0000ff", default: true },
		],
	},
	darkMode: {
		current: window.localStorage.getItem("storybook-color-mode")
			? window.localStorage.getItem("storybook-color-mode")
			: "dark",
		dark: { ...darkTheme },
		light: { ...lightTheme },
	},
	backgrounds: {
		default: "default background",
		values: [
			{ name: "default background", value: "#0f0f0f" },
			{ name: "paper", value: "#fff" },
			{ name: "black", value: "#000" },
		],
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const decorator = (Story, context) => {
	// Dark mode:
	const [isDark, setDark] = useState(undefined);

	useEffect(() => {
		channel.on(DARK_MODE_EVENT_NAME, setDark);
		if (isDark !== undefined) {
			let mode: string;
			if (isDark) {
				mode = "dark";
			}
			if (!isDark) {
				mode = "light";
			}
			if (window.localStorage.getItem("storybook-color-mode") !== mode) {
				window.localStorage.setItem("storybook-color-mode", mode);
				window.location.reload();
			}
		}
		return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
	}, [channel, setDark, isDark]);

	return (
		<div data-theme={context.globals.dataTheme}>
			<Story {...context} />
		</div>
	);
};

export const decorators = [decorator];
