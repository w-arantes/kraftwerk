import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const inputVariants = tv({
	base: [
		"flex w-full rounded-lg border bg-surface font-mono text-foreground placeholder:text-muted-foreground transition-colors",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary",
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
	],
	variants: {
		size: {
			sm: "h-8 px-3 text-xs",
			md: "h-10 px-4 text-sm",
			lg: "h-12 px-5 text-base",
		},
	},
	defaultVariants: { size: "md" },
});

export interface InputProps
	extends Omit<ComponentProps<"input">, "size">,
		VariantProps<typeof inputVariants> {}

export function Input({ className, size, disabled, ...props }: InputProps) {
	return (
		<input
			data-slot="input"
			data-disabled={disabled ? "" : undefined}
			className={twMerge(inputVariants({ size }), className)}
			disabled={disabled}
			{...props}
		/>
	);
}
