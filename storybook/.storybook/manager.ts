import { addons } from "@storybook/addons";
import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";

addons.setConfig({
	theme:
		window.localStorage.getItem("storybook-color-mode") === "dark"
			? darkTheme
			: lightTheme,
});
