import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
	component: Separator,
	title: "Components/Separator",
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<span className="font-mono text-sm text-foreground">Section One</span>
			<Separator />
			<span className="font-mono text-sm text-foreground">Section Two</span>
		</div>
	),
};

export const Vertical: Story = {
	render: () => (
		<div className="flex items-center gap-4 h-6">
			<span className="font-mono text-sm text-foreground">Left</span>
			<Separator orientation="vertical" />
			<span className="font-mono text-sm text-foreground">Right</span>
		</div>
	),
};
