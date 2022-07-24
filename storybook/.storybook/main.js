const checker = require("vite-plugin-checker");

module.exports = {
	async viteFinal(config, { configType }) {
		return {
			...config,
			resolve: {
				plugins: [checker({ typescript: true })],
			},
		};
	},
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		{ name: "@storybook/addon-essentials", options: { actions: false } },
		"@storybook/addon-interactions",
		"storybook-dark-mode",
		"@storybook/preset-scss",
		"@etchteam/storybook-addon-css-variables-theme",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-vite",
	},
	features: {
		storyStoreV7: true,
	},
};
