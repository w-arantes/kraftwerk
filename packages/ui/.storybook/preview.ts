import type { Preview } from "storybook";
import { kraftwerkTheme } from "./theme";
import "../src/styles/theme.css";

const preview: Preview = {
	parameters: {
		options: {
			storySort: {
				order: ["Foundations", "Components"],
			},
		},
		docs: {
			theme: kraftwerkTheme,
		},
		backgrounds: {
			default: "dark",
			values: [
				{ name: "dark", value: "#050505" },
				{ name: "light", value: "#f0fff0" },
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
