import { Story } from "@storybook/react";
import styled from "styled-components";
import {
	booleanArg,
	colorArg,
	radioArg,
	sizeArg,
	textArg,
} from "../../utils/argsTypes";
import { Menu } from "../../../../src/components/complex/Menu/Menu";

const argTypes = {};

export default {
	argTypes,
	title: "Universal/Menu",
};

const Template: Story = ({ children, variant, size, color, disabled }) => {
	return <Menu />;
};

export const MenuStory = Template.bind({});
MenuStory.storyName = "Menu";
