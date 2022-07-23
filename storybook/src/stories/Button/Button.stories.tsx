import { Story } from "@storybook/react";
import { Button as MuiButton } from "@mui/material";
import ButtonDocs from "./Button.docs.mdx";
import {
	booleanArg,
	colorArg,
	radioArg,
	sizeArg,
	textArg,
} from "../../utils/argsTypes";

const argTypes = {
	children: textArg({
		defaultValue: "A button",
		description: "This is the textArg",
	}),
	variant: radioArg({
		defaultSummary: "Here comes the default value",
		value: ["text", "contained", "outlined"],
		descriptionSummary:
			"This is the descriptionSummary. Click on it for more details",
		descriptionDetail:
			"This is the descriptionDetail. The summary is clickable if there is a detail",
	}),
	size: sizeArg(),
	color: colorArg({
		defaultValue: "secondary",
		inheritOption: true,
	}),
	disabled: booleanArg({
		defaultSummary: "false",
		descriptionSummary: "This is a descriptionSummary without detail.",
	}),
};

export default {
	argTypes,
	parameters: {
		docs: {
			page: ButtonDocs,
		},
	},
	title: "Components/Button",
};

const Template: Story = ({ children, variant, size, color, disabled }) => {
	return (
		<MuiButton variant={variant} size={size} color={color} disabled={disabled}>
			{children}
		</MuiButton>
	);
};

export const Button = Template.bind({});
