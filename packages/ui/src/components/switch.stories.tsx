import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
	component: Switch,
	title: "Components/Switch",
};

export default meta;

type Story = StoryObj<typeof Switch>;

function SwitchDemo() {
	const [checked, setChecked] = useState(false);
	return <Switch checked={checked} onCheckedChange={setChecked} />;
}

export const Default: Story = {
	render: () => <SwitchDemo />,
};

export const Checked: Story = {
	args: {
		checked: true,
	},
};

export const Small: Story = {
	render: () => {
		const [checked, setChecked] = useState(true);
		return <Switch size="sm" checked={checked} onCheckedChange={setChecked} />;
	},
};

export const Large: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);
		return <Switch size="lg" checked={checked} onCheckedChange={setChecked} />;
	},
};

export const Disabled: Story = {
	args: {
		checked: false,
		disabled: true,
	},
};
