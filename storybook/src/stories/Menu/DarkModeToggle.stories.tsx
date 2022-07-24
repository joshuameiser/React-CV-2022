import { Story } from "@storybook/react";

import {
	booleanArg,
	colorArg,
	radioArg,
	sizeArg,
	textArg,
} from "../../utils/argsTypes";
import { DarkModeToggle } from "../../../../src/components/basic/DarkModeToggle/DarkModeToggle";
import { useState } from "react";

const argTypes = {};

export default {
	argTypes,
	parameters: { background: "black" },
	title: "Universal/DarkModeToggle",
};

const Template: Story = ({}) => {
	const [theme, setTheme] = useState("dark-mode");

	return (
		<DarkModeToggle
			theme={theme}
			setTheme={() => {
				theme === "dark-mode" ? setTheme("light-mode") : setTheme("dark-mode");
			}}
		/>
	);
};

export const DarkModeStory = Template.bind({});
DarkModeStory.storyName = "DarkMode";
