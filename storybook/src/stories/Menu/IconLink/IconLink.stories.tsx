import {
	faLinkedin,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Story } from "@storybook/react";
import { IconLink } from "../../../../../src/components/basic/IconLink/IconLink";
import { radioArg, rangeArg } from "../../../utils/argsTypes";
import IconLinkDocs from "./IconLink.docs.mdx";

const argTypes = {
	icon: radioArg({ value: ["GitHub", "LinkedIn", "Instagram"] }),
	parentSize: rangeArg({ min: 100, max: 1200, defaultValue: 200 }),
};

export default {
	argTypes,
	parameters: {
		docs: {
			page: IconLinkDocs,
		},
	},
	decorators: [
		(Story: Story) => (
			<div style={{ backgroundColor: "#1f1f1f", height: "100vh" }}>
				<Story />
			</div>
		),
	],
	title: "Universal/Menu/IconLink",
};

const Template: Story = ({ icon, parentSize }) => {
	let socialIcon = faLinkedin;
	switch (icon) {
		case "GitHub":
			socialIcon = faGithub;
			break;
		case "LinkedIn":
			socialIcon = faLinkedin;
			break;
		case "Instagram":
			socialIcon = faInstagram;
			break;
	}
	return (
		<div
			style={{
				height: "100%",
				width: `${parentSize}px`,
				backgroundColor: "black",
			}}>
			<IconLink icon={socialIcon} />
		</div>
	);
};

export const IconLinkStory = Template.bind({});
IconLinkStory.storyName = "IconLink";
