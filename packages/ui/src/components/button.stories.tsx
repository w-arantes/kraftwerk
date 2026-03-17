import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
	component: Button,
	title: "Components/Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Button",
		variant: "primary",
		size: "md",
	},
};

export const Secondary: Story = {
	args: {
		children: "Secondary",
		variant: "secondary",
		size: "md",
	},
};

export const Small: Story = {
	args: {
		children: "Small",
		variant: "primary",
		size: "sm",
	},
};

export const Disabled: Story = {
	args: {
		children: "Disabled",
		disabled: true,
	},
};
