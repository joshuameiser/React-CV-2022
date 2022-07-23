import { create } from "@storybook/theming";
import Logo from "./assets/Storybook-dark.svg";

const color = "#1cb2f5";

export default create({
	base: "dark",
	barSelectedColor: color,
	colorPrimary: color,
	colorSecondary: color,

	brandTitle: "Storybook Template",
	brandImage: Logo,
	brandTarget: "_self",
	// brandTarget: "https://www.joshuameiser.com",
});
