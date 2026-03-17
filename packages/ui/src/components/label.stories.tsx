import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
	component: Label,
	title: "Components/Label",
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
	args: {
		children: "Email address",
	},
};

export const WithInput: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<Label htmlFor="email">Email</Label>
			<Input id="email" placeholder="you@example.com" />
		</div>
	),
};
