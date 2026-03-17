import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
	component: Badge,
	title: "Components/Badge",
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
	args: {
		children: "Active",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "Draft",
		variant: "secondary",
	},
};

export const Outline: Story = {
	args: {
		children: "v1.0.0",
		variant: "outline",
	},
};

export const Destructive: Story = {
	args: {
		children: "Error",
		variant: "destructive",
	},
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-3">
			<Badge size="sm">Small</Badge>
			<Badge size="md">Medium</Badge>
			<Badge size="lg">Large</Badge>
		</div>
	),
};
