import type { Meta, StoryObj } from "@storybook/react";

function ColorSwatch({
	name,
	variable,
	className,
}: {
	name: string;
	variable: string;
	className: string;
}) {
	return (
		<div className="flex items-center gap-4">
			<div className={`size-12 rounded-lg border border-border ${className}`} />
			<div className="flex flex-col">
				<span className="font-mono text-sm text-foreground">{name}</span>
				<span className="font-mono text-xs text-muted-foreground">
					{variable}
				</span>
			</div>
		</div>
	);
}

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="font-mono text-lg text-primary border-b border-border pb-2">
				{title}
			</h2>
			{children}
		</div>
	);
}

function DesignTokensPage() {
	return (
		<div className="flex flex-col gap-10 p-8 bg-bg-main min-h-screen">
			<div className="flex flex-col gap-2">
				<h1 className="font-mono text-3xl text-primary">Design Tokens</h1>
				<p className="font-mono text-sm text-foreground-subtle">
					kraftwerk design system — color palette and typography reference
				</p>
			</div>

			{/* Colors */}
			<Section title="Background Colors">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<ColorSwatch
						name="bg-main"
						variable="--color-bg-main"
						className="bg-bg-main"
					/>
					<ColorSwatch
						name="surface"
						variable="--color-surface"
						className="bg-surface"
					/>
					<ColorSwatch
						name="surface-raised"
						variable="--color-surface-raised"
						className="bg-surface-raised"
					/>
					<ColorSwatch
						name="muted"
						variable="--color-muted"
						className="bg-muted"
					/>
				</div>
			</Section>

			<Section title="Text Colors">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="flex flex-col gap-1">
						<span className="font-mono text-base text-foreground">
							foreground
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							--color-foreground
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-mono text-base text-foreground-subtle">
							foreground-subtle
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							--color-foreground-subtle
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-mono text-base text-muted-foreground">
							muted-foreground
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							--color-muted-foreground
						</span>
					</div>
				</div>
			</Section>

			<Section title="Accent & Semantic Colors">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<ColorSwatch
						name="primary"
						variable="--color-primary"
						className="bg-primary"
					/>
					<ColorSwatch
						name="primary-hover"
						variable="--color-primary-hover"
						className="bg-primary-hover"
					/>
					<ColorSwatch
						name="secondary"
						variable="--color-secondary"
						className="bg-secondary"
					/>
					<ColorSwatch
						name="destructive"
						variable="--color-destructive"
						className="bg-destructive"
					/>
					<ColorSwatch
						name="accent-glow"
						variable="--color-accent-glow"
						className="bg-accent-glow"
					/>
				</div>
			</Section>

			<Section title="Border Colors">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<ColorSwatch
						name="border"
						variable="--color-border"
						className="bg-border"
					/>
					<ColorSwatch
						name="input"
						variable="--color-input"
						className="bg-input"
					/>
					<ColorSwatch
						name="ring"
						variable="--color-ring"
						className="bg-ring"
					/>
				</div>
			</Section>

			{/* Typography */}
			<Section title="Typography Scale">
				<div className="flex flex-col gap-6 bg-surface rounded-xl border border-border p-6">
					<div className="flex flex-col gap-1">
						<span className="font-mono text-4xl text-foreground">
							Display — text-4xl
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							2.25rem / 36px
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-mono text-3xl text-foreground">
							Heading 1 — text-3xl
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							1.875rem / 30px
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-mono text-2xl text-foreground">
							Heading 2 — text-2xl
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							1.5rem / 24px
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-mono text-xl text-foreground">
							Heading 3 — text-xl
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							1.25rem / 20px
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-mono text-lg text-foreground">
							Large — text-lg
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							1.125rem / 18px
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-mono text-base text-foreground">
							Body — text-base
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							1rem / 16px
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-mono text-sm text-foreground">
							Small — text-sm
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							0.875rem / 14px
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="font-mono text-xs text-foreground">
							Extra Small — text-xs
						</span>
						<span className="font-mono text-xs text-muted-foreground">
							0.75rem / 12px
						</span>
					</div>
				</div>
			</Section>

			<Section title="Font Weights">
				<div className="flex flex-col gap-4 bg-surface rounded-xl border border-border p-6">
					<span className="font-mono text-lg font-light text-foreground">
						Light (300)
					</span>
					<span className="font-mono text-lg font-normal text-foreground">
						Normal (400)
					</span>
					<span className="font-mono text-lg font-medium text-foreground">
						Medium (500)
					</span>
					<span className="font-mono text-lg font-semibold text-foreground">
						Semibold (600)
					</span>
					<span className="font-mono text-lg font-bold text-foreground">
						Bold (700)
					</span>
				</div>
			</Section>
		</div>
	);
}

const meta: Meta = {
	title: "Foundations/Design Tokens",
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj;

export const Tokens: Story = {
	render: () => <DesignTokensPage />,
};
