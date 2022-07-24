export interface ArgProps<T> {
	description?: string;
	descriptionSummary?: string;
	descriptionDetail?: string;
	defaultValue?: T;
	defaultSummary?: string;
	defaultDetail?: string;
	if?: string;
	ifNot?: string;
	category?: string;
}

export interface NumberOptions {
	min?: number;
	max?: number;
	step?: number;
}

export interface ColorProps {
	colors?: string[];
}

export interface ArrayOptions {
	value: string[];
	// inline is set to true by default
	inline?: boolean;
}

export interface FileOptions {
	fileTypes?: string[];
}

export const booleanArg = (props: ArgProps<boolean> = {}) => {
	return {
		control: "boolean",
		...(props.if && { if: { arg: props.if } }),
		...(props.ifNot && { if: { arg: props.ifNot, truthy: false } }),
		defaultValue: props.defaultValue ?? false,
		description: props.description,
		table: {
			category: props.category,
			defaultValue: {
				detail: props.defaultDetail,
				disabled: !props.defaultSummary && !props.defaultDetail,
				summary: props.defaultSummary,
			},
			type: {
				detail: props.descriptionDetail,
				disabled: !props.descriptionSummary && !props.descriptionDetail,
				summary: props.descriptionSummary ?? "boolean",
			},
		},
	};
};

export const textArg = (props: ArgProps<string> = {}) => {
	return {
		control: "text",
		...(props.if && { if: { arg: props.if } }),
		...(props.ifNot && { if: { arg: props.ifNot, truthy: false } }),
		defaultValue: props.defaultValue,
		description: props.description,
		table: {
			category: props.category,
			defaultValue: {
				detail: props.defaultDetail,
				disabled: !props.defaultSummary && !props.defaultDetail,
				summary: props.defaultSummary,
			},
			type: {
				detail: props.descriptionDetail,
				disabled: !props.descriptionSummary && !props.descriptionDetail,
				summary: props.descriptionSummary ?? "string",
			},
		},
	};
};

export const numberArg = (props: ArgProps<number> & NumberOptions = {}) => {
	return {
		control: {
			max: props.max,
			min: props.min,
			step: props.step,
			type: "number",
		},
		defaultValue: props.defaultValue,
		description: props.description,
		...(props.if && { if: { arg: props.if } }),
		...(props.ifNot && { if: { arg: props.ifNot, truthy: false } }),
		table: {
			category: props.category,
			defaultValue: {
				detail: props.defaultDetail,
				disabled: !props.defaultSummary && !props.defaultDetail,
				summary: props.defaultSummary,
			},
			type: {
				detail: props.descriptionDetail,
				disabled: !props.descriptionSummary && !props.descriptionDetail,
				summary: props.descriptionSummary ?? "number",
			},
		},
	};
};

export const colorArg = (props: ArgProps<any> & ColorProps = {}) => {
	return {
		control: {
			type: "color",
			presetColors: props.colors,
		},
		defaultValue: props.defaultValue,
		description: props.description,
		...(props.if && { if: { arg: props.if } }),
		...(props.ifNot && { if: { arg: props.ifNot, truthy: false } }),
		table: {
			category: props.category,
			defaultValue: {
				detail: props.defaultDetail,
				disabled: !props.defaultSummary && !props.defaultDetail,
				summary: props.defaultSummary,
			},
			type: {
				detail: props.descriptionDetail,
				disabled: !props.descriptionSummary && !props.descriptionDetail,
				summary: props.descriptionSummary ?? "number",
			},
		},
	};
};

export const rangeArg = (props: ArgProps<number> & NumberOptions = {}) => {
	return {
		control: {
			max: props.max,
			min: props.min,
			step: props.step,
			type: "range",
		},
		defaultValue: props.defaultValue,
		description: props.description,
		...(props.if && { if: { arg: props.if } }),
		...(props.ifNot && { if: { arg: props.ifNot, truthy: false } }),
		table: {
			category: props.category,
			defaultValue: {
				detail: props.defaultDetail,
				disabled: !props.defaultSummary && !props.defaultDetail,
				summary: props.defaultSummary,
			},
			type: {
				detail: props.descriptionDetail,
				disabled: !props.descriptionSummary && !props.descriptionDetail,
				summary: props.descriptionSummary ?? "number",
			},
		},
	};
};

