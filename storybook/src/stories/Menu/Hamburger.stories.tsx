import { Story } from "@storybook/react";
import styled from "styled-components";
import {
	booleanArg,
	colorArg,
	radioArg,
	sizeArg,
	textArg,
} from "../../utils/argsTypes";
import Hamburger from "@joshuameiser/hamburger";

const argTypes = {
	color: colorArg({ defaultValue: "black" }),
	func: booleanArg(),
};

export default {
	argTypes,
	title: "Universal/Menu/Hamburger",
	parameters: {
		layout: "padded",
	},
};

const Template: Story = ({ color, func }) => {
	if (func) {
		return (
			<Hamburger
				color={color}
				onClick={() => {
					console.log("test");
				}}
			/>
		);
	}
	return <Hamburger color={color} />;
};

export const HamburgerStory = Template.bind({});
HamburgerStory.storyName = "Hamburger";
