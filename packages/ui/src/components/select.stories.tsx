import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta: Meta<typeof Select> = {
	component: Select,
	title: "Components/Select",
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: () => (
		<Select>
			<option value="">Select an option...</option>
			<option value="react">React</option>
			<option value="vue">Vue</option>
			<option value="svelte">Svelte</option>
		</Select>
	),
};

export const Small: Story = {
	render: () => (
		<Select size="sm">
			<option value="">Small select</option>
			<option value="a">Option A</option>
			<option value="b">Option B</option>
		</Select>
	),
};

export const Large: Story = {
	render: () => (
		<Select size="lg">
			<option value="">Large select</option>
			<option value="x">Option X</option>
			<option value="y">Option Y</option>
		</Select>
	),
};

export const Disabled: Story = {
	render: () => (
		<Select disabled>
			<option value="">Disabled</option>
		</Select>
	),
};