export const fileArg = (props: ArgProps<string> & FileOptions) => {
	return {
		control: { accept: props.fileTypes ?? ".png", type: "file" },
		defaultValue: props.defaultValue,
		description: props.description,
		...(props.if && { if: { arg: props.if } }),
		...(props.ifNot && { if: { arg: props.ifNot, truthy: false } }),
		table: {
			category: props.category,
			defaultValue: {
				detail: props.defaultDetail,
				disabled: !props.defaultSummary && !props.defaultDetail,
				summary: props.defaultSummary,
			},
			type: {
				detail: props.descriptionDetail,
				disabled: !props.descriptionSummary && !props.descriptionDetail,
				summary: props.descriptionSummary,
			},
		},
	};
};

export const radioArg = (props: ArgProps<string> & ArrayOptions) => {
	const { inline = true } = props;
	return {
		control: {
			options: props.value,
			type: inline ? "inline-radio" : "radio",
		},
		defaultValue: props.defaultValue,
		description: props.description,
		...(props.if && { if: { arg: props.if } }),
		...(props.ifNot && { if: { arg: props.ifNot, truthy: false } }),
		table: {
			category: props.category,
			defaultValue: {
				detail: props.defaultDetail,
				disabled: !props.defaultSummary && !props.defaultDetail,
				summary: props.defaultSummary,
			},
			type: {
				detail: props.descriptionDetail,
				disabled: !props.descriptionSummary && !props.descriptionDetail,
				summary: props.descriptionSummary,
			},
		},
	};
};

export const checkboxArg = (props: ArgProps<string> & ArrayOptions) => {
	const { inline = true } = props;

	return {
		control: {
			options: props.value,
			type: inline ? "inline-check" : "check",
		},
		defaultValue: props.defaultValue,
		description: props.description,
		...(props.if && { if: { arg: props.if } }),
		...(props.ifNot && { if: { arg: props.ifNot, truthy: false } }),
		table: {
			category: props.category,
			defaultValue: {
				detail: props.defaultDetail,
				disabled: !props.defaultSummary && !props.defaultDetail,
				summary: props.defaultSummary,
			},
			type: {
				detail: props.descriptionDetail,
				disabled: !props.descriptionSummary && !props.descriptionDetail,
				summary: props.descriptionSummary,
			},
		},
	};
};

export const dropdownArg = (props: ArgProps<string> & ArrayOptions) => {
	return {
		control: {
			options: props.value,
			type: "select",
		},
		defaultValue: props.defaultValue,
		description: props.description,
		...(props.if && { if: { arg: props.if } }),
		...(props.ifNot && { if: { arg: props.ifNot, truthy: false } }),
		table: {
			category: props.category,
			defaultValue: {
				detail: props.defaultDetail,
				disabled: !props.defaultSummary && !props.defaultDetail,
				summary: props.defaultSummary,
			},
			type: {
				detail: props.descriptionDetail,
				disabled: !props.descriptionSummary && !props.descriptionDetail,
				summary: props.descriptionSummary,
			},
		},
	};
};

// Custom argTypes:

export interface SizeProps {
	defaultValue?: "small" | "medium" | "large";
	smallOption?: boolean;
	mediumOption?: boolean;
	largeOption?: boolean;
}

export const sizeArg = (props: SizeProps = {}) => {
	const {
		defaultValue = "medium",
		largeOption = true,
		mediumOption = true,
		smallOption = true,
	} = props;

	return radioArg({
		defaultSummary: defaultValue,
		descriptionDetail: `size?: ${[
			smallOption ? '"small"' : null,
			mediumOption ? '"medium"' : null,
			largeOption ? '"large"' : null,
		]
			.filter((option) => option)
			.join(" | ")}`,
		descriptionSummary: "size selection",
		inline: true,
		value: [
			smallOption && "small",
			mediumOption && "medium",
			largeOption && "large",
		].filter((option) => option),
	});
};

/**
 * All Arg Types (+ reasoning):
 *
 * Included:
 *
 * Boolean (boolean toggle)
 * Number (number input with stepper)
 * Range (same as number, just as a range slider)
 * File (file input, currently only accepts .png, returns the link to the file)
 * Radio (multiple options, only one possible answer) - inline option
 * Checkbox (multiple options, multiple possible answers) - inline option
 * Select (single option dropdown)
 *
 *
 * Not Included:
 *
 * Object (no use case available so far)
 * Multi-Select (multi select drop down - not as useable as checkboxes)
 * Color (color picker - not used since the DS includes fixed color options)
 * Date (date picker - no use case available yet)
 *
 *
 * Link for further reading:
 * @see {@link https://storybook.js.org/docs/react/essentials/controls | ArgsType}
 */
