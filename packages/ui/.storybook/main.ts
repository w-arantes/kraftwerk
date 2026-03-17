import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: ["@storybook/addon-essentials"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	async viteFinal(config) {
		return {
			...config,
			build: config.build
				? {
						...config.build,
						rollupOptions: config.build.rollupOptions
							? {
									...config.build.rollupOptions,
								}
							: undefined,
					}
				: config.build,
		};
	},
};

export default config;
