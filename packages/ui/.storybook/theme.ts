import { create } from "storybook/theming/create";
import { brand } from "../src/brand";

const { dark } = brand;

export const kraftwerkTheme = create({
	base: "dark",

	// Brand
	brandTitle: brand.name,
	brandUrl: brand.url,
	brandTarget: "_self",

	// UI Colors
	colorPrimary: dark.accent,
	colorSecondary: dark.textPrimary,

	// App
	appBg: dark.bgMain,
	appContentBg: dark.bgSurface,
	appPreviewBg: dark.bgMain,
	appBorderColor: dark.border,
	appBorderRadius: 8,

	// Text
	textColor: dark.textPrimary,
	textInverseColor: dark.bgMain,
	textMutedColor: dark.textMuted,

	// Toolbar
	barTextColor: dark.textPrimary,
	barSelectedColor: dark.accent,
	barHoverColor: dark.accentHover,
	barBg: dark.bgSurface,

	// Form
	inputBg: dark.bgSurface,
	inputBorder: dark.border,
	inputTextColor: dark.textPrimary,
	inputBorderRadius: 8,

	// Fonts
	fontBase: brand.fontFamily,
	fontCode: brand.fontFamily,

	// Grid
	gridCellSize: 12,
});
