import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
	base: [
		"inline-flex items-center justify-center font-mono font-medium rounded-lg border transition-colors cursor-pointer",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
	],
	variants: {
		variant: {
			primary:
				"border-primary bg-primary text-primary-foreground hover:bg-primary-hover",
			secondary:
				"border-border bg-secondary text-secondary-foreground hover:bg-muted",
		},
		size: {
			sm: "h-8 px-3 gap-1.5 text-xs [&_svg]:size-3",
			md: "h-10 px-4 gap-2 text-sm [&_svg]:size-4",
			lg: "h-12 px-6 gap-2 text-base [&_svg]:size-5",
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
