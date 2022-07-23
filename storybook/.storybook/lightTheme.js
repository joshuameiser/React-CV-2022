import { create } from "@storybook/theming";
import Logo from "./assets/Storybook-light.svg";

const color = "purple";

export default create({
	base: "light",
	barSelectedColor: color,
	colorPrimary: color,
	colorSecondary: color,

	brandTitle: "Storybook Template",
	brandImage: Logo,
	brandTarget: "_self",
});
