import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface LabelProps extends ComponentProps<"label"> {}

export function Label({ className, children, ...props }: LabelProps) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: htmlFor is passed by the consumer via props
		<label
			data-slot="label"
			className={twMerge(
				"font-mono text-sm font-medium text-foreground select-none peer-disabled:opacity-50",
				className,
			)}
			{...props}
		>
			{children}
		</label>
	);
}
