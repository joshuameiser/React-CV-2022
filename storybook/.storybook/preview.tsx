import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import { CustomDocContainer } from "../src/utils/CustomDocContainer";
import { useEffect } from "react";
import { useState } from "react";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { addons } from "@storybook/addons";

const channel = addons.getChannel();

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
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
			{ name: "default background", value: "#f5f5f5" },
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

	return <Story {...context} />;
};

export const decorators = [decorator];
