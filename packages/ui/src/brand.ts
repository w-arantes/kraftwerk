/**
 * Brand Configuration
 *
 * Edit this file to customize the boilerplate for your project.
 * All theme tokens, Storybook branding, and component defaults
 * derive from these values.
 */

export const brand = {
	/** Display name shown in Storybook and docs */
	name: "kraftwerk",

	/** Repository or homepage URL */
	url: "https://github.com/kraftwerk",

	/** Font stack used across components and Storybook UI */
	fontFamily:
		'"ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", monospace',

	/** Dark theme palette (default) */
	dark: {
		bgMain: "#050505",
		bgSurface: "#0a1f0a",
		surfaceRaised: "#0d2d0d",
		muted: "#0d2d0d",
		textPrimary: "#39ff14",
		textMuted: "#228b22",
		mutedForeground: "#1a6b1a",
		accent: "#00ff41",
		accentGlow: "rgba(57, 255, 20, 0.2)",
		accentHover: "#33ff55",
		border: "#003b00",
		destructive: "oklch(0.55 0.2 25)",
		primaryForeground: "#050505",
	},

	/** Light theme palette */
	light: {
		bgMain: "#f0fff0",
		bgSurface: "#e0f5e0",
		surfaceRaised: "#d0ebd0",
		muted: "#d0ebd0",
		textPrimary: "#0a4f0a",
		textMuted: "#2d7a2d",
		mutedForeground: "#4a8a4a",
		accent: "#00a020",
		accentGlow: "rgba(0, 160, 32, 0.15)",
		accentHover: "#00c030",
		border: "#a0d0a0",
		destructive: "oklch(0.55 0.2 25)",
		primaryForeground: "#ffffff",
	},
} as const;
