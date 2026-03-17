import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
	component: Textarea,
	title: "Components/Textarea",
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {
		placeholder: "Enter your message...",
		size: "md",
	},
};

export const Small: Story = {
	args: {
		placeholder: "Small textarea",
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		placeholder: "Large textarea",
		size: "lg",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled textarea",
		disabled: true,
	},
};
