import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

const meta: Meta<typeof Card> = {
	component: Card,
	title: "Components/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	render: () => (
		<Card>
			<CardHeader>
				<CardTitle>Card title</CardTitle>
			</CardHeader>
			<CardContent>
				This is the card content. It uses the design system tokens for surface,
				border, and text colors.
			</CardContent>
		</Card>
	),
};
