import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface FeatureCardProps extends ComponentProps<"li"> {
	icon: ReactNode;
	title: string;
	description: string;
}

export function FeatureCard({
	className,
	icon,
	title,
	description,
	...props
}: FeatureCardProps) {
	return (
		<li
			data-slot="feature-card"
			className={twMerge(
				"group rounded-lg border border-border bg-surface p-4 sm:p-6 transition-all duration-300",
				"hover:border-primary/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.1)]",
				className,
			)}
			{...props}
		>
			<div
				data-slot="feature-card-icon"
				className="mb-3 sm:mb-4 text-primary [&_svg]:size-6 sm:[&_svg]:size-8"
			>
				{icon}
			</div>
			<h3
				data-slot="feature-card-title"
				className="mb-1.5 sm:mb-2 font-mono text-base sm:text-lg font-medium text-foreground"
			>
				{title}
			</h3>
			<p
				data-slot="feature-card-description"
				className="text-xs sm:text-sm text-foreground-subtle leading-relaxed"
			>
				{description}
			</p>
		</li>
	);
}
