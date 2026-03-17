import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
	base: "inline-flex items-center font-mono font-medium rounded-md border transition-colors",
	variants: {
		variant: {
			primary: "border-primary bg-primary text-primary-foreground",
			secondary: "border-border bg-secondary text-secondary-foreground",
			outline: "border-border text-foreground bg-transparent",
			destructive: "border-destructive bg-destructive text-primary-foreground",
		},
		size: {
			sm: "px-1.5 py-0.5 text-[10px]",
			md: "px-2 py-0.5 text-xs",
			lg: "px-2.5 py-1 text-sm",
		},
	},
	defaultVariants: { variant: "primary", size: "md" },
});

export interface BadgeProps
	extends ComponentProps<"span">,
		VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
	return (
		<span
			data-slot="badge"
			className={twMerge(badgeVariants({ variant, size }), className)}
			{...props}
		/>
	);
}
