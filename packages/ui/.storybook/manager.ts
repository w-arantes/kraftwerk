import { addons } from "storybook/manager-api";
import { kraftwerkTheme } from "./theme";

addons.setConfig({
	theme: kraftwerkTheme,
	sidebar: {
		showRoots: true,
	},
});
