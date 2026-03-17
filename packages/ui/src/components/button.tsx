import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
	base: [
		"inline-flex cursor-pointer items-center justify-center font-medium rounded-lg border transition-colors",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
	],
	variants: {
		variant: {
			primary:
				"border-primary bg-primary text-primary-foreground hover:bg-primary-hover",
			secondary:
				"border-border bg-secondary text-secondary-foreground hover:bg-muted",
		},
		size: {
			sm: "h-6 px-2 gap-1.5 text-xs [&_svg]:size-3",
			md: "h-7 px-3 gap-2 text-sm [&_svg]:size-3.5",
		},
	},
	defaultVariants: { variant: "primary", size: "md" },
});

export interface ButtonProps
	extends ComponentProps<"button">,
		VariantProps<typeof buttonVariants> {}

export function Button({
	className,
	variant,
	size,
	disabled,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			type="button"
			data-slot="button"
			data-disabled={disabled ? "" : undefined}
			className={twMerge(buttonVariants({ variant, size }), className)}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
}
