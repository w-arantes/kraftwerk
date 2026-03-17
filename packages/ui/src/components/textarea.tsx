import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const textareaVariants = tv({
	base: [
		"flex w-full min-h-20 rounded-lg border bg-surface font-mono text-foreground placeholder:text-muted-foreground transition-colors resize-y",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary",
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
	],
	variants: {
		size: {
			sm: "px-3 py-2 text-xs",
			md: "px-4 py-3 text-sm",
			lg: "px-5 py-4 text-base",
		},
	},
	defaultVariants: { size: "md" },
});

export interface TextareaProps
	extends Omit<ComponentProps<"textarea">, "size">,
		VariantProps<typeof textareaVariants> {}

export function Textarea({
	className,
	size,
	disabled,
	...props
}: TextareaProps) {
	return (
		<textarea
			data-slot="textarea"
			data-disabled={disabled ? "" : undefined}
			className={twMerge(textareaVariants({ size }), className)}
			disabled={disabled}
			{...props}
		/>
	);
}
