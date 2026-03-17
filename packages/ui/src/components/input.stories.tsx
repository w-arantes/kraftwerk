import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
	component: Input,
	title: "Components/Input",
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: "Type something...",
		size: "md",
	},
};

export const Small: Story = {
	args: {
		placeholder: "Small input",
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		placeholder: "Large input",
		size: "lg",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled input",
		disabled: true,
	},
};

export const WithValue: Story = {
	args: {
		defaultValue: "kraftwerk@terminal.dev",
		size: "md",
	},
};
